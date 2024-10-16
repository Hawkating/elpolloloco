let canvas;
let world;
let keyboard = new Keyboard();
let screen = new Screen('./img/9_intro_outro_screens/start/startscreen_1.png');
let ctxGame;
let mute = false;
let allIntervals = [];

function restart() {
    clearAllIntervals();
    world = null;
    level1enemies = [];
    level1clouds = [];
    level1BackgroundObjects = [];
    level1CollectableObjects = [];
    document.getElementById('replay-button').classList.add('v-hidden');
    document.getElementById('start-button').classList.remove('v-hidden');
    init();
}

/**
 * Initializes the world-object, hides buttons, that are not needed.
 */
function init() {
    document.getElementById('start-button').classList.add('v-hidden');
    document.getElementById('replay-button').classList.add('v-hidden');
    canvas = document.getElementById('canvas');
    fillLevel1enemies();
    fillLevel1clouds();
    fillLevel1BackgroundObjects();
    fillLevel1CollectableObjects();
    world = new World(canvas, keyboard);
    initResponsiveButtons();
}

/**
 * Draws the stills for the canvas. (Start, win, lose)
 * @param {string} imgRef - path to start image, won image or lost image
 */
function drawScreen(imgRef) {
    canvas = document.getElementById('canvas');
    ctxGame = canvas.getContext('2d');
    screen = new Screen(imgRef);
    ctxGame.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctxGame.drawImage(screen['img'], screen['x'], screen['y'], screen['width'], screen['height']);
}

/**
 * Initializes the event listeners for the responsive touchbuttons
 */
function initResponsiveButtons() {
    initResponsiveButtonsArrows();


}

/**
 * Initializes the event listeners for the responsive touchbuttons ARROWS
 */
function initResponsiveButtonsArrows() {
    document.getElementById('arrow-left').addEventListener('touchstart', () => {
        keyboard['LEFT'] = true;
    });
    document.getElementById('arrow-left').addEventListener('touchend', () => {
        keyboard['LEFT'] = false;
    });
    document.getElementById('arrow-right').addEventListener('touchstart', () => {
        keyboard['RIGHT'] = true;
    });
    document.getElementById('arrow-right').addEventListener('touchend', () => {
        keyboard['RIGHT'] = false;
    });
}

/**
 * Initializes the event listeners for the responsive touchbuttons D and SPACEBAR (for throwing and jumping)
 */
function initResponsiveButtonsDiverse() {
    document.getElementById('space').addEventListener('touchstart', () => {
        keyboard['SPACE'] = true;
    });
    document.getElementById('space').addEventListener('touchend', () => {
        keyboard['SPACE'] = false;
    });
    document.getElementById('d-button').addEventListener('touchstart', () => {
        keyboard['D'] = true;
    });
    document.getElementById('d-button').addEventListener('touchend', () => {
        keyboard['D'] = false;
    });
}

/**
 * Initializes the keydown-eventlisteners
 */
window.addEventListener('keydown', (event) => {
    if (event['keyCode'] == 39) {
        keyboard['RIGHT'] = true;
    };
    if (event['keyCode'] == 37) {
        keyboard['LEFT'] = true;
    };
    if (event['keyCode'] == 38) {
        keyboard['UP'] = true;
    };
    if (event['keyCode'] == 40) {
        keyboard['DOWN'] = true;
    };
    if (event['keyCode'] == 32) {
        keyboard['SPACE'] = true;
    };
    if (event['keyCode'] == 68) {
        keyboard['D'] = true;
    };
});

/**
 * Initializes the keyup-eventlisteners
 */
window.addEventListener('keyup', (event) => {
    if (event['keyCode'] == 39) {
        keyboard['RIGHT'] = false;
    };
    if (event['keyCode'] == 37) {
        keyboard['LEFT'] = false;
    };
    if (event['keyCode'] == 38) {
        keyboard['UP'] = false;
    };
    if (event['keyCode'] == 40) {
        keyboard['DOWN'] = false;
    };
    if (event['keyCode'] == 32) {
        keyboard['SPACE'] = false;
    };
    if (event['keyCode'] == 68) {
        keyboard['D'] = false;
    };
});

/**
 * Initializes eventlistener for changing fullscreen to setup the right fullscreenbuttons
 */
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.getElementById('fullscreen-button-exit').classList.add('d-none');
        document.getElementById('fullscreen-button').classList.remove('d-none');
    }
});

/**
 * Opens the fullscreen
 */
function enterFullscreen() {
    element = document.getElementById('fullscreen');
    document.getElementById('fullscreen-button').classList.add('d-none');
    document.getElementById('fullscreen-button-exit').classList.remove('d-none');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * Closes the fullscreen
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById('fullscreen-button-exit').classList.add('d-none');
        document.getElementById('fullscreen-button').classList.remove('d-none');
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * Sets global variable mute true, that all sounds are muted in their own functions
 */
function muteAll() {
    document.getElementById('mute-button-mute').classList.add('d-none');
    document.getElementById('mute-button-unmute').classList.remove('d-none');
    mute = true;
}

/**
 * Sets global variable mute false, that all sounds are unmuted in their own functions
 */
function unmuteAll() {
    document.getElementById('mute-button-unmute').classList.add('d-none');
    document.getElementById('mute-button-mute').classList.remove('d-none');
    mute = false;
}

/**
 * Clears all intervals
 */
function clearAllIntervals() {
    for (let i = 0; i < allIntervals.length; i++) {
        clearInterval(allIntervals[i]);
    };
}