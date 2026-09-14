# -*- coding: utf-8 -*-
"""Сборка эксперимента «Магия» (ВКР) в формате PsychoPy Builder (.psyexp).
Дизайн 2x2: order (before/after) x cost (easy/hard). Онлайн, данные через DataPipe в OSF,
как в курсовом проекте sevr3_calibr_sq3.psyexp."""
import os, json, openpyxl
from psychopy.experiment import Experiment
from psychopy.experiment.routines import Routine
from psychopy.experiment.loops import TrialHandler
from psychopy.experiment.components import getAllComponents

OUT = '/tmp/kr/magic_project'
os.makedirs(OUT, exist_ok=True)
C = getAllComponents()

# ---------- тексты ----------
TXT_WELCOME = ("Добрый день! Приглашаем принять участие в исследовании принятия решений.\n\n"
 "Участие займёт около 10 минут. Данные анонимны и используются только в обобщённом виде. "
 "Продолжая, вы даёте согласие на участие.\n\n"
 "Пожалуйста, проходите исследование на компьютере или ноутбуке.\n\n"
 "Чтобы начать, нажмите пробел.")
TXT_TOB_INSTR = ("Пожалуйста, укажите степень Вашего согласия с приведенными утверждениями.\n\n"
 "1 — Абсолютно не согласен\n2 — Не согласен\n3 — Скорее не согласен\n4 — Не знаю, не уверен\n"
 "5 — Скорее согласен\n6 — Согласен\n7 — Абсолютно согласен\n\n"
 "Ответ выбирается стрелками влево и вправо (или клавишами 1–7) и подтверждается пробелом.\n\n"
 "Нажмите пробел, чтобы продолжить.")
TXT_CHOICE_EASY = ("В качестве бонуса за участие вы можете нажать на кнопку «Магия» и тем самым повысить вероятность того, "
 "что какое-то важное для вас приятное событие произойдёт в ближайшее время, либо нажать на кнопку «Пропустить» "
 "и перейти к следующему этапу.")
TXT_CHOICE_HARD = ("В качестве бонуса за участие вы можете нажать на кнопку «Магия» и тем самым повысить вероятность того, "
 "что какое-то важное для вас приятное событие произойдёт в ближайшее время. Для этого нужно будет напечатать "
 "букву М не менее 30 раз, чем больше, тем выше вероятность события. Либо нажмите на кнопку «Пропустить» "
 "и перейдите к следующему этапу.")
TXT_CHOICE_TAIL = ("\n\nВыбрать можно ЛИБО мышью, нажав на кнопку, ЛИБО клавишей ВЛЕВО (Магия) или ВПРАВО (Пропустить).\n\n"
 "Нажмите пробел, чтобы перейти к выбору.")
TXT_EFFORT = ("Вы можете в это верить или не верить, но все древнейшие учения говорят, что действенность магии "
 "зависит от прилагаемых усилий.\n\nНапечатайте в поле ниже букву М не менее 30 раз. Чем больше, тем выше "
 "вероятность события. Когда закончите, нажмите «Готово».")
TXT_RATING = ("Оцените, пожалуйста, то приятное событие, о котором вы думали.")
TXT_ROW = ("Студенты РАНХиГС, которые хотят получить баллы за участие, введите номер вашей строки в списке группы. "
 "Если баллы вам не нужны, оставьте поле пустым и нажмите «Готово».")
TXT_SUSP = "Как вы думаете, что изучалось в этом исследовании? Напишите в свободной форме и нажмите «Готово»."
TXT_THANKS = ("Спасибо за участие!\n\nКнопка «Магия» не влияет на события: она использовалась, чтобы изучить, "
 "как люди принимают решения в ситуации неопределённости. Задание с буквами измеряло готовность прилагать усилия.\n\n"
 "Данные сохраняются, пожалуйста, подождите несколько секунд и не закрывайте окно. Затем нажмите пробел.")

