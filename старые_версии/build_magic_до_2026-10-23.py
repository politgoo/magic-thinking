# -*- coding: utf-8 -*-
"""Сборка эксперимента «Магия» (ВКР) в формате PsychoPy Builder (.psyexp).
Дизайн 2x2: order (опросник Тобасика before/after) x cost (easy: бесплатная магия; hard: в инструкции перед выбором
сообщается, что для активации нужно один раз напечатать русский алфавит, после нажатия «Магия» открывается экран ввода).
Экран с кнопками «Магия» и «Пропустить» одинаков во всех группах. Перед выбором контрольный вопрос того же формата (RT0).
Версия от 20 октября 2026 года: алфавит печатается один раз; добавлен нейтральный опросник той же длины и формата,
поэтому все группы проходят оба опросника, а различается только тот, что стоит перед выбором; распределение по группам
через DataPipe. Онлайн, данные через DataPipe в OSF, как в курсовом проекте."""
import os, json, openpyxl
from psychopy.experiment import Experiment
from psychopy.experiment.routines import Routine
from psychopy.experiment.loops import TrialHandler
from psychopy.experiment.components import getAllComponents

OUT = os.environ.get('MAGIC_OUT', '/tmp/kr/magic_project')
os.makedirs(OUT, exist_ok=True)
C = getAllComponents()

# ---------- тексты ----------
TXT_WELCOME = ("Здравствуйте! Это исследование принятия решений, оно займёт около 10 минут.\n\n"
 "Данные анонимны и используются только в обобщённом виде. Продолжая, вы даёте согласие на участие.\n\n"
 "Пожалуйста, проходите исследование на компьютере или ноутбуке.\n\nЧтобы начать, нажмите пробел.")
TXT_TOB_INSTR = ("Сейчас Вам будет предложен опросник из 26 утверждений.\n"
 "Оцените, насколько Вы согласны с каждым из них, по шкале от 1 до 7:\n\n"
 "1 — абсолютно не согласен\n2 — не согласен\n3 — скорее не согласен\n4 — не знаю, не уверен\n"
 "5 — скорее согласен\n6 — согласен\n7 — абсолютно согласен\n\n"
 "Как отвечать: нажмите клавишу с нужной цифрой от 1 до 7 (или выберите значение стрелками влево и вправо), "
 "затем нажмите пробел, чтобы перейти к следующему утверждению. Правильных и неправильных ответов нет.\n\n"
 "Нажмите пробел, чтобы начать.")
TXT_CONTROL = ("А сейчас вопрос на внимание. Он кажется простым, но нам важно удостовериться, что вы внимательно читаете текст "
 "на каждом экране и отвечаете на вопросы осознанно. Поэтому ответьте, есть ли потолок в том месте, где вы сейчас находитесь, "
 "нажав на кнопку «Потолок», если он есть, или на кнопку «Нет потолка», если его нет, и после этого перейдите к следующему этапу.")
TXT_CHOICE_EASY = ("А сейчас бонус за участие. Многие древние мистические учения утверждают, что мысли могут влиять на будущее. "
 "Вы можете повысить вероятность того, что что-то хорошее для вас произойдёт в ближайшее время, совершив простой выбор: "
 "нажать на кнопку «Магия» или, если не хотите воспользоваться этой возможностью, нажать на кнопку «Пропустить» "
 "и перейти к следующему этапу.")
TXT_CHOICE_HARD = ("А сейчас бонус за участие. Многие мистические учения утверждают, что мысли могут влиять на будущее, "
 "но их влияние зависит от приложенных усилий. Вы можете повысить вероятность того, что что-то хорошее для вас произойдёт "
 "в ближайшее время, нажав на кнопку «Магия» и напечатав в появившемся поле алфавит один раз, или на кнопку «Пропустить» "
 "и перейти к следующему этапу.")
TXT_EFFORT = ("Для активации магии введите в поле ниже русский алфавит от А до Я один раз. Затем нажмите «Готово».")
TXT_RATING = ("Оцените приятное событие, о котором вы думали.")
TXT_ROW = ("Студенты РАНХиГС, которые хотят получить баллы за участие, введите номер вашей строки в списке группы. "
 "Если баллы вам не нужны, оставьте поле пустым и нажмите «Готово».")
