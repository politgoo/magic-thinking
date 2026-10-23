# -*- coding: utf-8 -*-
"""Сворачивает csv-файлы PsychoPy (строка на каждый пункт опросника) в таблицу
одна строка на участника. Запуск: python3 process_data.py data  ->  data/participants.csv
Работает и с файлами, скачанными из OSF (DataPipe, разделитель ;)."""
import sys, os, glob, csv
import pandas as pd

folder = sys.argv[1] if len(sys.argv) > 1 else 'data'
KEEP = ['name', 'sex', 'age', 'age_ok', 'row_number', 'group', 'group_source', 'order', 'cost',
        'browser_id', 'user_agent', 'screen_w', 'screen_h', 'win_w', 'win_h', 'lang', 'tz_offset_min', 'touch', 'blur_count', 'total_time',
        'welcome_time', 'tob_instr_time', 'neu_instr_time', 'neu_n_answered', 'control_q_method', 'control_q_first_move', 'choice_method', 'choice_first_move', 'effort_deletions',
        'rating_time', 'susp_len', 'susp_time', 'row_time',
        'control_resp', 'control_rt', 'choice', 'choice_rt',
        'effort_ok', 'effort_dist', 'effort_status', 'effort_attempts', 'effort_len', 'effort_start', 'effort_last_key', 'effort_typing', 'effort_attempt_times', 'effort_passes', 'effort_time', 'effort_text',
        'importance.response', 'control.response',
        'susp_box.text', 'debug', 'RPBS_TRB', 'RPBS_Psi', 'RPBS_Witch', 'RPBS_Super', 'RPBS_Spirit',
        'RPBS_ELF', 'RPBS_Precog', 'RPBS_total', 'RPBS_mean', 'date', 'expName', 'psychopyVersion', 'frameRate']
SUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],
       'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]}

rows = []
for f in sorted(glob.glob(os.path.join(folder, '*.csv'))):
    if os.path.basename(f) == 'participants.csv':
        continue
    with open(f, encoding='utf-8') as fh:
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
    # выбор магии в платных группах считается завершённым, если алфавит принят (effort_ok = 1)
    if rec.get('cost') == 'hard' and rec.get('choice') == 'magic':
        rec['effort_complete'] = int(float(rec.get('effort_ok') or 0) == 1)
    rows.append(rec)

out = pd.DataFrame(rows)
if 'browser_id' in out.columns:
    dup = out['browser_id'].duplicated(keep=False) & out['browser_id'].notna()
    out['repeat_browser'] = dup.astype(int)
    print('повторных прохождений с одного браузера:', int(dup.sum()))
if 'debug' in out.columns:
    n_dbg = int((out['debug'].fillna(0).astype(float) == 1).sum())
    out = out[out['debug'].fillna(0).astype(float) != 1]
    print('исключено отладочных прогонов:', n_dbg)
out.to_csv(os.path.join(folder, 'participants.csv'), index=False, encoding='utf-8-sig')
print(len(out), 'участников ->', os.path.join(folder, 'participants.csv'))
if len(out):
    print(out.groupby(['order', 'cost'])['choice'].value_counts(dropna=False))