# ---------- таблица условий для опросника Тобасика ----------
SUBSCALE = {1:'TRB',8:'TRB',15:'TRB',22:'TRB', 2:'Psi',9:'Psi',16:'Psi',23:'Psi',
            3:'Witch',10:'Witch',17:'Witch',24:'Witch', 4:'Super',11:'Super',18:'Super',
            5:'Spirit',12:'Spirit',19:'Spirit',25:'Spirit', 6:'ELF',13:'ELF',20:'ELF',
            7:'Precog',14:'Precog',21:'Precog',26:'Precog'}
wb = openpyxl.Workbook(); ws = wb.active; ws.title = 'items'
ws.append(['item_n', 'text', 'subscale', 'reverse'])
ITEMS = ['Несмотря на то, что тело может умереть, душа продолжает существовать', 'Некоторые люди способны левитировать (поднимать) объекты силой мысли', 'Черная магия реально существует', 'Черная кошка может принести невезение', 'Ваше сознание или душа могут покидать Ваше тело и путешествовать (астральная проекция)', 'Снежный человек существует', 'Астрология — это способ точного предсказания будущего', 'Дьявол существует', 'Психокинез — передвижение объектов силой мысли, действительно существует', 'Ведьмы (колдуны) существуют', 'Если разбить зеркало, то это принесет несчастье', 'Когда человек спит или находится в состоянии транса, его душа может покинуть тело', 'Лох-несское чудовище существует', 'Гороскоп точно описывает будущее человека', 'Я верю в Бога', 'Мысли человека могут влиять на движение физических объектов', 'Используя заговоры и заклинания, можно заколдовать человека', 'Число «13» — несчастливое', 'Реинкарнация (переселение душ) действительно случается', 'На других планетах есть жизнь', 'Некоторые экстрасенсы могут точно предсказать будущее', 'Рай и ад существуют', 'Мысли читать невозможно', 'Существуют реальные примеры колдовства', 'Общаться с умершими возможно', 'Некоторые люди имеют необъяснимые способности предсказывать будущее']
for i in range(1, 27):
    ws.append([i, ITEMS[i - 1], SUBSCALE[i], 1 if i == 23 else 0])
wb.save(os.path.join(OUT, 'tobacyk.xlsx'))

# ---------- эксперимент ----------
exp = Experiment()
S = exp.settings.params
S['expName'].val = 'magic_vkr'
S['Experiment info'].val = "{'фамилия': '', 'возраст': ''}"
S['Show info dlg'].val = True
S['Full-screen window'].val = True
S['Units'].val = 'height'
S['color'].val = '$[-0.2314, -0.2314, -0.2314]'
S['Save wide csv file'].val = True
S['Save csv file'].val = False
S['Save log file'].val = True
S['Data filename'].val = "'data/%s_%s' % (expName, expInfo['date'])"
S['End Message'].val = 'Спасибо!'
S['Enable Escape'].val = True
S['Show mouse'].val = True
S['frameRateMsg'].val = 'Экран загружается, подождите секунду, пожалуйста'
S['exportHTML'].val = 'on Sync'

def text(r, name, txt, pos=(0, 0.15), h=0.035, wrap=1.4, **kw):
    c = C['TextComponent'](exp, r, name=name)
    c.params['text'].val = txt; c.params['pos'].val = str(tuple(pos)); c.params['letterHeight'].val = h
    c.params['wrapWidth'].val = wrap; c.params['color'].val = 'white'; c.params['font'].val = 'Arial'
    c.params['stopVal'].val = ''
    for k, v in kw.items(): c.params[k].val = v
    r.addComponent(c); return c

def key(r, name, keys="'space'"):
    c = C['KeyboardComponent'](exp, r, name=name)
    c.params['allowedKeys'].val = keys; c.params['forceEndRoutine'].val = True; c.params['stopVal'].val = ''
    c.params['store'].val = 'last key'
    r.addComponent(c); return c