TXT_SUSP = "Как вы думаете, что изучалось в этом исследовании? Напишите в свободной форме и нажмите «Готово»."
TXT_THANKS = ("Спасибо за участие!\n\nКнопка «Магия» не влияет на события: она использовалась, чтобы изучить, "
 "как люди принимают решения в ситуации неопределённости. Если вам предлагалось напечатать алфавит, это задание измеряло готовность прилагать усилия.\n\n"
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

# ---------- таблица нейтрального опросника ----------
# 26 утверждений о бытовых предпочтениях, формат и шкала как у шкалы Тобасика; без упоминаний будущего, удачи,
# контроля, неопределённости, эмоций, черт личности, религии, мышления. Назначение: уравнять группы по длительности,
# утомлению и опыту ответов перед выбором, чтобы условия «до» и «после» различались только содержанием опросника.
NEU_ITEMS = ['Летом удобнее гулять по городу вечером, чем днём', 'Горячий чай хорошо подходит для холодной погоды', 'В небольших магазинах выбор товаров меньше', 'Общественный транспорт удобен для поездок по городу', 'Бумажные книги удобнее электронных', 'Велосипед подходит для коротких поездок', 'Супы чаще готовят в холодное время года', 'Солнечная сторона дома лучше подходит для спальни', 'Кофе чаще пьют утром', 'Осенью полезно носить с собой зонт', 'В парках больше людей в выходные дни', 'Фрукты удобно брать с собой в дорогу', 'Летние веранды кафе популярны в тёплых городах', 'Карты в телефоне удобнее бумажных карт', 'Собакам нужны ежедневные прогулки', 'Обувь на плоской подошве удобна для долгой ходьбы', 'Свежий хлеб продают в пекарнях с утра', 'В музеях спокойнее в будние дни', 'Комнатным растениям нужен регулярный полив', 'Поезд удобнее самолёта для коротких поездок', 'На рынке выбор овощей шире, чем в супермаркете', 'Светлая одежда подходит для жаркой погоды', 'В шахматы играют люди разного возраста', 'Вещи удобнее хранить в закрытых шкафах', 'Пешие прогулки популярны среди горожан', 'Мягкое кресло удобнее стула для чтения']
wb = openpyxl.Workbook(); ws = wb.active; ws.title = 'items'
ws.append(['item_n', 'text'])
for i in range(1, 27):
    ws.append([i, NEU_ITEMS[i - 1]])
wb.save(os.path.join(OUT, 'neutral.xlsx'))

# ---------- эксперимент ----------
exp = Experiment()
S = exp.settings.params
S['expName'].val = 'magic_vkr'
# Стартовый диалог собирает имя, пол и возраст (поля обязательные, |req), передаёт параметр group из ссылки
# и даёт браузеру разрешение на полный экран. Имя «0» включает отладочный выбор группы.
S['Experiment info'].val = "{'имя|req': '', 'пол|req': ['женский', 'мужской', 'не указывать'], 'возраст|req': ''}"
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

def text(r, name, txt, pos=(0, 0.15), h=0.031, wrap=1.4, **kw):
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
 **{'End Routine': "thisExp.addData('welcome_time', t)\n",
    'End JS Routine': "psychoJS.experiment.addData('welcome_time', t);\n",
    'Begin Experiment':
"""import random
g = str(expInfo.get('group', '')).strip()
_name = str(expInfo.get('имя', '')).strip()
_sex = str(expInfo.get('пол', '')).strip()
_age = str(expInfo.get('возраст', '')).strip()
nDebug = 1 if _name == '0' else 0
thisExp.addData('name', _name)
thisExp.addData('sex', {'женский': 'f', 'мужской': 'm', 'не указывать': 'na'}.get(_sex, _sex))
thisExp.addData('age', _age)
thisExp.addData('age_ok', 1 if (_age.isdigit() and 18 <= int(_age) <= 99) else 0)
if g not in ['1', '2', '3', '4']:
    g = random.choice(['1', '2', '3', '4'])
    group_source = 'random'
group = int(g)
# среда прохождения (для отсева повторов и проверки качества)
import platform, uuid, time as _time
thisExp.addData('browser_id', 'local-' + uuid.uuid4().hex[:12])
thisExp.addData('user_agent', 'PsychoPy/' + platform.platform())
thisExp.addData('screen_w', int(win.size[0])); thisExp.addData('screen_h', int(win.size[1]))
thisExp.addData('win_w', int(win.size[0])); thisExp.addData('win_h', int(win.size[1]))
thisExp.addData('lang', ''); thisExp.addData('tz_offset_min', -_time.timezone // 60); thisExp.addData('touch', 0)
blur_count = 0
choice_resp = ''
choice_rt = -1
control_resp = ''
control_rt = -1
nEffort = 0
nBefore = 0
nAfter = 0
tob_resp = {}
neu_resp = {}
group_source = 'url'
""",
 'Begin JS Experiment':
"""var _gi = function(k) { var v = expInfo[k]; if (v === undefined) { v = expInfo[k + '|req']; } return String(v === undefined || v === null ? '' : v).trim(); };
var g = String(expInfo['group'] || '').trim();
// ID эксперимента в DataPipe (pipe.jspsych.org): один и тот же для распределения по группам и для отправки данных
DATAPIPE_ID = 'ВСТАВИТЬ_ID_DATAPIPE';
group_source = 'url'; group_locked = false;
var _name = _gi('имя'); var _sex = _gi('пол'); var _age = _gi('возраст');
nDebug = (_name === '0') ? 1 : 0;
psychoJS.experiment.addData('name', _name);
psychoJS.experiment.addData('sex', ({'женский': 'f', 'мужской': 'm', 'не указывать': 'na'})[_sex] || _sex);
psychoJS.experiment.addData('age', _age);
psychoJS.experiment.addData('age_ok', (/^[0-9]{1,3}$/.test(_age) && parseInt(_age) >= 18 && parseInt(_age) <= 99) ? 1 : 0);
if (['1','2','3','4'].indexOf(g) < 0) {
  // без параметра в ссылке: сначала случайная группа, затем номер условия от DataPipe по кругу (0..3),
  // если ответ пришёл до экрана setup; при ошибке сети остаётся случайная группа
  g = ['1','2','3','4'][Math.floor(Math.random()*4)]; group_source = 'random';
  if (DATAPIPE_ID.indexOf('ВСТАВИТЬ') < 0) {
    try {
      fetch('https://pipe.jspsych.org/api/condition/', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify({ experimentID: DATAPIPE_ID }) })
        .then(function(r) { return r.json(); })
        .then(function(d) { if (!group_locked && d && typeof d.condition === 'number') { group = (d.condition % 4) + 1; group_source = 'datapipe'; } })
        .catch(function(e) { console.error('DataPipe condition:', e); });
    } catch (e) { console.error('DataPipe condition:', e); }
  }
}
group = parseInt(g);
// среда прохождения: постоянный код браузера (для отсева повторов), user agent, экран, язык, часовой пояс, сенсорный экран
var _bid = '';
try { _bid = window.localStorage.getItem('magic_vkr_bid') || ''; if (!_bid) { _bid = Math.random().toString(36).slice(2, 10) + Date.now().toString(36); window.localStorage.setItem('magic_vkr_bid', _bid); } } catch (e) { _bid = 'nostorage-' + Math.random().toString(36).slice(2, 10); }
psychoJS.experiment.addData('browser_id', _bid);
psychoJS.experiment.addData('user_agent', window.navigator.userAgent);
psychoJS.experiment.addData('screen_w', window.screen.width); psychoJS.experiment.addData('screen_h', window.screen.height);
psychoJS.experiment.addData('win_w', window.innerWidth); psychoJS.experiment.addData('win_h', window.innerHeight);
psychoJS.experiment.addData('lang', window.navigator.language || '');
psychoJS.experiment.addData('tz_offset_min', -new Date().getTimezoneOffset());
psychoJS.experiment.addData('touch', ('ontouchstart' in window || navigator.maxTouchPoints > 0) ? 1 : 0);
// число уходов со вкладки за время прохождения
blur_count = 0;
try { document.addEventListener('visibilitychange', function() { if (document.hidden) { blur_count += 1; } }); } catch (e) {}
choice_resp = ''; choice_rt = -1; control_resp = ''; control_rt = -1; nEffort = 0; nBefore = 0; nAfter = 0; tob_resp = {}; neu_resp = {};
"""})
exp.flow.addRoutine(r, pos=len(exp.flow))


