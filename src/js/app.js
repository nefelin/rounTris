// import * as consts from './constants'
import View from "./View";
import Controller from "./Controller";
import ActionBuffer from "./ActionBuffer";
import SoundManager from "./SoundManager";

const keyLayout = {
    left: { action: "spinDebris", args: "counterClockwise" },
    right: { action: "spinDebris", args: "clockwise" },
    down: { action: "rushDrop", args: null },
    up: { action: "spinBlocks", args: "clockwise" },
    q: { action: "spinBlocks", args: "clockwise" },
    w: { action: "spinBlocks", args: "counterClockwise" },
    y: { action: "debug", args: null}
};

const soundSources = {
    destroy: "./sounds/30937__aust-paul__whatever.wav",
    woosh: "./sounds/25073__freqman__whoosh04.wav",
    blockLanded: "./sounds/26777__junggle__btn402.mp3",
    blockSpun: "./sounds/192273__lebcraftlp__click.wav",
    play_music: "./sounds/384468__frankum__vintage-elecro-pop-loop.mp3",
    space_music: "./sounds/33796__yewbic__ambience03.wav",
    game_over: "./sounds/173859__jivatma07__j1game-over-mono.wav",
    debrisSpun: "./sounds/15545__lagthenoggin__reload_shortened.wav"
};

const controller = new Controller([20, 15, 9]);
const view = new View();

const actionBuffer = new ActionBuffer(keyLayout);
const soundManager = new SoundManager(soundSources, view.startScreen);

controller.setView(view);
controller.setActionBuffer(actionBuffer);
controller.setSoundManager(soundManager);

view.setController(controller);

// console.log('ran ok!');