def button(r, name, label, pos, size=(0.3, 0.1), end=True):
    c = C['ButtonComponent'](exp, r, name=name)
    c.params['text'].val = label; c.params['pos'].val = str(tuple(pos)); c.params['size'].val = str(tuple(size))
    c.params['forceEndRoutine'].val = end; c.params['oncePerClick'].val = True; c.params['stopVal'].val = ''
    c.params['letterHeight'].val = 0.04; c.params['font'].val = 'Arial'; c.params['color'].val = 'white'
    c.params['fillColor'].val = 'darkgrey'; c.params['borderColor'].val = 'None'; c.params['save'].val = 'every click'
    r.addComponent(c); return c

def textbox(r, name, pos, size, placeholder='', h=0.03):
    c = C['TextboxComponent'](exp, r, name=name)
    c.params['editable'].val = True; c.params['pos'].val = str(tuple(pos)); c.params['size'].val = str(tuple(size))
    c.params['placeholder'].val = placeholder; c.params['letterHeight'].val = h; c.params['stopVal'].val = ''
    c.params['color'].val = 'black'; c.params['fillColor'].val = 'white'; c.params['borderColor'].val = 'None'
    c.params['font'].val = 'Arial'; c.params['text'].val = ''; c.params['anchor'].val = 'center'
    c.params['alignment'].val = 'top-left'; c.params['padding'].val = 0.02
    r.addComponent(c); return c

def statictext(r, name, txt, pos, size, h=0.032):
    c = C['TextboxComponent'](exp, r, name=name)
    c.params['editable'].val = False; c.params['text'].val = txt; c.params['pos'].val = str(tuple(pos))
    c.params['size'].val = str(tuple(size)); c.params['letterHeight'].val = h; c.params['stopVal'].val = ''
    c.params['color'].val = 'white'; c.params['fillColor'].val = 'None'; c.params['borderColor'].val = 'None'
    c.params['font'].val = 'Arial'; c.params['anchor'].val = 'center'; c.params['alignment'].val = 'top-left'
    c.params['padding'].val = 0.02
    r.addComponent(c); return c

def slider(r, name, ticks, labels, pos, size=(1.0, 0.1), style='rating', end=False, init=None, gran=1):
    c = C['SliderComponent'](exp, r, name=name)
    c.params['ticks'].val = ticks; c.params['labels'].val = labels; c.params['pos'].val = str(tuple(pos))
    c.params['size'].val = str(tuple(size)); c.params['styles'].val = style; c.params['granularity'].val = gran
    c.params['forceEndRoutine'].val = end; c.params['stopVal'].val = ''; c.params['font'].val = 'Arial'
    c.params['letterHeight'].val = 0.025; c.params['color'].val = 'white'; c.params['storeRatingTime'].val = True
    if init is not None: c.params['initVal'].val = init
    r.addComponent(c); return c

def code(r, name, **sections):
    c = C['CodeComponent'](exp, r, name=name)
    c.params['Code Type'].val = 'Both'
    for k, v in sections.items(): c.params[k].val = v
    r.addComponent(c); return c

def routine(name):
    r = Routine(name, exp); exp.addRoutine(name, r); return r

