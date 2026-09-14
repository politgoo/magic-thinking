# -*- coding: utf-8 -*-
"""Сворачивает csv-файлы PsychoPy (строка на каждый пункт опросника) в таблицу
одна строка на участника. Запуск: python3 process_data.py data  ->  data/participants.csv
Работает и с файлами, скачанными из OSF (DataPipe, разделитель ;)."""
import sys, os, glob, csv
import pandas as pd

folder = sys.argv[1] if len(sys.argv) > 1 else 'data'
KEEP = ['surname', 'age', 'row_number', 'group', 'order', 'cost', 'sex', 'age', 'study', 'choice', 'choice_rt',
        'effort_len', 'effort_m', 'effort_time', 'importance.response', 'control.response',
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
        c = f'tob_{i}'
        if c in df.columns:
            v = df[c].dropna()
            rec[c] = float(v.iloc[0]) if len(v) else None
    # пересчёт шкал на случай, если код в эксперименте не сработал
    vals = {i: rec.get(f'tob_{i}') for i in range(1, 27)}
    if all(v is not None for v in vals.values()):
        vals[23] = 8 - vals[23]
        for k, idx in SUB.items():
            rec[f'RPBS_{k}'] = sum(vals[i] for i in idx)
        rec['RPBS_total'] = sum(vals.values())
        rec['RPBS_mean'] = rec['RPBS_total'] / 26.0
    rec['complete'] = int(rec.get('choice') is not None and rec.get('RPBS_total') is not None)
    rows.append(rec)

out = pd.DataFrame(rows)
if 'debug' in out.columns:
    n_dbg = int((out['debug'].fillna(0).astype(float) == 1).sum())
    out = out[out['debug'].fillna(0).astype(float) != 1]
    print('исключено отладочных прогонов:', n_dbg)
out.to_csv(os.path.join(folder, 'participants.csv'), index=False, encoding='utf-8-sig')
print(len(out), 'участников ->', os.path.join(folder, 'participants.csv'))
if len(out):
    print(out.groupby(['order', 'cost'])['choice'].value_counts(dropna=False))
