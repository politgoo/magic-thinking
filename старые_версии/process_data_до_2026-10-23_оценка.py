# -*- coding: utf-8 -*-
"""Сворачивает csv-файлы PsychoPy (строка на каждый пункт опросника) в таблицу
одна строка на участника. Запуск: python3 process_data.py data  ->  data/participants.csv
Работает и с файлами из DataPipe (разделитель ;): один сеанс, пришедший дважды, учитывается один раз,
повторные прохождения одного человека помечаются (repeat_prior, repeat_dup)."""
import sys, os, glob, csv
import pandas as pd

folder = sys.argv[1] if len(sys.argv) > 1 else 'data'
KEEP = ['session_id', 'cond_index', 'name_hash', 'prev_starts', 'prev_choice_seen', 'prev_completed', 'browser_prev_starts', 'cond_wait',
        'name', 'sex', 'age', 'age_ok', 'row_number', 'group', 'group_source', 'order', 'cost',
        'browser_id', 'user_agent', 'screen_w', 'screen_h', 'win_w', 'win_h', 'lang', 'tz_offset_min', 'touch', 'blur_count', 'total_time',
        'welcome_time', 'tob_instr_time', 'neu_instr_time', 'neu_n_answered', 'control_q_method', 'control_q_first_move', 'choice_method', 'choice_first_move', 'effort_deletions',
        'rating_time', 'rating_tries', 'importance_rating', 'control_rating', 'control_q_blur', 'choice_blur', 'susp_len', 'susp_time', 'row_time',
        'control_resp', 'control_rt', 'choice', 'choice_rt',
        'effort_status', 'effort_letters', 'effort_times', 'effort_acc_pct', 'effort_upper_pct', 'effort_dist', 'effort_attempts', 'effort_len', 'effort_start', 'effort_last_key', 'effort_typing', 'effort_attempt_times', 'effort_passes', 'effort_time', 'effort_text',
        'importance.response', 'control.response',
        'susp_box.text', 'debug', 'RPBS_TRB', 'RPBS_Psi', 'RPBS_Witch', 'RPBS_Super', 'RPBS_Spirit',
        'RPBS_ELF', 'RPBS_Precog', 'RPBS_total', 'RPBS_mean', 'date', 'expName', 'psychopyVersion', 'frameRate']
SUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],
       'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]}

rows = []
for f in sorted(glob.glob(os.path.join(folder, '*.csv'))):
    if os.path.basename(f) in ('participants.csv', 'participants_open.csv'):
        continue
    with open(f, encoding='utf-8-sig') as fh:
        head = fh.readline()
    sep = ';' if head.count(';') > head.count(',') else ','
    df = pd.read_csv(f, sep=sep)
    rec = {'file': os.path.basename(f)}
    for c in KEEP:
        if c in df.columns:
            v = df[c].dropna()
            rec[c] = v.iloc[0] if len(v) else None
    for i in range(1, 27):
        for pref in ('tob_', 'tob_rt_', 'tob_keys_', 'neu_', 'neu_rt_', 'neu_keys_'):
            c = f'{pref}{i}'
            if c in df.columns:
                v = df[c].dropna()
                rec[c] = float(v.iloc[0]) if len(v) else None
    # время заполнения опросников (сумма времени по пунктам) для проверки, что нейтральный опросник сопоставим по длительности
    for pref in ('tob', 'neu'):
        rts = [rec.get(f'{pref}_rt_{i}') for i in range(1, 27)]
        rec[f'{pref}_dur'] = sum(rts) if all(r is not None for r in rts) else None
    neu = [rec.get(f'neu_{i}') for i in range(1, 27)]
    rec['neu_mean'] = sum(neu) / 26.0 if all(v is not None for v in neu) else None
    # пересчёт шкал на случай, если код в эксперименте не сработал
    vals = {i: rec.get(f'tob_{i}') for i in range(1, 27)}
    if all(v is not None for v in vals.values()):
        vals[23] = 8 - vals[23]
        for k, idx in SUB.items():
            rec[f'RPBS_{k}'] = sum(vals[i] for i in idx)
        rec['RPBS_total'] = sum(vals.values())
        rec['RPBS_mean'] = rec['RPBS_total'] / 26.0
    rec['complete'] = int(rec.get('choice') is not None and rec.get('RPBS_total') is not None and rec.get('neu_mean') is not None)
    # ввод алфавита не ограничивался; правило зачёта выбора «Магия» в платных группах задаётся при анализе
    # по effort_times (сколько раз напечатан алфавит) и effort_acc_pct (процент правильности)
    rows.append(rec)