# --- 0. welcome: разбор группы из диалога; 0 = отладочный выбор группы ---
r = routine('welcome'); text(r, 'welcome_text', TXT_WELCOME, pos=(0, 0)); key(r, 'welcome_key')
code(r, 'code_assign',
 **{'Begin Experiment':
"""import random
g = str(expInfo.get('group', '')).strip()
nDebug = 1 if str(expInfo.get('фамилия', '')).strip() == '0' else 0
thisExp.addData('surname', str(expInfo.get('фамилия', '')).strip())
thisExp.addData('age', str(expInfo.get('возраст', '')).strip())
if g not in ['1', '2', '3', '4']:
    g = random.choice(['1', '2', '3', '4'])
group = int(g)
choice_resp = ''
choice_rt = -1
nEffort = 0
nBefore = 0
nAfter = 0
tob_resp = {}
""",
 'Begin JS Experiment':
"""var g = String(expInfo['group'] || '').trim();
nDebug = (String(expInfo['фамилия'] || '').trim() === '0') ? 1 : 0;
psychoJS.experiment.addData('surname', String(expInfo['фамилия'] || '').trim());
psychoJS.experiment.addData('age', String(expInfo['возраст'] || '').trim());
if (['1','2','3','4'].indexOf(g) < 0) { g = ['1','2','3','4'][Math.floor(Math.random()*4)]; }
group = parseInt(g);
choice_resp = ''; choice_rt = -1; nEffort = 0; nBefore = 0; nAfter = 0; tob_resp = {};
"""})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 1а. отладочный выбор группы (только если в диалоге group = 0) ---
r = routine('debug_pick')
text(r, 'debug_text', 'Отладка. Выберите группу для прохождения.', pos=(0, 0.3), h=0.04)
text(r, 'debug_hint', '1: опросник до, лёгкая магия      2: опросник до, трудная магия\n3: опросник после, лёгкая магия      4: опросник после, трудная магия', pos=(0, 0.17), h=0.028)
button(r, 'dbg1', 'Группа 1', pos=(-0.45, -0.05), size=(0.26, 0.1))
button(r, 'dbg2', 'Группа 2', pos=(-0.15, -0.05), size=(0.26, 0.1))
button(r, 'dbg3', 'Группа 3', pos=(0.15, -0.05), size=(0.26, 0.1))
button(r, 'dbg4', 'Группа 4', pos=(0.45, -0.05), size=(0.26, 0.1))
code(r, 'code_debug',
 **{'End Routine': """for i, b in enumerate([dbg1, dbg2, dbg3, dbg4]):
    if b.numClicks > 0:
        group = i + 1
""",
    'End JS Routine': """var _bs = [dbg1, dbg2, dbg3, dbg4];
for (var i = 0; i < 4; i++) { if (_bs[i].numClicks > 0) { group = i + 1; } }
"""})
lp_dbg = TrialHandler(exp, name='debug_loop', loopType='sequential', nReps='nDebug', isTrials=False); lp_dbg.params['nReps'].valType = 'code'
exp.flow.addLoop(lp_dbg, startPos=len(exp.flow), endPos=len(exp.flow))
exp.flow.addRoutine(r, pos=len(exp.flow) - 1)

