#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2025.1.1),
    on Tue Sep 15 02:03:33 2026
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2025.1.1'
expName = 'magic_vkr'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'фамилия': '',
    'возраст': '',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1024, 768)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = 'data/%s_%s' % (expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='magic_vkr.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=True,
            monitor='testMonitor', color=[-0.2314, -0.2314, -0.2314], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [-0.2314, -0.2314, -0.2314]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Экран загружается, подождите секунду, пожалуйста')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    if deviceManager.getDevice('welcome_key') is None:
        # initialise welcome_key
        welcome_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='welcome_key',
        )
    if deviceManager.getDevice('tob_instr_key_before') is None:
        # initialise tob_instr_key_before
        tob_instr_key_before = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='tob_instr_key_before',
        )
    if deviceManager.getDevice('tob_key_before') is None:
        # initialise tob_key_before
        tob_key_before = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='tob_key_before',
        )
    if deviceManager.getDevice('choice_instr_key') is None:
        # initialise choice_instr_key
        choice_instr_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='choice_instr_key',
        )
    if deviceManager.getDevice('tob_instr_key_after') is None:
        # initialise tob_instr_key_after
        tob_instr_key_after = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='tob_instr_key_after',
        )
    if deviceManager.getDevice('tob_key_after') is None:
        # initialise tob_key_after
        tob_key_after = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='tob_key_after',
        )
    if deviceManager.getDevice('thanks_key') is None:
        # initialise thanks_key
        thanks_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='thanks_key',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "welcome" ---
    welcome_text = visual.TextStim(win=win, name='welcome_text',
        text='Добрый день! Приглашаем принять участие в исследовании принятия решений.\n\nУчастие займёт около 10 минут. Данные анонимны и используются только в обобщённом виде. Продолжая, вы даёте согласие на участие.\n\nПожалуйста, проходите исследование на компьютере или ноутбуке.\n\nЧтобы начать, нажмите пробел.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.035, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    welcome_key = keyboard.Keyboard(deviceName='welcome_key')
    # Run 'Begin Experiment' code from code_assign
    import random
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
    
    
    # --- Initialize components for Routine "debug_pick" ---
    debug_text = visual.TextStim(win=win, name='debug_text',
        text='Отладка. Выберите группу для прохождения.',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.04, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    debug_hint = visual.TextStim(win=win, name='debug_hint',
        text='1: опросник до, лёгкая магия      2: опросник до, трудная магия\n3: опросник после, лёгкая магия      4: опросник после, трудная магия',
        font='Arial',
        pos=(0, 0.17), draggable=False, height=0.028, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    dbg1 = visual.ButtonStim(win, 
        text='Группа 1', font='Arial',
        pos=(-0.45, -0.05),
        letterHeight=0.04,
        size=(0.26, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='dbg1',
        depth=-2
    )
    dbg1.buttonClock = core.Clock()
    dbg2 = visual.ButtonStim(win, 
        text='Группа 2', font='Arial',
        pos=(-0.15, -0.05),
        letterHeight=0.04,
        size=(0.26, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='dbg2',
        depth=-3
    )
    dbg2.buttonClock = core.Clock()
    dbg3 = visual.ButtonStim(win, 
        text='Группа 3', font='Arial',
        pos=(0.15, -0.05),
        letterHeight=0.04,
        size=(0.26, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='dbg3',
        depth=-4
    )
    dbg3.buttonClock = core.Clock()
    dbg4 = visual.ButtonStim(win, 
        text='Группа 4', font='Arial',
        pos=(0.45, -0.05),
        letterHeight=0.04,
        size=(0.26, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='dbg4',
        depth=-5
    )
    dbg4.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "setup" ---
    setup_blank = visual.TextStim(win=win, name='setup_blank',
        text=None,
        font='Arial',
        pos=(0, 0), draggable=False, height=0.035, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "tob_instr_before" ---
    tob_instr_text_before = visual.TextBox2(
         win, text='Пожалуйста, укажите степень Вашего согласия с приведенными утверждениями.\n\n1 — Абсолютно не согласен\n2 — Не согласен\n3 — Скорее не согласен\n4 — Не знаю, не уверен\n5 — Скорее согласен\n6 — Согласен\n7 — Абсолютно согласен\n\nОтвет выбирается стрелками влево и вправо (или клавишами 1–7) и подтверждается пробелом.\n\nНажмите пробел, чтобы продолжить.', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.032,
         size=(1.2, 0.8), borderWidth=2.0,
         color='white', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.02, alignment='top-left',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='tob_instr_text_before',
         depth=0, autoLog=True,
    )
    tob_instr_key_before = keyboard.Keyboard(deviceName='tob_instr_key_before')
    
    # --- Initialize components for Routine "tob_item_before" ---
    tob_text_before = visual.TextStim(win=win, name='tob_text_before',
        text='',
        font='Arial',
        pos=(0, 0.2), draggable=False, height=0.04, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    tob_slider_before = visual.Slider(win=win, name='tob_slider_before',
        startValue=None, size=(1.3, 0.06), pos=(0, -0.12), units=win.units,
        labels=['1\nабсолютно\nне согласен', '2\nне согласен', '3\nскорее\nне согласен', '4\nне знаю,\nне уверен', '5\nскорее\nсогласен', '6\nсогласен', '7\nабсолютно\nсогласен'], ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
        style='rating', styleTweaks=[], opacity=None,
        labelColor='white', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.025,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    tob_hint_before = visual.TextStim(win=win, name='tob_hint_before',
        text='Стрелки влево и вправо или клавиши 1–7: выбрать ответ.  Пробел: подтвердить',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.026, wrapWidth=1.4, ori=0.0, 
        color='lightgrey', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    tob_key_before = keyboard.Keyboard(deviceName='tob_key_before')
    
    # --- Initialize components for Routine "choice_instr" ---
    # Run 'Begin Experiment' code from code_choice_instr
    TXT_CHOICE_EASY = 'В качестве бонуса за участие вы можете нажать на кнопку «Магия» и тем самым повысить вероятность того, что какое-то важное для вас приятное событие произойдёт в ближайшее время, либо нажать на кнопку «Пропустить» и перейти к следующему этапу.'
    TXT_CHOICE_HARD = 'В качестве бонуса за участие вы можете нажать на кнопку «Магия» и тем самым повысить вероятность того, что какое-то важное для вас приятное событие произойдёт в ближайшее время. Для этого нужно будет напечатать букву М не менее 30 раз, чем больше, тем выше вероятность события. Либо нажмите на кнопку «Пропустить» и перейдите к следующему этапу.'
    TXT_CHOICE_TAIL = '\n\nВыбрать можно ЛИБО мышью, нажав на кнопку, ЛИБО клавишей ВЛЕВО (Магия) или ВПРАВО (Пропустить).\n\nНажмите пробел, чтобы перейти к выбору.'
    
    choice_instr_text = visual.TextStim(win=win, name='choice_instr_text',
        text='',
        font='Arial',
        pos=(0, 0.05), draggable=False, height=0.036, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    choice_instr_key = keyboard.Keyboard(deviceName='choice_instr_key')
    
    # --- Initialize components for Routine "choice" ---
    choice_head = visual.TextStim(win=win, name='choice_head',
        text='Ваш выбор',
        font='Arial',
        pos=(0, 0.25), draggable=False, height=0.045, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    btn_magic = visual.ButtonStim(win, 
        text='Магия', font='Arial',
        pos=(-0.25, 0.0),
        letterHeight=0.04,
        size=(0.36, 0.14), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='btn_magic',
        depth=-2
    )
    btn_magic.buttonClock = core.Clock()
    btn_skip = visual.ButtonStim(win, 
        text='Пропустить', font='Arial',
        pos=(0.25, 0.0),
        letterHeight=0.04,
        size=(0.36, 0.14), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='btn_skip',
        depth=-3
    )
    btn_skip.buttonClock = core.Clock()
    choice_keys = visual.TextStim(win=win, name='choice_keys',
        text='← стрелка влево                                стрелка вправо →',
        font='Arial',
        pos=(0, -0.12), draggable=False, height=0.028, wrapWidth=1.4, ori=0.0, 
        color='lightgrey', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    choice_hint = visual.TextStim(win=win, name='choice_hint',
        text='Нажмите на кнопку мышью ЛИБО клавишу ВЛЕВО (Магия) или ВПРАВО (Пропустить)',
        font='Arial',
        pos=(0, -0.3), draggable=False, height=0.028, wrapWidth=1.4, ori=0.0, 
        color='lightgrey', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "effort" ---
    effort_text = visual.TextStim(win=win, name='effort_text',
        text='Вы можете в это верить или не верить, но все древнейшие учения говорят, что действенность магии зависит от прилагаемых усилий.\n\nНапечатайте в поле ниже букву М не менее 30 раз. Чем больше, тем выше вероятность события. Когда закончите, нажмите «Готово».',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.032, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    effort_box = visual.TextBox2(
         win, text=None, placeholder='нажмите сюда и печатайте', font='Arial',
         ori=0.0, pos=(0, -0.02), draggable=False,      letterHeight=0.035,
         size=(1.2, 0.26), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.02, alignment='top-left',
         anchor='center', overflow='visible',
         fillColor='white', borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='effort_box',
         depth=-1, autoLog=True,
    )
    effort_done = visual.ButtonStim(win, 
        text='Готово', font='Arial',
        pos=(0, -0.36),
        letterHeight=0.04,
        size=(0.3, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='effort_done',
        depth=-2
    )
    effort_done.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "rating" ---
    rating_text = visual.TextStim(win=win, name='rating_text',
        text='Оцените, пожалуйста, то приятное событие, о котором вы думали.',
        font='Arial',
        pos=(0, 0.38), draggable=False, height=0.035, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    lbl_imp = visual.TextStim(win=win, name='lbl_imp',
        text='Насколько это событие для вас важно?',
        font='Arial',
        pos=(0, 0.22), draggable=False, height=0.03, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    importance = visual.Slider(win=win, name='importance',
        startValue=50, size=(1.0, 0.05), pos=(0, 0.1), units=win.units,
        labels=['совсем не важно', 'крайне важно'], ticks=(0, 100), granularity=1.0,
        style='slider', styleTweaks=[], opacity=None,
        labelColor='white', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.025,
        flip=False, ori=0.0, depth=-2, readOnly=False)
    lbl_ctrl = visual.TextStim(win=win, name='lbl_ctrl',
        text='Насколько его исход зависит от вас самих?',
        font='Arial',
        pos=(0, -0.08), draggable=False, height=0.03, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    control = visual.Slider(win=win, name='control',
        startValue=50, size=(1.0, 0.05), pos=(0, -0.2), units=win.units,
        labels=['совсем не зависит', 'полностью зависит'], ticks=(0, 100), granularity=1.0,
        style='slider', styleTweaks=[], opacity=None,
        labelColor='white', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.025,
        flip=False, ori=0.0, depth=-4, readOnly=False)
    rating_done = visual.ButtonStim(win, 
        text='Готово', font='Arial',
        pos=(0, -0.4),
        letterHeight=0.04,
        size=(0.3, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='rating_done',
        depth=-5
    )
    rating_done.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "tob_instr_after" ---
    tob_instr_text_after = visual.TextBox2(
         win, text='Пожалуйста, укажите степень Вашего согласия с приведенными утверждениями.\n\n1 — Абсолютно не согласен\n2 — Не согласен\n3 — Скорее не согласен\n4 — Не знаю, не уверен\n5 — Скорее согласен\n6 — Согласен\n7 — Абсолютно согласен\n\nОтвет выбирается стрелками влево и вправо (или клавишами 1–7) и подтверждается пробелом.\n\nНажмите пробел, чтобы продолжить.', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.032,
         size=(1.2, 0.8), borderWidth=2.0,
         color='white', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.02, alignment='top-left',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='tob_instr_text_after',
         depth=0, autoLog=True,
    )
    tob_instr_key_after = keyboard.Keyboard(deviceName='tob_instr_key_after')
    
    # --- Initialize components for Routine "tob_item_after" ---
    tob_text_after = visual.TextStim(win=win, name='tob_text_after',
        text='',
        font='Arial',
        pos=(0, 0.2), draggable=False, height=0.04, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    tob_slider_after = visual.Slider(win=win, name='tob_slider_after',
        startValue=None, size=(1.3, 0.06), pos=(0, -0.12), units=win.units,
        labels=['1\nабсолютно\nне согласен', '2\nне согласен', '3\nскорее\nне согласен', '4\nне знаю,\nне уверен', '5\nскорее\nсогласен', '6\nсогласен', '7\nабсолютно\nсогласен'], ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
        style='rating', styleTweaks=[], opacity=None,
        labelColor='white', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.025,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    tob_hint_after = visual.TextStim(win=win, name='tob_hint_after',
        text='Стрелки влево и вправо или клавиши 1–7: выбрать ответ.  Пробел: подтвердить',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.026, wrapWidth=1.4, ori=0.0, 
        color='lightgrey', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    tob_key_after = keyboard.Keyboard(deviceName='tob_key_after')
    
    # --- Initialize components for Routine "suspicion" ---
    susp_text = visual.TextStim(win=win, name='susp_text',
        text='Как вы думаете, что изучалось в этом исследовании? Напишите в свободной форме и нажмите «Готово».',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.032, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    susp_box = visual.TextBox2(
         win, text=None, placeholder='нажмите сюда и печатайте', font='Arial',
         ori=0.0, pos=(0, -0.02), draggable=False,      letterHeight=0.03,
         size=(1.2, 0.26), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.02, alignment='top-left',
         anchor='center', overflow='visible',
         fillColor='white', borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='susp_box',
         depth=-1, autoLog=True,
    )
    susp_done = visual.ButtonStim(win, 
        text='Готово', font='Arial',
        pos=(0, -0.36),
        letterHeight=0.04,
        size=(0.3, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='susp_done',
        depth=-2
    )
    susp_done.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "row_entry" ---
    row_text = visual.TextStim(win=win, name='row_text',
        text='Студенты РАНХиГС, которые хотят получить баллы за участие, введите номер вашей строки в списке группы. Если баллы вам не нужны, оставьте поле пустым и нажмите «Готово».',
        font='Arial',
        pos=(0, 0.25), draggable=False, height=0.032, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    row_box = visual.TextBox2(
         win, text=None, placeholder='номер строки', font='Arial',
         ori=0.0, pos=(0, 0.0), draggable=False,      letterHeight=0.035,
         size=(0.5, 0.08), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.02, alignment='top-left',
         anchor='center', overflow='visible',
         fillColor='white', borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='row_box',
         depth=-1, autoLog=True,
    )
    row_done = visual.ButtonStim(win, 
        text='Готово', font='Arial',
        pos=(0, -0.2),
        letterHeight=0.04,
        size=(0.3, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='row_done',
        depth=-2
    )
    row_done.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "thanks" ---
    thanks_text = visual.TextStim(win=win, name='thanks_text',
        text='Спасибо за участие!\n\nКнопка «Магия» не влияет на события: она использовалась, чтобы изучить, как люди принимают решения в ситуации неопределённости. Задание с буквами измеряло готовность прилагать усилия.\n\nДанные сохраняются, пожалуйста, подождите несколько секунд и не закрывайте окно. Затем нажмите пробел.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.035, wrapWidth=1.4, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    thanks_key = keyboard.Keyboard(deviceName='thanks_key')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "welcome" ---
    # create an object to store info about Routine welcome
    welcome = data.Routine(
        name='welcome',
        components=[welcome_text, welcome_key],
    )
    welcome.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for welcome_key
    welcome_key.keys = []
    welcome_key.rt = []
    _welcome_key_allKeys = []
    # store start times for welcome
    welcome.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    welcome.tStart = globalClock.getTime(format='float')
    welcome.status = STARTED
    thisExp.addData('welcome.started', welcome.tStart)
    welcome.maxDuration = None
    # keep track of which components have finished
    welcomeComponents = welcome.components
    for thisComponent in welcome.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "welcome" ---
    welcome.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *welcome_text* updates
        
        # if welcome_text is starting this frame...
        if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welcome_text.frameNStart = frameN  # exact frame index
            welcome_text.tStart = t  # local t and not account for scr refresh
            welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welcome_text.started')
            # update status
            welcome_text.status = STARTED
            welcome_text.setAutoDraw(True)
        
        # if welcome_text is active this frame...
        if welcome_text.status == STARTED:
            # update params
            pass
        
        # *welcome_key* updates
        waitOnFlip = False
        
        # if welcome_key is starting this frame...
        if welcome_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welcome_key.frameNStart = frameN  # exact frame index
            welcome_key.tStart = t  # local t and not account for scr refresh
            welcome_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welcome_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welcome_key.started')
            # update status
            welcome_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(welcome_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(welcome_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if welcome_key.status == STARTED and not waitOnFlip:
            theseKeys = welcome_key.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _welcome_key_allKeys.extend(theseKeys)
            if len(_welcome_key_allKeys):
                welcome_key.keys = _welcome_key_allKeys[-1].name  # just the last key pressed
                welcome_key.rt = _welcome_key_allKeys[-1].rt
                welcome_key.duration = _welcome_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=welcome,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            welcome.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in welcome.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "welcome" ---
    for thisComponent in welcome.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for welcome
    welcome.tStop = globalClock.getTime(format='float')
    welcome.tStopRefresh = tThisFlipGlobal
    thisExp.addData('welcome.stopped', welcome.tStop)
    # check responses
    if welcome_key.keys in ['', [], None]:  # No response was made
        welcome_key.keys = None
    thisExp.addData('welcome_key.keys',welcome_key.keys)
    if welcome_key.keys != None:  # we had a response
        thisExp.addData('welcome_key.rt', welcome_key.rt)
        thisExp.addData('welcome_key.duration', welcome_key.duration)
    thisExp.nextEntry()
    # the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    debug_loop = data.TrialHandler2(
        name='debug_loop',
        nReps=nDebug, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
    )
    thisExp.addLoop(debug_loop)  # add the loop to the experiment
    thisDebug_loop = debug_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisDebug_loop.rgb)
    if thisDebug_loop != None:
        for paramName in thisDebug_loop:
            globals()[paramName] = thisDebug_loop[paramName]
    
    for thisDebug_loop in debug_loop:
        debug_loop.status = STARTED
        if hasattr(thisDebug_loop, 'status'):
            thisDebug_loop.status = STARTED
        currentLoop = debug_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisDebug_loop.rgb)
        if thisDebug_loop != None:
            for paramName in thisDebug_loop:
                globals()[paramName] = thisDebug_loop[paramName]
        
        # --- Prepare to start Routine "debug_pick" ---
        # create an object to store info about Routine debug_pick
        debug_pick = data.Routine(
            name='debug_pick',
            components=[debug_text, debug_hint, dbg1, dbg2, dbg3, dbg4],
        )
        debug_pick.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # reset dbg1 to account for continued clicks & clear times on/off
        dbg1.reset()
        # reset dbg2 to account for continued clicks & clear times on/off
        dbg2.reset()
        # reset dbg3 to account for continued clicks & clear times on/off
        dbg3.reset()
        # reset dbg4 to account for continued clicks & clear times on/off
        dbg4.reset()
        # store start times for debug_pick
        debug_pick.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        debug_pick.tStart = globalClock.getTime(format='float')
        debug_pick.status = STARTED
        thisExp.addData('debug_pick.started', debug_pick.tStart)
        debug_pick.maxDuration = None
        # keep track of which components have finished
        debug_pickComponents = debug_pick.components
        for thisComponent in debug_pick.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "debug_pick" ---
        debug_pick.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisDebug_loop, 'status') and thisDebug_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *debug_text* updates
            
            # if debug_text is starting this frame...
            if debug_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                debug_text.frameNStart = frameN  # exact frame index
                debug_text.tStart = t  # local t and not account for scr refresh
                debug_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(debug_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'debug_text.started')
                # update status
                debug_text.status = STARTED
                debug_text.setAutoDraw(True)
            
            # if debug_text is active this frame...
            if debug_text.status == STARTED:
                # update params
                pass
            
            # *debug_hint* updates
            
            # if debug_hint is starting this frame...
            if debug_hint.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                debug_hint.frameNStart = frameN  # exact frame index
                debug_hint.tStart = t  # local t and not account for scr refresh
                debug_hint.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(debug_hint, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'debug_hint.started')
                # update status
                debug_hint.status = STARTED
                debug_hint.setAutoDraw(True)
            
            # if debug_hint is active this frame...
            if debug_hint.status == STARTED:
                # update params
                pass
            # *dbg1* updates
            
            # if dbg1 is starting this frame...
            if dbg1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dbg1.frameNStart = frameN  # exact frame index
                dbg1.tStart = t  # local t and not account for scr refresh
                dbg1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dbg1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'dbg1.started')
                # update status
                dbg1.status = STARTED
                win.callOnFlip(dbg1.buttonClock.reset)
                dbg1.setAutoDraw(True)
            
            # if dbg1 is active this frame...
            if dbg1.status == STARTED:
                # update params
                pass
                # check whether dbg1 has been pressed
                if dbg1.isClicked:
                    if not dbg1.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        dbg1.timesOn.append(dbg1.buttonClock.getTime())
                        dbg1.timesOff.append(dbg1.buttonClock.getTime())
                    elif len(dbg1.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        dbg1.timesOff[-1] = dbg1.buttonClock.getTime()
                    if not dbg1.wasClicked:
                        # end routine when dbg1 is clicked
                        continueRoutine = False
                    if not dbg1.wasClicked:
                        # run callback code when dbg1 is clicked
                        pass
            # take note of whether dbg1 was clicked, so that next frame we know if clicks are new
            dbg1.wasClicked = dbg1.isClicked and dbg1.status == STARTED
            # *dbg2* updates
            
            # if dbg2 is starting this frame...
            if dbg2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dbg2.frameNStart = frameN  # exact frame index
                dbg2.tStart = t  # local t and not account for scr refresh
                dbg2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dbg2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'dbg2.started')
                # update status
                dbg2.status = STARTED
                win.callOnFlip(dbg2.buttonClock.reset)
                dbg2.setAutoDraw(True)
            
            # if dbg2 is active this frame...
            if dbg2.status == STARTED:
                # update params
                pass
                # check whether dbg2 has been pressed
                if dbg2.isClicked:
                    if not dbg2.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        dbg2.timesOn.append(dbg2.buttonClock.getTime())
                        dbg2.timesOff.append(dbg2.buttonClock.getTime())
                    elif len(dbg2.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        dbg2.timesOff[-1] = dbg2.buttonClock.getTime()
                    if not dbg2.wasClicked:
                        # end routine when dbg2 is clicked
                        continueRoutine = False
                    if not dbg2.wasClicked:
                        # run callback code when dbg2 is clicked
                        pass
            # take note of whether dbg2 was clicked, so that next frame we know if clicks are new
            dbg2.wasClicked = dbg2.isClicked and dbg2.status == STARTED
            # *dbg3* updates
            
            # if dbg3 is starting this frame...
            if dbg3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dbg3.frameNStart = frameN  # exact frame index
                dbg3.tStart = t  # local t and not account for scr refresh
                dbg3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dbg3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'dbg3.started')
                # update status
                dbg3.status = STARTED
                win.callOnFlip(dbg3.buttonClock.reset)
                dbg3.setAutoDraw(True)
            
            # if dbg3 is active this frame...
            if dbg3.status == STARTED:
                # update params
                pass
                # check whether dbg3 has been pressed
                if dbg3.isClicked:
                    if not dbg3.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        dbg3.timesOn.append(dbg3.buttonClock.getTime())
                        dbg3.timesOff.append(dbg3.buttonClock.getTime())
                    elif len(dbg3.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        dbg3.timesOff[-1] = dbg3.buttonClock.getTime()
                    if not dbg3.wasClicked:
                        # end routine when dbg3 is clicked
                        continueRoutine = False
                    if not dbg3.wasClicked:
                        # run callback code when dbg3 is clicked
                        pass
            # take note of whether dbg3 was clicked, so that next frame we know if clicks are new
            dbg3.wasClicked = dbg3.isClicked and dbg3.status == STARTED
            # *dbg4* updates
            
            # if dbg4 is starting this frame...
            if dbg4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dbg4.frameNStart = frameN  # exact frame index
                dbg4.tStart = t  # local t and not account for scr refresh
                dbg4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dbg4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'dbg4.started')
                # update status
                dbg4.status = STARTED
                win.callOnFlip(dbg4.buttonClock.reset)
                dbg4.setAutoDraw(True)
            
            # if dbg4 is active this frame...
            if dbg4.status == STARTED:
                # update params
                pass
                # check whether dbg4 has been pressed
                if dbg4.isClicked:
                    if not dbg4.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        dbg4.timesOn.append(dbg4.buttonClock.getTime())
                        dbg4.timesOff.append(dbg4.buttonClock.getTime())
                    elif len(dbg4.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        dbg4.timesOff[-1] = dbg4.buttonClock.getTime()
                    if not dbg4.wasClicked:
                        # end routine when dbg4 is clicked
                        continueRoutine = False
                    if not dbg4.wasClicked:
                        # run callback code when dbg4 is clicked
                        pass
            # take note of whether dbg4 was clicked, so that next frame we know if clicks are new
            dbg4.wasClicked = dbg4.isClicked and dbg4.status == STARTED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=debug_pick,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                debug_pick.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in debug_pick.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "debug_pick" ---
        for thisComponent in debug_pick.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for debug_pick
        debug_pick.tStop = globalClock.getTime(format='float')
        debug_pick.tStopRefresh = tThisFlipGlobal
        thisExp.addData('debug_pick.stopped', debug_pick.tStop)
        debug_loop.addData('dbg1.numClicks', dbg1.numClicks)
        if dbg1.numClicks:
           debug_loop.addData('dbg1.timesOn', dbg1.timesOn)
           debug_loop.addData('dbg1.timesOff', dbg1.timesOff)
        else:
           debug_loop.addData('dbg1.timesOn', "")
           debug_loop.addData('dbg1.timesOff', "")
        debug_loop.addData('dbg2.numClicks', dbg2.numClicks)
        if dbg2.numClicks:
           debug_loop.addData('dbg2.timesOn', dbg2.timesOn)
           debug_loop.addData('dbg2.timesOff', dbg2.timesOff)
        else:
           debug_loop.addData('dbg2.timesOn', "")
           debug_loop.addData('dbg2.timesOff', "")
        debug_loop.addData('dbg3.numClicks', dbg3.numClicks)
        if dbg3.numClicks:
           debug_loop.addData('dbg3.timesOn', dbg3.timesOn)
           debug_loop.addData('dbg3.timesOff', dbg3.timesOff)
        else:
           debug_loop.addData('dbg3.timesOn', "")
           debug_loop.addData('dbg3.timesOff', "")
        debug_loop.addData('dbg4.numClicks', dbg4.numClicks)
        if dbg4.numClicks:
           debug_loop.addData('dbg4.timesOn', dbg4.timesOn)
           debug_loop.addData('dbg4.timesOff', dbg4.timesOff)
        else:
           debug_loop.addData('dbg4.timesOn', "")
           debug_loop.addData('dbg4.timesOff', "")
        # Run 'End Routine' code from code_debug
        for i, b in enumerate([dbg1, dbg2, dbg3, dbg4]):
            if b.numClicks > 0:
                group = i + 1
        
        # the Routine "debug_pick" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisDebug_loop as finished
        if hasattr(thisDebug_loop, 'status'):
            thisDebug_loop.status = FINISHED
        # if awaiting a pause, pause now
        if debug_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            debug_loop.status = STARTED
    # completed nDebug repeats of 'debug_loop'
    debug_loop.status = FINISHED
    
    
    # --- Prepare to start Routine "setup" ---
    # create an object to store info about Routine setup
    setup = data.Routine(
        name='setup',
        components=[setup_blank],
    )
    setup.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_setup
    order = 'before' if group in (1, 2) else 'after'
    cost = 'easy' if group in (1, 3) else 'hard'
    nBefore = 1 if order == 'before' else 0
    nAfter = 1 - nBefore
    thisExp.addData('group', group)
    thisExp.addData('order', order)
    thisExp.addData('cost', cost)
    thisExp.addData('debug', nDebug)
    
    # store start times for setup
    setup.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    setup.tStart = globalClock.getTime(format='float')
    setup.status = STARTED
    thisExp.addData('setup.started', setup.tStart)
    setup.maxDuration = None
    # keep track of which components have finished
    setupComponents = setup.components
    for thisComponent in setup.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "setup" ---
    setup.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 0.1:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *setup_blank* updates
        
        # if setup_blank is starting this frame...
        if setup_blank.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            setup_blank.frameNStart = frameN  # exact frame index
            setup_blank.tStart = t  # local t and not account for scr refresh
            setup_blank.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(setup_blank, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'setup_blank.started')
            # update status
            setup_blank.status = STARTED
            setup_blank.setAutoDraw(True)
        
        # if setup_blank is active this frame...
        if setup_blank.status == STARTED:
            # update params
            pass
        
        # if setup_blank is stopping this frame...
        if setup_blank.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > setup_blank.tStartRefresh + 0.1-frameTolerance:
                # keep track of stop time/frame for later
                setup_blank.tStop = t  # not accounting for scr refresh
                setup_blank.tStopRefresh = tThisFlipGlobal  # on global time
                setup_blank.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'setup_blank.stopped')
                # update status
                setup_blank.status = FINISHED
                setup_blank.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=setup,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            setup.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in setup.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "setup" ---
    for thisComponent in setup.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for setup
    setup.tStop = globalClock.getTime(format='float')
    setup.tStopRefresh = tThisFlipGlobal
    thisExp.addData('setup.stopped', setup.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if setup.maxDurationReached:
        routineTimer.addTime(-setup.maxDuration)
    elif setup.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.100000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    tob_block_before = data.TrialHandler2(
        name='tob_block_before',
        nReps=nBefore, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
    )
    thisExp.addLoop(tob_block_before)  # add the loop to the experiment
    thisTob_block_before = tob_block_before.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTob_block_before.rgb)
    if thisTob_block_before != None:
        for paramName in thisTob_block_before:
            globals()[paramName] = thisTob_block_before[paramName]
    
    for thisTob_block_before in tob_block_before:
        tob_block_before.status = STARTED
        if hasattr(thisTob_block_before, 'status'):
            thisTob_block_before.status = STARTED
        currentLoop = tob_block_before
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisTob_block_before.rgb)
        if thisTob_block_before != None:
            for paramName in thisTob_block_before:
                globals()[paramName] = thisTob_block_before[paramName]
        
        # --- Prepare to start Routine "tob_instr_before" ---
        # create an object to store info about Routine tob_instr_before
        tob_instr_before = data.Routine(
            name='tob_instr_before',
            components=[tob_instr_text_before, tob_instr_key_before],
        )
        tob_instr_before.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        tob_instr_text_before.reset()
        # create starting attributes for tob_instr_key_before
        tob_instr_key_before.keys = []
        tob_instr_key_before.rt = []
        _tob_instr_key_before_allKeys = []
        # store start times for tob_instr_before
        tob_instr_before.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        tob_instr_before.tStart = globalClock.getTime(format='float')
        tob_instr_before.status = STARTED
        thisExp.addData('tob_instr_before.started', tob_instr_before.tStart)
        tob_instr_before.maxDuration = None
        # keep track of which components have finished
        tob_instr_beforeComponents = tob_instr_before.components
        for thisComponent in tob_instr_before.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "tob_instr_before" ---
        tob_instr_before.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisTob_block_before, 'status') and thisTob_block_before.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *tob_instr_text_before* updates
            
            # if tob_instr_text_before is starting this frame...
            if tob_instr_text_before.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tob_instr_text_before.frameNStart = frameN  # exact frame index
                tob_instr_text_before.tStart = t  # local t and not account for scr refresh
                tob_instr_text_before.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tob_instr_text_before, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tob_instr_text_before.started')
                # update status
                tob_instr_text_before.status = STARTED
                tob_instr_text_before.setAutoDraw(True)
            
            # if tob_instr_text_before is active this frame...
            if tob_instr_text_before.status == STARTED:
                # update params
                pass
            
            # *tob_instr_key_before* updates
            waitOnFlip = False
            
            # if tob_instr_key_before is starting this frame...
            if tob_instr_key_before.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tob_instr_key_before.frameNStart = frameN  # exact frame index
                tob_instr_key_before.tStart = t  # local t and not account for scr refresh
                tob_instr_key_before.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tob_instr_key_before, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tob_instr_key_before.started')
                # update status
                tob_instr_key_before.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(tob_instr_key_before.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(tob_instr_key_before.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if tob_instr_key_before.status == STARTED and not waitOnFlip:
                theseKeys = tob_instr_key_before.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _tob_instr_key_before_allKeys.extend(theseKeys)
                if len(_tob_instr_key_before_allKeys):
                    tob_instr_key_before.keys = _tob_instr_key_before_allKeys[-1].name  # just the last key pressed
                    tob_instr_key_before.rt = _tob_instr_key_before_allKeys[-1].rt
                    tob_instr_key_before.duration = _tob_instr_key_before_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=tob_instr_before,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                tob_instr_before.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in tob_instr_before.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "tob_instr_before" ---
        for thisComponent in tob_instr_before.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for tob_instr_before
        tob_instr_before.tStop = globalClock.getTime(format='float')
        tob_instr_before.tStopRefresh = tThisFlipGlobal
        thisExp.addData('tob_instr_before.stopped', tob_instr_before.tStop)
        # check responses
        if tob_instr_key_before.keys in ['', [], None]:  # No response was made
            tob_instr_key_before.keys = None
        tob_block_before.addData('tob_instr_key_before.keys',tob_instr_key_before.keys)
        if tob_instr_key_before.keys != None:  # we had a response
            tob_block_before.addData('tob_instr_key_before.rt', tob_instr_key_before.rt)
            tob_block_before.addData('tob_instr_key_before.duration', tob_instr_key_before.duration)
        # the Routine "tob_instr_before" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        tob_items_before = data.TrialHandler2(
            name='tob_items_before',
            nReps=1.0, 
            method='sequential', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions('tobacyk.xlsx'), 
            seed=None, 
        )
        thisExp.addLoop(tob_items_before)  # add the loop to the experiment
        thisTob_items_before = tob_items_before.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTob_items_before.rgb)
        if thisTob_items_before != None:
            for paramName in thisTob_items_before:
                globals()[paramName] = thisTob_items_before[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisTob_items_before in tob_items_before:
            tob_items_before.status = STARTED
            if hasattr(thisTob_items_before, 'status'):
                thisTob_items_before.status = STARTED
            currentLoop = tob_items_before
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisTob_items_before.rgb)
            if thisTob_items_before != None:
                for paramName in thisTob_items_before:
                    globals()[paramName] = thisTob_items_before[paramName]
            
            # --- Prepare to start Routine "tob_item_before" ---
            # create an object to store info about Routine tob_item_before
            tob_item_before = data.Routine(
                name='tob_item_before',
                components=[tob_text_before, tob_slider_before, tob_hint_before, tob_key_before],
            )
            tob_item_before.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            tob_text_before.setText(text)
            tob_slider_before.reset()
            # create starting attributes for tob_key_before
            tob_key_before.keys = []
            tob_key_before.rt = []
            _tob_key_before_allKeys = []
            # Run 'Begin Routine' code from code_tob_before
            resp = None
            slider_seen = None
            key_i = 0
            
            # store start times for tob_item_before
            tob_item_before.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            tob_item_before.tStart = globalClock.getTime(format='float')
            tob_item_before.status = STARTED
            thisExp.addData('tob_item_before.started', tob_item_before.tStart)
            tob_item_before.maxDuration = None
            # keep track of which components have finished
            tob_item_beforeComponents = tob_item_before.components
            for thisComponent in tob_item_before.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "tob_item_before" ---
            tob_item_before.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTob_items_before, 'status') and thisTob_items_before.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *tob_text_before* updates
                
                # if tob_text_before is starting this frame...
                if tob_text_before.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_text_before.frameNStart = frameN  # exact frame index
                    tob_text_before.tStart = t  # local t and not account for scr refresh
                    tob_text_before.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_text_before, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_text_before.started')
                    # update status
                    tob_text_before.status = STARTED
                    tob_text_before.setAutoDraw(True)
                
                # if tob_text_before is active this frame...
                if tob_text_before.status == STARTED:
                    # update params
                    pass
                
                # *tob_slider_before* updates
                
                # if tob_slider_before is starting this frame...
                if tob_slider_before.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_slider_before.frameNStart = frameN  # exact frame index
                    tob_slider_before.tStart = t  # local t and not account for scr refresh
                    tob_slider_before.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_slider_before, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_slider_before.started')
                    # update status
                    tob_slider_before.status = STARTED
                    tob_slider_before.setAutoDraw(True)
                
                # if tob_slider_before is active this frame...
                if tob_slider_before.status == STARTED:
                    # update params
                    pass
                
                # *tob_hint_before* updates
                
                # if tob_hint_before is starting this frame...
                if tob_hint_before.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_hint_before.frameNStart = frameN  # exact frame index
                    tob_hint_before.tStart = t  # local t and not account for scr refresh
                    tob_hint_before.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_hint_before, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_hint_before.started')
                    # update status
                    tob_hint_before.status = STARTED
                    tob_hint_before.setAutoDraw(True)
                
                # if tob_hint_before is active this frame...
                if tob_hint_before.status == STARTED:
                    # update params
                    pass
                
                # *tob_key_before* updates
                waitOnFlip = False
                
                # if tob_key_before is starting this frame...
                if tob_key_before.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_key_before.frameNStart = frameN  # exact frame index
                    tob_key_before.tStart = t  # local t and not account for scr refresh
                    tob_key_before.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_key_before, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_key_before.started')
                    # update status
                    tob_key_before.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(tob_key_before.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(tob_key_before.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if tob_key_before.status == STARTED and not waitOnFlip:
                    theseKeys = tob_key_before.getKeys(keyList=['left','right','space','1','2','3','4','5','6','7'], ignoreKeys=["escape"], waitRelease=False)
                    _tob_key_before_allKeys.extend(theseKeys)
                    if len(_tob_key_before_allKeys):
                        tob_key_before.keys = _tob_key_before_allKeys[-1].name  # just the last key pressed
                        tob_key_before.rt = _tob_key_before_allKeys[-1].rt
                        tob_key_before.duration = _tob_key_before_allKeys[-1].duration
                # Run 'Each Frame' code from code_tob_before
                _r = tob_slider_before.getRating()
                if _r is not None and _r != slider_seen:
                    slider_seen = _r
                    resp = int(round(_r))
                while key_i < len(_tob_key_before_allKeys):
                    _k = _tob_key_before_allKeys[key_i].name
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
                    tob_slider_before.markerPos = resp
                
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=tob_item_before,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    tob_item_before.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in tob_item_before.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "tob_item_before" ---
            for thisComponent in tob_item_before.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for tob_item_before
            tob_item_before.tStop = globalClock.getTime(format='float')
            tob_item_before.tStopRefresh = tThisFlipGlobal
            thisExp.addData('tob_item_before.stopped', tob_item_before.tStop)
            tob_items_before.addData('tob_slider_before.response', tob_slider_before.getRating())
            tob_items_before.addData('tob_slider_before.rt', tob_slider_before.getRT())
            # Run 'End Routine' code from code_tob_before
            tob_resp[int(item_n)] = resp
            thisExp.addData('tob_' + str(item_n), resp)
            thisExp.addData('tob_rt_' + str(item_n), t)
            
            # the Routine "tob_item_before" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            # mark thisTob_items_before as finished
            if hasattr(thisTob_items_before, 'status'):
                thisTob_items_before.status = FINISHED
            # if awaiting a pause, pause now
            if tob_items_before.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                tob_items_before.status = STARTED
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'tob_items_before'
        tob_items_before.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # mark thisTob_block_before as finished
        if hasattr(thisTob_block_before, 'status'):
            thisTob_block_before.status = FINISHED
        # if awaiting a pause, pause now
        if tob_block_before.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            tob_block_before.status = STARTED
    # completed nBefore repeats of 'tob_block_before'
    tob_block_before.status = FINISHED
    
    
    # --- Prepare to start Routine "choice_instr" ---
    # create an object to store info about Routine choice_instr
    choice_instr = data.Routine(
        name='choice_instr',
        components=[choice_instr_text, choice_instr_key],
    )
    choice_instr.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_choice_instr
    instr_txt = (TXT_CHOICE_EASY if cost == 'easy' else TXT_CHOICE_HARD) + TXT_CHOICE_TAIL
    
    choice_instr_text.setText(instr_txt)
    # create starting attributes for choice_instr_key
    choice_instr_key.keys = []
    choice_instr_key.rt = []
    _choice_instr_key_allKeys = []
    # store start times for choice_instr
    choice_instr.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    choice_instr.tStart = globalClock.getTime(format='float')
    choice_instr.status = STARTED
    thisExp.addData('choice_instr.started', choice_instr.tStart)
    choice_instr.maxDuration = None
    # keep track of which components have finished
    choice_instrComponents = choice_instr.components
    for thisComponent in choice_instr.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "choice_instr" ---
    choice_instr.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *choice_instr_text* updates
        
        # if choice_instr_text is starting this frame...
        if choice_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choice_instr_text.frameNStart = frameN  # exact frame index
            choice_instr_text.tStart = t  # local t and not account for scr refresh
            choice_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_instr_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'choice_instr_text.started')
            # update status
            choice_instr_text.status = STARTED
            choice_instr_text.setAutoDraw(True)
        
        # if choice_instr_text is active this frame...
        if choice_instr_text.status == STARTED:
            # update params
            pass
        
        # *choice_instr_key* updates
        waitOnFlip = False
        
        # if choice_instr_key is starting this frame...
        if choice_instr_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choice_instr_key.frameNStart = frameN  # exact frame index
            choice_instr_key.tStart = t  # local t and not account for scr refresh
            choice_instr_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_instr_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'choice_instr_key.started')
            # update status
            choice_instr_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(choice_instr_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(choice_instr_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if choice_instr_key.status == STARTED and not waitOnFlip:
            theseKeys = choice_instr_key.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _choice_instr_key_allKeys.extend(theseKeys)
            if len(_choice_instr_key_allKeys):
                choice_instr_key.keys = _choice_instr_key_allKeys[-1].name  # just the last key pressed
                choice_instr_key.rt = _choice_instr_key_allKeys[-1].rt
                choice_instr_key.duration = _choice_instr_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=choice_instr,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            choice_instr.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in choice_instr.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "choice_instr" ---
    for thisComponent in choice_instr.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for choice_instr
    choice_instr.tStop = globalClock.getTime(format='float')
    choice_instr.tStopRefresh = tThisFlipGlobal
    thisExp.addData('choice_instr.stopped', choice_instr.tStop)
    # check responses
    if choice_instr_key.keys in ['', [], None]:  # No response was made
        choice_instr_key.keys = None
    thisExp.addData('choice_instr_key.keys',choice_instr_key.keys)
    if choice_instr_key.keys != None:  # we had a response
        thisExp.addData('choice_instr_key.rt', choice_instr_key.rt)
        thisExp.addData('choice_instr_key.duration', choice_instr_key.duration)
    thisExp.nextEntry()
    # the Routine "choice_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "choice" ---
    # create an object to store info about Routine choice
    choice = data.Routine(
        name='choice',
        components=[choice_head, btn_magic, btn_skip, choice_keys, choice_hint],
    )
    choice.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_choice
    choice_resp = ''
    choice_rt = -1
    end_at = None
    event.clearEvents()
    
    # reset btn_magic to account for continued clicks & clear times on/off
    btn_magic.reset()
    # reset btn_skip to account for continued clicks & clear times on/off
    btn_skip.reset()
    # store start times for choice
    choice.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    choice.tStart = globalClock.getTime(format='float')
    choice.status = STARTED
    thisExp.addData('choice.started', choice.tStart)
    choice.maxDuration = None
    # keep track of which components have finished
    choiceComponents = choice.components
    for thisComponent in choice.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "choice" ---
    choice.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code_choice
        if end_at is None:
            keys = event.getKeys(keyList=['left', 'right'])
            if 'left' in keys or btn_magic.numClicks > 0:
                choice_resp = 'magic'; choice_rt = t; end_at = t + 0.35
                btn_magic.fillColor = 'goldenrod'
            elif 'right' in keys or btn_skip.numClicks > 0:
                choice_resp = 'skip'; choice_rt = t; end_at = t + 0.35
                btn_skip.fillColor = 'goldenrod'
        elif t >= end_at:
            continueRoutine = False
        
        
        # *choice_head* updates
        
        # if choice_head is starting this frame...
        if choice_head.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choice_head.frameNStart = frameN  # exact frame index
            choice_head.tStart = t  # local t and not account for scr refresh
            choice_head.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_head, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'choice_head.started')
            # update status
            choice_head.status = STARTED
            choice_head.setAutoDraw(True)
        
        # if choice_head is active this frame...
        if choice_head.status == STARTED:
            # update params
            pass
        # *btn_magic* updates
        
        # if btn_magic is starting this frame...
        if btn_magic.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            btn_magic.frameNStart = frameN  # exact frame index
            btn_magic.tStart = t  # local t and not account for scr refresh
            btn_magic.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_magic, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_magic.started')
            # update status
            btn_magic.status = STARTED
            win.callOnFlip(btn_magic.buttonClock.reset)
            btn_magic.setAutoDraw(True)
        
        # if btn_magic is active this frame...
        if btn_magic.status == STARTED:
            # update params
            pass
            # check whether btn_magic has been pressed
            if btn_magic.isClicked:
                if not btn_magic.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    btn_magic.timesOn.append(btn_magic.buttonClock.getTime())
                    btn_magic.timesOff.append(btn_magic.buttonClock.getTime())
                elif len(btn_magic.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    btn_magic.timesOff[-1] = btn_magic.buttonClock.getTime()
                if not btn_magic.wasClicked:
                    # run callback code when btn_magic is clicked
                    pass
        # take note of whether btn_magic was clicked, so that next frame we know if clicks are new
        btn_magic.wasClicked = btn_magic.isClicked and btn_magic.status == STARTED
        # *btn_skip* updates
        
        # if btn_skip is starting this frame...
        if btn_skip.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            btn_skip.frameNStart = frameN  # exact frame index
            btn_skip.tStart = t  # local t and not account for scr refresh
            btn_skip.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_skip, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_skip.started')
            # update status
            btn_skip.status = STARTED
            win.callOnFlip(btn_skip.buttonClock.reset)
            btn_skip.setAutoDraw(True)
        
        # if btn_skip is active this frame...
        if btn_skip.status == STARTED:
            # update params
            pass
            # check whether btn_skip has been pressed
            if btn_skip.isClicked:
                if not btn_skip.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    btn_skip.timesOn.append(btn_skip.buttonClock.getTime())
                    btn_skip.timesOff.append(btn_skip.buttonClock.getTime())
                elif len(btn_skip.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    btn_skip.timesOff[-1] = btn_skip.buttonClock.getTime()
                if not btn_skip.wasClicked:
                    # run callback code when btn_skip is clicked
                    pass
        # take note of whether btn_skip was clicked, so that next frame we know if clicks are new
        btn_skip.wasClicked = btn_skip.isClicked and btn_skip.status == STARTED
        
        # *choice_keys* updates
        
        # if choice_keys is starting this frame...
        if choice_keys.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choice_keys.frameNStart = frameN  # exact frame index
            choice_keys.tStart = t  # local t and not account for scr refresh
            choice_keys.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_keys, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'choice_keys.started')
            # update status
            choice_keys.status = STARTED
            choice_keys.setAutoDraw(True)
        
        # if choice_keys is active this frame...
        if choice_keys.status == STARTED:
            # update params
            pass
        
        # *choice_hint* updates
        
        # if choice_hint is starting this frame...
        if choice_hint.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choice_hint.frameNStart = frameN  # exact frame index
            choice_hint.tStart = t  # local t and not account for scr refresh
            choice_hint.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_hint, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'choice_hint.started')
            # update status
            choice_hint.status = STARTED
            choice_hint.setAutoDraw(True)
        
        # if choice_hint is active this frame...
        if choice_hint.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=choice,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            choice.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in choice.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "choice" ---
    for thisComponent in choice.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for choice
    choice.tStop = globalClock.getTime(format='float')
    choice.tStopRefresh = tThisFlipGlobal
    thisExp.addData('choice.stopped', choice.tStop)
    # Run 'End Routine' code from code_choice
    nEffort = 1 if choice_resp == 'magic' else 0
    thisExp.addData('choice', choice_resp)
    thisExp.addData('choice_rt', choice_rt)
    
    thisExp.addData('btn_magic.numClicks', btn_magic.numClicks)
    if btn_magic.numClicks:
       thisExp.addData('btn_magic.timesOn', btn_magic.timesOn)
       thisExp.addData('btn_magic.timesOff', btn_magic.timesOff)
    else:
       thisExp.addData('btn_magic.timesOn', "")
       thisExp.addData('btn_magic.timesOff', "")
    thisExp.addData('btn_skip.numClicks', btn_skip.numClicks)
    if btn_skip.numClicks:
       thisExp.addData('btn_skip.timesOn', btn_skip.timesOn)
       thisExp.addData('btn_skip.timesOff', btn_skip.timesOff)
    else:
       thisExp.addData('btn_skip.timesOn', "")
       thisExp.addData('btn_skip.timesOff', "")
    thisExp.nextEntry()
    # the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    effort_loop = data.TrialHandler2(
        name='effort_loop',
        nReps=nEffort, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
    )
    thisExp.addLoop(effort_loop)  # add the loop to the experiment
    thisEffort_loop = effort_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisEffort_loop.rgb)
    if thisEffort_loop != None:
        for paramName in thisEffort_loop:
            globals()[paramName] = thisEffort_loop[paramName]
    
    for thisEffort_loop in effort_loop:
        effort_loop.status = STARTED
        if hasattr(thisEffort_loop, 'status'):
            thisEffort_loop.status = STARTED
        currentLoop = effort_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisEffort_loop.rgb)
        if thisEffort_loop != None:
            for paramName in thisEffort_loop:
                globals()[paramName] = thisEffort_loop[paramName]
        
        # --- Prepare to start Routine "effort" ---
        # create an object to store info about Routine effort
        effort = data.Routine(
            name='effort',
            components=[effort_text, effort_box, effort_done],
        )
        effort.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        effort_box.reset()
        # reset effort_done to account for continued clicks & clear times on/off
        effort_done.reset()
        # store start times for effort
        effort.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        effort.tStart = globalClock.getTime(format='float')
        effort.status = STARTED
        thisExp.addData('effort.started', effort.tStart)
        effort.maxDuration = None
        # keep track of which components have finished
        effortComponents = effort.components
        for thisComponent in effort.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "effort" ---
        effort.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisEffort_loop, 'status') and thisEffort_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *effort_text* updates
            
            # if effort_text is starting this frame...
            if effort_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                effort_text.frameNStart = frameN  # exact frame index
                effort_text.tStart = t  # local t and not account for scr refresh
                effort_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(effort_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'effort_text.started')
                # update status
                effort_text.status = STARTED
                effort_text.setAutoDraw(True)
            
            # if effort_text is active this frame...
            if effort_text.status == STARTED:
                # update params
                pass
            
            # *effort_box* updates
            
            # if effort_box is starting this frame...
            if effort_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                effort_box.frameNStart = frameN  # exact frame index
                effort_box.tStart = t  # local t and not account for scr refresh
                effort_box.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(effort_box, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'effort_box.started')
                # update status
                effort_box.status = STARTED
                effort_box.setAutoDraw(True)
            
            # if effort_box is active this frame...
            if effort_box.status == STARTED:
                # update params
                pass
            # *effort_done* updates
            
            # if effort_done is starting this frame...
            if effort_done.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                effort_done.frameNStart = frameN  # exact frame index
                effort_done.tStart = t  # local t and not account for scr refresh
                effort_done.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(effort_done, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'effort_done.started')
                # update status
                effort_done.status = STARTED
                win.callOnFlip(effort_done.buttonClock.reset)
                effort_done.setAutoDraw(True)
            
            # if effort_done is active this frame...
            if effort_done.status == STARTED:
                # update params
                pass
                # check whether effort_done has been pressed
                if effort_done.isClicked:
                    if not effort_done.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        effort_done.timesOn.append(effort_done.buttonClock.getTime())
                        effort_done.timesOff.append(effort_done.buttonClock.getTime())
                    elif len(effort_done.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        effort_done.timesOff[-1] = effort_done.buttonClock.getTime()
                    if not effort_done.wasClicked:
                        # end routine when effort_done is clicked
                        continueRoutine = False
                    if not effort_done.wasClicked:
                        # run callback code when effort_done is clicked
                        pass
            # take note of whether effort_done was clicked, so that next frame we know if clicks are new
            effort_done.wasClicked = effort_done.isClicked and effort_done.status == STARTED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=effort,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                effort.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in effort.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "effort" ---
        for thisComponent in effort.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for effort
        effort.tStop = globalClock.getTime(format='float')
        effort.tStopRefresh = tThisFlipGlobal
        thisExp.addData('effort.stopped', effort.tStop)
        effort_loop.addData('effort_box.text',effort_box.text)
        effort_loop.addData('effort_done.numClicks', effort_done.numClicks)
        if effort_done.numClicks:
           effort_loop.addData('effort_done.timesOn', effort_done.timesOn)
           effort_loop.addData('effort_done.timesOff', effort_done.timesOff)
        else:
           effort_loop.addData('effort_done.timesOn', "")
           effort_loop.addData('effort_done.timesOff', "")
        # Run 'End Routine' code from code_effort
        txt = effort_box.text or ''
        thisExp.addData('effort_len', len(txt))
        thisExp.addData('effort_m', txt.lower().count('м'))
        thisExp.addData('effort_time', t)
        
        # the Routine "effort" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisEffort_loop as finished
        if hasattr(thisEffort_loop, 'status'):
            thisEffort_loop.status = FINISHED
        # if awaiting a pause, pause now
        if effort_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            effort_loop.status = STARTED
    # completed nEffort repeats of 'effort_loop'
    effort_loop.status = FINISHED
    
    
    # --- Prepare to start Routine "rating" ---
    # create an object to store info about Routine rating
    rating = data.Routine(
        name='rating',
        components=[rating_text, lbl_imp, importance, lbl_ctrl, control, rating_done],
    )
    rating.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    importance.reset()
    control.reset()
    # reset rating_done to account for continued clicks & clear times on/off
    rating_done.reset()
    # store start times for rating
    rating.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    rating.tStart = globalClock.getTime(format='float')
    rating.status = STARTED
    thisExp.addData('rating.started', rating.tStart)
    rating.maxDuration = None
    # keep track of which components have finished
    ratingComponents = rating.components
    for thisComponent in rating.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "rating" ---
    rating.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *rating_text* updates
        
        # if rating_text is starting this frame...
        if rating_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_text.frameNStart = frameN  # exact frame index
            rating_text.tStart = t  # local t and not account for scr refresh
            rating_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'rating_text.started')
            # update status
            rating_text.status = STARTED
            rating_text.setAutoDraw(True)
        
        # if rating_text is active this frame...
        if rating_text.status == STARTED:
            # update params
            pass
        
        # *lbl_imp* updates
        
        # if lbl_imp is starting this frame...
        if lbl_imp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            lbl_imp.frameNStart = frameN  # exact frame index
            lbl_imp.tStart = t  # local t and not account for scr refresh
            lbl_imp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(lbl_imp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'lbl_imp.started')
            # update status
            lbl_imp.status = STARTED
            lbl_imp.setAutoDraw(True)
        
        # if lbl_imp is active this frame...
        if lbl_imp.status == STARTED:
            # update params
            pass
        
        # *importance* updates
        
        # if importance is starting this frame...
        if importance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            importance.frameNStart = frameN  # exact frame index
            importance.tStart = t  # local t and not account for scr refresh
            importance.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(importance, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'importance.started')
            # update status
            importance.status = STARTED
            importance.setAutoDraw(True)
        
        # if importance is active this frame...
        if importance.status == STARTED:
            # update params
            pass
        
        # *lbl_ctrl* updates
        
        # if lbl_ctrl is starting this frame...
        if lbl_ctrl.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            lbl_ctrl.frameNStart = frameN  # exact frame index
            lbl_ctrl.tStart = t  # local t and not account for scr refresh
            lbl_ctrl.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(lbl_ctrl, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'lbl_ctrl.started')
            # update status
            lbl_ctrl.status = STARTED
            lbl_ctrl.setAutoDraw(True)
        
        # if lbl_ctrl is active this frame...
        if lbl_ctrl.status == STARTED:
            # update params
            pass
        
        # *control* updates
        
        # if control is starting this frame...
        if control.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            control.frameNStart = frameN  # exact frame index
            control.tStart = t  # local t and not account for scr refresh
            control.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(control, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'control.started')
            # update status
            control.status = STARTED
            control.setAutoDraw(True)
        
        # if control is active this frame...
        if control.status == STARTED:
            # update params
            pass
        # *rating_done* updates
        
        # if rating_done is starting this frame...
        if rating_done.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            rating_done.frameNStart = frameN  # exact frame index
            rating_done.tStart = t  # local t and not account for scr refresh
            rating_done.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_done, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'rating_done.started')
            # update status
            rating_done.status = STARTED
            win.callOnFlip(rating_done.buttonClock.reset)
            rating_done.setAutoDraw(True)
        
        # if rating_done is active this frame...
        if rating_done.status == STARTED:
            # update params
            pass
            # check whether rating_done has been pressed
            if rating_done.isClicked:
                if not rating_done.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    rating_done.timesOn.append(rating_done.buttonClock.getTime())
                    rating_done.timesOff.append(rating_done.buttonClock.getTime())
                elif len(rating_done.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    rating_done.timesOff[-1] = rating_done.buttonClock.getTime()
                if not rating_done.wasClicked:
                    # end routine when rating_done is clicked
                    continueRoutine = False
                if not rating_done.wasClicked:
                    # run callback code when rating_done is clicked
                    pass
        # take note of whether rating_done was clicked, so that next frame we know if clicks are new
        rating_done.wasClicked = rating_done.isClicked and rating_done.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=rating,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            rating.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in rating.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "rating" ---
    for thisComponent in rating.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for rating
    rating.tStop = globalClock.getTime(format='float')
    rating.tStopRefresh = tThisFlipGlobal
    thisExp.addData('rating.stopped', rating.tStop)
    thisExp.addData('importance.response', importance.getRating())
    thisExp.addData('importance.rt', importance.getRT())
    thisExp.addData('control.response', control.getRating())
    thisExp.addData('control.rt', control.getRT())
    thisExp.addData('rating_done.numClicks', rating_done.numClicks)
    if rating_done.numClicks:
       thisExp.addData('rating_done.timesOn', rating_done.timesOn)
       thisExp.addData('rating_done.timesOff', rating_done.timesOff)
    else:
       thisExp.addData('rating_done.timesOn', "")
       thisExp.addData('rating_done.timesOff', "")
    thisExp.nextEntry()
    # the Routine "rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    tob_block_after = data.TrialHandler2(
        name='tob_block_after',
        nReps=nAfter, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
    )
    thisExp.addLoop(tob_block_after)  # add the loop to the experiment
    thisTob_block_after = tob_block_after.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTob_block_after.rgb)
    if thisTob_block_after != None:
        for paramName in thisTob_block_after:
            globals()[paramName] = thisTob_block_after[paramName]
    
    for thisTob_block_after in tob_block_after:
        tob_block_after.status = STARTED
        if hasattr(thisTob_block_after, 'status'):
            thisTob_block_after.status = STARTED
        currentLoop = tob_block_after
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisTob_block_after.rgb)
        if thisTob_block_after != None:
            for paramName in thisTob_block_after:
                globals()[paramName] = thisTob_block_after[paramName]
        
        # --- Prepare to start Routine "tob_instr_after" ---
        # create an object to store info about Routine tob_instr_after
        tob_instr_after = data.Routine(
            name='tob_instr_after',
            components=[tob_instr_text_after, tob_instr_key_after],
        )
        tob_instr_after.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        tob_instr_text_after.reset()
        # create starting attributes for tob_instr_key_after
        tob_instr_key_after.keys = []
        tob_instr_key_after.rt = []
        _tob_instr_key_after_allKeys = []
        # store start times for tob_instr_after
        tob_instr_after.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        tob_instr_after.tStart = globalClock.getTime(format='float')
        tob_instr_after.status = STARTED
        thisExp.addData('tob_instr_after.started', tob_instr_after.tStart)
        tob_instr_after.maxDuration = None
        # keep track of which components have finished
        tob_instr_afterComponents = tob_instr_after.components
        for thisComponent in tob_instr_after.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "tob_instr_after" ---
        tob_instr_after.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisTob_block_after, 'status') and thisTob_block_after.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *tob_instr_text_after* updates
            
            # if tob_instr_text_after is starting this frame...
            if tob_instr_text_after.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tob_instr_text_after.frameNStart = frameN  # exact frame index
                tob_instr_text_after.tStart = t  # local t and not account for scr refresh
                tob_instr_text_after.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tob_instr_text_after, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tob_instr_text_after.started')
                # update status
                tob_instr_text_after.status = STARTED
                tob_instr_text_after.setAutoDraw(True)
            
            # if tob_instr_text_after is active this frame...
            if tob_instr_text_after.status == STARTED:
                # update params
                pass
            
            # *tob_instr_key_after* updates
            waitOnFlip = False
            
            # if tob_instr_key_after is starting this frame...
            if tob_instr_key_after.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tob_instr_key_after.frameNStart = frameN  # exact frame index
                tob_instr_key_after.tStart = t  # local t and not account for scr refresh
                tob_instr_key_after.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tob_instr_key_after, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tob_instr_key_after.started')
                # update status
                tob_instr_key_after.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(tob_instr_key_after.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(tob_instr_key_after.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if tob_instr_key_after.status == STARTED and not waitOnFlip:
                theseKeys = tob_instr_key_after.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _tob_instr_key_after_allKeys.extend(theseKeys)
                if len(_tob_instr_key_after_allKeys):
                    tob_instr_key_after.keys = _tob_instr_key_after_allKeys[-1].name  # just the last key pressed
                    tob_instr_key_after.rt = _tob_instr_key_after_allKeys[-1].rt
                    tob_instr_key_after.duration = _tob_instr_key_after_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=tob_instr_after,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                tob_instr_after.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in tob_instr_after.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "tob_instr_after" ---
        for thisComponent in tob_instr_after.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for tob_instr_after
        tob_instr_after.tStop = globalClock.getTime(format='float')
        tob_instr_after.tStopRefresh = tThisFlipGlobal
        thisExp.addData('tob_instr_after.stopped', tob_instr_after.tStop)
        # check responses
        if tob_instr_key_after.keys in ['', [], None]:  # No response was made
            tob_instr_key_after.keys = None
        tob_block_after.addData('tob_instr_key_after.keys',tob_instr_key_after.keys)
        if tob_instr_key_after.keys != None:  # we had a response
            tob_block_after.addData('tob_instr_key_after.rt', tob_instr_key_after.rt)
            tob_block_after.addData('tob_instr_key_after.duration', tob_instr_key_after.duration)
        # the Routine "tob_instr_after" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        tob_items_after = data.TrialHandler2(
            name='tob_items_after',
            nReps=1.0, 
            method='sequential', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions('tobacyk.xlsx'), 
            seed=None, 
        )
        thisExp.addLoop(tob_items_after)  # add the loop to the experiment
        thisTob_items_after = tob_items_after.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTob_items_after.rgb)
        if thisTob_items_after != None:
            for paramName in thisTob_items_after:
                globals()[paramName] = thisTob_items_after[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisTob_items_after in tob_items_after:
            tob_items_after.status = STARTED
            if hasattr(thisTob_items_after, 'status'):
                thisTob_items_after.status = STARTED
            currentLoop = tob_items_after
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisTob_items_after.rgb)
            if thisTob_items_after != None:
                for paramName in thisTob_items_after:
                    globals()[paramName] = thisTob_items_after[paramName]
            
            # --- Prepare to start Routine "tob_item_after" ---
            # create an object to store info about Routine tob_item_after
            tob_item_after = data.Routine(
                name='tob_item_after',
                components=[tob_text_after, tob_slider_after, tob_hint_after, tob_key_after],
            )
            tob_item_after.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            tob_text_after.setText(text)
            tob_slider_after.reset()
            # create starting attributes for tob_key_after
            tob_key_after.keys = []
            tob_key_after.rt = []
            _tob_key_after_allKeys = []
            # Run 'Begin Routine' code from code_tob_after
            resp = None
            slider_seen = None
            key_i = 0
            
            # store start times for tob_item_after
            tob_item_after.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            tob_item_after.tStart = globalClock.getTime(format='float')
            tob_item_after.status = STARTED
            thisExp.addData('tob_item_after.started', tob_item_after.tStart)
            tob_item_after.maxDuration = None
            # keep track of which components have finished
            tob_item_afterComponents = tob_item_after.components
            for thisComponent in tob_item_after.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "tob_item_after" ---
            tob_item_after.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTob_items_after, 'status') and thisTob_items_after.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *tob_text_after* updates
                
                # if tob_text_after is starting this frame...
                if tob_text_after.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_text_after.frameNStart = frameN  # exact frame index
                    tob_text_after.tStart = t  # local t and not account for scr refresh
                    tob_text_after.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_text_after, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_text_after.started')
                    # update status
                    tob_text_after.status = STARTED
                    tob_text_after.setAutoDraw(True)
                
                # if tob_text_after is active this frame...
                if tob_text_after.status == STARTED:
                    # update params
                    pass
                
                # *tob_slider_after* updates
                
                # if tob_slider_after is starting this frame...
                if tob_slider_after.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_slider_after.frameNStart = frameN  # exact frame index
                    tob_slider_after.tStart = t  # local t and not account for scr refresh
                    tob_slider_after.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_slider_after, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_slider_after.started')
                    # update status
                    tob_slider_after.status = STARTED
                    tob_slider_after.setAutoDraw(True)
                
                # if tob_slider_after is active this frame...
                if tob_slider_after.status == STARTED:
                    # update params
                    pass
                
                # *tob_hint_after* updates
                
                # if tob_hint_after is starting this frame...
                if tob_hint_after.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_hint_after.frameNStart = frameN  # exact frame index
                    tob_hint_after.tStart = t  # local t and not account for scr refresh
                    tob_hint_after.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_hint_after, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_hint_after.started')
                    # update status
                    tob_hint_after.status = STARTED
                    tob_hint_after.setAutoDraw(True)
                
                # if tob_hint_after is active this frame...
                if tob_hint_after.status == STARTED:
                    # update params
                    pass
                
                # *tob_key_after* updates
                waitOnFlip = False
                
                # if tob_key_after is starting this frame...
                if tob_key_after.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tob_key_after.frameNStart = frameN  # exact frame index
                    tob_key_after.tStart = t  # local t and not account for scr refresh
                    tob_key_after.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tob_key_after, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'tob_key_after.started')
                    # update status
                    tob_key_after.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(tob_key_after.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(tob_key_after.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if tob_key_after.status == STARTED and not waitOnFlip:
                    theseKeys = tob_key_after.getKeys(keyList=['left','right','space','1','2','3','4','5','6','7'], ignoreKeys=["escape"], waitRelease=False)
                    _tob_key_after_allKeys.extend(theseKeys)
                    if len(_tob_key_after_allKeys):
                        tob_key_after.keys = _tob_key_after_allKeys[-1].name  # just the last key pressed
                        tob_key_after.rt = _tob_key_after_allKeys[-1].rt
                        tob_key_after.duration = _tob_key_after_allKeys[-1].duration
                # Run 'Each Frame' code from code_tob_after
                _r = tob_slider_after.getRating()
                if _r is not None and _r != slider_seen:
                    slider_seen = _r
                    resp = int(round(_r))
                while key_i < len(_tob_key_after_allKeys):
                    _k = _tob_key_after_allKeys[key_i].name
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
                    tob_slider_after.markerPos = resp
                
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=tob_item_after,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    tob_item_after.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in tob_item_after.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "tob_item_after" ---
            for thisComponent in tob_item_after.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for tob_item_after
            tob_item_after.tStop = globalClock.getTime(format='float')
            tob_item_after.tStopRefresh = tThisFlipGlobal
            thisExp.addData('tob_item_after.stopped', tob_item_after.tStop)
            tob_items_after.addData('tob_slider_after.response', tob_slider_after.getRating())
            tob_items_after.addData('tob_slider_after.rt', tob_slider_after.getRT())
            # Run 'End Routine' code from code_tob_after
            tob_resp[int(item_n)] = resp
            thisExp.addData('tob_' + str(item_n), resp)
            thisExp.addData('tob_rt_' + str(item_n), t)
            
            # the Routine "tob_item_after" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            # mark thisTob_items_after as finished
            if hasattr(thisTob_items_after, 'status'):
                thisTob_items_after.status = FINISHED
            # if awaiting a pause, pause now
            if tob_items_after.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                tob_items_after.status = STARTED
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'tob_items_after'
        tob_items_after.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # mark thisTob_block_after as finished
        if hasattr(thisTob_block_after, 'status'):
            thisTob_block_after.status = FINISHED
        # if awaiting a pause, pause now
        if tob_block_after.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            tob_block_after.status = STARTED
    # completed nAfter repeats of 'tob_block_after'
    tob_block_after.status = FINISHED
    
    
    # --- Prepare to start Routine "suspicion" ---
    # create an object to store info about Routine suspicion
    suspicion = data.Routine(
        name='suspicion',
        components=[susp_text, susp_box, susp_done],
    )
    suspicion.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    susp_box.reset()
    # reset susp_done to account for continued clicks & clear times on/off
    susp_done.reset()
    # store start times for suspicion
    suspicion.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    suspicion.tStart = globalClock.getTime(format='float')
    suspicion.status = STARTED
    thisExp.addData('suspicion.started', suspicion.tStart)
    suspicion.maxDuration = None
    # keep track of which components have finished
    suspicionComponents = suspicion.components
    for thisComponent in suspicion.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "suspicion" ---
    suspicion.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *susp_text* updates
        
        # if susp_text is starting this frame...
        if susp_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            susp_text.frameNStart = frameN  # exact frame index
            susp_text.tStart = t  # local t and not account for scr refresh
            susp_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(susp_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'susp_text.started')
            # update status
            susp_text.status = STARTED
            susp_text.setAutoDraw(True)
        
        # if susp_text is active this frame...
        if susp_text.status == STARTED:
            # update params
            pass
        
        # *susp_box* updates
        
        # if susp_box is starting this frame...
        if susp_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            susp_box.frameNStart = frameN  # exact frame index
            susp_box.tStart = t  # local t and not account for scr refresh
            susp_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(susp_box, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'susp_box.started')
            # update status
            susp_box.status = STARTED
            susp_box.setAutoDraw(True)
        
        # if susp_box is active this frame...
        if susp_box.status == STARTED:
            # update params
            pass
        # *susp_done* updates
        
        # if susp_done is starting this frame...
        if susp_done.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            susp_done.frameNStart = frameN  # exact frame index
            susp_done.tStart = t  # local t and not account for scr refresh
            susp_done.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(susp_done, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'susp_done.started')
            # update status
            susp_done.status = STARTED
            win.callOnFlip(susp_done.buttonClock.reset)
            susp_done.setAutoDraw(True)
        
        # if susp_done is active this frame...
        if susp_done.status == STARTED:
            # update params
            pass
            # check whether susp_done has been pressed
            if susp_done.isClicked:
                if not susp_done.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    susp_done.timesOn.append(susp_done.buttonClock.getTime())
                    susp_done.timesOff.append(susp_done.buttonClock.getTime())
                elif len(susp_done.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    susp_done.timesOff[-1] = susp_done.buttonClock.getTime()
                if not susp_done.wasClicked:
                    # end routine when susp_done is clicked
                    continueRoutine = False
                if not susp_done.wasClicked:
                    # run callback code when susp_done is clicked
                    pass
        # take note of whether susp_done was clicked, so that next frame we know if clicks are new
        susp_done.wasClicked = susp_done.isClicked and susp_done.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=suspicion,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            suspicion.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in suspicion.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "suspicion" ---
    for thisComponent in suspicion.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for suspicion
    suspicion.tStop = globalClock.getTime(format='float')
    suspicion.tStopRefresh = tThisFlipGlobal
    thisExp.addData('suspicion.stopped', suspicion.tStop)
    thisExp.addData('susp_box.text',susp_box.text)
    thisExp.addData('susp_done.numClicks', susp_done.numClicks)
    if susp_done.numClicks:
       thisExp.addData('susp_done.timesOn', susp_done.timesOn)
       thisExp.addData('susp_done.timesOff', susp_done.timesOff)
    else:
       thisExp.addData('susp_done.timesOn', "")
       thisExp.addData('susp_done.timesOff', "")
    thisExp.nextEntry()
    # the Routine "suspicion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "row_entry" ---
    # create an object to store info about Routine row_entry
    row_entry = data.Routine(
        name='row_entry',
        components=[row_text, row_box, row_done],
    )
    row_entry.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    row_box.reset()
    # reset row_done to account for continued clicks & clear times on/off
    row_done.reset()
    # store start times for row_entry
    row_entry.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    row_entry.tStart = globalClock.getTime(format='float')
    row_entry.status = STARTED
    thisExp.addData('row_entry.started', row_entry.tStart)
    row_entry.maxDuration = None
    # keep track of which components have finished
    row_entryComponents = row_entry.components
    for thisComponent in row_entry.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "row_entry" ---
    row_entry.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *row_text* updates
        
        # if row_text is starting this frame...
        if row_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            row_text.frameNStart = frameN  # exact frame index
            row_text.tStart = t  # local t and not account for scr refresh
            row_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(row_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'row_text.started')
            # update status
            row_text.status = STARTED
            row_text.setAutoDraw(True)
        
        # if row_text is active this frame...
        if row_text.status == STARTED:
            # update params
            pass
        
        # *row_box* updates
        
        # if row_box is starting this frame...
        if row_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            row_box.frameNStart = frameN  # exact frame index
            row_box.tStart = t  # local t and not account for scr refresh
            row_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(row_box, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'row_box.started')
            # update status
            row_box.status = STARTED
            row_box.setAutoDraw(True)
        
        # if row_box is active this frame...
        if row_box.status == STARTED:
            # update params
            pass
        # *row_done* updates
        
        # if row_done is starting this frame...
        if row_done.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            row_done.frameNStart = frameN  # exact frame index
            row_done.tStart = t  # local t and not account for scr refresh
            row_done.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(row_done, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'row_done.started')
            # update status
            row_done.status = STARTED
            win.callOnFlip(row_done.buttonClock.reset)
            row_done.setAutoDraw(True)
        
        # if row_done is active this frame...
        if row_done.status == STARTED:
            # update params
            pass
            # check whether row_done has been pressed
            if row_done.isClicked:
                if not row_done.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    row_done.timesOn.append(row_done.buttonClock.getTime())
                    row_done.timesOff.append(row_done.buttonClock.getTime())
                elif len(row_done.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    row_done.timesOff[-1] = row_done.buttonClock.getTime()
                if not row_done.wasClicked:
                    # end routine when row_done is clicked
                    continueRoutine = False
                if not row_done.wasClicked:
                    # run callback code when row_done is clicked
                    pass
        # take note of whether row_done was clicked, so that next frame we know if clicks are new
        row_done.wasClicked = row_done.isClicked and row_done.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=row_entry,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            row_entry.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in row_entry.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "row_entry" ---
    for thisComponent in row_entry.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for row_entry
    row_entry.tStop = globalClock.getTime(format='float')
    row_entry.tStopRefresh = tThisFlipGlobal
    thisExp.addData('row_entry.stopped', row_entry.tStop)
    thisExp.addData('row_box.text',row_box.text)
    thisExp.addData('row_done.numClicks', row_done.numClicks)
    if row_done.numClicks:
       thisExp.addData('row_done.timesOn', row_done.timesOn)
       thisExp.addData('row_done.timesOff', row_done.timesOff)
    else:
       thisExp.addData('row_done.timesOn', "")
       thisExp.addData('row_done.timesOff', "")
    # Run 'End Routine' code from code_row
    thisExp.addData('row_number', (row_box.text or '').strip())
    
    thisExp.nextEntry()
    # the Routine "row_entry" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "thanks" ---
    # create an object to store info about Routine thanks
    thanks = data.Routine(
        name='thanks',
        components=[thanks_text, thanks_key],
    )
    thanks.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_score
    
    SUB = {'TRB': [1, 8, 15, 22], 'Psi': [2, 9, 16, 23], 'Witch': [3, 10, 17, 24], 'Super': [4, 11, 18],
           'Spirit': [5, 12, 19, 25], 'ELF': [6, 13, 20], 'Precog': [7, 14, 21, 26]}
    def _v(i):
        x = tob_resp.get(i)
        if x is None: return None
        x = float(x)
        return 8 - x if i == 23 else x
    vals = [_v(i) for i in range(1, 27)]
    if all(v is not None for v in vals):
        for k, idx in SUB.items():
            thisExp.addData('RPBS_' + k, sum(_v(i) for i in idx))
        thisExp.addData('RPBS_total', sum(vals))
        thisExp.addData('RPBS_mean', sum(vals) / 26.0)
    
    # create starting attributes for thanks_key
    thanks_key.keys = []
    thanks_key.rt = []
    _thanks_key_allKeys = []
    # store start times for thanks
    thanks.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    thanks.tStart = globalClock.getTime(format='float')
    thanks.status = STARTED
    thisExp.addData('thanks.started', thanks.tStart)
    thanks.maxDuration = None
    # keep track of which components have finished
    thanksComponents = thanks.components
    for thisComponent in thanks.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "thanks" ---
    thanks.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *thanks_text* updates
        
        # if thanks_text is starting this frame...
        if thanks_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            thanks_text.frameNStart = frameN  # exact frame index
            thanks_text.tStart = t  # local t and not account for scr refresh
            thanks_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(thanks_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'thanks_text.started')
            # update status
            thanks_text.status = STARTED
            thanks_text.setAutoDraw(True)
        
        # if thanks_text is active this frame...
        if thanks_text.status == STARTED:
            # update params
            pass
        
        # *thanks_key* updates
        waitOnFlip = False
        
        # if thanks_key is starting this frame...
        if thanks_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            thanks_key.frameNStart = frameN  # exact frame index
            thanks_key.tStart = t  # local t and not account for scr refresh
            thanks_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(thanks_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'thanks_key.started')
            # update status
            thanks_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(thanks_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(thanks_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if thanks_key.status == STARTED and not waitOnFlip:
            theseKeys = thanks_key.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _thanks_key_allKeys.extend(theseKeys)
            if len(_thanks_key_allKeys):
                thanks_key.keys = _thanks_key_allKeys[-1].name  # just the last key pressed
                thanks_key.rt = _thanks_key_allKeys[-1].rt
                thanks_key.duration = _thanks_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=thanks,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            thanks.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in thanks.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "thanks" ---
    for thisComponent in thanks.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for thanks
    thanks.tStop = globalClock.getTime(format='float')
    thanks.tStopRefresh = tThisFlipGlobal
    thisExp.addData('thanks.stopped', thanks.tStop)
    # check responses
    if thanks_key.keys in ['', [], None]:  # No response was made
        thanks_key.keys = None
    thisExp.addData('thanks_key.keys',thanks_key.keys)
    if thanks_key.keys != None:  # we had a response
        thisExp.addData('thanks_key.rt', thanks_key.rt)
        thisExp.addData('thanks_key.duration', thanks_key.duration)
    thisExp.nextEntry()
    # the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