# --- 1а. отладочный выбор группы (только если в стартовом диалоге имя = 0) ---
r = routine('debug_pick')
text(r, 'debug_text', 'Отладка. Выберите группу для прохождения.', pos=(0, 0.3), h=0.04)
text(r, 'debug_hint', '1: опросник до, бесплатная магия      2: опросник до, платная магия (алфавит объявлен в инструкции)\n3: опросник после, бесплатная магия      4: опросник после, платная магия (алфавит объявлен в инструкции)', pos=(0, 0.17), h=0.028)
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
thisExp.addData('group_source', 'debug' if nDebug else group_source)
""",
    'Begin JS Routine': """group_locked = true;
order = (group === 1 || group === 2) ? 'before' : 'after';
cost = (group === 1 || group === 3) ? 'easy' : 'hard';
nBefore = (order === 'before') ? 1 : 0;
nAfter = 1 - nBefore;
psychoJS.experiment.addData('group', group);
psychoJS.experiment.addData('order', order);
psychoJS.experiment.addData('cost', cost);
psychoJS.experiment.addData('debug', nDebug);
psychoJS.experiment.addData('group_source', nDebug ? 'debug' : group_source);
"""})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 3. опросник Тобасика ДО (цикл с nReps = nBefore) ---
def add_questionnaire_block(tag, nrepsVar, pre='tob', cond='tobacyk.xlsx', store='tob_resp'):
    """Блок опросника: экран инструкции и 26 пунктов. pre задаёт имена рутин и столбцов (tob_*, neu_*)."""
    ri = routine(pre + '_instr_' + tag); statictext(ri, pre + '_instr_text_' + tag, TXT_TOB_INSTR, pos=(0, 0), size=(1.2, 0.8), h=0.029); key(ri, pre + '_instr_key_' + tag)
    code(ri, 'code_' + pre + '_instr_' + tag, **{'End Routine': "thisExp.addData('%s_instr_time', t)\n" % pre, 'End JS Routine': "psychoJS.experiment.addData('%s_instr_time', t);\n" % pre})
    rt = routine(pre + '_item_' + tag)
    tt = text(rt, pre + '_text_' + tag, '$text', pos=(0, 0.2), h=0.04, wrap=1.3); tt.params['text'].updates = 'set every repeat'
    sl = slider(rt, pre + '_slider_' + tag, '(1, 2, 3, 4, 5, 6, 7)',
           "'1\\nабсолютно\\nне согласен', '2\\nне согласен', '3\\nскорее\\nне согласен', '4\\nне знаю,\\nне уверен', '5\\nскорее\\nсогласен', '6\\nсогласен', '7\\nабсолютно\\nсогласен'",
           pos=(0, -0.12), size=(1.3, 0.06), style='rating', end=False)
    # readOnly=False: ответ мышью работает и офлайн, и онлайн (PsychoJS всё равно игнорирует readOnly)
    sl.params['readOnly'].val = False
    text(rt, pre + '_hint_' + tag, 'Стрелки влево и вправо или клавиши 1\u20137: выбрать ответ.  Пробел: подтвердить', pos=(0, -0.4), h=0.026, color='lightgrey')
    # отдельный Keyboard-компонент: он читает event.code и работает при любой раскладке,
    # в отличие от event.getKeys()/eventManager (там пробел ловится ненадёжно)
    kb = key(rt, pre + '_key_' + tag, keys="'left','right','space','1','2','3','4','5','6','7'")
    kb.params['forceEndRoutine'].val = False
    kb.params['store'].val = 'nothing'
    kb.params['storeCorrect'].val = False
    sname = pre + '_slider_' + tag
    kname = '_' + pre + '_key_' + tag + '_allKeys'
    code(rt, 'code_' + pre + '_' + tag,
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
            'End Routine': "{st}[int(item_n)] = resp\nthisExp.addData('{p}_' + str(item_n), resp)\nthisExp.addData('{p}_rt_' + str(item_n), t)\nthisExp.addData('{p}_keys_' + str(item_n), key_i)\n".format(st=store, p=pre),
            'End JS Routine': "{st}[Number(item_n)] = resp;\npsychoJS.experiment.addData('{p}_' + String(item_n), resp);\npsychoJS.experiment.addData('{p}_rt_' + String(item_n), t);\npsychoJS.experiment.addData('{p}_keys_' + String(item_n), keyI);\n".format(st=store, p=pre)})
    outer = TrialHandler(exp, name=pre + '_block_' + tag, loopType='sequential', nReps=nrepsVar, isTrials=False); outer.params['nReps'].valType='code'
    exp.flow.addLoop(outer, startPos=len(exp.flow), endPos=len(exp.flow))
    exp.flow.addRoutine(ri, pos=len(exp.flow) - 1)
    inner = TrialHandler(exp, name=pre + '_items_' + tag, loopType='sequential', nReps=1,
                         conditionsFile=cond, isTrials=True)
    exp.flow.addLoop(inner, startPos=len(exp.flow) - 1, endPos=len(exp.flow) - 1)
    exp.flow.addRoutine(rt, pos=len(exp.flow) - 2)

def add_tobacyk_block(tag, nrepsVar):
    add_questionnaire_block(tag, nrepsVar, 'tob', 'tobacyk.xlsx', 'tob_resp')

def add_neutral_block(tag, nrepsVar):
    add_questionnaire_block(tag, nrepsVar, 'neu', 'neutral.xlsx', 'neu_resp')

# перед выбором: группы 1 и 2 заполняют шкалу Тобасика, группы 3 и 4 нейтральный опросник
add_tobacyk_block('before', 'nBefore')
add_neutral_block('before', 'nAfter')


def two_button_routine(name, instr_expr, left_label, right_label, left_val, right_val, resp_var, rt_var, col_resp, col_rt, end_py='', end_js='', begin_py='', begin_js=''):
    """Экран с инструкцией сверху (некрупно) и двумя кнопками под ней; формат одинаков для контрольного вопроса и выбора.
    Ответ мышью либо стрелками. Время от появления экрана (то есть включая чтение инструкции) до ответа пишется в col_rt;
    выбранная кнопка подсвечивается на 0,35 с. instr_expr: строка текста либо '$переменная', заданная в begin_py/begin_js."""
    r = routine(name)
    bl, br = 'btn_' + name + '_l', 'btn_' + name + '_r'
    code(r, 'code_' + name,
     **{'Begin Routine': begin_py + "%s = ''\n%s = -1\nend_at = None\nevent.clearEvents()\n_rm = event.Mouse(win=win)\n_m0 = list(_rm.getPos())\n_move_t = -1\n_method = ''\n" % (resp_var, rt_var),
        'Begin JS Routine': begin_js + "%s = ''; %s = -1; end_at = null;\npsychoJS.eventManager.clearEvents();\n_rm = new core.Mouse({win: psychoJS.window});\n_m0 = _rm.getPos().slice();\n_move_t = -1; _method = '';\n" % (resp_var, rt_var),
        'Each Frame': """if _move_t < 0:
    _mp = _rm.getPos()
    if abs(_mp[0] - _m0[0]) > 0.005 or abs(_mp[1] - _m0[1]) > 0.005:
        _move_t = t