# --- 1б. setup: вычисление условий из группы ---
r = routine('setup')
text(r, 'setup_blank', '', pos=(0, 0), stopVal=0.1)
code(r, 'code_setup',
 **{'Begin Routine': """order = 'before' if group in (1, 2) else 'after'
cost = 'easy' if group in (1, 3) else 'hard'
nBefore = 1 if order == 'before' else 0
nAfter = 1 - nBefore
thisExp.addData('group', group)
thisExp.addData('order', order)
thisExp.addData('cost', cost)
thisExp.addData('debug', nDebug)
""",
    'Begin JS Routine': """order = (group === 1 || group === 2) ? 'before' : 'after';
cost = (group === 1 || group === 3) ? 'easy' : 'hard';
nBefore = (order === 'before') ? 1 : 0;
nAfter = 1 - nBefore;
psychoJS.experiment.addData('group', group);
psychoJS.experiment.addData('order', order);
psychoJS.experiment.addData('cost', cost);
psychoJS.experiment.addData('debug', nDebug);
"""})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 3. опросник Тобасика ДО (цикл с nReps = nBefore) ---
def add_tobacyk_block(tag, nrepsVar):
    ri = routine('tob_instr_' + tag); statictext(ri, 'tob_instr_text_' + tag, TXT_TOB_INSTR, pos=(0, 0), size=(1.2, 0.8)); key(ri, 'tob_instr_key_' + tag)
    rt = routine('tob_item_' + tag)
    tt = text(rt, 'tob_text_' + tag, '$text', pos=(0, 0.2), h=0.04, wrap=1.3); tt.params['text'].updates = 'set every repeat'
    sl = slider(rt, 'tob_slider_' + tag, '(1, 2, 3, 4, 5, 6, 7)',
           "'1\\nабсолютно\\nне согласен', '2\\nне согласен', '3\\nскорее\\nне согласен', '4\\nне знаю,\\nне уверен', '5\\nскорее\\nсогласен', '6\\nсогласен', '7\\nабсолютно\\nсогласен'",
           pos=(0, -0.12), size=(1.3, 0.06), style='rating', end=False)
    # readOnly=False: ответ мышью работает и офлайн, и онлайн (PsychoJS всё равно игнорирует readOnly)
    sl.params['readOnly'].val = False
    text(rt, 'tob_hint_' + tag, 'Стрелки влево и вправо или клавиши 1\u20137: выбрать ответ.  Пробел: подтвердить', pos=(0, -0.4), h=0.026, color='lightgrey')
    # отдельный Keyboard-компонент: он читает event.code и работает при любой раскладке,
    # в отличие от event.getKeys()/eventManager (там пробел ловится ненадёжно)
    kb = key(rt, 'tob_key_' + tag, keys="'left','right','space','1','2','3','4','5','6','7'")
    kb.params['forceEndRoutine'].val = False
    kb.params['store'].val = 'nothing'
    kb.params['storeCorrect'].val = False
    sname = 'tob_slider_' + tag
    kname = '_tob_key_' + tag + '_allKeys'
    code(rt, 'code_tob_' + tag,
         **{'Begin Routine': "resp = None\nslider_seen = None\nkey_i = 0\n",
            'Begin JS Routine': "resp = null;\nsliderSeen = null;\nkeyI = 0;\n",
            'Each Frame': """_r = {s}.getRating()
if _r is not None and _r != slider_seen:
    slider_seen = _r
    resp = int(round(_r))
while key_i < len({k}):
    _k = {k}[key_i].name
    key_i += 1
    if _k in ['1', '2', '3', '4', '5', '6', '7']:
        resp = int(_k)
    elif _k == 'left':
        resp = 4 if resp is None else max(1, resp - 1)
    elif _k == 'right':
        resp = 4 if resp is None else min(7, resp + 1)
    elif _k == 'space' and resp is not None:
        continueRoutine = False
if resp is not None:
    {s}.markerPos = resp
""".format(s=sname, k=kname),
            'Each JS Frame': """var _r = {s}.getRating();
if (typeof _r !== 'undefined' && _r !== null && _r !== sliderSeen) {{
  sliderSeen = _r;
  resp = Math.round(_r);
}}
while (keyI < {k}.length) {{
  var _k = {k}[keyI].name;
  keyI += 1;
  if (['1','2','3','4','5','6','7'].indexOf(_k) >= 0) {{ resp = parseInt(_k); }}
  else if (_k === 'left') {{ resp = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.max(1, resp - 1); }}
  else if (_k === 'right') {{ resp = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.min(7, resp + 1); }}
  else if (_k === 'space' && resp !== null && typeof resp !== 'undefined') {{ continueRoutine = false; }}
}}
if (resp !== null && typeof resp !== 'undefined') {{ {s}.setMarkerPos(resp); }}
""".format(s=sname, k=kname),
            'End Routine': "tob_resp[int(item_n)] = resp\nthisExp.addData('tob_' + str(item_n), resp)\nthisExp.addData('tob_rt_' + str(item_n), t)\n",
            'End JS Routine': "tob_resp[Number(item_n)] = resp;\npsychoJS.experiment.addData('tob_' + String(item_n), resp);\npsychoJS.experiment.addData('tob_rt_' + String(item_n), t);\n"})
    outer = TrialHandler(exp, name='tob_block_' + tag, loopType='sequential', nReps=nrepsVar, isTrials=False); outer.params['nReps'].valType='code'
    exp.flow.addLoop(outer, startPos=len(exp.flow), endPos=len(exp.flow))
    exp.flow.addRoutine(ri, pos=len(exp.flow) - 1)
    inner = TrialHandler(exp, name='tob_items_' + tag, loopType='sequential', nReps=1,
                         conditionsFile='tobacyk.xlsx', isTrials=True)
    exp.flow.addLoop(inner, startPos=len(exp.flow) - 1, endPos=len(exp.flow) - 1)
    exp.flow.addRoutine(rt, pos=len(exp.flow) - 2)

