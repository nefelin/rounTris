// import * as consts from './constants'
import {keyLayouts} from "./KeyLayouts";
import View from "./View";
import Controller from "./Controller";
// import ActionBuffer from "./ActionBuffer";
import SoundManager from "./SoundManager";

// const keyLayout = {
//     left: { action: "spinDebris", args: "counterClockwise" },
//     right: { action: "spinDebris", args: "clockwise" },
//     down: { action: "rushDrop", args: null },
//     up: { action: "spinBlocks", args: "clockwise" },
//     q: { action: "spinBlocks", args: "clockwise" },
//     w: { action: "spinBlocks", args: "counterClockwise" },
//     y: { action: "debug", args: null}
// };

const soundSources = {
    rowDestroyed: "./sounds/30937__aust-paul__whatever.wav",
    woosh: "./sounds/25073__freqman__whoosh04.wav",
    blockLanded: "./sounds/26777__junggle__btn402.mp3",
    blockSpun: "./sounds/192273__lebcraftlp__click.wav",
    music_play: "./sounds/384468__frankum__vintage-elecro-pop-loop.mp3",
    darkSpace: "./sounds/33796__yewbic__ambience03.wav",
    gameOver: "./sounds/173859__jivatma07__j1game-over-mono.wav",
    debrisSpun: "./sounds/15545__lagthenoggin__reload_shortened.wav"
};

// true argument designates one view as the canvas who's redraw
// triggers the controllers tick, which then propagates


//TODO have controller
const views = [new View('canvas1')]; //TODO
// const views = [new View('canvas1'), new View('canvas2')];
// const views = [new View('canvas1'), new View('canvas2'),new View('canvas3'), new View('canvas4')]; //TODO


const controller = new Controller({
    views: views,
    keyLayouts: keyLayouts,
    worldDimensions:[20, 15, 9]
});
document.addEventListener("keydown", controller.keyDown) // Make sure controller gets att key presses

// TODO would like to handle this in controller but lack of 'this' object is confusing
for (let view of views){
    view.setController(controller)
}

const soundManager = new SoundManager(soundSources, controller.doneLoading);
controller.setSoundManager(soundManager);