out = pd.DataFrame(rows)
if len(out) == 0:
    print('нет файлов данных в', folder); sys.exit(0)
for c in ('prev_choice_seen', 'prev_completed', 'debug'):
    out[c] = pd.to_numeric(out[c], errors='coerce').fillna(0) if c in out.columns else 0
if 'browser_id' not in out.columns:
    out['browser_id'] = out['file']
# 1. один и тот же сеанс мог прийти дважды (повторная отправка, частичный файл): остаётся самый полный файл
if 'session_id' in out.columns:
    out['_n'] = out.notna().sum(axis=1)
    out = out.sort_values(['complete', '_n'], ascending=False)
    has = out['session_id'].notna()
    n0 = int(has.sum())
    out = pd.concat([out[has].drop_duplicates('session_id', keep='first'), out[~has]]).drop(columns='_n')
    print('файлов-дублей одного сеанса убрано:', n0 - int(out['session_id'].notna().sum()))
# 2. отладочные прогоны
if 'debug' in out.columns:
    n_dbg = int((out['debug'] == 1).sum())
    out = out[out['debug'] != 1]
    print('исключено отладочных прогонов:', n_dbg)
# 3. повторные прохождения. Человек определяется браузером и хешем имени из стартового диалога
#    (в старых файлах без хеша имени только браузером).
#    repeat_prior = 1: этот человек в этом браузере уже доходил до экрана выбора или до конца раньше,
#    то есть видел манипуляцию; такие прохождения исключаются из основного анализа.
#    repeat_dup = 1: в данных несколько завершённых прохождений одного человека; помечены все, кроме самого раннего.
out = out.sort_values('date') if 'date' in out.columns else out
person = out['browser_id'].astype(str)
if 'name_hash' in out.columns:
    person = person + '|' + out['name_hash'].fillna('').astype(str)
out['person_key'] = person
out['repeat_prior'] = ((out['prev_choice_seen'] > 0) | (out['prev_completed'] > 0)).astype(int)
done = out['complete'] == 1
out['repeat_dup'] = 0
out.loc[done, 'repeat_dup'] = out[done].duplicated('person_key', keep='first').astype(int)
out['attempt_n'] = out.groupby('person_key').cumcount() + 1
print('прохождений после уже увиденного выбора (repeat_prior):', int(out['repeat_prior'].sum()))
print('повторных завершённых прохождений одного человека (repeat_dup):', int(out['repeat_dup'].sum()))
# 4. возраст: в диалоге он не проверяется, поэтому число извлекается из записи («27 лет» -> 27);
#    age_flag = 1, если числа нет или оно вне 18–99 (критерий выборки «от 18 лет»)
if 'age' in out.columns:
    out['age_num'] = pd.to_numeric(out['age'].astype(str).str.extract(r'(\d+)')[0], errors='coerce')
    out['age_flag'] = (out['age_num'].isna() | (out['age_num'] < 18) | (out['age_num'] > 99)).astype(int)
else:
    out['age_num'] = None; out['age_flag'] = 1
print('возраст отсутствует или вне 18–99 (age_flag):', int(out['age_flag'].sum()))
out['analysis_ok'] = ((out['complete'] == 1) & (out['repeat_prior'] == 0) & (out['repeat_dup'] == 0) & (out['age_flag'] == 0)).astype(int)
out.to_csv(os.path.join(folder, 'participants.csv'), index=False, encoding='utf-8-sig')
# версия для публикации: без имени, его хеша (по нему имя восстанавливается перебором), номера строки в списке группы,
# кода и строки браузера
OPEN_DROP = ['name', 'name_hash', 'row_number', 'browser_id', 'user_agent', 'person_key']
out.drop(columns=[c for c in OPEN_DROP if c in out.columns]).to_csv(os.path.join(folder, 'participants_open.csv'), index=False, encoding='utf-8-sig')
print(len(out), 'прохождений ->', os.path.join(folder, 'participants.csv'), '; для анализа (analysis_ok = 1):', int(out['analysis_ok'].sum()))
ok = out[out['analysis_ok'] == 1]
if len(ok) and 'total_time' in ok.columns:
    tt = pd.to_numeric(ok['total_time'], errors='coerce').dropna() / 60
    if len(tt):
        print('длительность прохождения, мин: медиана %.1f, 75%% %.1f, 90%% %.1f (N = %d)' % (tt.median(), tt.quantile(.75), tt.quantile(.9), len(tt)))
if len(ok):
    print(ok.groupby(['order', 'cost'])['choice'].value_counts(dropna=False))