add_tobacyk_block('before', 'nBefore')

# --- 4а. инструкция к выбору (отдельный экран) ---
r = routine('choice_instr')
code(r, 'code_choice_instr',
 **{'Begin Experiment': "TXT_CHOICE_EASY = %r\nTXT_CHOICE_HARD = %r\nTXT_CHOICE_TAIL = %r\n" % (TXT_CHOICE_EASY, TXT_CHOICE_HARD, TXT_CHOICE_TAIL),
    'Begin JS Experiment': "TXT_CHOICE_EASY = %s;\nTXT_CHOICE_HARD = %s;\nTXT_CHOICE_TAIL = %s;\n" % (json.dumps(TXT_CHOICE_EASY, ensure_ascii=False), json.dumps(TXT_CHOICE_HARD, ensure_ascii=False), json.dumps(TXT_CHOICE_TAIL, ensure_ascii=False)),
    'Begin Routine': "instr_txt = (TXT_CHOICE_EASY if cost == 'easy' else TXT_CHOICE_HARD) + TXT_CHOICE_TAIL\n",
    'Begin JS Routine': "instr_txt = ((cost === 'easy') ? TXT_CHOICE_EASY : TXT_CHOICE_HARD) + TXT_CHOICE_TAIL;\n"})
tc = text(r, 'choice_instr_text', '$instr_txt', pos=(0, 0.05), h=0.036, wrap=1.3); tc.params['text'].updates = 'set every repeat'
key(r, 'choice_instr_key')
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 4б. экран выбора: только кнопки, мышь либо стрелки ---
r = routine('choice')
code(r, 'code_choice',
 **{'Begin Routine': "choice_resp = ''\nchoice_rt = -1\nend_at = None\nevent.clearEvents()\n",
    'Begin JS Routine': "choice_resp = ''; choice_rt = -1; end_at = null;\npsychoJS.eventManager.clearEvents();\n",
    'Each Frame': """if end_at is None:
    keys = event.getKeys(keyList=['left', 'right'])
    if 'left' in keys or btn_magic.numClicks > 0:
        choice_resp = 'magic'; choice_rt = t; end_at = t + 0.35
        btn_magic.fillColor = 'goldenrod'
    elif 'right' in keys or btn_skip.numClicks > 0:
        choice_resp = 'skip'; choice_rt = t; end_at = t + 0.35
        btn_skip.fillColor = 'goldenrod'
elif t >= end_at:
    continueRoutine = False
""",
    'Each JS Frame': """if (end_at === null) {
  var keys = psychoJS.eventManager.getKeys({keyList: ['left', 'right']});
  if (keys.indexOf('left') >= 0 || btn_magic.numClicks > 0) {
    choice_resp = 'magic'; choice_rt = t; end_at = t + 0.35;
    btn_magic.setFillColor(new util.Color('goldenrod'));
  } else if (keys.indexOf('right') >= 0 || btn_skip.numClicks > 0) {
    choice_resp = 'skip'; choice_rt = t; end_at = t + 0.35;
    btn_skip.setFillColor(new util.Color('goldenrod'));
  }
} else if (t >= end_at) {
  continueRoutine = false;
}
""",
    'End Routine': """nEffort = 1 if choice_resp == 'magic' else 0
thisExp.addData('choice', choice_resp)
thisExp.addData('choice_rt', choice_rt)
""",
    'End JS Routine': """nEffort = (choice_resp === 'magic') ? 1 : 0;
psychoJS.experiment.addData('choice', choice_resp);
psychoJS.experiment.addData('choice_rt', choice_rt);
"""})
text(r, 'choice_head', 'Ваш выбор', pos=(0, 0.25), h=0.045)
button(r, 'btn_magic', 'Магия', pos=(-0.25, 0.0), size=(0.36, 0.14), end=False)
button(r, 'btn_skip', 'Пропустить', pos=(0.25, 0.0), size=(0.36, 0.14), end=False)
text(r, 'choice_keys', '← стрелка влево                                стрелка вправо →', pos=(0, -0.12), h=0.028, color='lightgrey')
text(r, 'choice_hint', 'Нажмите на кнопку мышью ЛИБО клавишу ВЛЕВО (Магия) или ВПРАВО (Пропустить)', pos=(0, -0.3), h=0.028, color='lightgrey')
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 5. effort (цикл nReps = nEffort) ---
r = routine('effort')
text(r, 'effort_text', TXT_EFFORT, pos=(0, 0.3), h=0.032, wrap=1.3)
textbox(r, 'effort_box', pos=(0, -0.02), size=(1.2, 0.26), placeholder='нажмите сюда и печатайте', h=0.035)
button(r, 'effort_done', 'Готово', pos=(0, -0.36))
code(r, 'code_effort',
 **{'End Routine':
"""txt = effort_box.text or ''
thisExp.addData('effort_len', len(txt))
thisExp.addData('effort_m', txt.lower().count('м'))
thisExp.addData('effort_time', t)
""",
 'End JS Routine':
"""var txt = effort_box.text || '';
psychoJS.experiment.addData('effort_len', txt.length);
psychoJS.experiment.addData('effort_m', (txt.toLowerCase().match(/м/g) || []).length);
psychoJS.experiment.addData('effort_time', t);
"""})
lp = TrialHandler(exp, name='effort_loop', loopType='sequential', nReps='nEffort', isTrials=False); lp.params['nReps'].valType='code'
exp.flow.addLoop(lp, startPos=len(exp.flow), endPos=len(exp.flow))
exp.flow.addRoutine(r, pos=len(exp.flow) - 1)