if end_at is None:
    keys = event.getKeys(keyList=['left', 'right'])
    if 'left' in keys or {bl}.numClicks > 0:
        {rv} = '{lv}'; {tv} = t; end_at = t + 0.35
        _method = 'key' if 'left' in keys else 'mouse'
        {bl}.fillColor = 'goldenrod'
    elif 'right' in keys or {br}.numClicks > 0:
        {rv} = '{rvl}'; {tv} = t; end_at = t + 0.35
        _method = 'key' if 'right' in keys else 'mouse'
        {br}.fillColor = 'goldenrod'
elif t >= end_at:
    continueRoutine = False
""".format(bl=bl, br=br, rv=resp_var, tv=rt_var, lv=left_val, rvl=right_val),
        'Each JS Frame': """if (_move_t < 0) {{
  var _mp = _rm.getPos();
  if (Math.abs(_mp[0] - _m0[0]) > 0.005 || Math.abs(_mp[1] - _m0[1]) > 0.005) {{ _move_t = t; }}
}}
if (end_at === null) {{
  var keys = psychoJS.eventManager.getKeys({{keyList: ['left', 'right']}});
  if (keys.indexOf('left') >= 0 || {bl}.numClicks > 0) {{
    {rv} = '{lv}'; {tv} = t; end_at = t + 0.35;
    _method = (keys.indexOf('left') >= 0) ? 'key' : 'mouse';
    {bl}.setFillColor(new util.Color('goldenrod'));
  }} else if (keys.indexOf('right') >= 0 || {br}.numClicks > 0) {{
    {rv} = '{rvl}'; {tv} = t; end_at = t + 0.35;
    _method = (keys.indexOf('right') >= 0) ? 'key' : 'mouse';
    {br}.setFillColor(new util.Color('goldenrod'));
  }}
}} else if (t >= end_at) {{
  continueRoutine = false;
}}
""".format(bl=bl, br=br, rv=resp_var, tv=rt_var, lv=left_val, rvl=right_val),
        'End Routine': end_py + "thisExp.addData('%s', %s)\nthisExp.addData('%s', %s)\nthisExp.addData('%s_method', _method)\nthisExp.addData('%s_first_move', _move_t)\n" % (col_resp, resp_var, col_rt, rt_var, name, name),
        'End JS Routine': end_js + "psychoJS.experiment.addData('%s', %s);\npsychoJS.experiment.addData('%s', %s);\npsychoJS.experiment.addData('%s_method', _method);\npsychoJS.experiment.addData('%s_first_move', _move_t);\n" % (col_resp, resp_var, col_rt, rt_var, name, name)})
    ti = text(r, name + '_instr', instr_expr, pos=(0, 0.22), h=0.027, wrap=1.5)
    if instr_expr.startswith('$'):
        ti.params['text'].updates = 'set every repeat'
    button(r, bl, left_label, pos=(-0.25, -0.12), size=(0.36, 0.14), end=False)
    button(r, br, right_label, pos=(0.25, -0.12), size=(0.36, 0.14), end=False)
    text(r, name + '_keys', '← клавиша влево                                клавиша вправо →', pos=(0, -0.26), h=0.026, color='lightgrey')
    return r

# --- 3б. контрольный вопрос: инструкция и две кнопки на одном экране, формат тот же, что у выбора (RT0) ---
r = two_button_routine('control_q', TXT_CONTROL, 'Потолок', 'Нет потолка', 'ceiling', 'no_ceiling',
                       'control_resp', 'control_rt', 'control_resp', 'control_rt')
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 4б. экран выбора: только кнопки, мышь либо стрелки (RT1) ---
r = two_button_routine('choice', '$instr_txt', 'Магия', 'Пропустить', 'magic', 'skip',
                       'choice_resp', 'choice_rt', 'choice', 'choice_rt',
                       end_py="nEffort = 1 if (choice_resp == 'magic' and cost == 'hard') else 0\n",
                       end_js="nEffort = (choice_resp === 'magic' && cost === 'hard') ? 1 : 0;\n",
                       begin_py="instr_txt = TXT_CHOICE_HARD if cost == 'hard' else TXT_CHOICE_EASY\n",
                       begin_js="instr_txt = (cost === 'hard') ? TXT_CHOICE_HARD : TXT_CHOICE_EASY;\n")
# тексты инструкций доступны в коде обоих вариантов
_c = [C for C in r if C.getType() == 'CodeComponent'][0]
_c.params['Begin Experiment'].val = "TXT_CHOICE_EASY = %r\nTXT_CHOICE_HARD = %r\n" % (TXT_CHOICE_EASY, TXT_CHOICE_HARD)
_c.params['Begin JS Experiment'].val = "TXT_CHOICE_EASY = %s;\nTXT_CHOICE_HARD = %s;\n" % (json.dumps(TXT_CHOICE_EASY, ensure_ascii=False), json.dumps(TXT_CHOICE_HARD, ensure_ascii=False))
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 5. effort (цикл nReps = nEffort, только нажавшие «Магия» в группах 2 и 4): один проход алфавита прописными, проверка с допуском ---
PY_ALPHA_CHECK = """RU_ALPHA = 'абвгдежзийклмнопрстуфхцчшщъыьэюя'
def _lev(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (0 if ca == cb else 1)))
        prev = cur
    return prev[-1]
