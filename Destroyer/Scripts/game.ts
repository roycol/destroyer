/*
    * file name: game.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: main typescript file for destroyer
    * revision history: _v5
*/

/// <reference path="constants.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="lib/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/destroyer.ts" />
/// <reference path="objects/friend.ts" />
/// <reference path="objects/planet.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />

/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />

// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var game: createjs.Container;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "space", src: "assets/images/space.png" },
    { id: "destroyer", src: "assets/images/destroyer.png" },
    { id: "destroyerCrash", src: "assets/images/destroyerCrash.png" },
    { id: "friend", src: "assets/images/friend.png" },
    { id: "planet", src: "assets/images/planet.png" },
    { id: "collision", src: "assets/audio/collision.wav" },
    { id: "flight", src: "assets/audio/flight.wav" },
    { id: "rescueFriend", src: "assets/audio/rescueFriend.wav" },
    { id: "playNow", src: "assets/images/playnow.png" },
    { id: "tryAgain", src: "assets/images/tryagain.png" }
];


// Game Variables
var space: objects.Space;
var destroyer: objects.Destroyer;
var friend: objects.Friend;
var planets: objects.Planet[] = [];
var destroyerNormal: objects.Destroyer;
var destroyerCrash: objects.Destroyer;   
var currentState: number;
var currentStateFunction;

var scoreboard: objects.Scoreboard;

// Game Managers
var collision: managers.Collision;

// Buttons
var tryAgain: objects.Button;
var playButton: objects.Button;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 
    optimizeForMobile();    

    currentState = constants.MENU_STATE;
    changeState(currentState);

    // in order to use images when destroyer crash planets
    destroyerNormal = new objects.Destroyer(assets.getResult("destroyer"), stage, game, false);
    destroyerCrash = new objects.Destroyer(assets.getResult("destroyerCrash"), stage, game, false);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}


// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '720px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:                        
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}