# --- 6. rating ---
r = routine('rating')
text(r, 'rating_text', TXT_RATING, pos=(0, 0.38), h=0.035, wrap=1.3)
text(r, 'lbl_imp', 'Насколько это событие для вас важно?', pos=(0, 0.22), h=0.03)
slider(r, 'importance', '(0, 100)', "'совсем не важно', 'крайне важно'", pos=(0, 0.1), size=(1.0, 0.05), style='slider', gran=1, init=50)
text(r, 'lbl_ctrl', 'Насколько его исход зависит от вас самих?', pos=(0, -0.08), h=0.03)
slider(r, 'control', '(0, 100)', "'совсем не зависит', 'полностью зависит'", pos=(0, -0.2), size=(1.0, 0.05), style='slider', gran=1, init=50)
button(r, 'rating_done', 'Готово', pos=(0, -0.4))
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 7. опросник Тобасика ПОСЛЕ ---
add_tobacyk_block('after', 'nAfter')

# --- 8. suspicion ---
r = routine('suspicion')
text(r, 'susp_text', TXT_SUSP, pos=(0, 0.3), h=0.032, wrap=1.3)
textbox(r, 'susp_box', pos=(0, -0.02), size=(1.2, 0.26), placeholder='нажмите сюда и печатайте', h=0.03)
button(r, 'susp_done', 'Готово', pos=(0, -0.36))
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 8а. номер строки для студентов РАНХиГС (предпоследний экран) ---
r = routine('row_entry')
text(r, 'row_text', TXT_ROW, pos=(0, 0.25), h=0.032, wrap=1.3)
textbox(r, 'row_box', pos=(0, 0.0), size=(0.5, 0.08), placeholder='номер строки', h=0.035)
button(r, 'row_done', 'Готово', pos=(0, -0.2))
code(r, 'code_row',
 **{'End Routine': "thisExp.addData('row_number', (row_box.text or '').strip())\n",
    'End JS Routine': "psychoJS.experiment.addData('row_number', (row_box.text || '').trim());\n"})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 9. thanks + отправка в OSF через DataPipe ---