def check_alpha(s, want_upper):
    letters = ''.join(ch for ch in (s or '') if ch.isalpha())
    if not letters:
        return ('empty', 99, 0.0)
    low = letters.lower().replace('ё', '')
    # сверка с одним проходом; лишнее после первых 32 букв (например, второй проход) не считается ошибкой
    d = min(_lev(low, RU_ALPHA), _lev(low[:len(RU_ALPHA)], RU_ALPHA))
    passes = len(low) / float(len(RU_ALPHA))
    if d > 3:
        return ('wrong', d, passes)
    return ('ok', d, passes)
"""
JS_ALPHA_CHECK = """RU_ALPHA = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
_lev = function(a, b) {
  var prev = []; for (var j = 0; j <= b.length; j++) { prev.push(j); }
  for (var i = 1; i <= a.length; i++) {
    var cur = [i];
    for (var j2 = 1; j2 <= b.length; j2++) {
      cur.push(Math.min(prev[j2] + 1, cur[j2 - 1] + 1, prev[j2 - 1] + ((a[i - 1] === b[j2 - 1]) ? 0 : 1)));
    }
    prev = cur;
  }
  return prev[b.length];
};
check_alpha = function(s, want_upper) {
  var letters = (s || '').replace(/[^A-Za-zА-Яа-яЁё]/g, '');
  if (letters.length === 0) { return ['empty', 99, 0.0]; }
  var low = letters.toLowerCase().replace(/ё/g, '');
  var d = Math.min(_lev(low, RU_ALPHA), _lev(low.slice(0, RU_ALPHA.length), RU_ALPHA));
  var passes = low.length / RU_ALPHA.length;
  if (d > 3) { return ['wrong', d, passes]; }
  return ['ok', d, passes];
};
"""
MSG = {'empty': 'Поле пустое. Введите алфавит и нажмите «Готово».',
       'wrong': 'Похоже, в алфавите есть пропуски или ошибки. Проверьте, пожалуйста, и нажмите «Готово» ещё раз.',
       'case_upper': 'Пожалуйста, введите алфавит ПРОПИСНЫМИ (заглавными) буквами.',
       'case_lower': 'Пожалуйста, введите алфавит строчными (маленькими) буквами.'}

def alpha_routine(name, box, btn, fb, prefix, want_upper, txt):
    """Экран с вводом алфавита: нажатие «Готово» всегда завершает экран, ввод не блокирует прохождение.
    Код оценивает введённое (prefix_ok, prefix_status, prefix_dist) и пишет в данные; решение о зачёте принимается при анализе."""
    r = routine(name)
    text(r, name + '_text', txt, pos=(0, 0.3), h=0.03, wrap=1.3)
    textbox(r, box, pos=(0, -0.02), size=(1.2, 0.3), placeholder='нажмите сюда и печатайте', h=0.03)
    button(r, btn, 'Готово', pos=(0, -0.36), end=False)
    fbc = text(r, fb, '', pos=(0, -0.24), h=0.028, wrap=1.3, color='gold')
    # время первого нажатия клавиши в поле: начало печати
    start_py = ("_cur = %s.text or ''\nif _cur != %s_prev:\n    if len(_cur) < len(%s_prev):\n        %s_del += 1\n    %s_prev = _cur\n    %s_last = t\n    if %s_start < 0:\n        %s_start = t\n" % (box, prefix, prefix, prefix, prefix, prefix, prefix, prefix))
    start_js = ("var _cur = %s.text || '';\nif (_cur !== %s_prev) { if (_cur.length < %s_prev.length) { %s_del += 1; } %s_prev = _cur; %s_last = t; if (%s_start < 0) { %s_start = t; } }\n" % (box, prefix, prefix, prefix, prefix, prefix, prefix, prefix))
    case_msg = MSG['case_upper'] if want_upper else MSG['case_lower']
    wu_py = 'True' if want_upper else 'False'
    wu_js = 'true' if want_upper else 'false'
    code(r, 'code_' + name,
     **{'Begin Experiment': PY_ALPHA_CHECK,
        'Begin JS Experiment': JS_ALPHA_CHECK,
        'Begin Routine': "%s_clicks = 0\n%s_attempts = 0\n%s_ok = 0\n%s_dist = 99\n%s_status = ''\n%s_start = -1\n%s_last = -1\n%s_prev = ''\n%s_attempt_times = []\n%s_del = 0\n%s_passes = 0\n" % ((prefix,) * 11),
        'Begin JS Routine': "%s_clicks = 0; %s_attempts = 0; %s_ok = 0; %s_dist = 99; %s_status = ''; %s_start = -1; %s_last = -1; %s_prev = ''; %s_attempt_times = []; %s_del = 0; %s_passes = 0;\n" % ((prefix,) * 11),
        'Each Frame': start_py + """if {btn}.numClicks > {p}_clicks:
    {p}_clicks = {btn}.numClicks
    {p}_attempts += 1
    {p}_attempt_times.append(round(t, 3))
    _res = check_alpha({box}.text, {wu})
    {p}_status = _res[0]; {p}_dist = _res[1]; {p}_passes = _res[2]
    {p}_ok = 1 if _res[0] == 'ok' else 0
    continueRoutine = False
