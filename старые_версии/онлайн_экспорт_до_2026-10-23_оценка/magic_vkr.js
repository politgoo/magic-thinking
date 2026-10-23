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
    'имя|req': '',
    'пол|req': ['женский', 'мужской', 'не указывать'],
    'возраст|req': '',
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





const neu_block_beforeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(neu_block_beforeLoopBegin(neu_block_beforeLoopScheduler));
flowScheduler.add(neu_block_beforeLoopScheduler);
flowScheduler.add(neu_block_beforeLoopEnd);





flowScheduler.add(control_qRoutineBegin());
flowScheduler.add(control_qRoutineEachFrame());
flowScheduler.add(control_qRoutineEnd());
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





const neu_block_afterLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(neu_block_afterLoopBegin(neu_block_afterLoopScheduler));
flowScheduler.add(neu_block_afterLoopScheduler);
flowScheduler.add(neu_block_afterLoopEnd);





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
    {'name': 'neutral.xlsx', 'path': 'neutral.xlsx'},
    {'name': 'tobacyk.xlsx', 'path': 'tobacyk.xlsx'},
    {'name': 'neutral.xlsx', 'path': 'neutral.xlsx'},
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
var GROUP_LIST;
var DATAPIPE_ID;
var group_source;
var group_locked;
var cond_pending;
var cond_wait_t;
var cond_index;
var nDebug;
var ls_get;
var ls_set;
var name_hash;
var hist_update;
var session_id;
var prev_starts;
var prev_choice_seen;
var prev_completed;
var g;
var group;
var blur_count;
var dp_state;
var dp_error;
var dp_attempts;
var dp_send;
var choice_resp;
var choice_rt;
var control_resp;
var control_rt;
var nEffort;
var nBefore;
var nAfter;
var tob_resp;
var neu_resp;
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
var tob_key_before;
var neu_instr_beforeClock;
var neu_instr_text_before;
var neu_instr_key_before;
var neu_item_beforeClock;
var neu_text_before;
var neu_slider_before;
var neu_hint_before;
var neu_key_before;
var control_qClock;
var control_q_instr;
var btn_control_q_l;
var btn_control_q_r;
var control_q_keys;
var choiceClock;
var TXT_CHOICE_EASY;
var TXT_CHOICE_HARD;
var choice_instr;
var btn_choice_l;
var btn_choice_r;
var choice_keys;
var effortClock;
var effort_text;
var effort_box;
var effort_done;
var effort_fb;
var RU_ALPHA;
var _lev;
var check_alpha;
var ratingClock;
var rating_text;
var lbl_imp;
var importance;
var lbl_ctrl;
var control;
var rating_done;
var TXT_RATING_HINT;
var tob_instr_afterClock;
var tob_instr_text_after;
var tob_instr_key_after;
var tob_item_afterClock;
var tob_text_after;
var tob_slider_after;
var tob_hint_after;
var tob_key_after;
var neu_instr_afterClock;
var neu_instr_text_after;
var neu_instr_key_after;
var neu_item_afterClock;
var neu_text_after;
var neu_slider_after;
var neu_hint_after;
var neu_key_after;
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
var TXT_THANKS_BASE;
var TXT_SAVING;
var TXT_SAVED;
var TXT_SAVE_FAILED;
var TXT_SAVE_OFF;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Здравствуйте! Это исследование принятия решений, оно займёт около 10 минут.\n\nДанные анонимны и используются только в обобщённом виде. Продолжая, вы даёте согласие на участие.\n\nПожалуйста, проходите исследование на компьютере или ноутбуке.\n\nЧтобы начать, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.031,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_assign
  GROUP_LIST = [4, 1, 2, 3, 4, 2, 1, 3, 3, 4, 2, 1, 3, 2, 1, 4, 1, 4, 2, 3, 4, 2, 1, 3, 3, 2, 4, 1, 3, 2, 1, 4, 3, 4, 2, 1, 1, 3, 2, 4, 2, 4, 1, 3, 4, 1, 2, 3, 1, 3, 4, 2, 1, 2, 4, 3, 3, 4, 2, 1, 2, 4, 1, 3, 3, 2, 4, 1, 4, 1, 3, 2, 4, 3, 1, 2, 2, 4, 3, 1, 1, 4, 2, 3, 4, 3, 2, 1, 1, 3, 2, 4, 2, 4, 3, 1, 2, 4, 1, 3, 1, 3, 2, 4, 2, 3, 1, 4, 4, 2, 3, 1, 3, 1, 4, 2, 4, 1, 3, 2, 4, 1, 2, 3, 4, 1, 2, 3, 3, 1, 4, 2, 4, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 1, 1, 4, 2, 3, 3, 4, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 3, 2, 4, 1, 3, 4, 1, 2, 2, 4, 1, 3, 4, 3, 1, 2, 2, 4, 1, 3, 4, 3, 2, 1, 2, 3, 4, 1, 4, 1, 3, 2, 3, 4, 2, 1, 4, 3, 2, 1, 1, 2, 4, 3, 2, 4, 3, 1, 1, 2, 4, 3, 3, 4, 1, 2, 1, 3, 2, 4, 2, 1, 4, 3, 1, 4, 3, 2, 1, 3, 4, 2, 4, 2, 1, 3, 2, 1, 4, 3, 2, 3, 1, 4, 1, 2, 4, 3, 1, 4, 2, 3, 2, 4, 1, 3, 1, 3, 4, 2, 1, 4, 3, 2, 1, 4, 2, 3, 4, 1, 2, 3, 1, 3, 2, 4, 4, 2, 3, 1, 2, 3, 4, 1, 1, 2, 3, 4, 2, 3, 1, 4, 4, 2, 1, 3, 3, 4, 2, 1, 3, 2, 4, 1, 1, 3, 2, 4, 3, 2, 4, 1, 2, 1, 4, 3, 4, 3, 2, 1, 2, 3, 1, 4, 3, 2, 4, 1, 1, 3, 2, 4, 3, 4, 2, 1, 4, 1, 2, 3, 3, 1, 2, 4, 2, 3, 1, 4, 3, 1, 4, 2, 4, 1, 3, 2, 4, 1, 2, 3, 3, 4, 1, 2, 1, 3, 2, 4, 4, 2, 1, 3, 3, 2, 1, 4, 4, 2, 1, 3, 2, 3, 4, 1, 1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 1, 1, 3, 2, 4];
  var _gi = function(k) { var v = expInfo[k]; if (v === undefined) { v = expInfo[k + '|req']; } return String(v === undefined || v === null ? '' : v).trim(); };
  var g = String(expInfo['group'] || '').trim();
  // ID эксперимента в DataPipe (pipe.jspsych.org): один и тот же для распределения по группам и для отправки данных
  DATAPIPE_ID = 'NXKsy6NvrnLs';
  group_source = 'url'; group_locked = false; cond_pending = false; cond_wait_t = 0; cond_index = -1;
  var _name = _gi('имя'); var _sex = _gi('пол'); var _age = _gi('возраст');
  nDebug = (_name === '0') ? 1 : 0;
  psychoJS.experiment.addData('name', _name);
  psychoJS.experiment.addData('sex', ({'женский': 'f', 'мужской': 'm', 'не указывать': 'na'})[_sex] || _sex);
  psychoJS.experiment.addData('age', _age);
  psychoJS.experiment.addData('age_ok', (/^[0-9]{1,3}$/.test(_age) && parseInt(_age) >= 18 && parseInt(_age) <= 99) ? 1 : 0);
  // История прохождений в хранилище браузера. Записи ведутся отдельно для каждого имени из стартового диалога
  // (имя хранится только в виде хеша), чтобы разные люди за одним компьютером не считались повторами друг друга.
  // Ошибки доступа к хранилищу не мешают эксперименту.
  ls_get = function(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } };
  ls_set = function(k, v) { try { window.localStorage.setItem(k, String(v)); } catch (e) {} };
  var _nm = _name.toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я0-9]/g, '');
  var _h = 2166136261; for (var _i = 0; _i < _nm.length; _i++) { _h ^= _nm.charCodeAt(_i); _h = Math.imul(_h, 16777619) >>> 0; }
  name_hash = _h.toString(16);
  hist_update = function(field, value) {
    if (nDebug) { return; }
    var hs = {}; try { hs = JSON.parse(ls_get('magic_vkr_hist') || '{}') || {}; } catch (e) { hs = {}; }
    var rc = hs[name_hash] || {s: 0, c: 0, d: 0, g: null};
    if (value === undefined) { rc[field] = (rc[field] || 0) + 1; } else { rc[field] = value; }
    hs[name_hash] = rc; ls_set('magic_vkr_hist', JSON.stringify(hs));
  };
  var _hs = {}; try { _hs = JSON.parse(ls_get('magic_vkr_hist') || '{}') || {}; } catch (e) { _hs = {}; }
  var _rc = _hs[name_hash] || {s: 0, c: 0, d: 0, g: null};
  var _all = 0; for (var _k in _hs) { if (_hs.hasOwnProperty(_k)) { _all += (_hs[_k].s || 0); } }
  session_id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  prev_starts = _rc.s || 0; prev_choice_seen = _rc.c || 0; prev_completed = _rc.d || 0;
  psychoJS.experiment.addData('session_id', session_id);
  psychoJS.experiment.addData('name_hash', name_hash);
  psychoJS.experiment.addData('prev_starts', prev_starts);
  psychoJS.experiment.addData('prev_choice_seen', prev_choice_seen);
  psychoJS.experiment.addData('prev_completed', prev_completed);
  psychoJS.experiment.addData('browser_prev_starts', _all);
  hist_update('s');
  if (['1','2','3','4'].indexOf(g) < 0) {
    // без параметра в ссылке: при повторном входе с того же браузера под тем же именем берётся прежняя группа;
    // при первом входе сначала случайная группа, затем номер от DataPipe по кругу (0..399), который указывает
    // позицию в списке блоковой рандомизации GROUP_LIST (блоки по 4, группы в случайном порядке).
    // В режиме отладки DataPipe не запрашивается, чтобы не сбивать очерёдность групп.
    var _sg = nDebug ? null : String(_rc.g);
    if (['1','2','3','4'].indexOf(_sg) >= 0) {
      g = _sg; group_source = 'stored';
    } else {
      g = ['1','2','3','4'][Math.floor(Math.random()*4)]; group_source = 'random';
      if (!nDebug && DATAPIPE_ID.indexOf('ВСТАВИТЬ') < 0) {
        cond_pending = true;
        try {
          fetch('https://pipe.jspsych.org/api/condition/', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: '*/*' },
            body: JSON.stringify({ experimentID: DATAPIPE_ID }) })
            .then(function(r) { return r.json(); })
            .then(function(d) { cond_pending = false; if (!group_locked && d && typeof d.condition === 'number') { cond_index = d.condition; group = GROUP_LIST[d.condition % GROUP_LIST.length]; group_source = 'datapipe'; } })
            .catch(function(e) { cond_pending = false; console.error('DataPipe condition:', e); });
        } catch (e) { cond_pending = false; console.error('DataPipe condition:', e); }
      }
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
  // Esc у участников не прерывает эксперимент (выход по Esc остаётся только в отладке, имя 0);
  // повторы зажатой стрелки не засчитываются как новое нажатие на экранах с двумя кнопками
  try {
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !nDebug) { e.stopImmediatePropagation(); return; }
      if (e.repeat && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.stopImmediatePropagation(); }
    }, true);
  } catch (e) {}
  // отправка данных в DataPipe: уникальное имя файла, повтор при сбое сети, состояние для последнего экрана
  dp_state = 'idle'; dp_error = ''; dp_attempts = 0;
  dp_send = function(tag) {
    if (DATAPIPE_ID.indexOf('ВСТАВИТЬ') >= 0) { dp_state = 'off'; return; }
    var rows = psychoJS.experiment._trialsData.slice();
    var cur = psychoJS.experiment._currentTrialData;
    if (cur && Object.keys(cur).length > 0) { rows.push(Object.assign({}, cur)); }
    var SEP = ';'; var headers = [];
    rows.forEach(function(row) { if (row && typeof row === 'object') { Object.keys(row).forEach(function(k) { if (headers.indexOf(k) < 0) { headers.push(k); } }); } });
    var fmt = function(val) {
      if (val === null || val === undefined) { return ''; }
      var x = (typeof val === 'object') ? JSON.stringify(val) : String(val);
      if (x.indexOf(SEP) >= 0 || x.indexOf('"') >= 0 || x.indexOf('\n') >= 0 || x.indexOf('\r') >= 0) { x = '"' + x.replace(/"/g, '""') + '"'; }
      return x;
    };
    var lines = [headers.join(SEP)];
    rows.forEach(function(row) { lines.push(headers.map(function(h) { return fmt((row || {})[h]); }).join(SEP)); });
    var fname = 'magic_vkr_' + String(expInfo['date'] || '').replace(/[^0-9A-Za-z_.-]/g, '') + '_' + session_id + (tag ? '_' + tag : '') + '.csv';
    var body = JSON.stringify({ experimentID: DATAPIPE_ID, filename: fname, data: lines.join('\n') });
    dp_state = 'sending'; dp_attempts = 0;
    var attempt = function() {
      dp_attempts += 1;
      fetch('https://pipe.jspsych.org/api/data', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: '*/*' }, body: body })
        .then(function(r) { return r.json().then(function(d) { return [r.status, d]; }, function() { return [r.status, {}]; }); })
        .then(function(res) {
          var st = res[0], d = res[1] || {};
          // 201 сохранено, 202 принято в очередь; FILE_EXISTS при повторе значит, что первая попытка дошла
          if (st === 201 || st === 202 || d.error === 'FILE_EXISTS') { dp_state = 'ok'; dp_error = ''; console.log('DataPipe:', st, d); return; }
          dp_error = d.error || ('HTTP ' + st);
          if ((st >= 500 || st === 429) && dp_attempts < 4) { setTimeout(attempt, 1500 * dp_attempts); } else { dp_state = 'failed'; console.error('DataPipe:', st, d); }
        })
        .catch(function(e) { dp_error = 'network'; if (dp_attempts < 4) { setTimeout(attempt, 1500 * dp_attempts); } else { dp_state = 'failed'; console.error('DataPipe:', e); } });
    };
    attempt();
  };
  choice_resp = ''; choice_rt = -1; control_resp = ''; control_rt = -1; nEffort = 0; nBefore = 0; nAfter = 0; tob_resp = {}; neu_resp = {};
  
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
    text: '1: опросник до, бесплатная магия      2: опросник до, платная магия (алфавит объявлен в инструкции)\n3: опросник после, бесплатная магия      4: опросник после, платная магия (алфавит объявлен в инструкции)',
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
    pos: [0, 0], draggable: false, height: 0.031,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "tob_instr_before"
  tob_instr_beforeClock = new util.Clock();
  tob_instr_text_before = new visual.TextBox({
    win: psychoJS.window,
    name: 'tob_instr_text_before',
    text: 'Сейчас Вам будет предложен опросник из 26 утверждений.\nОцените, насколько Вы согласны с каждым из них, по шкале от 1 до 7:\n\n1 — абсолютно не согласен\n2 — не согласен\n3 — скорее не согласен\n4 — не знаю, не уверен\n5 — скорее согласен\n6 — согласен\n7 — абсолютно согласен\n\nКак отвечать: нажмите клавишу с нужной цифрой от 1 до 7 (или выберите значение стрелками влево и вправо), затем нажмите пробел, чтобы перейти к следующему утверждению. Правильных и неправильных ответов нет.\n\nНажмите пробел, чтобы начать.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.029,
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
  
  tob_key_before = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "neu_instr_before"
  neu_instr_beforeClock = new util.Clock();
  neu_instr_text_before = new visual.TextBox({
    win: psychoJS.window,
    name: 'neu_instr_text_before',
    text: 'Сейчас Вам будет предложен опросник из 26 утверждений.\nОцените, насколько Вы согласны с каждым из них, по шкале от 1 до 7:\n\n1 — абсолютно не согласен\n2 — не согласен\n3 — скорее не согласен\n4 — не знаю, не уверен\n5 — скорее согласен\n6 — согласен\n7 — абсолютно согласен\n\nКак отвечать: нажмите клавишу с нужной цифрой от 1 до 7 (или выберите значение стрелками влево и вправо), затем нажмите пробел, чтобы перейти к следующему утверждению. Правильных и неправильных ответов нет.\n\nНажмите пробел, чтобы начать.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.029,
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
  
  neu_instr_key_before = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "neu_item_before"
  neu_item_beforeClock = new util.Clock();
  neu_text_before = new visual.TextStim({
    win: psychoJS.window,
    name: 'neu_text_before',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  neu_slider_before = new visual.Slider({
    win: psychoJS.window, name: 'neu_slider_before',
    startValue: undefined,
    size: [1.3, 0.06], pos: [0, (- 0.12)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "2\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "3\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "4\n\u043d\u0435 \u0437\u043d\u0430\u044e,\n\u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d", "5\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "6\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "7\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d"], fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  neu_hint_before = new visual.TextStim({
    win: psychoJS.window,
    name: 'neu_hint_before',
    text: 'Стрелки влево и вправо или клавиши 1–7: выбрать ответ.  Пробел: подтвердить',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.026,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -2.0 
  });
  
  neu_key_before = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "control_q"
  control_qClock = new util.Clock();
  control_q_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'control_q_instr',
    text: 'А сейчас вопрос на внимание. Он кажется простым, но нам важно удостовериться, что вы внимательно читаете текст на каждом экране и отвечаете на вопросы осознанно. Поэтому ответьте, есть ли потолок в том месте, где вы сейчас находитесь, нажав на кнопку «Потолок», если он есть, или на кнопку «Нет потолка», если его нет, и после этого перейдите к следующему этапу.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.22], draggable: false, height: 0.027,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_control_q_l = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_control_q_l',
    text: 'Потолок',
    font: 'Arial',
    pos: [(- 0.25), (- 0.12)],
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
  btn_control_q_l.clock = new util.Clock();
  
  btn_control_q_r = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_control_q_r',
    text: 'Нет потолка',
    font: 'Arial',
    pos: [0.25, (- 0.12)],
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
  btn_control_q_r.clock = new util.Clock();
  
  control_q_keys = new visual.TextStim({
    win: psychoJS.window,
    name: 'control_q_keys',
    text: '← клавиша влево                                клавиша вправо →',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.26)], draggable: false, height: 0.026,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "choice"
  choiceClock = new util.Clock();
  // Run 'Begin Experiment' code from code_choice
  TXT_CHOICE_EASY = "А сейчас бонус за участие. Многие древние мистические учения утверждают, что мысли могут влиять на будущее. Вы можете повысить вероятность того, что что-то хорошее для вас произойдёт в ближайшее время, совершив простой выбор: нажать на кнопку «Магия» или, если не хотите воспользоваться этой возможностью, нажать на кнопку «Пропустить» и перейти к следующему этапу.";
  TXT_CHOICE_HARD = "А сейчас бонус за участие. Многие мистические учения утверждают, что мысли могут влиять на будущее, но их влияние зависит от приложенных усилий. Вы можете повысить вероятность того, что что-то хорошее для вас произойдёт в ближайшее время, нажав на кнопку «Магия» и напечатав в появившемся поле алфавит один раз, или на кнопку «Пропустить» и перейти к следующему этапу.";
  
  choice_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_instr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.22], draggable: false, height: 0.027,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_choice_l = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_choice_l',
    text: 'Магия',
    font: 'Arial',
    pos: [(- 0.25), (- 0.12)],
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
  btn_choice_l.clock = new util.Clock();
  
  btn_choice_r = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_choice_r',
    text: 'Пропустить',
    font: 'Arial',
    pos: [0.25, (- 0.12)],
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
  btn_choice_r.clock = new util.Clock();
  
  choice_keys = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_keys',
    text: '← клавиша влево                                клавиша вправо →',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.26)], draggable: false, height: 0.026,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "effort"
  effortClock = new util.Clock();
  effort_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'effort_text',
    text: 'Для активации магии введите в поле ниже русский алфавит от А до Я один раз. Затем нажмите «Готово».',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
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
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [1.2, 0.3],  units: undefined, 
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
  
  effort_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'effort_fb',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.24)], draggable: false, height: 0.028,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('gold'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from code_effort
  RU_ALPHA = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
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
    if (letters.length === 0) { return ['empty', 0, 0.0, 0, 0.0, -1, 0.0]; }
    var nUp = 0; for (var q = 0; q < letters.length; q++) { var ch = letters[q]; if (ch !== ch.toLowerCase()) { nUp += 1; } }
    var upper = 100.0 * nUp / letters.length;
    var low = letters.toLowerCase().replace(/ё/g, '');
    var n = low.length;
    var passes = n / RU_ALPHA.length;
    var k = Math.max(1, Math.round(passes));
    var kCmp = Math.min(k, 20);
    var target = ''; for (var r = 0; r < kCmp; r++) { target += RU_ALPHA; }
    var d = _lev(low.slice(0, target.length + 32), target);
    var acc = Math.max(0.0, 100.0 * (1.0 - d / target.length));
    return ['typed', letters.length, passes, k, acc, d, upper];
  };
  
  // Initialize components for Routine "rating"
  ratingClock = new util.Clock();
  rating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_text',
    text: 'Оцените приятное событие, о котором вы думали.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.38], draggable: false, height: 0.031,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  lbl_imp = new visual.TextStim({
    win: psychoJS.window,
    name: 'lbl_imp',
    text: 'Насколько оно для вас важно?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.22], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  importance = new visual.Slider({
    win: psychoJS.window, name: 'importance',
    startValue: undefined,
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
    text: 'Насколько его исход зависит от вас?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.08)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  control = new visual.Slider({
    win: psychoJS.window, name: 'control',
    startValue: undefined,
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
  
  // Run 'Begin Experiment' code from code_rating
  TXT_RATING_HINT = "Отметьте ответ на обеих шкалах (щёлкните по шкале), затем нажмите «Готово».";
  
  // Initialize components for Routine "tob_instr_after"
  tob_instr_afterClock = new util.Clock();
  tob_instr_text_after = new visual.TextBox({
    win: psychoJS.window,
    name: 'tob_instr_text_after',
    text: 'Сейчас Вам будет предложен опросник из 26 утверждений.\nОцените, насколько Вы согласны с каждым из них, по шкале от 1 до 7:\n\n1 — абсолютно не согласен\n2 — не согласен\n3 — скорее не согласен\n4 — не знаю, не уверен\n5 — скорее согласен\n6 — согласен\n7 — абсолютно согласен\n\nКак отвечать: нажмите клавишу с нужной цифрой от 1 до 7 (или выберите значение стрелками влево и вправо), затем нажмите пробел, чтобы перейти к следующему утверждению. Правильных и неправильных ответов нет.\n\nНажмите пробел, чтобы начать.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.029,
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
  
  tob_key_after = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "neu_instr_after"
  neu_instr_afterClock = new util.Clock();
  neu_instr_text_after = new visual.TextBox({
    win: psychoJS.window,
    name: 'neu_instr_text_after',
    text: 'Сейчас Вам будет предложен опросник из 26 утверждений.\nОцените, насколько Вы согласны с каждым из них, по шкале от 1 до 7:\n\n1 — абсолютно не согласен\n2 — не согласен\n3 — скорее не согласен\n4 — не знаю, не уверен\n5 — скорее согласен\n6 — согласен\n7 — абсолютно согласен\n\nКак отвечать: нажмите клавишу с нужной цифрой от 1 до 7 (или выберите значение стрелками влево и вправо), затем нажмите пробел, чтобы перейти к следующему утверждению. Правильных и неправильных ответов нет.\n\nНажмите пробел, чтобы начать.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.029,
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
  
  neu_instr_key_after = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "neu_item_after"
  neu_item_afterClock = new util.Clock();
  neu_text_after = new visual.TextStim({
    win: psychoJS.window,
    name: 'neu_text_after',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  neu_slider_after = new visual.Slider({
    win: psychoJS.window, name: 'neu_slider_after',
    startValue: undefined,
    size: [1.3, 0.06], pos: [0, (- 0.12)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "2\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "3\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "4\n\u043d\u0435 \u0437\u043d\u0430\u044e,\n\u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d", "5\n\u0441\u043a\u043e\u0440\u0435\u0435\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "6\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d", "7\n\u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\n\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d"], fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  neu_hint_after = new visual.TextStim({
    win: psychoJS.window,
    name: 'neu_hint_after',
    text: 'Стрелки влево и вправо или клавиши 1–7: выбрать ответ.  Пробел: подтвердить',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.026,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -2.0 
  });
  
  neu_key_after = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "suspicion"
  suspicionClock = new util.Clock();
  susp_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'susp_text',
    text: 'Как вы думаете, что изучалось в этом исследовании? Напишите в свободной форме и нажмите «Готово».',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
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
    pos: [0, 0.25], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
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
    text: 'Спасибо за участие!\n\nКнопка «Магия» не влияет на события: она использовалась, чтобы изучить, как люди принимают решения в ситуации неопределённости. Если вам предлагалось напечатать алфавит, это задание измеряло готовность прилагать усилия.\n\nНажмите пробел, чтобы завершить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.031,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  TXT_THANKS_BASE = "Спасибо за участие!\n\nКнопка «Магия» не влияет на события: она использовалась, чтобы изучить, как люди принимают решения в ситуации неопределённости. Если вам предлагалось напечатать алфавит, это задание измеряло готовность прилагать усилия.\n\n";
  TXT_SAVING = "Сохраняем ответы, это займёт несколько секунд. Пожалуйста, не закрывайте окно.";
  TXT_SAVED = "Ответы сохранены. Нажмите пробел, чтобы завершить.";
  TXT_SAVE_FAILED = "Не удалось сохранить ответы: нет связи с сервером. Проверьте подключение к интернету и нажмите R, чтобы попробовать ещё раз, или пробел, чтобы завершить.";
  TXT_SAVE_OFF = "Ответы не сохранены: эксперимент не подключён к хранилищу данных (не вписан ID DataPipe). Пожалуйста, сообщите об этом исследователю. Нажмите пробел, чтобы завершить.";
  
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
    cond_wait_t = 0;
    
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
    
    if (cond_pending && t < 5) { continueRoutine = true; cond_wait_t = t; }
    
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
    // Run 'End Routine' code from code_assign
    psychoJS.experiment.addData('welcome_time', t);
    psychoJS.experiment.addData('cond_wait', cond_wait_t);
    
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


var neu_block_before;
function neu_block_beforeLoopBegin(neu_block_beforeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    neu_block_before = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nAfter, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'neu_block_before'
    });
    psychoJS.experiment.addLoop(neu_block_before); // add the loop to the experiment
    currentLoop = neu_block_before;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNeu_block_before of neu_block_before) {
      snapshot = neu_block_before.getSnapshot();
      neu_block_beforeLoopScheduler.add(importConditions(snapshot));
      neu_block_beforeLoopScheduler.add(neu_instr_beforeRoutineBegin(snapshot));
      neu_block_beforeLoopScheduler.add(neu_instr_beforeRoutineEachFrame());
      neu_block_beforeLoopScheduler.add(neu_instr_beforeRoutineEnd(snapshot));
      const neu_items_beforeLoopScheduler = new Scheduler(psychoJS);
      neu_block_beforeLoopScheduler.add(neu_items_beforeLoopBegin(neu_items_beforeLoopScheduler, snapshot));
      neu_block_beforeLoopScheduler.add(neu_items_beforeLoopScheduler);
      neu_block_beforeLoopScheduler.add(neu_items_beforeLoopEnd);
      neu_block_beforeLoopScheduler.add(neu_block_beforeLoopEndIteration(neu_block_beforeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var neu_items_before;
function neu_items_beforeLoopBegin(neu_items_beforeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    neu_items_before = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'neutral.xlsx',
      seed: undefined, name: 'neu_items_before'
    });
    psychoJS.experiment.addLoop(neu_items_before); // add the loop to the experiment
    currentLoop = neu_items_before;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNeu_items_before of neu_items_before) {
      snapshot = neu_items_before.getSnapshot();
      neu_items_beforeLoopScheduler.add(importConditions(snapshot));
      neu_items_beforeLoopScheduler.add(neu_item_beforeRoutineBegin(snapshot));
      neu_items_beforeLoopScheduler.add(neu_item_beforeRoutineEachFrame());
      neu_items_beforeLoopScheduler.add(neu_item_beforeRoutineEnd(snapshot));
      neu_items_beforeLoopScheduler.add(neu_items_beforeLoopEndIteration(neu_items_beforeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function neu_items_beforeLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(neu_items_before);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function neu_items_beforeLoopEndIteration(scheduler, snapshot) {
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


async function neu_block_beforeLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(neu_block_before);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function neu_block_beforeLoopEndIteration(scheduler, snapshot) {
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


var neu_block_after;
function neu_block_afterLoopBegin(neu_block_afterLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    neu_block_after = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nBefore, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'neu_block_after'
    });
    psychoJS.experiment.addLoop(neu_block_after); // add the loop to the experiment
    currentLoop = neu_block_after;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNeu_block_after of neu_block_after) {
      snapshot = neu_block_after.getSnapshot();
      neu_block_afterLoopScheduler.add(importConditions(snapshot));
      neu_block_afterLoopScheduler.add(neu_instr_afterRoutineBegin(snapshot));
      neu_block_afterLoopScheduler.add(neu_instr_afterRoutineEachFrame());
      neu_block_afterLoopScheduler.add(neu_instr_afterRoutineEnd(snapshot));
      const neu_items_afterLoopScheduler = new Scheduler(psychoJS);
      neu_block_afterLoopScheduler.add(neu_items_afterLoopBegin(neu_items_afterLoopScheduler, snapshot));
      neu_block_afterLoopScheduler.add(neu_items_afterLoopScheduler);
      neu_block_afterLoopScheduler.add(neu_items_afterLoopEnd);
      neu_block_afterLoopScheduler.add(neu_block_afterLoopEndIteration(neu_block_afterLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var neu_items_after;
function neu_items_afterLoopBegin(neu_items_afterLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    neu_items_after = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'neutral.xlsx',
      seed: undefined, name: 'neu_items_after'
    });
    psychoJS.experiment.addLoop(neu_items_after); // add the loop to the experiment
    currentLoop = neu_items_after;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNeu_items_after of neu_items_after) {
      snapshot = neu_items_after.getSnapshot();
      neu_items_afterLoopScheduler.add(importConditions(snapshot));
      neu_items_afterLoopScheduler.add(neu_item_afterRoutineBegin(snapshot));
      neu_items_afterLoopScheduler.add(neu_item_afterRoutineEachFrame());
      neu_items_afterLoopScheduler.add(neu_item_afterRoutineEnd(snapshot));
      neu_items_afterLoopScheduler.add(neu_items_afterLoopEndIteration(neu_items_afterLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function neu_items_afterLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(neu_items_after);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function neu_items_afterLoopEndIteration(scheduler, snapshot) {
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


async function neu_block_afterLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(neu_block_after);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function neu_block_afterLoopEndIteration(scheduler, snapshot) {
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
    // Run 'Begin Routine' code from code_debug
    debug_text.setText('Отладка. Выберите группу для прохождения.\nDataPipe: ' + ((DATAPIPE_ID.indexOf('ВСТАВИТЬ') >= 0) ? 'ID не вписан, данные онлайн не сохранятся' : 'ID ' + DATAPIPE_ID + ', группа DataPipe не запрашивается'));
    
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
    group_locked = true;
    order = (group === 1 || group === 2) ? 'before' : 'after';
    cost = (group === 1 || group === 3) ? 'easy' : 'hard';
    nBefore = (order === 'before') ? 1 : 0;
    nAfter = 1 - nBefore;
    psychoJS.experiment.addData('group', group);
    psychoJS.experiment.addData('order', order);
    psychoJS.experiment.addData('cost', cost);
    psychoJS.experiment.addData('debug', nDebug);
    psychoJS.experiment.addData('group_source', nDebug ? 'debug' : group_source);
    psychoJS.experiment.addData('cond_index', cond_index);
    if (group_source === 'datapipe' || group_source === 'random') { hist_update('g', group); }
    
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
    // Run 'End Routine' code from code_tob_instr_before
    psychoJS.experiment.addData('tob_instr_time', t);
    
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
var _tob_key_before_allKeys;
var resp;
var keyI;
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
    tob_key_before.keys = undefined;
    tob_key_before.rt = undefined;
    _tob_key_before_allKeys = [];
    // Run 'Begin Routine' code from code_tob_before
    resp = null;
    keyI = 0;
    
    psychoJS.experiment.addData('tob_item_before.started', globalClock.getTime());
    tob_item_beforeMaxDuration = null
    // keep track of which components have finished
    tob_item_beforeComponents = [];
    tob_item_beforeComponents.push(tob_text_before);
    tob_item_beforeComponents.push(tob_slider_before);
    tob_item_beforeComponents.push(tob_hint_before);
    tob_item_beforeComponents.push(tob_key_before);
    
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
    
    
    // *tob_key_before* updates
    if (t >= 0.0 && tob_key_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_key_before.tStart = t;  // (not accounting for frame time here)
      tob_key_before.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tob_key_before.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tob_key_before.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tob_key_before.clearEvents(); });
    }
    
    // if tob_key_before is active this frame...
    if (tob_key_before.status === PsychoJS.Status.STARTED) {
      let theseKeys = tob_key_before.getKeys({keyList: ['left','right','space','1','2','3','4','5','6','7'], waitRelease: false});
      _tob_key_before_allKeys = _tob_key_before_allKeys.concat(theseKeys);
      if (_tob_key_before_allKeys.length > 0) {
        tob_key_before.keys = _tob_key_before_allKeys[_tob_key_before_allKeys.length - 1].name;  // just the last key pressed
        tob_key_before.rt = _tob_key_before_allKeys[_tob_key_before_allKeys.length - 1].rt;
        tob_key_before.duration = _tob_key_before_allKeys[_tob_key_before_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_tob_before
    var _r = tob_slider_before.getRating();
    if (typeof _r !== 'undefined' && _r !== null && Math.round(_r) !== resp) { resp = Math.round(_r); }
    while (keyI < _tob_key_before_allKeys.length) {
      var _k = _tob_key_before_allKeys[keyI].name;
      keyI += 1;
      var _new = null;
      if (['1','2','3','4','5','6','7'].indexOf(_k) >= 0) { _new = parseInt(_k); }
      else if (_k === 'left') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.max(1, resp - 1); }
      else if (_k === 'right') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.min(7, resp + 1); }
      else if (_k === 'space' && resp !== null && typeof resp !== 'undefined') { continueRoutine = false; }
      if (_new !== null && _new !== resp) { resp = _new; tob_slider_before.recordRating(resp); }
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
    tob_key_before.stop();
    // Run 'End Routine' code from code_tob_before
    tob_resp[Number(item_n)] = resp;
    psychoJS.experiment.addData('tob_' + String(item_n), resp);
    psychoJS.experiment.addData('tob_rt_' + String(item_n), t);
    psychoJS.experiment.addData('tob_keys_' + String(item_n), keyI);
    
    // the Routine "tob_item_before" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var neu_instr_beforeMaxDurationReached;
var _neu_instr_key_before_allKeys;
var neu_instr_beforeMaxDuration;
var neu_instr_beforeComponents;
function neu_instr_beforeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'neu_instr_before' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    neu_instr_beforeClock.reset();
    routineTimer.reset();
    neu_instr_beforeMaxDurationReached = false;
    // update component parameters for each repeat
    neu_instr_key_before.keys = undefined;
    neu_instr_key_before.rt = undefined;
    _neu_instr_key_before_allKeys = [];
    psychoJS.experiment.addData('neu_instr_before.started', globalClock.getTime());
    neu_instr_beforeMaxDuration = null
    // keep track of which components have finished
    neu_instr_beforeComponents = [];
    neu_instr_beforeComponents.push(neu_instr_text_before);
    neu_instr_beforeComponents.push(neu_instr_key_before);
    
    for (const thisComponent of neu_instr_beforeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function neu_instr_beforeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'neu_instr_before' ---
    // get current time
    t = neu_instr_beforeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *neu_instr_text_before* updates
    if (t >= 0.0 && neu_instr_text_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_instr_text_before.tStart = t;  // (not accounting for frame time here)
      neu_instr_text_before.frameNStart = frameN;  // exact frame index
      
      neu_instr_text_before.setAutoDraw(true);
    }
    
    
    // if neu_instr_text_before is active this frame...
    if (neu_instr_text_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_instr_key_before* updates
    if (t >= 0.0 && neu_instr_key_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_instr_key_before.tStart = t;  // (not accounting for frame time here)
      neu_instr_key_before.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { neu_instr_key_before.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { neu_instr_key_before.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { neu_instr_key_before.clearEvents(); });
    }
    
    // if neu_instr_key_before is active this frame...
    if (neu_instr_key_before.status === PsychoJS.Status.STARTED) {
      let theseKeys = neu_instr_key_before.getKeys({keyList: 'space', waitRelease: false});
      _neu_instr_key_before_allKeys = _neu_instr_key_before_allKeys.concat(theseKeys);
      if (_neu_instr_key_before_allKeys.length > 0) {
        neu_instr_key_before.keys = _neu_instr_key_before_allKeys[_neu_instr_key_before_allKeys.length - 1].name;  // just the last key pressed
        neu_instr_key_before.rt = _neu_instr_key_before_allKeys[_neu_instr_key_before_allKeys.length - 1].rt;
        neu_instr_key_before.duration = _neu_instr_key_before_allKeys[_neu_instr_key_before_allKeys.length - 1].duration;
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
    for (const thisComponent of neu_instr_beforeComponents)
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


function neu_instr_beforeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'neu_instr_before' ---
    for (const thisComponent of neu_instr_beforeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('neu_instr_before.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(neu_instr_key_before.corr, level);
    }
    psychoJS.experiment.addData('neu_instr_key_before.keys', neu_instr_key_before.keys);
    if (typeof neu_instr_key_before.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('neu_instr_key_before.rt', neu_instr_key_before.rt);
        psychoJS.experiment.addData('neu_instr_key_before.duration', neu_instr_key_before.duration);
        routineTimer.reset();
        }
    
    neu_instr_key_before.stop();
    // Run 'End Routine' code from code_neu_instr_before
    psychoJS.experiment.addData('neu_instr_time', t);
    
    // the Routine "neu_instr_before" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var neu_item_beforeMaxDurationReached;
var _neu_key_before_allKeys;
var neu_item_beforeMaxDuration;
var neu_item_beforeComponents;
function neu_item_beforeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'neu_item_before' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    neu_item_beforeClock.reset();
    routineTimer.reset();
    neu_item_beforeMaxDurationReached = false;
    // update component parameters for each repeat
    neu_text_before.setText(text);
    neu_slider_before.reset()
    neu_key_before.keys = undefined;
    neu_key_before.rt = undefined;
    _neu_key_before_allKeys = [];
    // Run 'Begin Routine' code from code_neu_before
    resp = null;
    keyI = 0;
    
    psychoJS.experiment.addData('neu_item_before.started', globalClock.getTime());
    neu_item_beforeMaxDuration = null
    // keep track of which components have finished
    neu_item_beforeComponents = [];
    neu_item_beforeComponents.push(neu_text_before);
    neu_item_beforeComponents.push(neu_slider_before);
    neu_item_beforeComponents.push(neu_hint_before);
    neu_item_beforeComponents.push(neu_key_before);
    
    for (const thisComponent of neu_item_beforeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function neu_item_beforeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'neu_item_before' ---
    // get current time
    t = neu_item_beforeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *neu_text_before* updates
    if (t >= 0.0 && neu_text_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_text_before.tStart = t;  // (not accounting for frame time here)
      neu_text_before.frameNStart = frameN;  // exact frame index
      
      neu_text_before.setAutoDraw(true);
    }
    
    
    // if neu_text_before is active this frame...
    if (neu_text_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_slider_before* updates
    if (t >= 0.0 && neu_slider_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_slider_before.tStart = t;  // (not accounting for frame time here)
      neu_slider_before.frameNStart = frameN;  // exact frame index
      
      neu_slider_before.setAutoDraw(true);
    }
    
    
    // if neu_slider_before is active this frame...
    if (neu_slider_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_hint_before* updates
    if (t >= 0.0 && neu_hint_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_hint_before.tStart = t;  // (not accounting for frame time here)
      neu_hint_before.frameNStart = frameN;  // exact frame index
      
      neu_hint_before.setAutoDraw(true);
    }
    
    
    // if neu_hint_before is active this frame...
    if (neu_hint_before.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_key_before* updates
    if (t >= 0.0 && neu_key_before.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_key_before.tStart = t;  // (not accounting for frame time here)
      neu_key_before.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { neu_key_before.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { neu_key_before.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { neu_key_before.clearEvents(); });
    }
    
    // if neu_key_before is active this frame...
    if (neu_key_before.status === PsychoJS.Status.STARTED) {
      let theseKeys = neu_key_before.getKeys({keyList: ['left','right','space','1','2','3','4','5','6','7'], waitRelease: false});
      _neu_key_before_allKeys = _neu_key_before_allKeys.concat(theseKeys);
      if (_neu_key_before_allKeys.length > 0) {
        neu_key_before.keys = _neu_key_before_allKeys[_neu_key_before_allKeys.length - 1].name;  // just the last key pressed
        neu_key_before.rt = _neu_key_before_allKeys[_neu_key_before_allKeys.length - 1].rt;
        neu_key_before.duration = _neu_key_before_allKeys[_neu_key_before_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_neu_before
    var _r = neu_slider_before.getRating();
    if (typeof _r !== 'undefined' && _r !== null && Math.round(_r) !== resp) { resp = Math.round(_r); }
    while (keyI < _neu_key_before_allKeys.length) {
      var _k = _neu_key_before_allKeys[keyI].name;
      keyI += 1;
      var _new = null;
      if (['1','2','3','4','5','6','7'].indexOf(_k) >= 0) { _new = parseInt(_k); }
      else if (_k === 'left') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.max(1, resp - 1); }
      else if (_k === 'right') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.min(7, resp + 1); }
      else if (_k === 'space' && resp !== null && typeof resp !== 'undefined') { continueRoutine = false; }
      if (_new !== null && _new !== resp) { resp = _new; neu_slider_before.recordRating(resp); }
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
    for (const thisComponent of neu_item_beforeComponents)
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


function neu_item_beforeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'neu_item_before' ---
    for (const thisComponent of neu_item_beforeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('neu_item_before.stopped', globalClock.getTime());
    psychoJS.experiment.addData('neu_slider_before.response', neu_slider_before.getRating());
    psychoJS.experiment.addData('neu_slider_before.rt', neu_slider_before.getRT());
    neu_key_before.stop();
    // Run 'End Routine' code from code_neu_before
    neu_resp[Number(item_n)] = resp;
    psychoJS.experiment.addData('neu_' + String(item_n), resp);
    psychoJS.experiment.addData('neu_rt_' + String(item_n), t);
    psychoJS.experiment.addData('neu_keys_' + String(item_n), keyI);
    
    // the Routine "neu_item_before" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var control_qMaxDurationReached;
var end_at;
var _rm;
var _m0;
var _move_t;
var _method;
var _blur0;
var control_qMaxDuration;
var control_qComponents;
function control_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'control_q' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    control_qClock.reset();
    routineTimer.reset();
    control_qMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_control_q
    control_resp = ''; control_rt = -1; end_at = null;
    psychoJS.eventManager.clearEvents();
    _rm = new core.Mouse({win: psychoJS.window});
    _m0 = _rm.getPos().slice();
    _move_t = -1; _method = ''; _blur0 = blur_count;
    
    // reset btn_control_q_l to account for continued clicks & clear times on/off
    btn_control_q_l.reset()
    // reset btn_control_q_r to account for continued clicks & clear times on/off
    btn_control_q_r.reset()
    psychoJS.experiment.addData('control_q.started', globalClock.getTime());
    control_qMaxDuration = null
    // keep track of which components have finished
    control_qComponents = [];
    control_qComponents.push(control_q_instr);
    control_qComponents.push(btn_control_q_l);
    control_qComponents.push(btn_control_q_r);
    control_qComponents.push(control_q_keys);
    
    for (const thisComponent of control_qComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function control_qRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'control_q' ---
    // get current time
    t = control_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_control_q
    if (_move_t < 0) {
      var _mp = _rm.getPos();
      if (Math.abs(_mp[0] - _m0[0]) > 0.005 || Math.abs(_mp[1] - _m0[1]) > 0.005) { _move_t = t; }
    }
    if (end_at === null) {
      var keys = psychoJS.eventManager.getKeys({keyList: ['left', 'right']});
      if (keys.indexOf('left') >= 0 || btn_control_q_l.numClicks > 0) {
        control_resp = 'ceiling'; control_rt = t; end_at = t + 0.35;
        _method = (keys.indexOf('left') >= 0) ? 'key' : 'mouse';
        btn_control_q_l.setFillColor(new util.Color('goldenrod'));
      } else if (keys.indexOf('right') >= 0 || btn_control_q_r.numClicks > 0) {
        control_resp = 'no_ceiling'; control_rt = t; end_at = t + 0.35;
        _method = (keys.indexOf('right') >= 0) ? 'key' : 'mouse';
        btn_control_q_r.setFillColor(new util.Color('goldenrod'));
      }
    } else if (t >= end_at) {
      continueRoutine = false;
    }
    
    
    // *control_q_instr* updates
    if (t >= 0.0 && control_q_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      control_q_instr.tStart = t;  // (not accounting for frame time here)
      control_q_instr.frameNStart = frameN;  // exact frame index
      
      control_q_instr.setAutoDraw(true);
    }
    
    
    // if control_q_instr is active this frame...
    if (control_q_instr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_control_q_l* updates
    if (t >= 0 && btn_control_q_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_control_q_l.tStart = t;  // (not accounting for frame time here)
      btn_control_q_l.frameNStart = frameN;  // exact frame index
      
      btn_control_q_l.setAutoDraw(true);
    }
    
    
    // if btn_control_q_l is active this frame...
    if (btn_control_q_l.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_control_q_l.status === PsychoJS.Status.STARTED) {
      // check whether btn_control_q_l has been pressed
      if (btn_control_q_l.isClicked) {
        if (!btn_control_q_l.wasClicked) {
          // store time of first click
          btn_control_q_l.timesOn.push(btn_control_q_l.clock.getTime());
          // store time clicked until
          btn_control_q_l.timesOff.push(btn_control_q_l.clock.getTime());
        } else {
          // update time clicked until;
          btn_control_q_l.timesOff[btn_control_q_l.timesOff.length - 1] = btn_control_q_l.clock.getTime();
        }
        if (!btn_control_q_l.wasClicked) {
          
        }
        // if btn_control_q_l is still clicked next frame, it is not a new click
        btn_control_q_l.wasClicked = true;
      } else {
        // if btn_control_q_l is clicked next frame, it is a new click
        btn_control_q_l.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_control_q_l hasn't started / has finished
      btn_control_q_l.clock.reset();
      // if btn_control_q_l is clicked next frame, it is a new click
      btn_control_q_l.wasClicked = false;
    }
    
    // *btn_control_q_r* updates
    if (t >= 0 && btn_control_q_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_control_q_r.tStart = t;  // (not accounting for frame time here)
      btn_control_q_r.frameNStart = frameN;  // exact frame index
      
      btn_control_q_r.setAutoDraw(true);
    }
    
    
    // if btn_control_q_r is active this frame...
    if (btn_control_q_r.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_control_q_r.status === PsychoJS.Status.STARTED) {
      // check whether btn_control_q_r has been pressed
      if (btn_control_q_r.isClicked) {
        if (!btn_control_q_r.wasClicked) {
          // store time of first click
          btn_control_q_r.timesOn.push(btn_control_q_r.clock.getTime());
          // store time clicked until
          btn_control_q_r.timesOff.push(btn_control_q_r.clock.getTime());
        } else {
          // update time clicked until;
          btn_control_q_r.timesOff[btn_control_q_r.timesOff.length - 1] = btn_control_q_r.clock.getTime();
        }
        if (!btn_control_q_r.wasClicked) {
          
        }
        // if btn_control_q_r is still clicked next frame, it is not a new click
        btn_control_q_r.wasClicked = true;
      } else {
        // if btn_control_q_r is clicked next frame, it is a new click
        btn_control_q_r.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_control_q_r hasn't started / has finished
      btn_control_q_r.clock.reset();
      // if btn_control_q_r is clicked next frame, it is a new click
      btn_control_q_r.wasClicked = false;
    }
    
    // *control_q_keys* updates
    if (t >= 0.0 && control_q_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      control_q_keys.tStart = t;  // (not accounting for frame time here)
      control_q_keys.frameNStart = frameN;  // exact frame index
      
      control_q_keys.setAutoDraw(true);
    }
    
    
    // if control_q_keys is active this frame...
    if (control_q_keys.status === PsychoJS.Status.STARTED) {
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
    for (const thisComponent of control_qComponents)
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


function control_qRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'control_q' ---
    for (const thisComponent of control_qComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('control_q.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_control_q
    psychoJS.experiment.addData('control_resp', control_resp);
    psychoJS.experiment.addData('control_rt', control_rt);
    psychoJS.experiment.addData('control_q_method', _method);
    psychoJS.experiment.addData('control_q_first_move', _move_t);
    psychoJS.experiment.addData('control_q_blur', blur_count - _blur0);
    
    psychoJS.experiment.addData('btn_control_q_l.numClicks', btn_control_q_l.numClicks);
    psychoJS.experiment.addData('btn_control_q_l.timesOn', btn_control_q_l.timesOn);
    psychoJS.experiment.addData('btn_control_q_l.timesOff', btn_control_q_l.timesOff);
    psychoJS.experiment.addData('btn_control_q_r.numClicks', btn_control_q_r.numClicks);
    psychoJS.experiment.addData('btn_control_q_r.timesOn', btn_control_q_r.timesOn);
    psychoJS.experiment.addData('btn_control_q_r.timesOff', btn_control_q_r.timesOff);
    // the Routine "control_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choiceMaxDurationReached;
var instr_txt;
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
    instr_txt = (cost === 'hard') ? TXT_CHOICE_HARD : TXT_CHOICE_EASY;
    hist_update('c');
    choice_resp = ''; choice_rt = -1; end_at = null;
    psychoJS.eventManager.clearEvents();
    _rm = new core.Mouse({win: psychoJS.window});
    _m0 = _rm.getPos().slice();
    _move_t = -1; _method = ''; _blur0 = blur_count;
    
    choice_instr.setText(instr_txt);
    // reset btn_choice_l to account for continued clicks & clear times on/off
    btn_choice_l.reset()
    // reset btn_choice_r to account for continued clicks & clear times on/off
    btn_choice_r.reset()
    psychoJS.experiment.addData('choice.started', globalClock.getTime());
    choiceMaxDuration = null
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(choice_instr);
    choiceComponents.push(btn_choice_l);
    choiceComponents.push(btn_choice_r);
    choiceComponents.push(choice_keys);
    
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
    if (_move_t < 0) {
      var _mp = _rm.getPos();
      if (Math.abs(_mp[0] - _m0[0]) > 0.005 || Math.abs(_mp[1] - _m0[1]) > 0.005) { _move_t = t; }
    }
    if (end_at === null) {
      var keys = psychoJS.eventManager.getKeys({keyList: ['left', 'right']});
      if (keys.indexOf('left') >= 0 || btn_choice_l.numClicks > 0) {
        choice_resp = 'magic'; choice_rt = t; end_at = t + 0.35;
        _method = (keys.indexOf('left') >= 0) ? 'key' : 'mouse';
        btn_choice_l.setFillColor(new util.Color('goldenrod'));
      } else if (keys.indexOf('right') >= 0 || btn_choice_r.numClicks > 0) {
        choice_resp = 'skip'; choice_rt = t; end_at = t + 0.35;
        _method = (keys.indexOf('right') >= 0) ? 'key' : 'mouse';
        btn_choice_r.setFillColor(new util.Color('goldenrod'));
      }
    } else if (t >= end_at) {
      continueRoutine = false;
    }
    
    
    // *choice_instr* updates
    if (t >= 0.0 && choice_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_instr.tStart = t;  // (not accounting for frame time here)
      choice_instr.frameNStart = frameN;  // exact frame index
      
      choice_instr.setAutoDraw(true);
    }
    
    
    // if choice_instr is active this frame...
    if (choice_instr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_choice_l* updates
    if (t >= 0 && btn_choice_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_choice_l.tStart = t;  // (not accounting for frame time here)
      btn_choice_l.frameNStart = frameN;  // exact frame index
      
      btn_choice_l.setAutoDraw(true);
    }
    
    
    // if btn_choice_l is active this frame...
    if (btn_choice_l.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_choice_l.status === PsychoJS.Status.STARTED) {
      // check whether btn_choice_l has been pressed
      if (btn_choice_l.isClicked) {
        if (!btn_choice_l.wasClicked) {
          // store time of first click
          btn_choice_l.timesOn.push(btn_choice_l.clock.getTime());
          // store time clicked until
          btn_choice_l.timesOff.push(btn_choice_l.clock.getTime());
        } else {
          // update time clicked until;
          btn_choice_l.timesOff[btn_choice_l.timesOff.length - 1] = btn_choice_l.clock.getTime();
        }
        if (!btn_choice_l.wasClicked) {
          
        }
        // if btn_choice_l is still clicked next frame, it is not a new click
        btn_choice_l.wasClicked = true;
      } else {
        // if btn_choice_l is clicked next frame, it is a new click
        btn_choice_l.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_choice_l hasn't started / has finished
      btn_choice_l.clock.reset();
      // if btn_choice_l is clicked next frame, it is a new click
      btn_choice_l.wasClicked = false;
    }
    
    // *btn_choice_r* updates
    if (t >= 0 && btn_choice_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_choice_r.tStart = t;  // (not accounting for frame time here)
      btn_choice_r.frameNStart = frameN;  // exact frame index
      
      btn_choice_r.setAutoDraw(true);
    }
    
    
    // if btn_choice_r is active this frame...
    if (btn_choice_r.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_choice_r.status === PsychoJS.Status.STARTED) {
      // check whether btn_choice_r has been pressed
      if (btn_choice_r.isClicked) {
        if (!btn_choice_r.wasClicked) {
          // store time of first click
          btn_choice_r.timesOn.push(btn_choice_r.clock.getTime());
          // store time clicked until
          btn_choice_r.timesOff.push(btn_choice_r.clock.getTime());
        } else {
          // update time clicked until;
          btn_choice_r.timesOff[btn_choice_r.timesOff.length - 1] = btn_choice_r.clock.getTime();
        }
        if (!btn_choice_r.wasClicked) {
          
        }
        // if btn_choice_r is still clicked next frame, it is not a new click
        btn_choice_r.wasClicked = true;
      } else {
        // if btn_choice_r is clicked next frame, it is a new click
        btn_choice_r.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_choice_r hasn't started / has finished
      btn_choice_r.clock.reset();
      // if btn_choice_r is clicked next frame, it is a new click
      btn_choice_r.wasClicked = false;
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
    nEffort = (choice_resp === 'magic' && cost === 'hard') ? 1 : 0;
    psychoJS.experiment.addData('choice', choice_resp);
    psychoJS.experiment.addData('choice_rt', choice_rt);
    psychoJS.experiment.addData('choice_method', _method);
    psychoJS.experiment.addData('choice_first_move', _move_t);
    psychoJS.experiment.addData('choice_blur', blur_count - _blur0);
    
    psychoJS.experiment.addData('btn_choice_l.numClicks', btn_choice_l.numClicks);
    psychoJS.experiment.addData('btn_choice_l.timesOn', btn_choice_l.timesOn);
    psychoJS.experiment.addData('btn_choice_l.timesOff', btn_choice_l.timesOff);
    psychoJS.experiment.addData('btn_choice_r.numClicks', btn_choice_r.numClicks);
    psychoJS.experiment.addData('btn_choice_r.timesOn', btn_choice_r.timesOn);
    psychoJS.experiment.addData('btn_choice_r.timesOff', btn_choice_r.timesOff);
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
var effort_clicks;
var effort_attempts;
var effort_res;
var effort_start;
var effort_last;
var effort_prev;
var effort_attempt_times;
var effort_del;
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
    // Run 'Begin Routine' code from code_effort
    effort_clicks = 0; effort_attempts = 0; effort_res = ['empty', 0, 0.0, 0, 0.0, -1, 0.0]; effort_start = -1; effort_last = -1; effort_prev = ''; effort_attempt_times = []; effort_del = 0;
    
    psychoJS.experiment.addData('effort.started', globalClock.getTime());
    effortMaxDuration = null
    // keep track of which components have finished
    effortComponents = [];
    effortComponents.push(effort_text);
    effortComponents.push(effort_box);
    effortComponents.push(effort_done);
    effortComponents.push(effort_fb);
    
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
    
    // *effort_fb* updates
    if (t >= 0.0 && effort_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_fb.tStart = t;  // (not accounting for frame time here)
      effort_fb.frameNStart = frameN;  // exact frame index
      
      effort_fb.setAutoDraw(true);
    }
    
    
    // if effort_fb is active this frame...
    if (effort_fb.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_effort
    var _cur = effort_box.text || '';
    if (_cur !== effort_prev) { if (_cur.length < effort_prev.length) { effort_del += 1; } effort_prev = _cur; effort_last = t; if (effort_start < 0) { effort_start = t; } }
    if (effort_done.numClicks > effort_clicks) {
      effort_clicks = effort_done.numClicks;
      effort_attempts += 1;
      effort_attempt_times.push(Math.round(t * 1000) / 1000);
      effort_res = check_alpha(effort_box.text, true);
      continueRoutine = false;
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
    psychoJS.experiment.addData('effort_text', txt);
    psychoJS.experiment.addData('effort_len', txt.length);
    psychoJS.experiment.addData('effort_status', effort_res[0]);
    psychoJS.experiment.addData('effort_letters', effort_res[1]);
    psychoJS.experiment.addData('effort_passes', Math.round(effort_res[2] * 100) / 100);
    psychoJS.experiment.addData('effort_times', effort_res[3]);
    psychoJS.experiment.addData('effort_acc_pct', Math.round(effort_res[4] * 10) / 10);
    psychoJS.experiment.addData('effort_dist', effort_res[5]);
    psychoJS.experiment.addData('effort_upper_pct', Math.round(effort_res[6] * 10) / 10);
    psychoJS.experiment.addData('effort_attempts', effort_attempts);
    psychoJS.experiment.addData('effort_start', effort_start);
    psychoJS.experiment.addData('effort_last_key', effort_last);
    psychoJS.experiment.addData('effort_typing', (effort_start >= 0) ? (effort_last - effort_start) : -1);
    psychoJS.experiment.addData('effort_attempt_times', effort_attempt_times.join(';'));
    psychoJS.experiment.addData('effort_deletions', effort_del);
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
var rating_clicks;
var rating_tries;
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
    // Run 'Begin Routine' code from code_rating
    rating_clicks = 0; rating_tries = 0;
    
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
    // Run 'Each Frame' code from code_rating
    if (rating_done.numClicks > rating_clicks) {
      rating_clicks = rating_done.numClicks;
      rating_tries += 1;
      var _ri = importance.getRating(), _rc = control.getRating();
      if (_ri !== undefined && _ri !== null && _rc !== undefined && _rc !== null) { continueRoutine = false; }
      else { rating_text.setText(TXT_RATING_HINT); rating_text.setColor(new util.Color('gold')); }
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
    // Run 'End Routine' code from code_rating
    psychoJS.experiment.addData('rating_time', t);
    psychoJS.experiment.addData('rating_tries', rating_tries);
    psychoJS.experiment.addData('importance_rating', importance.getRating());
    psychoJS.experiment.addData('control_rating', control.getRating());
    
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
    // Run 'End Routine' code from code_tob_instr_after
    psychoJS.experiment.addData('tob_instr_time', t);
    
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
var _tob_key_after_allKeys;
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
    tob_key_after.keys = undefined;
    tob_key_after.rt = undefined;
    _tob_key_after_allKeys = [];
    // Run 'Begin Routine' code from code_tob_after
    resp = null;
    keyI = 0;
    
    psychoJS.experiment.addData('tob_item_after.started', globalClock.getTime());
    tob_item_afterMaxDuration = null
    // keep track of which components have finished
    tob_item_afterComponents = [];
    tob_item_afterComponents.push(tob_text_after);
    tob_item_afterComponents.push(tob_slider_after);
    tob_item_afterComponents.push(tob_hint_after);
    tob_item_afterComponents.push(tob_key_after);
    
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
    
    
    // *tob_key_after* updates
    if (t >= 0.0 && tob_key_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tob_key_after.tStart = t;  // (not accounting for frame time here)
      tob_key_after.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tob_key_after.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tob_key_after.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tob_key_after.clearEvents(); });
    }
    
    // if tob_key_after is active this frame...
    if (tob_key_after.status === PsychoJS.Status.STARTED) {
      let theseKeys = tob_key_after.getKeys({keyList: ['left','right','space','1','2','3','4','5','6','7'], waitRelease: false});
      _tob_key_after_allKeys = _tob_key_after_allKeys.concat(theseKeys);
      if (_tob_key_after_allKeys.length > 0) {
        tob_key_after.keys = _tob_key_after_allKeys[_tob_key_after_allKeys.length - 1].name;  // just the last key pressed
        tob_key_after.rt = _tob_key_after_allKeys[_tob_key_after_allKeys.length - 1].rt;
        tob_key_after.duration = _tob_key_after_allKeys[_tob_key_after_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_tob_after
    var _r = tob_slider_after.getRating();
    if (typeof _r !== 'undefined' && _r !== null && Math.round(_r) !== resp) { resp = Math.round(_r); }
    while (keyI < _tob_key_after_allKeys.length) {
      var _k = _tob_key_after_allKeys[keyI].name;
      keyI += 1;
      var _new = null;
      if (['1','2','3','4','5','6','7'].indexOf(_k) >= 0) { _new = parseInt(_k); }
      else if (_k === 'left') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.max(1, resp - 1); }
      else if (_k === 'right') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.min(7, resp + 1); }
      else if (_k === 'space' && resp !== null && typeof resp !== 'undefined') { continueRoutine = false; }
      if (_new !== null && _new !== resp) { resp = _new; tob_slider_after.recordRating(resp); }
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
    tob_key_after.stop();
    // Run 'End Routine' code from code_tob_after
    tob_resp[Number(item_n)] = resp;
    psychoJS.experiment.addData('tob_' + String(item_n), resp);
    psychoJS.experiment.addData('tob_rt_' + String(item_n), t);
    psychoJS.experiment.addData('tob_keys_' + String(item_n), keyI);
    
    // the Routine "tob_item_after" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var neu_instr_afterMaxDurationReached;
var _neu_instr_key_after_allKeys;
var neu_instr_afterMaxDuration;
var neu_instr_afterComponents;
function neu_instr_afterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'neu_instr_after' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    neu_instr_afterClock.reset();
    routineTimer.reset();
    neu_instr_afterMaxDurationReached = false;
    // update component parameters for each repeat
    neu_instr_key_after.keys = undefined;
    neu_instr_key_after.rt = undefined;
    _neu_instr_key_after_allKeys = [];
    psychoJS.experiment.addData('neu_instr_after.started', globalClock.getTime());
    neu_instr_afterMaxDuration = null
    // keep track of which components have finished
    neu_instr_afterComponents = [];
    neu_instr_afterComponents.push(neu_instr_text_after);
    neu_instr_afterComponents.push(neu_instr_key_after);
    
    for (const thisComponent of neu_instr_afterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function neu_instr_afterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'neu_instr_after' ---
    // get current time
    t = neu_instr_afterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *neu_instr_text_after* updates
    if (t >= 0.0 && neu_instr_text_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_instr_text_after.tStart = t;  // (not accounting for frame time here)
      neu_instr_text_after.frameNStart = frameN;  // exact frame index
      
      neu_instr_text_after.setAutoDraw(true);
    }
    
    
    // if neu_instr_text_after is active this frame...
    if (neu_instr_text_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_instr_key_after* updates
    if (t >= 0.0 && neu_instr_key_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_instr_key_after.tStart = t;  // (not accounting for frame time here)
      neu_instr_key_after.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { neu_instr_key_after.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { neu_instr_key_after.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { neu_instr_key_after.clearEvents(); });
    }
    
    // if neu_instr_key_after is active this frame...
    if (neu_instr_key_after.status === PsychoJS.Status.STARTED) {
      let theseKeys = neu_instr_key_after.getKeys({keyList: 'space', waitRelease: false});
      _neu_instr_key_after_allKeys = _neu_instr_key_after_allKeys.concat(theseKeys);
      if (_neu_instr_key_after_allKeys.length > 0) {
        neu_instr_key_after.keys = _neu_instr_key_after_allKeys[_neu_instr_key_after_allKeys.length - 1].name;  // just the last key pressed
        neu_instr_key_after.rt = _neu_instr_key_after_allKeys[_neu_instr_key_after_allKeys.length - 1].rt;
        neu_instr_key_after.duration = _neu_instr_key_after_allKeys[_neu_instr_key_after_allKeys.length - 1].duration;
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
    for (const thisComponent of neu_instr_afterComponents)
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


function neu_instr_afterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'neu_instr_after' ---
    for (const thisComponent of neu_instr_afterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('neu_instr_after.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(neu_instr_key_after.corr, level);
    }
    psychoJS.experiment.addData('neu_instr_key_after.keys', neu_instr_key_after.keys);
    if (typeof neu_instr_key_after.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('neu_instr_key_after.rt', neu_instr_key_after.rt);
        psychoJS.experiment.addData('neu_instr_key_after.duration', neu_instr_key_after.duration);
        routineTimer.reset();
        }
    
    neu_instr_key_after.stop();
    // Run 'End Routine' code from code_neu_instr_after
    psychoJS.experiment.addData('neu_instr_time', t);
    
    // the Routine "neu_instr_after" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var neu_item_afterMaxDurationReached;
var _neu_key_after_allKeys;
var neu_item_afterMaxDuration;
var neu_item_afterComponents;
function neu_item_afterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'neu_item_after' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    neu_item_afterClock.reset();
    routineTimer.reset();
    neu_item_afterMaxDurationReached = false;
    // update component parameters for each repeat
    neu_text_after.setText(text);
    neu_slider_after.reset()
    neu_key_after.keys = undefined;
    neu_key_after.rt = undefined;
    _neu_key_after_allKeys = [];
    // Run 'Begin Routine' code from code_neu_after
    resp = null;
    keyI = 0;
    
    psychoJS.experiment.addData('neu_item_after.started', globalClock.getTime());
    neu_item_afterMaxDuration = null
    // keep track of which components have finished
    neu_item_afterComponents = [];
    neu_item_afterComponents.push(neu_text_after);
    neu_item_afterComponents.push(neu_slider_after);
    neu_item_afterComponents.push(neu_hint_after);
    neu_item_afterComponents.push(neu_key_after);
    
    for (const thisComponent of neu_item_afterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function neu_item_afterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'neu_item_after' ---
    // get current time
    t = neu_item_afterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *neu_text_after* updates
    if (t >= 0.0 && neu_text_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_text_after.tStart = t;  // (not accounting for frame time here)
      neu_text_after.frameNStart = frameN;  // exact frame index
      
      neu_text_after.setAutoDraw(true);
    }
    
    
    // if neu_text_after is active this frame...
    if (neu_text_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_slider_after* updates
    if (t >= 0.0 && neu_slider_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_slider_after.tStart = t;  // (not accounting for frame time here)
      neu_slider_after.frameNStart = frameN;  // exact frame index
      
      neu_slider_after.setAutoDraw(true);
    }
    
    
    // if neu_slider_after is active this frame...
    if (neu_slider_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_hint_after* updates
    if (t >= 0.0 && neu_hint_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_hint_after.tStart = t;  // (not accounting for frame time here)
      neu_hint_after.frameNStart = frameN;  // exact frame index
      
      neu_hint_after.setAutoDraw(true);
    }
    
    
    // if neu_hint_after is active this frame...
    if (neu_hint_after.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *neu_key_after* updates
    if (t >= 0.0 && neu_key_after.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neu_key_after.tStart = t;  // (not accounting for frame time here)
      neu_key_after.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { neu_key_after.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { neu_key_after.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { neu_key_after.clearEvents(); });
    }
    
    // if neu_key_after is active this frame...
    if (neu_key_after.status === PsychoJS.Status.STARTED) {
      let theseKeys = neu_key_after.getKeys({keyList: ['left','right','space','1','2','3','4','5','6','7'], waitRelease: false});
      _neu_key_after_allKeys = _neu_key_after_allKeys.concat(theseKeys);
      if (_neu_key_after_allKeys.length > 0) {
        neu_key_after.keys = _neu_key_after_allKeys[_neu_key_after_allKeys.length - 1].name;  // just the last key pressed
        neu_key_after.rt = _neu_key_after_allKeys[_neu_key_after_allKeys.length - 1].rt;
        neu_key_after.duration = _neu_key_after_allKeys[_neu_key_after_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_neu_after
    var _r = neu_slider_after.getRating();
    if (typeof _r !== 'undefined' && _r !== null && Math.round(_r) !== resp) { resp = Math.round(_r); }
    while (keyI < _neu_key_after_allKeys.length) {
      var _k = _neu_key_after_allKeys[keyI].name;
      keyI += 1;
      var _new = null;
      if (['1','2','3','4','5','6','7'].indexOf(_k) >= 0) { _new = parseInt(_k); }
      else if (_k === 'left') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.max(1, resp - 1); }
      else if (_k === 'right') { _new = ((resp === null) || (typeof resp === 'undefined')) ? 4 : Math.min(7, resp + 1); }
      else if (_k === 'space' && resp !== null && typeof resp !== 'undefined') { continueRoutine = false; }
      if (_new !== null && _new !== resp) { resp = _new; neu_slider_after.recordRating(resp); }
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
    for (const thisComponent of neu_item_afterComponents)
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


function neu_item_afterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'neu_item_after' ---
    for (const thisComponent of neu_item_afterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('neu_item_after.stopped', globalClock.getTime());
    psychoJS.experiment.addData('neu_slider_after.response', neu_slider_after.getRating());
    psychoJS.experiment.addData('neu_slider_after.rt', neu_slider_after.getRT());
    neu_key_after.stop();
    // Run 'End Routine' code from code_neu_after
    neu_resp[Number(item_n)] = resp;
    psychoJS.experiment.addData('neu_' + String(item_n), resp);
    psychoJS.experiment.addData('neu_rt_' + String(item_n), t);
    psychoJS.experiment.addData('neu_keys_' + String(item_n), keyI);
    
    // the Routine "neu_item_after" was not non-slip safe, so reset the non-slip timer
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
    // Run 'End Routine' code from code_susp
    psychoJS.experiment.addData('susp_time', t);
    psychoJS.experiment.addData('susp_len', (susp_box.text || '').length);
    
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
    psychoJS.experiment.addData('row_time', t);
    
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
var dp_shown;
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
    psychoJS.experiment.addData('total_time', globalClock.getTime());
    psychoJS.experiment.addData('blur_count', blur_count);
    var _nn = 0; for (var _k in neu_resp) { if (neu_resp[_k] !== null && neu_resp[_k] !== undefined) _nn += 1; } psychoJS.experiment.addData('neu_n_answered', _nn);
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
    
    // Run 'Begin Routine' code from code_datapipe
    psychoJS.eventManager.clearEvents();
    hist_update('d');
    dp_shown = '';
    dp_send('');
    
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
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
    
    // Run 'Each Frame' code from code_datapipe
    var _msg = (dp_state === 'ok') ? TXT_SAVED : ((dp_state === 'failed') ? TXT_SAVE_FAILED : ((dp_state === 'off') ? TXT_SAVE_OFF : TXT_SAVING));
    if (_msg !== dp_shown) { thanks_text.setText(TXT_THANKS_BASE + _msg); dp_shown = _msg; }
    var _tk = psychoJS.eventManager.getKeys({keyList: ['space', 'r']});
    if (dp_state === 'failed' && _tk.indexOf('r') >= 0) { dp_send(''); }
    else if (dp_state !== 'sending' && _tk.indexOf('space') >= 0) { continueRoutine = false; }
    
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
  // Отправка уже выполнена на последнем экране. Если эксперимент закрыт раньше (отладочный выход по Esc),
  // отправляется то, что успело накопиться, с пометкой partial в имени файла.
  if (typeof dp_send === 'function' && dp_state === 'idle' && psychoJS.experiment._trialsData.length > 0) { dp_send('partial'); }
  psychoJS._saveResults = 0;
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