r = routine('thanks')
code(r, 'code_score', **{'Begin Routine': "\nSUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],\n       'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]}\ndef _v(i):\n    x = tob_resp.get(i)\n    if x is None: return None\n    x = float(x)\n    return 8 - x if i == 23 else x\nvals = [_v(i) for i in range(1, 27)]\nif all(v is not None for v in vals):\n    for k, idx in SUB.items():\n        thisExp.addData('RPBS_' + k, sum(_v(i) for i in idx))\n    thisExp.addData('RPBS_total', sum(vals))\n    thisExp.addData('RPBS_mean', sum(vals) / 26.0)\n", 'Begin JS Routine': "\nvar SUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],\n       'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]};\nfunction _v(i) { var x = tob_resp[i]; if (x === undefined || x === null) return null; x = Number(x); return (i === 23) ? 8 - x : x; }\nvar vals = []; var ok = true;\nfor (var i = 1; i <= 26; i++) { var v = _v(i); if (v === null) ok = false; vals.push(v); }\nif (ok) {\n  for (var k in SUB) { var ssum = 0; for (var j = 0; j < SUB[k].length; j++) { ssum += _v(SUB[k][j]); } psychoJS.experiment.addData('RPBS_' + k, ssum); }\n  var tot = vals.reduce(function(a, b) { return a + b; }, 0);\n  psychoJS.experiment.addData('RPBS_total', tot);\n  psychoJS.experiment.addData('RPBS_mean', tot / 26.0);\n}\n"})
text(r, 'thanks_text', TXT_THANKS, pos=(0, 0)); key(r, 'thanks_key')
code(r, 'code_datapipe', **{'Code Type': 'JS',
 'End JS Experiment':
"""// Отправка данных в OSF через DataPipe (pipe.jspsych.org). Замените experimentID на ID нового эксперимента.
psychoJS._saveResults = 0;
let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
let dataObj = psychoJS._experiment._trialsData;
const SEP = ';';
let headers = [];
dataObj.forEach((trial) => { if (trial && typeof trial === 'object') { Object.keys(trial).forEach(k => { if (!headers.includes(k)) headers.push(k); }); } });
const formatCell = (val) => { if (val === null || val === undefined) return ''; let s = (typeof val === 'object') ? JSON.stringify(val) : String(val);
  if (s.includes(SEP) || s.includes('"') || s.includes('\\n') || s.includes('\\r')) { s = '"' + s.replace(/"/g, '""') + '"'; } return s; };
let csvRows = [headers.join(SEP)];
dataObj.forEach((row) => { csvRows.push((row && typeof row === 'object') ? headers.map(h => formatCell(row[h])).join(SEP) : new Array(headers.length).fill('').join(SEP)); });
let data = csvRows.join('\\n');
fetch('https://pipe.jspsych.org/api/data', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: '*/*' },
  body: JSON.stringify({ experimentID: 'ВСТАВИТЬ_ID_DATAPIPE', filename: filename, data: data }) })
  .then(r => r.json()).then(d => { console.log('DataPipe:', d); }).catch(e => { console.error('Save failed:', e); });
"""})
exp.flow.addRoutine(r, pos=len(exp.flow))

exp.saveToXML(os.path.join(OUT, 'magic_vkr.psyexp'))
print('saved', os.listdir(OUT))
