/****************** 
 * Magic_Vkr *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'magic_vkr';  // from the Builder filename that created this script
let expInfo = {
    'фамилия': '',
    'возраст': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-0.2314, -0.2314, -0.2314]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const debug_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(debug_loopLoopBegin(debug_loopLoopScheduler));
flowScheduler.add(debug_loopLoopScheduler);
flowScheduler.add(debug_loopLoopEnd);


flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const tob_block_beforeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(tob_block_beforeLoopBegin(tob_block_beforeLoopScheduler));
flowScheduler.add(tob_block_beforeLoopScheduler);
flowScheduler.add(tob_block_beforeLoopEnd);





flowScheduler.add(choice_instrRoutineBegin());
flowScheduler.add(choice_instrRoutineEachFrame());
flowScheduler.add(choice_instrRoutineEnd());
flowScheduler.add(choiceRoutineBegin());
flowScheduler.add(choiceRoutineEachFrame());
flowScheduler.add(choiceRoutineEnd());
const effort_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(effort_loopLoopBegin(effort_loopLoopScheduler));
flowScheduler.add(effort_loopLoopScheduler);
flowScheduler.add(effort_loopLoopEnd);


flowScheduler.add(ratingRoutineBegin());
flowScheduler.add(ratingRoutineEachFrame());
flowScheduler.add(ratingRoutineEnd());
const tob_block_afterLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(tob_block_afterLoopBegin(tob_block_afterLoopScheduler));
flowScheduler.add(tob_block_afterLoopScheduler);
flowScheduler.add(tob_block_afterLoopEnd);





flowScheduler.add(suspicionRoutineBegin());
flowScheduler.add(suspicionRoutineEachFrame());
flowScheduler.add(suspicionRoutineEnd());
flowScheduler.add(row_entryRoutineBegin());
flowScheduler.add(row_entryRoutineEachFrame());
flowScheduler.add(row_entryRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Спасибо!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Спасибо!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tobacyk.xlsx', 'path': 'tobacyk.xlsx'},
    {'name': 'tobacyk.xlsx', 'path': 'tobacyk.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_key;
var nDebug;
var g;
var group;
var choice_resp;
var choice_rt;
var nEffort;
var nBefore;
var nAfter;
var tob_resp;
var debug_pickClock;
var debug_text;
var debug_hint;
var dbg1;
var dbg2;
var dbg3;
var dbg4;
var setupClock;
var setup_blank;
var tob_instr_beforeClock;
var tob_instr_text_before;
var tob_instr_key_before;
var tob_item_beforeClock;
var tob_text_before;
var tob_slider_before;
var tob_hint_before;
var choice_instrClock;
var TXT_CHOICE_EASY;
var TXT_CHOICE_HARD;
var TXT_CHOICE_TAIL;
var choice_instr_text;
var choice_instr_key;
var choiceClock;
var choice_head;
var btn_magic;
var btn_skip;
var choice_keys;
var choice_hint;
var effortClock;
var effort_text;
var effort_box;
var effort_done;
var ratingClock;
var rating_text;
var lbl_imp;
var importance;
var lbl_ctrl;
var control;
var rating_done;
var tob_instr_afterClock;
var tob_instr_text_after;
var tob_instr_key_after;
var tob_item_afterClock;
var tob_text_after;
var tob_slider_after;
var tob_hint_after;
var suspicionClock;
var susp_text;
var susp_box;
var susp_done;
var row_entryClock;
var row_text;
var row_box;
var row_done;
var thanksClock;
var thanks_text;
var thanks_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Добрый день! Приглашаем принять участие в исследовании принятия решений.\n\nУчастие займёт около 10 минут. Данные анонимны и используются только в обобщённом виде. Продолжая, вы даёте согласие на участие.\n\nПожалуйста, проходите исследование на компьютере или ноутбуке.\n\nЧтобы начать, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_assign
  var g = String(expInfo['group'] || '').trim();
  nDebug = (String(expInfo['фамилия'] || '').trim() === '0') ? 1 : 0;
  psychoJS.experiment.addData('surname', String(expInfo['фамилия'] || '').trim());
  psychoJS.experiment.addData('age', String(expInfo['возраст'] || '').trim());
  if (['1','2','3','4'].indexOf(g) < 0) { g = ['1','2','3','4'][Math.floor(Math.random()*4)]; }
  group = parseInt(g);
  choice_resp = ''; choice_rt = -1; nEffort = 0; nBefore = 0; nAfter = 0; tob_resp = {};
  
  // Initialize components for Routine "debug_pick"
  debug_pickClock = new util.Clock();
  debug_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'debug_text',
    text: 'Отладка. Выберите группу для прохождения.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  debug_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'debug_hint',
    text: '1: опросник до, лёгкая магия      2: опросник до, трудная магия\n3: опросник после, лёгкая магия      4: опросник после, трудная магия',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.17], draggable: false, height: 0.028,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  dbg1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbg1',
    text: 'Группа 1',
    font: 'Arial',
    pos: [(- 0.45), (- 0.05)],
    size: [0.26, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  dbg1.clock = new util.Clock();
  
  dbg2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbg2',
    text: 'Группа 2',
    font: 'Arial',
    pos: [(- 0.15), (- 0.05)],
    size: [0.26, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  dbg2.clock = new util.Clock();
  
  dbg3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbg3',
    text: 'Группа 3',
    font: 'Arial',
    pos: [0.15, (- 0.05)],
    size: [0.26, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  dbg3.clock = new util.Clock();
  
  dbg4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbg4',
    text: 'Группа 4',
    font: 'Arial',
    pos: [0.45, (- 0.05)],
    size: [0.26, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  dbg4.clock = new util.Clock();
  
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  setup_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'setup_blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "tob_instr_before"
  tob_instr_beforeClock = new util.Clock();
  tob_instr_text_before = new visual.TextBox({
    win: psychoJS.window,
    name: 'tob_instr_text_before',
    text: 'Пожалуйста, укажите степень Вашего согласия с приведенными утверждениями.\n\n1 — Абсолютно не согласен\n2 — Не согласен\n3 — Скорее не согласен\n4 — Не знаю, не уверен\n5 — Скорее согласен\n6 — Согласен\n7 — Абсолютно согласен\n\nОтвет выбирается стрелками влево и вправо (или клавишами 1–7) и подтверждается пробелом.\n\nНажмите пробел, чтобы продолжить.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.032,
    lineSpacing: 1.0,
    size: [1.2, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  tob_instr_key_before = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tob_item_before"
  tob_item_beforeClock = new util.Clock();
  tob_text_before = new visual.TextStim({
    win: psychoJS.window,
    name: 'tob_text_before',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  tob_slider_before = new visual.Slider({
    win: psychoJS.window, name: 'tob_slider_before',
    startValue: undefined,
    size: [1.3, 0.06], pos: [0, (- 0.12)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "2\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "3\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "4\n\u043d\u0435 \u0437\u043d\u0430\u044e,\n\u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d", "5\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "6\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "7\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d"], fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  tob_hint_before = new visual.TextStim({
    win: psychoJS.window,
    name: 'tob_hint_before',
    text: 'Стрелки влево и вправо или клавиши 1–7: выбрать ответ.  Пробел: подтвердить',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.026,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "choice_instr"
  choice_instrClock = new util.Clock();
  // Run 'Begin Experiment' code from code_choice_instr
  TXT_CHOICE_EASY = "В качестве бонуса за участие вы можете нажать на кнопку «Магия» и тем самым повысить вероятность того, что какое-то важное для вас приятное событие произойдёт в ближайшее время, либо нажать на кнопку «Пропустить» и перейти к следующему этапу.";
  TXT_CHOICE_HARD = "В качестве бонуса за участие вы можете нажать на кнопку «Магия» и тем самым повысить вероятность того, что какое-то важное для вас приятное событие произойдёт в ближайшее время. Для этого нужно будет напечатать букву М не менее 30 раз, чем больше, тем выше вероятность события. Либо нажмите на кнопку «Пропустить» и перейдите к следующему этапу.";
  TXT_CHOICE_TAIL = "\n\nВыбрать можно ЛИБО мышью, нажав на кнопку, ЛИБО клавишей ВЛЕВО (Магия) или ВПРАВО (Пропустить).\n\nНажмите пробел, чтобы перейти к выбору.";
  
  choice_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_instr_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.036,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  choice_instr_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "choice"
  choiceClock = new util.Clock();
  choice_head = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_head',
    text: 'Ваш выбор',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.045,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_magic = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_magic',
    text: 'Магия',
    font: 'Arial',
    pos: [(- 0.25), 0.0],
    size: [0.36, 0.14],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  btn_magic.clock = new util.Clock();
  
  btn_skip = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_skip',
    text: 'Пропустить',
    font: 'Arial',
    pos: [0.25, 0.0],
    size: [0.36, 0.14],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  btn_skip.clock = new util.Clock();
  
  choice_keys = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_keys',
    text: '← стрелка влево                                стрелка вправо →',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.12)], draggable: false, height: 0.028,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -4.0 
  });
  
  choice_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_hint',
    text: 'Нажмите на кнопку мышью ЛИБО клавишу ВЛЕВО (Магия) или ВПРАВО (Пропустить)',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.028,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "effort"
  effortClock = new util.Clock();
  effort_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'effort_text',
    text: 'Вы можете в это верить или не верить, но все древнейшие учения говорят, что действенность магии зависит от прилагаемых усилий.\n\nНапечатайте в поле ниже букву М не менее 30 раз. Чем больше, тем выше вероятность события. Когда закончите, нажмите «Готово».',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.032,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  effort_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'effort_box',
    text: '',
    placeholder: 'нажмите сюда и печатайте',
    font: 'Arial',
    pos: [0, (- 0.02)], 
    draggable: false,
    letterHeight: 0.035,
    lineSpacing: 1.0,
    size: [1.2, 0.26],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'top-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  effort_done = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'effort_done',
    text: 'Готово',
    font: 'Arial',
    pos: [0, (- 0.36)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  effort_done.clock = new util.Clock();
  
  // Initialize components for Routine "rating"
  ratingClock = new util.Clock();
  rating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_text',
    text: 'Оцените, пожалуйста, то приятное событие, о котором вы думали.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.38], draggable: false, height: 0.035,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  lbl_imp = new visual.TextStim({
    win: psychoJS.window,
    name: 'lbl_imp',
    text: 'Насколько это событие для вас важно?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.22], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  importance = new visual.Slider({
    win: psychoJS.window, name: 'importance',
    startValue: 50,
    size: [1.0, 0.05], pos: [0, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435 \u0432\u0430\u0436\u043d\u043e", "\u043a\u0440\u0430\u0439\u043d\u0435 \u0432\u0430\u0436\u043d\u043e"], fontSize: 0.025, ticks: [0, 100],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  lbl_ctrl = new visual.TextStim({
    win: psychoJS.window,
    name: 'lbl_ctrl',
    text: 'Насколько его исход зависит от вас самих?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.08)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  control = new visual.Slider({
    win: psychoJS.window, name: 'control',
    startValue: 50,
    size: [1.0, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442", "\u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u0442"], fontSize: 0.025, ticks: [0, 100],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  rating_done = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'rating_done',
    text: 'Готово',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  rating_done.clock = new util.Clock();
  
  // Initialize components for Routine "tob_instr_after"
  tob_instr_afterClock = new util.Clock();
  tob_instr_text_after = new visual.TextBox({
    win: psychoJS.window,
    name: 'tob_instr_text_after',
    text: 'Пожалуйста, укажите степень Вашего согласия с приведенными утверждениями.\n\n1 — Абсолютно не согласен\n2 — Не согласен\n3 — Скорее не согласен\n4 — Не знаю, не уверен\n5 — Скорее согласен\n6 — Согласен\n7 — Абсолютно согласен\n\nОтвет выбирается стрелками влево и вправо (или клавишами 1–7) и подтверждается пробелом.\n\nНажмите пробел, чтобы продолжить.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.032,
    lineSpacing: 1.0,
    size: [1.2, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  tob_instr_key_after = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tob_item_after"
  tob_item_afterClock = new util.Clock();
  tob_text_after = new visual.TextStim({
    win: psychoJS.window,
    name: 'tob_text_after',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  tob_slider_after = new visual.Slider({
    win: psychoJS.window, name: 'tob_slider_after',
    startValue: undefined,
    size: [1.3, 0.06], pos: [0, (- 0.12)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "2\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "3\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "4\n\u043d\u0435 \u0437\u043d\u0430\u044e,\n\u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d", "5\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "6\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "7\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d"], fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  tob_hint_after = new visual.TextStim({
    win: psychoJS.window,
    name: 'tob_hint_after',
    text: 'Стрелки влево и вправо или клавиши 1–7: выбрать ответ.  Пробел: подтвердить',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.026,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "suspicion"
  suspicionClock = new util.Clock();
  susp_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'susp_text',
    text: 'Как вы думаете, что изучалось в этом исследовании? Напишите в свободной форме и нажмите «Готово».',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.032,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  susp_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'susp_box',
    text: '',
    placeholder: 'нажмите сюда и печатайте',
    font: 'Arial',
    pos: [0, (- 0.02)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [1.2, 0.26],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'top-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  susp_done = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'susp_done',
    text: 'Готово',
    font: 'Arial',
    pos: [0, (- 0.36)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  susp_done.clock = new util.Clock();
  
  // Initialize components for Routine "row_entry"
  row_entryClock = new util.Clock();
  row_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'row_text',
    text: 'Студенты РАНХиГС, которые хотят получить баллы за участие, введите номер вашей строки в списке группы. Если баллы вам не нужны, оставьте поле пустым и нажмите «Готово».',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.032,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  row_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'row_box',
    text: '',
    placeholder: 'номер строки',
    font: 'Arial',
    pos: [0, 0.0], 
    draggable: false,
    letterHeight: 0.035,
    lineSpacing: 1.0,
    size: [0.5, 0.08],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'top-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  row_done = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'row_done',
    text: 'Готово',
    font: 'Arial',
    pos: [0, (- 0.2)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  row_done.clock = new util.Clock();
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Спасибо за участие!\n\nКнопка «Магия» не влияет на события: она использовалась, чтобы изучить, как люди принимают решения в ситуации неопределённости. Задание с буквами измеряло готовность прилагать усилия.\n\nДанные сохраняются, пожалуйста, подождите несколько секунд и не закрывайте окно. Затем нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  thanks_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeMaxDurationReached;
var _welcome_key_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    welcome_key.keys = undefined;
    welcome_key.rt = undefined;
    _welcome_key_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_key);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // if welcome_text is active this frame...
    if (welcome_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *welcome_key* updates
    if (t >= 0.0 && welcome_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_key.tStart = t;  // (not accounting for frame time here)
      welcome_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.clearEvents(); });
    }
    
    // if welcome_key is active this frame...
    if (welcome_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_key.getKeys({keyList: 'space', waitRelease: false});
      _welcome_key_allKeys = _welcome_key_allKeys.concat(theseKeys);
      if (_welcome_key_allKeys.length > 0) {
        welcome_key.keys = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].name;  // just the last key pressed
        welcome_key.rt = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].rt;
        welcome_key.duration = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome_key.corr, level);
    }
    psychoJS.experiment.addData('welcome_key.keys', welcome_key.keys);
    if (typeof welcome_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_key.rt', welcome_key.rt);
        psychoJS.experiment.addData('welcome_key.duration', welcome_key.duration);
        routineTimer.reset();
        }
    
    welcome_key.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debug_loop;
function debug_loopLoopBegin(debug_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    debug_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nDebug, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'debug_loop'
    });
    psychoJS.experiment.addLoop(debug_loop); // add the loop to the experiment
    currentLoop = debug_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDebug_loop of debug_loop) {
      snapshot = debug_loop.getSnapshot();
      debug_loopLoopScheduler.add(importConditions(snapshot));
      debug_loopLoopScheduler.add(debug_pickRoutineBegin(snapshot));
      debug_loopLoopScheduler.add(debug_pickRoutineEachFrame());
      debug_loopLoopScheduler.add(debug_pickRoutineEnd(snapshot));
      debug_loopLoopScheduler.add(debug_loopLoopEndIteration(debug_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function debug_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(debug_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function debug_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var tob_block_before;
function tob_block_beforeLoopBegin(tob_block_beforeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tob_block_before = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nBefore, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'tob_block_before'
    });
    psychoJS.experiment.addLoop(tob_block_before); // add the loop to the experiment
    currentLoop = tob_block_before;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTob_block_before of tob_block_before) {
      snapshot = tob_block_before.getSnapshot();
      tob_block_beforeLoopScheduler.add(importConditions(snapshot));
      tob_block_beforeLoopScheduler.add(tob_instr_beforeRoutineBegin(snapshot));
      tob_block_beforeLoopScheduler.add(tob_instr_beforeRoutineEachFrame());
      tob_block_beforeLoopScheduler.add(tob_instr_beforeRoutineEnd(snapshot));
      const tob_items_beforeLoopScheduler = new Scheduler(psychoJS);
      tob_block_beforeLoopScheduler.add(tob_items_beforeLoopBegin(tob_items_beforeLoopScheduler, snapshot));
      tob_block_beforeLoopScheduler.add(tob_items_beforeLoopScheduler);
      tob_block_beforeLoopScheduler.add(tob_items_beforeLoopEnd);
      tob_block_beforeLoopScheduler.add(tob_block_beforeLoopEndIteration(tob_block_beforeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var tob_items_before;
function tob_items_beforeLoopBegin(tob_items_beforeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tob_items_before = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tobacyk.xlsx',
      seed: undefined, name: 'tob_items_before'
    });
    psychoJS.experiment.addLoop(tob_items_before); // add the loop to the experiment
    currentLoop = tob_items_before;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTob_items_before of tob_items_before) {
      snapshot = tob_items_before.getSnapshot();
      tob_items_beforeLoopScheduler.add(importConditions(snapshot));
      tob_items_beforeLoopScheduler.add(tob_item_beforeRoutineBegin(snapshot));
      tob_items_beforeLoopScheduler.add(tob_item_beforeRoutineEachFrame());
      tob_items_beforeLoopScheduler.add(tob_item_beforeRoutineEnd(snapshot));
      tob_items_beforeLoopScheduler.add(tob_items_beforeLoopEndIteration(tob_items_beforeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function tob_items_beforeLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(tob_items_before);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function tob_items_beforeLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function tob_block_beforeLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(tob_block_before);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function tob_block_beforeLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var effort_loop;
function effort_loopLoopBegin(effort_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    effort_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nEffort, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'effort_loop'
    });
    psychoJS.experiment.addLoop(effort_loop); // add the loop to the experiment
    currentLoop = effort_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEffort_loop of effort_loop) {
      snapshot = effort_loop.getSnapshot();
      effort_loopLoopScheduler.add(importConditions(snapshot));
      effort_loopLoopScheduler.add(effortRoutineBegin(snapshot));
      effort_loopLoopScheduler.add(effortRoutineEachFrame());
      effort_loopLoopScheduler.add(effortRoutineEnd(snapshot));
      effort_loopLoopScheduler.add(effort_loopLoopEndIteration(effort_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function effort_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(effort_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function effort_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var tob_block_after;
function tob_block_afterLoopBegin(tob_block_afterLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tob_block_after = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nAfter, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'tob_block_after'
    });
    psychoJS.experiment.addLoop(tob_block_after); // add the loop to the experiment
    currentLoop = tob_block_after;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTob_block_after of tob_block_after) {
      snapshot = tob_block_after.getSnapshot();
      tob_block_afterLoopScheduler.add(importConditions(snapshot));
      tob_block_afterLoopScheduler.add(tob_instr_afterRoutineBegin(snapshot));
      tob_block_afterLoopScheduler.add(tob_instr_afterRoutineEachFrame());
      tob_block_afterLoopScheduler.add(tob_instr_afterRoutineEnd(snapshot));
      const tob_items_afterLoopScheduler = new Scheduler(psychoJS);
      tob_block_afterLoopScheduler.add(tob_items_afterLoopBegin(tob_items_afterLoopScheduler, snapshot));
      tob_block_afterLoopScheduler.add(tob_items_afterLoopScheduler);
      tob_block_afterLoopScheduler.add(tob_items_afterLoopEnd);
      tob_block_afterLoopScheduler.add(tob_block_afterLoopEndIteration(tob_block_afterLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var tob_items_after;
function tob_items_afterLoopBegin(tob_items_afterLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tob_items_after = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tobacyk.xlsx',
      seed: undefined, name: 'tob_items_after'
    });
    psychoJS.experiment.addLoop(tob_items_after); // add the loop to the experiment
    currentLoop = tob_items_after;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTob_items_after of tob_items_after) {
      snapshot = tob_items_after.getSnapshot();
      tob_items_afterLoopScheduler.add(importConditions(snapshot));
      tob_items_afterLoopScheduler.add(tob_item_afterRoutineBegin(snapshot));
      tob_items_afterLoopScheduler.add(tob_item_afterRoutineEachFrame());
      tob_items_afterLoopScheduler.add(tob_item_afterRoutineEnd(snapshot));
      tob_items_afterLoopScheduler.add(tob_items_afterLoopEndIteration(tob_items_afterLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function tob_items_afterLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(tob_items_after);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function tob_items_afterLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function tob_block_afterLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(tob_block_after);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function tob_block_afterLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var debug_pickMaxDurationReached;
var debug_pickMaxDuration;
var debug_pickComponents;
function debug_pickRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debug_pick' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debug_pickClock.reset();
    routineTimer.reset();
    debug_pickMaxDurationReached = false;
    // update component parameters for each repeat
    // reset dbg1 to account for continued clicks & clear times on/off
    dbg1.reset()
    // reset dbg2 to account for continued clicks & clear times on/off
    dbg2.reset()
    // reset dbg3 to account for continued clicks & clear times on/off
    dbg3.reset()
    // reset dbg4 to account for continued clicks & clear times on/off
    dbg4.reset()
    psychoJS.experiment.addData('debug_pick.started', globalClock.getTime());
    debug_pickMaxDuration = null
    // keep track of which components have finished
    debug_pickComponents = [];
    debug_pickComponents.push(debug_text);
    debug_pickComponents.push(debug_hint);
    debug_pickComponents.push(dbg1);
    debug_pickComponents.push(dbg2);
    debug_pickComponents.push(dbg3);
    debug_pickComponents.push(dbg4);
    
    for (const thisComponent of debug_pickComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debug_pickRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debug_pick' ---
    // get current time
    t = debug_pickClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debug_text* updates
    if (t >= 0.0 && debug_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debug_text.tStart = t;  // (not accounting for frame time here)
      debug_text.frameNStart = frameN;  // exact frame index
      
      debug_text.setAutoDraw(true);
    }
    
    
    // if debug_text is active this frame...
    if (debug_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *debug_hint* updates
    if (t >= 0.0 && debug_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debug_hint.tStart = t;  // (not accounting for frame time here)
      debug_hint.frameNStart = frameN;  // exact frame index
      
      debug_hint.setAutoDraw(true);
    }
    
    
    // if debug_hint is active this frame...
    if (debug_hint.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *dbg1* updates
    if (t >= 0 && dbg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbg1.tStart = t;  // (not accounting for frame time here)
      dbg1.frameNStart = frameN;  // exact frame index
      
      dbg1.setAutoDraw(true);
    }
    
    
    // if dbg1 is active this frame...
    if (dbg1.status === PsychoJS.Status.STARTED) {
    }
    
    if (dbg1.status === PsychoJS.Status.STARTED) {
      // check whether dbg1 has been pressed
      if (dbg1.isClicked) {
        if (!dbg1.wasClicked) {
          // store time of first click
          dbg1.timesOn.push(dbg1.clock.getTime());
          // store time clicked until
          dbg1.timesOff.push(dbg1.clock.getTime());
        } else {
          // update time clicked until;
          dbg1.timesOff[dbg1.timesOff.length - 1] = dbg1.clock.getTime();
        }
        if (!dbg1.wasClicked) {
          // end routine when dbg1 is clicked
          continueRoutine = false;
          
        }
        // if dbg1 is still clicked next frame, it is not a new click
        dbg1.wasClicked = true;
      } else {
        // if dbg1 is clicked next frame, it is a new click
        dbg1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbg1 hasn't started / has finished
      dbg1.clock.reset();
      // if dbg1 is clicked next frame, it is a new click
      dbg1.wasClicked = false;
    }
    
    // *dbg2* updates
    if (t >= 0 && dbg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbg2.tStart = t;  // (not accounting for frame time here)
      dbg2.frameNStart = frameN;  // exact frame index
      
      dbg2.setAutoDraw(true);
    }
    
    
    // if dbg2 is active this frame...
    if (dbg2.status === PsychoJS.Status.STARTED) {
    }
    
    if (dbg2.status === PsychoJS.Status.STARTED) {
      // check whether dbg2 has been pressed
      if (dbg2.isClicked) {
        if (!dbg2.wasClicked) {
          // store time of first click
          dbg2.timesOn.push(dbg2.clock.getTime());
          // store time clicked until
          dbg2.timesOff.push(dbg2.clock.getTime());
        } else {
          // update time clicked until;
          dbg2.timesOff[dbg2.timesOff.length - 1] = dbg2.clock.getTime();
        }
        if (!dbg2.wasClicked) {
          // end routine when dbg2 is clicked
          continueRoutine = false;
          
        }
        // if dbg2 is still clicked next frame, it is not a new click
        dbg2.wasClicked = true;
      } else {
        // if dbg2 is clicked next frame, it is a new click
        dbg2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbg2 hasn't started / has finished
      dbg2.clock.reset();
      // if dbg2 is clicked next frame, it is a new click
      dbg2.wasClicked = false;
    }
    
    // *dbg3* updates
    if (t >= 0 && dbg3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbg3.tStart = t;  // (not accounting for frame time here)
      dbg3.frameNStart = frameN;  // exact frame index
      
      dbg3.setAutoDraw(true);
    }
    
    
    // if dbg3 is active this frame...
    if (dbg3.status === PsychoJS.Status.STARTED) {
    }
    
    if (dbg3.status === PsychoJS.Status.STARTED) {
      // check whether dbg3 has been pressed
      if (dbg3.isClicked) {
        if (!dbg3.wasClicked) {
          // store time of first click
          dbg3.timesOn.push(dbg3.clock.getTime());
          // store time clicked until
          dbg3.timesOff.push(dbg3.clock.getTime());
        } else {
          // update time clicked until;
          dbg3.timesOff[dbg3.timesOff.length - 1] = dbg3.clock.getTime();
        }
        if (!dbg3.wasClicked) {
          // end routine when dbg3 is clicked
          continueRoutine = false;
          
        }
        // if dbg3 is still clicked next frame, it is not a new click
        dbg3.wasClicked = true;
      } else {
        // if dbg3 is clicked next frame, it is a new click
        dbg3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbg3 hasn't started / has finished
      dbg3.clock.reset();
      // if dbg3 is clicked next frame, it is a new click
      dbg3.wasClicked = false;
    }
    
    // *dbg4* updates
    if (t >= 0 && dbg4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbg4.tStart = t;  // (not accounting for frame time here)
      dbg4.frameNStart = frameN;  // exact frame index
      
      dbg4.setAutoDraw(true);
    }
    
    
    // if dbg4 is active this frame...
    if (dbg4.status === PsychoJS.Status.STARTED) {
    }
    
    if (dbg4.status === PsychoJS.Status.STARTED) {
      // check whether dbg4 has been pressed
      if (dbg4.isClicked) {
        if (!dbg4.wasClicked) {
          // store time of first click
          dbg4.timesOn.push(dbg4.clock.getTime());
          // store time clicked until
          dbg4.timesOff.push(dbg4.clock.getTime());
        } else {
          // update time clicked until;
          dbg4.timesOff[dbg4.timesOff.length - 1] = dbg4.clock.getTime();
        }
        if (!dbg4.wasClicked) {
          // end routine when dbg4 is clicked
          continueRoutine = false;
          
        }
        // if dbg4 is still clicked next frame, it is not a new click
        dbg4.wasClicked = true;
      } else {
        // if dbg4 is clicked next frame, it is a new click
        dbg4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbg4 hasn't started / has finished
      dbg4.clock.reset();
      // if dbg4 is clicked next frame, it is a new click
      dbg4.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debug_pickComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debug_pickRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debug_pick' ---
    for (const thisComponent of debug_pickComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('debug_pick.stopped', globalClock.getTime());
    psychoJS.experiment.addData('dbg1.numClicks', dbg1.numClicks);
    psychoJS.experiment.addData('dbg1.timesOn', dbg1.timesOn);
    psychoJS.experiment.addData('dbg1.timesOff', dbg1.timesOff);
    psychoJS.experiment.addData('dbg2.numClicks', dbg2.numClicks);
    psychoJS.experiment.addData('dbg2.timesOn', dbg2.timesOn);
    psychoJS.experiment.addData('dbg2.timesOff', dbg2.timesOff);
    psychoJS.experiment.addData('dbg3.numClicks', dbg3.numClicks);
    psychoJS.experiment.addData('dbg3.timesOn', dbg3.timesOn);
    psychoJS.experiment.addData('dbg3.timesOff', dbg3.timesOff);
    psychoJS.experiment.addData('dbg4.numClicks', dbg4.numClicks);
    psychoJS.experiment.addData('dbg4.timesOn', dbg4.timesOn);
    psychoJS.experiment.addData('dbg4.timesOff', dbg4.timesOff);
    // Run 'End Routine' code from code_debug
    var _bs = [dbg1, dbg2, dbg3, dbg4];
    for (var i = 0; i < 4; i++) { if (_bs[i].numClicks > 0) { group = i + 1; } }
    
    // the Routine "debug_pick" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var setupMaxDurationReached;
var order;
var cost;
var setupMaxDuration;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    setupClock.reset(routineTimer.getTime());
    routineTimer.add(0.100000);
    setupMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_setup
    order = (group === 1 || group === 2) ? 'before' : 'after';
    cost = (group === 1 || group === 3) ? 'easy' : 'hard';
    nBefore = (order === 'before') ? 1 : 0;
    nAfter = 1 - nBefore;
    psychoJS.experiment.addData('group', group);
    psychoJS.experiment.addData('order', order);
    psychoJS.experiment.addData('cost', cost);
    psychoJS.experiment.addData('debug', nDebug);
    
    psychoJS.experiment.addData('setup.started', globalClock.getTime());
    setupMaxDuration = null
    // keep track of which components have finished
    setupComponents = [];
    setupComponents.push(setup_blank);
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup' ---
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *setup_blank* updates
    if (t >= 0.0 && setup_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setup_blank.tStart = t;  // (not accounting for frame time here)
      setup_blank.frameNStart = frameN;  // exact frame index
      
      setup_blank.setAutoDraw(true);
    }
    
    
    // if setup_blank is active this frame...
    if (setup_blank.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (setup_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      setup_blank.tStop = t;  // not accounting for scr refresh
      setup_blank.frameNStop = frameN;  // exact frame index
      // update status
      setup_blank.status = PsychoJS.Status.FINISHED;
      setup_blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup' ---
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('setup.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (setupMaxDurationReached) {
        setupClock.add(setupMaxDuration);
    } else {
        setupClock.add(0.100000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tob_instr_beforeMaxDurationReached;
var _tob_instr_key_before_allKeys;
var tob_instr_beforeMaxDuration;
var tob_instr_beforeComponents;
function tob_instr_beforeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tob_instr_before' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tob_instr_beforeClock.reset();
    routineTimer.reset();
    tob_instr_beforeMaxDurationReached = false;
    // update component parameters for each repeat
    tob_instr_key_before.keys = undefined;
    tob_instr_key_before.rt = undefined;
    _tob_instr_key_before_allKeys = [];
    psychoJS.experiment.addData('tob_instr_before.started', globalClock.getTime());
    tob_instr_beforeMaxDuration = null
    // keep track of which components have finished
    tob_instr_beforeComponents = [];
    tob_instr_beforeComponents.push(tob_instr_text_before);
    tob_instr_beforeComponents.push(tob_instr_key_before);
    
    for (const thisComponent of tob_instr_beforeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tob_instr_beforeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tob_instr_before' ---
    // get current time
    t = tob_instr_beforeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tob_instr_text_before* updates
    if (t >= 0.0 && tob_instr_text_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_instr_text_before.tStart = t;  // (not accounting for frame time here)
      tob_instr_text_before.frameNStart = frameN;  // exact frame index
      
      tob_instr_text_before.setAutoDraw(true);
    }
    
    
    // if tob_instr_text_before is active this frame...
    if (tob_instr_text_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tob_instr_key_before* updates
    if (t >= 0.0 && tob_instr_key_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_instr_key_before.tStart = t;  // (not accounting for frame time here)
      tob_instr_key_before.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tob_instr_key_before.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tob_instr_key_before.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tob_instr_key_before.clearEvents(); });
    }
    
    // if tob_instr_key_before is active this frame...
    if (tob_instr_key_before.status === PsychoJS.Status.STARTED) {
      let theseKeys = tob_instr_key_before.getKeys({keyList: 'space', waitRelease: false});
      _tob_instr_key_before_allKeys = _tob_instr_key_before_allKeys.concat(theseKeys);
      if (_tob_instr_key_before_allKeys.length > 0) {
        tob_instr_key_before.keys = _tob_instr_key_before_allKeys[_tob_instr_key_before_allKeys.length - 1].name;  // just the last key pressed
        tob_instr_key_before.rt = _tob_instr_key_before_allKeys[_tob_instr_key_before_allKeys.length - 1].rt;
        tob_instr_key_before.duration = _tob_instr_key_before_allKeys[_tob_instr_key_before_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tob_instr_beforeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tob_instr_beforeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tob_instr_before' ---
    for (const thisComponent of tob_instr_beforeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tob_instr_before.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(tob_instr_key_before.corr, level);
    }
    psychoJS.experiment.addData('tob_instr_key_before.keys', tob_instr_key_before.keys);
    if (typeof tob_instr_key_before.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('tob_instr_key_before.rt', tob_instr_key_before.rt);
        psychoJS.experiment.addData('tob_instr_key_before.duration', tob_instr_key_before.duration);
        routineTimer.reset();
        }
    
    tob_instr_key_before.stop();
    // the Routine "tob_instr_before" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tob_item_beforeMaxDurationReached;
var resp;
var tob_item_beforeMaxDuration;
var tob_item_beforeComponents;
function tob_item_beforeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tob_item_before' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tob_item_beforeClock.reset();
    routineTimer.reset();
    tob_item_beforeMaxDurationReached = false;
    // update component parameters for each repeat
    tob_text_before.setText(text);
    tob_slider_before.reset()
    // Run 'Begin Routine' code from code_tob_before
    resp = null;
    psychoJS.eventManager.clearEvents();
    
    psychoJS.experiment.addData('tob_item_before.started', globalClock.getTime());
    tob_item_beforeMaxDuration = null
    // keep track of which components have finished
    tob_item_beforeComponents = [];
    tob_item_beforeComponents.push(tob_text_before);
    tob_item_beforeComponents.push(tob_slider_before);
    tob_item_beforeComponents.push(tob_hint_before);
    
    for (const thisComponent of tob_item_beforeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tob_item_beforeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tob_item_before' ---
    // get current time
    t = tob_item_beforeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tob_text_before* updates
    if (t >= 0.0 && tob_text_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_text_before.tStart = t;  // (not accounting for frame time here)
      tob_text_before.frameNStart = frameN;  // exact frame index
      
      tob_text_before.setAutoDraw(true);
    }
    
    
    // if tob_text_before is active this frame...
    if (tob_text_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tob_slider_before* updates
    if (t >= 0.0 && tob_slider_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_slider_before.tStart = t;  // (not accounting for frame time here)
      tob_slider_before.frameNStart = frameN;  // exact frame index
      
      tob_slider_before.setAutoDraw(true);
    }
    
    
    // if tob_slider_before is active this frame...
    if (tob_slider_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tob_hint_before* updates
    if (t >= 0.0 && tob_hint_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_hint_before.tStart = t;  // (not accounting for frame time here)
      tob_hint_before.frameNStart = frameN;  // exact frame index
      
      tob_hint_before.setAutoDraw(true);
    }
    
    
    // if tob_hint_before is active this frame...
    if (tob_hint_before.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_tob_before
    var keys = psychoJS.eventManager.getKeys({keyList: ['left', 'right', 'space', '1', '2', '3', '4', '5', '6', '7']});
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (['1','2','3','4','5','6','7'].indexOf(k) >= 0) { resp = parseInt(k); }
      else if (k === 'left') { resp = (resp === null) ? 4 : Math.max(1, resp - 1); }
      else if (k === 'right') { resp = (resp === null) ? 4 : Math.min(7, resp + 1); }
      else if (k === 'space' && resp !== null) { continueRoutine = false; }
      if (resp !== null) { tob_slider_before.setMarkerPos(resp); }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tob_item_beforeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tob_item_beforeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tob_item_before' ---
    for (const thisComponent of tob_item_beforeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tob_item_before.stopped', globalClock.getTime());
    psychoJS.experiment.addData('tob_slider_before.response', tob_slider_before.getRating());
    psychoJS.experiment.addData('tob_slider_before.rt', tob_slider_before.getRT());
    // Run 'End Routine' code from code_tob_before
    tob_resp[Number(item_n)] = resp;
    psychoJS.experiment.addData('tob_' + String(item_n), resp);
    psychoJS.experiment.addData('tob_rt_' + String(item_n), t);
    
    // the Routine "tob_item_before" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choice_instrMaxDurationReached;
var instr_txt;
var _choice_instr_key_allKeys;
var choice_instrMaxDuration;
var choice_instrComponents;
function choice_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    choice_instrClock.reset();
    routineTimer.reset();
    choice_instrMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_choice_instr
    instr_txt = ((cost === 'easy') ? TXT_CHOICE_EASY : TXT_CHOICE_HARD) + TXT_CHOICE_TAIL;
    
    choice_instr_text.setText(instr_txt);
    choice_instr_key.keys = undefined;
    choice_instr_key.rt = undefined;
    _choice_instr_key_allKeys = [];
    psychoJS.experiment.addData('choice_instr.started', globalClock.getTime());
    choice_instrMaxDuration = null
    // keep track of which components have finished
    choice_instrComponents = [];
    choice_instrComponents.push(choice_instr_text);
    choice_instrComponents.push(choice_instr_key);
    
    for (const thisComponent of choice_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice_instr' ---
    // get current time
    t = choice_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *choice_instr_text* updates
    if (t >= 0.0 && choice_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_instr_text.tStart = t;  // (not accounting for frame time here)
      choice_instr_text.frameNStart = frameN;  // exact frame index
      
      choice_instr_text.setAutoDraw(true);
    }
    
    
    // if choice_instr_text is active this frame...
    if (choice_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *choice_instr_key* updates
    if (t >= 0.0 && choice_instr_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_instr_key.tStart = t;  // (not accounting for frame time here)
      choice_instr_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice_instr_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice_instr_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice_instr_key.clearEvents(); });
    }
    
    // if choice_instr_key is active this frame...
    if (choice_instr_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = choice_instr_key.getKeys({keyList: 'space', waitRelease: false});
      _choice_instr_key_allKeys = _choice_instr_key_allKeys.concat(theseKeys);
      if (_choice_instr_key_allKeys.length > 0) {
        choice_instr_key.keys = _choice_instr_key_allKeys[_choice_instr_key_allKeys.length - 1].name;  // just the last key pressed
        choice_instr_key.rt = _choice_instr_key_allKeys[_choice_instr_key_allKeys.length - 1].rt;
        choice_instr_key.duration = _choice_instr_key_allKeys[_choice_instr_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choice_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choice_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice_instr' ---
    for (const thisComponent of choice_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('choice_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(choice_instr_key.corr, level);
    }
    psychoJS.experiment.addData('choice_instr_key.keys', choice_instr_key.keys);
    if (typeof choice_instr_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choice_instr_key.rt', choice_instr_key.rt);
        psychoJS.experiment.addData('choice_instr_key.duration', choice_instr_key.duration);
        routineTimer.reset();
        }
    
    choice_instr_key.stop();
    // the Routine "choice_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choiceMaxDurationReached;
var end_at;
var choiceMaxDuration;
var choiceComponents;
function choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    choiceClock.reset();
    routineTimer.reset();
    choiceMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_choice
    choice_resp = ''; choice_rt = -1; end_at = null;
    psychoJS.eventManager.clearEvents();
    
    // reset btn_magic to account for continued clicks & clear times on/off
    btn_magic.reset()
    // reset btn_skip to account for continued clicks & clear times on/off
    btn_skip.reset()
    psychoJS.experiment.addData('choice.started', globalClock.getTime());
    choiceMaxDuration = null
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(choice_head);
    choiceComponents.push(btn_magic);
    choiceComponents.push(btn_skip);
    choiceComponents.push(choice_keys);
    choiceComponents.push(choice_hint);
    
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice' ---
    // get current time
    t = choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_choice
    if (end_at === null) {
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
    
    
    // *choice_head* updates
    if (t >= 0.0 && choice_head.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_head.tStart = t;  // (not accounting for frame time here)
      choice_head.frameNStart = frameN;  // exact frame index
      
      choice_head.setAutoDraw(true);
    }
    
    
    // if choice_head is active this frame...
    if (choice_head.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_magic* updates
    if (t >= 0 && btn_magic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_magic.tStart = t;  // (not accounting for frame time here)
      btn_magic.frameNStart = frameN;  // exact frame index
      
      btn_magic.setAutoDraw(true);
    }
    
    
    // if btn_magic is active this frame...
    if (btn_magic.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_magic.status === PsychoJS.Status.STARTED) {
      // check whether btn_magic has been pressed
      if (btn_magic.isClicked) {
        if (!btn_magic.wasClicked) {
          // store time of first click
          btn_magic.timesOn.push(btn_magic.clock.getTime());
          // store time clicked until
          btn_magic.timesOff.push(btn_magic.clock.getTime());
        } else {
          // update time clicked until;
          btn_magic.timesOff[btn_magic.timesOff.length - 1] = btn_magic.clock.getTime();
        }
        if (!btn_magic.wasClicked) {
          
        }
        // if btn_magic is still clicked next frame, it is not a new click
        btn_magic.wasClicked = true;
      } else {
        // if btn_magic is clicked next frame, it is a new click
        btn_magic.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_magic hasn't started / has finished
      btn_magic.clock.reset();
      // if btn_magic is clicked next frame, it is a new click
      btn_magic.wasClicked = false;
    }
    
    // *btn_skip* updates
    if (t >= 0 && btn_skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_skip.tStart = t;  // (not accounting for frame time here)
      btn_skip.frameNStart = frameN;  // exact frame index
      
      btn_skip.setAutoDraw(true);
    }
    
    
    // if btn_skip is active this frame...
    if (btn_skip.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_skip.status === PsychoJS.Status.STARTED) {
      // check whether btn_skip has been pressed
      if (btn_skip.isClicked) {
        if (!btn_skip.wasClicked) {
          // store time of first click
          btn_skip.timesOn.push(btn_skip.clock.getTime());
          // store time clicked until
          btn_skip.timesOff.push(btn_skip.clock.getTime());
        } else {
          // update time clicked until;
          btn_skip.timesOff[btn_skip.timesOff.length - 1] = btn_skip.clock.getTime();
        }
        if (!btn_skip.wasClicked) {
          
        }
        // if btn_skip is still clicked next frame, it is not a new click
        btn_skip.wasClicked = true;
      } else {
        // if btn_skip is clicked next frame, it is a new click
        btn_skip.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_skip hasn't started / has finished
      btn_skip.clock.reset();
      // if btn_skip is clicked next frame, it is a new click
      btn_skip.wasClicked = false;
    }
    
    // *choice_keys* updates
    if (t >= 0.0 && choice_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_keys.tStart = t;  // (not accounting for frame time here)
      choice_keys.frameNStart = frameN;  // exact frame index
      
      choice_keys.setAutoDraw(true);
    }
    
    
    // if choice_keys is active this frame...
    if (choice_keys.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *choice_hint* updates
    if (t >= 0.0 && choice_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_hint.tStart = t;  // (not accounting for frame time here)
      choice_hint.frameNStart = frameN;  // exact frame index
      
      choice_hint.setAutoDraw(true);
    }
    
    
    // if choice_hint is active this frame...
    if (choice_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice' ---
    for (const thisComponent of choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('choice.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_choice
    nEffort = (choice_resp === 'magic') ? 1 : 0;
    psychoJS.experiment.addData('choice', choice_resp);
    psychoJS.experiment.addData('choice_rt', choice_rt);
    
    psychoJS.experiment.addData('btn_magic.numClicks', btn_magic.numClicks);
    psychoJS.experiment.addData('btn_magic.timesOn', btn_magic.timesOn);
    psychoJS.experiment.addData('btn_magic.timesOff', btn_magic.timesOff);
    psychoJS.experiment.addData('btn_skip.numClicks', btn_skip.numClicks);
    psychoJS.experiment.addData('btn_skip.timesOn', btn_skip.timesOn);
    psychoJS.experiment.addData('btn_skip.timesOff', btn_skip.timesOff);
    // the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var effortMaxDurationReached;
var effortMaxDuration;
var effortComponents;
function effortRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'effort' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    effortClock.reset();
    routineTimer.reset();
    effortMaxDurationReached = false;
    // update component parameters for each repeat
    effort_box.setText('');
    effort_box.refresh();
    // reset effort_done to account for continued clicks & clear times on/off
    effort_done.reset()
    psychoJS.experiment.addData('effort.started', globalClock.getTime());
    effortMaxDuration = null
    // keep track of which components have finished
    effortComponents = [];
    effortComponents.push(effort_text);
    effortComponents.push(effort_box);
    effortComponents.push(effort_done);
    
    for (const thisComponent of effortComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function effortRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'effort' ---
    // get current time
    t = effortClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *effort_text* updates
    if (t >= 0.0 && effort_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_text.tStart = t;  // (not accounting for frame time here)
      effort_text.frameNStart = frameN;  // exact frame index
      
      effort_text.setAutoDraw(true);
    }
    
    
    // if effort_text is active this frame...
    if (effort_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *effort_box* updates
    if (t >= 0.0 && effort_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_box.tStart = t;  // (not accounting for frame time here)
      effort_box.frameNStart = frameN;  // exact frame index
      
      effort_box.setAutoDraw(true);
    }
    
    
    // if effort_box is active this frame...
    if (effort_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *effort_done* updates
    if (t >= 0 && effort_done.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_done.tStart = t;  // (not accounting for frame time here)
      effort_done.frameNStart = frameN;  // exact frame index
      
      effort_done.setAutoDraw(true);
    }
    
    
    // if effort_done is active this frame...
    if (effort_done.status === PsychoJS.Status.STARTED) {
    }
    
    if (effort_done.status === PsychoJS.Status.STARTED) {
      // check whether effort_done has been pressed
      if (effort_done.isClicked) {
        if (!effort_done.wasClicked) {
          // store time of first click
          effort_done.timesOn.push(effort_done.clock.getTime());
          // store time clicked until
          effort_done.timesOff.push(effort_done.clock.getTime());
        } else {
          // update time clicked until;
          effort_done.timesOff[effort_done.timesOff.length - 1] = effort_done.clock.getTime();
        }
        if (!effort_done.wasClicked) {
          // end routine when effort_done is clicked
          continueRoutine = false;
          
        }
        // if effort_done is still clicked next frame, it is not a new click
        effort_done.wasClicked = true;
      } else {
        // if effort_done is clicked next frame, it is a new click
        effort_done.wasClicked = false;
      }
    } else {
      // keep clock at 0 if effort_done hasn't started / has finished
      effort_done.clock.reset();
      // if effort_done is clicked next frame, it is a new click
      effort_done.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of effortComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function effortRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'effort' ---
    for (const thisComponent of effortComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('effort.stopped', globalClock.getTime());
    psychoJS.experiment.addData('effort_box.text',effort_box.text)
    psychoJS.experiment.addData('effort_done.numClicks', effort_done.numClicks);
    psychoJS.experiment.addData('effort_done.timesOn', effort_done.timesOn);
    psychoJS.experiment.addData('effort_done.timesOff', effort_done.timesOff);
    // Run 'End Routine' code from code_effort
    var txt = effort_box.text || '';
    psychoJS.experiment.addData('effort_len', txt.length);
    psychoJS.experiment.addData('effort_m', (txt.toLowerCase().match(/м/g) || []).length);
    psychoJS.experiment.addData('effort_time', t);
    
    // the Routine "effort" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ratingMaxDurationReached;
var ratingMaxDuration;
var ratingComponents;
function ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rating' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ratingClock.reset();
    routineTimer.reset();
    ratingMaxDurationReached = false;
    // update component parameters for each repeat
    importance.reset()
    control.reset()
    // reset rating_done to account for continued clicks & clear times on/off
    rating_done.reset()
    psychoJS.experiment.addData('rating.started', globalClock.getTime());
    ratingMaxDuration = null
    // keep track of which components have finished
    ratingComponents = [];
    ratingComponents.push(rating_text);
    ratingComponents.push(lbl_imp);
    ratingComponents.push(importance);
    ratingComponents.push(lbl_ctrl);
    ratingComponents.push(control);
    ratingComponents.push(rating_done);
    
    for (const thisComponent of ratingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ratingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rating' ---
    // get current time
    t = ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rating_text* updates
    if (t >= 0.0 && rating_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_text.tStart = t;  // (not accounting for frame time here)
      rating_text.frameNStart = frameN;  // exact frame index
      
      rating_text.setAutoDraw(true);
    }
    
    
    // if rating_text is active this frame...
    if (rating_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lbl_imp* updates
    if (t >= 0.0 && lbl_imp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lbl_imp.tStart = t;  // (not accounting for frame time here)
      lbl_imp.frameNStart = frameN;  // exact frame index
      
      lbl_imp.setAutoDraw(true);
    }
    
    
    // if lbl_imp is active this frame...
    if (lbl_imp.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *importance* updates
    if (t >= 0.0 && importance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      importance.tStart = t;  // (not accounting for frame time here)
      importance.frameNStart = frameN;  // exact frame index
      
      importance.setAutoDraw(true);
    }
    
    
    // if importance is active this frame...
    if (importance.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lbl_ctrl* updates
    if (t >= 0.0 && lbl_ctrl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lbl_ctrl.tStart = t;  // (not accounting for frame time here)
      lbl_ctrl.frameNStart = frameN;  // exact frame index
      
      lbl_ctrl.setAutoDraw(true);
    }
    
    
    // if lbl_ctrl is active this frame...
    if (lbl_ctrl.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *control* updates
    if (t >= 0.0 && control.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      control.tStart = t;  // (not accounting for frame time here)
      control.frameNStart = frameN;  // exact frame index
      
      control.setAutoDraw(true);
    }
    
    
    // if control is active this frame...
    if (control.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rating_done* updates
    if (t >= 0 && rating_done.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_done.tStart = t;  // (not accounting for frame time here)
      rating_done.frameNStart = frameN;  // exact frame index
      
      rating_done.setAutoDraw(true);
    }
    
    
    // if rating_done is active this frame...
    if (rating_done.status === PsychoJS.Status.STARTED) {
    }
    
    if (rating_done.status === PsychoJS.Status.STARTED) {
      // check whether rating_done has been pressed
      if (rating_done.isClicked) {
        if (!rating_done.wasClicked) {
          // store time of first click
          rating_done.timesOn.push(rating_done.clock.getTime());
          // store time clicked until
          rating_done.timesOff.push(rating_done.clock.getTime());
        } else {
          // update time clicked until;
          rating_done.timesOff[rating_done.timesOff.length - 1] = rating_done.clock.getTime();
        }
        if (!rating_done.wasClicked) {
          // end routine when rating_done is clicked
          continueRoutine = false;
          
        }
        // if rating_done is still clicked next frame, it is not a new click
        rating_done.wasClicked = true;
      } else {
        // if rating_done is clicked next frame, it is a new click
        rating_done.wasClicked = false;
      }
    } else {
      // keep clock at 0 if rating_done hasn't started / has finished
      rating_done.clock.reset();
      // if rating_done is clicked next frame, it is a new click
      rating_done.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ratingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rating' ---
    for (const thisComponent of ratingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rating.stopped', globalClock.getTime());
    psychoJS.experiment.addData('importance.response', importance.getRating());
    psychoJS.experiment.addData('importance.rt', importance.getRT());
    psychoJS.experiment.addData('control.response', control.getRating());
    psychoJS.experiment.addData('control.rt', control.getRT());
    psychoJS.experiment.addData('rating_done.numClicks', rating_done.numClicks);
    psychoJS.experiment.addData('rating_done.timesOn', rating_done.timesOn);
    psychoJS.experiment.addData('rating_done.timesOff', rating_done.timesOff);
    // the Routine "rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tob_instr_afterMaxDurationReached;
var _tob_instr_key_after_allKeys;
var tob_instr_afterMaxDuration;
var tob_instr_afterComponents;
function tob_instr_afterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tob_instr_after' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tob_instr_afterClock.reset();
    routineTimer.reset();
    tob_instr_afterMaxDurationReached = false;
    // update component parameters for each repeat
    tob_instr_key_after.keys = undefined;
    tob_instr_key_after.rt = undefined;
    _tob_instr_key_after_allKeys = [];
    psychoJS.experiment.addData('tob_instr_after.started', globalClock.getTime());
    tob_instr_afterMaxDuration = null
    // keep track of which components have finished
    tob_instr_afterComponents = [];
    tob_instr_afterComponents.push(tob_instr_text_after);
    tob_instr_afterComponents.push(tob_instr_key_after);
    
    for (const thisComponent of tob_instr_afterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tob_instr_afterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tob_instr_after' ---
    // get current time
    t = tob_instr_afterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tob_instr_text_after* updates
    if (t >= 0.0 && tob_instr_text_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_instr_text_after.tStart = t;  // (not accounting for frame time here)
      tob_instr_text_after.frameNStart = frameN;  // exact frame index
      
      tob_instr_text_after.setAutoDraw(true);
    }
    
    
    // if tob_instr_text_after is active this frame...
    if (tob_instr_text_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tob_instr_key_after* updates
    if (t >= 0.0 && tob_instr_key_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_instr_key_after.tStart = t;  // (not accounting for frame time here)
      tob_instr_key_after.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tob_instr_key_after.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tob_instr_key_after.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tob_instr_key_after.clearEvents(); });
    }
    
    // if tob_instr_key_after is active this frame...
    if (tob_instr_key_after.status === PsychoJS.Status.STARTED) {
      let theseKeys = tob_instr_key_after.getKeys({keyList: 'space', waitRelease: false});
      _tob_instr_key_after_allKeys = _tob_instr_key_after_allKeys.concat(theseKeys);
      if (_tob_instr_key_after_allKeys.length > 0) {
        tob_instr_key_after.keys = _tob_instr_key_after_allKeys[_tob_instr_key_after_allKeys.length - 1].name;  // just the last key pressed
        tob_instr_key_after.rt = _tob_instr_key_after_allKeys[_tob_instr_key_after_allKeys.length - 1].rt;
        tob_instr_key_after.duration = _tob_instr_key_after_allKeys[_tob_instr_key_after_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tob_instr_afterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tob_instr_afterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tob_instr_after' ---
    for (const thisComponent of tob_instr_afterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tob_instr_after.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(tob_instr_key_after.corr, level);
    }
    psychoJS.experiment.addData('tob_instr_key_after.keys', tob_instr_key_after.keys);
    if (typeof tob_instr_key_after.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('tob_instr_key_after.rt', tob_instr_key_after.rt);
        psychoJS.experiment.addData('tob_instr_key_after.duration', tob_instr_key_after.duration);
        routineTimer.reset();
        }
    
    tob_instr_key_after.stop();
    // the Routine "tob_instr_after" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tob_item_afterMaxDurationReached;
var tob_item_afterMaxDuration;
var tob_item_afterComponents;
function tob_item_afterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tob_item_after' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tob_item_afterClock.reset();
    routineTimer.reset();
    tob_item_afterMaxDurationReached = false;
    // update component parameters for each repeat
    tob_text_after.setText(text);
    tob_slider_after.reset()
    // Run 'Begin Routine' code from code_tob_after
    resp = null;
    psychoJS.eventManager.clearEvents();
    
    psychoJS.experiment.addData('tob_item_after.started', globalClock.getTime());
    tob_item_afterMaxDuration = null
    // keep track of which components have finished
    tob_item_afterComponents = [];
    tob_item_afterComponents.push(tob_text_after);
    tob_item_afterComponents.push(tob_slider_after);
    tob_item_afterComponents.push(tob_hint_after);
    
    for (const thisComponent of tob_item_afterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tob_item_afterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tob_item_after' ---
    // get current time
    t = tob_item_afterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tob_text_after* updates
    if (t >= 0.0 && tob_text_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_text_after.tStart = t;  // (not accounting for frame time here)
      tob_text_after.frameNStart = frameN;  // exact frame index
      
      tob_text_after.setAutoDraw(true);
    }
    
    
    // if tob_text_after is active this frame...
    if (tob_text_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tob_slider_after* updates
    if (t >= 0.0 && tob_slider_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_slider_after.tStart = t;  // (not accounting for frame time here)
      tob_slider_after.frameNStart = frameN;  // exact frame index
      
      tob_slider_after.setAutoDraw(true);
    }
    
    
    // if tob_slider_after is active this frame...
    if (tob_slider_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tob_hint_after* updates
    if (t >= 0.0 && tob_hint_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_hint_after.tStart = t;  // (not accounting for frame time here)
      tob_hint_after.frameNStart = frameN;  // exact frame index
      
      tob_hint_after.setAutoDraw(true);
    }
    
    
    // if tob_hint_after is active this frame...
    if (tob_hint_after.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_tob_after
    var keys = psychoJS.eventManager.getKeys({keyList: ['left', 'right', 'space', '1', '2', '3', '4', '5', '6', '7']});
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (['1','2','3','4','5','6','7'].indexOf(k) >= 0) { resp = parseInt(k); }
      else if (k === 'left') { resp = (resp === null) ? 4 : Math.max(1, resp - 1); }
      else if (k === 'right') { resp = (resp === null) ? 4 : Math.min(7, resp + 1); }
      else if (k === 'space' && resp !== null) { continueRoutine = false; }
      if (resp !== null) { tob_slider_after.setMarkerPos(resp); }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tob_item_afterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tob_item_afterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tob_item_after' ---
    for (const thisComponent of tob_item_afterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tob_item_after.stopped', globalClock.getTime());
    psychoJS.experiment.addData('tob_slider_after.response', tob_slider_after.getRating());
    psychoJS.experiment.addData('tob_slider_after.rt', tob_slider_after.getRT());
    // Run 'End Routine' code from code_tob_after
    tob_resp[Number(item_n)] = resp;
    psychoJS.experiment.addData('tob_' + String(item_n), resp);
    psychoJS.experiment.addData('tob_rt_' + String(item_n), t);
    
    // the Routine "tob_item_after" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var suspicionMaxDurationReached;
var suspicionMaxDuration;
var suspicionComponents;
function suspicionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'suspicion' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    suspicionClock.reset();
    routineTimer.reset();
    suspicionMaxDurationReached = false;
    // update component parameters for each repeat
    susp_box.setText('');
    susp_box.refresh();
    // reset susp_done to account for continued clicks & clear times on/off
    susp_done.reset()
    psychoJS.experiment.addData('suspicion.started', globalClock.getTime());
    suspicionMaxDuration = null
    // keep track of which components have finished
    suspicionComponents = [];
    suspicionComponents.push(susp_text);
    suspicionComponents.push(susp_box);
    suspicionComponents.push(susp_done);
    
    for (const thisComponent of suspicionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function suspicionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'suspicion' ---
    // get current time
    t = suspicionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *susp_text* updates
    if (t >= 0.0 && susp_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      susp_text.tStart = t;  // (not accounting for frame time here)
      susp_text.frameNStart = frameN;  // exact frame index
      
      susp_text.setAutoDraw(true);
    }
    
    
    // if susp_text is active this frame...
    if (susp_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *susp_box* updates
    if (t >= 0.0 && susp_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      susp_box.tStart = t;  // (not accounting for frame time here)
      susp_box.frameNStart = frameN;  // exact frame index
      
      susp_box.setAutoDraw(true);
    }
    
    
    // if susp_box is active this frame...
    if (susp_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *susp_done* updates
    if (t >= 0 && susp_done.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      susp_done.tStart = t;  // (not accounting for frame time here)
      susp_done.frameNStart = frameN;  // exact frame index
      
      susp_done.setAutoDraw(true);
    }
    
    
    // if susp_done is active this frame...
    if (susp_done.status === PsychoJS.Status.STARTED) {
    }
    
    if (susp_done.status === PsychoJS.Status.STARTED) {
      // check whether susp_done has been pressed
      if (susp_done.isClicked) {
        if (!susp_done.wasClicked) {
          // store time of first click
          susp_done.timesOn.push(susp_done.clock.getTime());
          // store time clicked until
          susp_done.timesOff.push(susp_done.clock.getTime());
        } else {
          // update time clicked until;
          susp_done.timesOff[susp_done.timesOff.length - 1] = susp_done.clock.getTime();
        }
        if (!susp_done.wasClicked) {
          // end routine when susp_done is clicked
          continueRoutine = false;
          
        }
        // if susp_done is still clicked next frame, it is not a new click
        susp_done.wasClicked = true;
      } else {
        // if susp_done is clicked next frame, it is a new click
        susp_done.wasClicked = false;
      }
    } else {
      // keep clock at 0 if susp_done hasn't started / has finished
      susp_done.clock.reset();
      // if susp_done is clicked next frame, it is a new click
      susp_done.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of suspicionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function suspicionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'suspicion' ---
    for (const thisComponent of suspicionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('suspicion.stopped', globalClock.getTime());
    psychoJS.experiment.addData('susp_box.text',susp_box.text)
    psychoJS.experiment.addData('susp_done.numClicks', susp_done.numClicks);
    psychoJS.experiment.addData('susp_done.timesOn', susp_done.timesOn);
    psychoJS.experiment.addData('susp_done.timesOff', susp_done.timesOff);
    // the Routine "suspicion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var row_entryMaxDurationReached;
var row_entryMaxDuration;
var row_entryComponents;
function row_entryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'row_entry' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    row_entryClock.reset();
    routineTimer.reset();
    row_entryMaxDurationReached = false;
    // update component parameters for each repeat
    row_box.setText('');
    row_box.refresh();
    // reset row_done to account for continued clicks & clear times on/off
    row_done.reset()
    psychoJS.experiment.addData('row_entry.started', globalClock.getTime());
    row_entryMaxDuration = null
    // keep track of which components have finished
    row_entryComponents = [];
    row_entryComponents.push(row_text);
    row_entryComponents.push(row_box);
    row_entryComponents.push(row_done);
    
    for (const thisComponent of row_entryComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function row_entryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'row_entry' ---
    // get current time
    t = row_entryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *row_text* updates
    if (t >= 0.0 && row_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_text.tStart = t;  // (not accounting for frame time here)
      row_text.frameNStart = frameN;  // exact frame index
      
      row_text.setAutoDraw(true);
    }
    
    
    // if row_text is active this frame...
    if (row_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_box* updates
    if (t >= 0.0 && row_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_box.tStart = t;  // (not accounting for frame time here)
      row_box.frameNStart = frameN;  // exact frame index
      
      row_box.setAutoDraw(true);
    }
    
    
    // if row_box is active this frame...
    if (row_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_done* updates
    if (t >= 0 && row_done.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_done.tStart = t;  // (not accounting for frame time here)
      row_done.frameNStart = frameN;  // exact frame index
      
      row_done.setAutoDraw(true);
    }
    
    
    // if row_done is active this frame...
    if (row_done.status === PsychoJS.Status.STARTED) {
    }
    
    if (row_done.status === PsychoJS.Status.STARTED) {
      // check whether row_done has been pressed
      if (row_done.isClicked) {
        if (!row_done.wasClicked) {
          // store time of first click
          row_done.timesOn.push(row_done.clock.getTime());
          // store time clicked until
          row_done.timesOff.push(row_done.clock.getTime());
        } else {
          // update time clicked until;
          row_done.timesOff[row_done.timesOff.length - 1] = row_done.clock.getTime();
        }
        if (!row_done.wasClicked) {
          // end routine when row_done is clicked
          continueRoutine = false;
          
        }
        // if row_done is still clicked next frame, it is not a new click
        row_done.wasClicked = true;
      } else {
        // if row_done is clicked next frame, it is a new click
        row_done.wasClicked = false;
      }
    } else {
      // keep clock at 0 if row_done hasn't started / has finished
      row_done.clock.reset();
      // if row_done is clicked next frame, it is a new click
      row_done.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of row_entryComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function row_entryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'row_entry' ---
    for (const thisComponent of row_entryComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('row_entry.stopped', globalClock.getTime());
    psychoJS.experiment.addData('row_box.text',row_box.text)
    psychoJS.experiment.addData('row_done.numClicks', row_done.numClicks);
    psychoJS.experiment.addData('row_done.timesOn', row_done.timesOn);
    psychoJS.experiment.addData('row_done.timesOff', row_done.timesOff);
    // Run 'End Routine' code from code_row
    psychoJS.experiment.addData('row_number', (row_box.text || '').trim());
    
    // the Routine "row_entry" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var _thanks_key_allKeys;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanksClock.reset();
    routineTimer.reset();
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_score
    
    var SUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],
           'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]};
    function _v(i) { var x = tob_resp[i]; if (x === undefined || x === null) return null; x = Number(x); return (i === 23) ? 8 - x : x; }
    var vals = []; var ok = true;
    for (var i = 1; i <= 26; i++) { var v = _v(i); if (v === null) ok = false; vals.push(v); }
    if (ok) {
      for (var k in SUB) { var ssum = 0; for (var j = 0; j < SUB[k].length; j++) { ssum += _v(SUB[k][j]); } psychoJS.experiment.addData('RPBS_' + k, ssum); }
      var tot = vals.reduce(function(a, b) { return a + b; }, 0);
      psychoJS.experiment.addData('RPBS_total', tot);
      psychoJS.experiment.addData('RPBS_mean', tot / 26.0);
    }
    
    thanks_key.keys = undefined;
    thanks_key.rt = undefined;
    _thanks_key_allKeys = [];
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    thanksComponents.push(thanks_key);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    
    // if thanks_text is active this frame...
    if (thanks_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *thanks_key* updates
    if (t >= 0.0 && thanks_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_key.tStart = t;  // (not accounting for frame time here)
      thanks_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { thanks_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { thanks_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { thanks_key.clearEvents(); });
    }
    
    // if thanks_key is active this frame...
    if (thanks_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = thanks_key.getKeys({keyList: 'space', waitRelease: false});
      _thanks_key_allKeys = _thanks_key_allKeys.concat(theseKeys);
      if (_thanks_key_allKeys.length > 0) {
        thanks_key.keys = _thanks_key_allKeys[_thanks_key_allKeys.length - 1].name;  // just the last key pressed
        thanks_key.rt = _thanks_key_allKeys[_thanks_key_allKeys.length - 1].rt;
        thanks_key.duration = _thanks_key_allKeys[_thanks_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(thanks_key.corr, level);
    }
    psychoJS.experiment.addData('thanks_key.keys', thanks_key.keys);
    if (typeof thanks_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('thanks_key.rt', thanks_key.rt);
        psychoJS.experiment.addData('thanks_key.duration', thanks_key.duration);
        routineTimer.reset();
        }
    
    thanks_key.stop();
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // Отправка данных в OSF через DataPipe (pipe.jspsych.org). Замените experimentID на ID нового эксперимента.
  psychoJS._saveResults = 0;
  let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
  let dataObj = psychoJS._experiment._trialsData;
  const SEP = ';';
  let headers = [];
  dataObj.forEach((trial) => { if (trial && typeof trial === 'object') { Object.keys(trial).forEach(k => { if (!headers.includes(k)) headers.push(k); }); } });
  const formatCell = (val) => { if (val === null || val === undefined) return ''; let s = (typeof val === 'object') ? JSON.stringify(val) : String(val);
    if (s.includes(SEP) || s.includes('"') || s.includes('\n') || s.includes('\r')) { s = '"' + s.replace(/"/g, '""') + '"'; } return s; };
  let csvRows = [headers.join(SEP)];
  dataObj.forEach((row) => { csvRows.push((row && typeof row === 'object') ? headers.map(h => formatCell(row[h])).join(SEP) : new Array(headers.length).fill('').join(SEP)); });
  let data = csvRows.join('\n');
  fetch('https://pipe.jspsych.org/api/data', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: '*/*' },
    body: JSON.stringify({ experimentID: 'ВСТАВИТЬ_ID_DATAPIPE', filename: filename, data: data }) })
    .then(r => r.json()).then(d => { console.log('DataPipe:', d); }).catch(e => { console.error('Save failed:', e); });
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