""".format(btn=btn, p=prefix, box=box, wu=wu_py, fb=fb, m_empty=MSG['empty'], m_wrong=MSG['wrong'], m_case=case_msg),
        'Each JS Frame': start_js + """if ({btn}.numClicks > {p}_clicks) {{
  {p}_clicks = {btn}.numClicks;
  {p}_attempts += 1;
  {p}_attempt_times.push(Math.round(t * 1000) / 1000);
  var _res = check_alpha({box}.text, {wu});
  {p}_status = _res[0]; {p}_dist = _res[1]; {p}_passes = _res[2];
  {p}_ok = (_res[0] === 'ok') ? 1 : 0;
  continueRoutine = false;
}}
""".format(btn=btn, p=prefix, box=box, wu=wu_js, fb=fb, m_empty=json.dumps(MSG['empty'], ensure_ascii=False), m_wrong=json.dumps(MSG['wrong'], ensure_ascii=False), m_case=json.dumps(case_msg, ensure_ascii=False)),
        'End Routine': """txt = {box}.text or ''
thisExp.addData('{p}_text', txt)
thisExp.addData('{p}_len', len(txt))
thisExp.addData('{p}_ok', {p}_ok)
thisExp.addData('{p}_dist', {p}_dist)
thisExp.addData('{p}_status', {p}_status)
thisExp.addData('{p}_attempts', {p}_attempts)
thisExp.addData('{p}_start', {p}_start)
thisExp.addData('{p}_last_key', {p}_last)
thisExp.addData('{p}_typing', ({p}_last - {p}_start) if {p}_start >= 0 else -1)
thisExp.addData('{p}_attempt_times', ';'.join(str(x) for x in {p}_attempt_times))
thisExp.addData('{p}_deletions', {p}_del)
thisExp.addData('{p}_passes', round({p}_passes, 2))
thisExp.addData('{p}_time', t)
""".format(box=box, p=prefix),
        'End JS Routine': """var txt = {box}.text || '';
psychoJS.experiment.addData('{p}_text', txt);
psychoJS.experiment.addData('{p}_len', txt.length);
psychoJS.experiment.addData('{p}_ok', {p}_ok);
psychoJS.experiment.addData('{p}_dist', {p}_dist);
psychoJS.experiment.addData('{p}_status', {p}_status);
psychoJS.experiment.addData('{p}_attempts', {p}_attempts);
psychoJS.experiment.addData('{p}_start', {p}_start);
psychoJS.experiment.addData('{p}_last_key', {p}_last);
psychoJS.experiment.addData('{p}_typing', ({p}_start >= 0) ? ({p}_last - {p}_start) : -1);
psychoJS.experiment.addData('{p}_attempt_times', {p}_attempt_times.join(';'));
psychoJS.experiment.addData('{p}_deletions', {p}_del);
psychoJS.experiment.addData('{p}_passes', Math.round({p}_passes * 100) / 100);
psychoJS.experiment.addData('{p}_time', t);
""".format(box=box, p=prefix)})
    return r

r = alpha_routine('effort', 'effort_box', 'effort_done', 'effort_fb', 'effort', True, TXT_EFFORT)
lp = TrialHandler(exp, name='effort_loop', loopType='sequential', nReps='nEffort', isTrials=False); lp.params['nReps'].valType='code'
exp.flow.addLoop(lp, startPos=len(exp.flow), endPos=len(exp.flow))
exp.flow.addRoutine(r, pos=len(exp.flow) - 1)

# --- 6. rating ---
r = routine('rating')
text(r, 'rating_text', TXT_RATING, pos=(0, 0.38), h=0.031, wrap=1.3)
text(r, 'lbl_imp', 'Насколько оно для вас важно?', pos=(0, 0.22), h=0.03)
slider(r, 'importance', '(0, 100)', "'совсем не важно', 'крайне важно'", pos=(0, 0.1), size=(1.0, 0.05), style='slider', gran=1, init=50)
text(r, 'lbl_ctrl', 'Насколько его исход зависит от вас?', pos=(0, -0.08), h=0.03)
slider(r, 'control', '(0, 100)', "'совсем не зависит', 'полностью зависит'", pos=(0, -0.2), size=(1.0, 0.05), style='slider', gran=1, init=50)
button(r, 'rating_done', 'Готово', pos=(0, -0.4))
code(r, 'code_rating', **{'End Routine': "thisExp.addData('rating_time', t)\n", 'End JS Routine': "psychoJS.experiment.addData('rating_time', t);\n"})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 7. после выбора: группы 3 и 4 заполняют шкалу Тобасика, группы 1 и 2 нейтральный опросник ---
add_tobacyk_block('after', 'nAfter')
add_neutral_block('after', 'nBefore')

# --- 8. suspicion ---
r = routine('suspicion')
text(r, 'susp_text', TXT_SUSP, pos=(0, 0.3), h=0.03, wrap=1.3)
textbox(r, 'susp_box', pos=(0, -0.02), size=(1.2, 0.26), placeholder='нажмите сюда и печатайте', h=0.03)
button(r, 'susp_done', 'Готово', pos=(0, -0.36))
code(r, 'code_susp', **{'End Routine': "thisExp.addData('susp_time', t)\nthisExp.addData('susp_len', len(susp_box.text or ''))\n", 'End JS Routine': "psychoJS.experiment.addData('susp_time', t);\npsychoJS.experiment.addData('susp_len', (susp_box.text || '').length);\n"})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 8а. номер строки для студентов РАНХиГС (предпоследний экран) ---
r = routine('row_entry')
text(r, 'row_text', TXT_ROW, pos=(0, 0.25), h=0.03, wrap=1.3)
textbox(r, 'row_box', pos=(0, 0.0), size=(0.5, 0.08), placeholder='номер строки', h=0.035)
button(r, 'row_done', 'Готово', pos=(0, -0.2))
code(r, 'code_row',
 **{'End Routine': "thisExp.addData('row_number', (row_box.text or '').strip())\nthisExp.addData('row_time', t)\n",
    'End JS Routine': "psychoJS.experiment.addData('row_number', (row_box.text || '').trim());\npsychoJS.experiment.addData('row_time', t);\n"})
exp.flow.addRoutine(r, pos=len(exp.flow))

# --- 9. thanks + отправка в OSF через DataPipe ---
r = routine('thanks')
code(r, 'code_score', **{'Begin Routine': "thisExp.addData('total_time', globalClock.getTime())\nthisExp.addData('blur_count', blur_count)\nthisExp.addData('neu_n_answered', sum(1 for v in neu_resp.values() if v is not None))\nSUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],\n       'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]}\ndef _v(i):\n    x = tob_resp.get(i)\n    if x is None: return None\n    x = float(x)\n    return 8 - x if i == 23 else x\nvals = [_v(i) for i in range(1, 27)]\nif all(v is not None for v in vals):\n    for k, idx in SUB.items():\n        thisExp.addData('RPBS_' + k, sum(_v(i) for i in idx))\n    thisExp.addData('RPBS_total', sum(vals))\n    thisExp.addData('RPBS_mean', sum(vals) / 26.0)\n", 'Begin JS Routine': "psychoJS.experiment.addData('total_time', globalClock.getTime());\npsychoJS.experiment.addData('blur_count', blur_count);\nvar _nn = 0; for (var _k in neu_resp) { if (neu_resp[_k] !== null && neu_resp[_k] !== undefined) _nn += 1; } psychoJS.experiment.addData('neu_n_answered', _nn);\nvar SUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],\n       'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]};\nfunction _v(i) { var x = tob_resp[i]; if (x === undefined || x === null) return null; x = Number(x); return (i === 23) ? 8 - x : x; }\nvar vals = []; var ok = true;\nfor (var i = 1; i <= 26; i++) { var v = _v(i); if (v === null) ok = false; vals.push(v); }\nif (ok) {\n  for (var k in SUB) { var ssum = 0; for (var j = 0; j < SUB[k].length; j++) { ssum += _v(SUB[k][j]); } psychoJS.experiment.addData('RPBS_' + k, ssum); }\n  var tot = vals.reduce(function(a, b) { return a + b; }, 0);\n  psychoJS.experiment.addData('RPBS_total', tot);\n  psychoJS.experiment.addData('RPBS_mean', tot / 26.0);\n}\n"})
text(r, 'thanks_text', TXT_THANKS, pos=(0, 0)); key(r, 'thanks_key')
code(r, 'code_datapipe', **{'Code Type': 'JS',
 'End JS Experiment':
"""// Отправка данных в OSF через DataPipe (pipe.jspsych.org). ID задаётся в рутине welcome (DATAPIPE_ID).
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
  body: JSON.stringify({ experimentID: DATAPIPE_ID, filename: filename, data: data }) })
  .then(r => r.json()).then(d => { console.log('DataPipe:', d); }).catch(e => { console.error('Save failed:', e); });
"""})
exp.flow.addRoutine(r, pos=len(exp.flow))

exp.saveToXML(os.path.join(OUT, 'magic_vkr.psyexp'))
print('saved', os.listdir(OUT))
