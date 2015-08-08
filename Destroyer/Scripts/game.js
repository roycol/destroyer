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
/// <reference path="objects/monster.ts" />
/// <reference path="objects/monstermissile.ts" />
/// <reference path="objects/monsterboss.ts" />
/// <reference path="objects/monsterbossmissile.ts" />
/// <reference path="objects/destroyerweapon.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/introlvl2.ts" />
/// <reference path="states/playlvl2.ts" />
/// <reference path="states/introlvl3.ts" />
/// <reference path="states/playlvl3.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="controls.ts" />
/// <reference path="keys.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var game;
var stats;
var assets;
var manifest = [
    { id: "space", src: "assets/images/space.png" },
    { id: "space2", src: "assets/images/space2.png" },
    { id: "space3", src: "assets/images/space3.png" },
    { id: "destroyer", src: "assets/images/destroyer.png" },
    { id: "destroyerCrash", src: "assets/images/destroyerCrash.png" },
    { id: "destroyerWeapon", src: "assets/images/shuriken.png" },
    { id: "friend", src: "assets/images/friend.png" },
    { id: "planet", src: "assets/images/planet.png" },
    { id: "mercury", src: "assets/images/planet-mercury.png" },
    { id: "playNow", src: "assets/images/playnow.png" },
    { id: "tryAgain", src: "assets/images/tryagain.png" },
    { id: "newGame", src: "assets/images/newgame.png" },
    { id: "monster", src: "assets/images/monster.png" },
    { id: "monsterBoss", src: "assets/images/boss.png" },
    { id: "missile", src: "assets/images/missile.png" },
    { id: "monsterBossMissile", src: "assets/images/missileBoss.png" },
    { id: "monsterMissile", src: "assets/images/monsterMissile.png" },
    { id: "explosion", src: "assets/images/explosion.png" },
    { id: "collision", src: "assets/audio/collision.wav" },
    { id: "flight", src: "assets/audio/flight.wav" },
    { id: "rescueFriend", src: "assets/audio/rescueFriend.wav" },
    { id: "growl", src: "assets/audio/monster.wav" },
    { id: "boss", src: "assets/audio/monsterBoss.wav" },
    { id: "fanfare", src: "assets/audio/fanfare.wav" },
    { id: "ahh", src: "assets/audio/ahh.wav" }
];
// Game Variables
var space;
var destroyer;
var friend;
var monsterBoss;
var planets = [];
var monsters = [];
var destroyerWeapons = [];
var destroyerWeaponNum = 0;
var bossMissileArr = [];
var missileArr = new Array(constants.MONSTER_NUM);
var destroyerNormal;
var destroyerCrash;
var currentState;
var currentStateFunction;
var currentLvl = 1;
var scoreboard;
// Game Managers
var collision;
// Buttons
var tryAgain;
var playButton;
var newGame;
// Game flags
var flagNewDestroyer = true;
var flagSpacebarRepeat = false;
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
    for (var count = 0; count < constants.MONSTER_NUM; count++) {
        missileArr[count] = new Array(constants.MONSTER_MISSILE_NUM);
    }
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
    stats.domElement.style.left = '1000px';
    stats.domElement.style.top = '550px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    currentStateFunction();
    stage.update();
}
function changeState(state) {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE_LEVEL_1:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.PLAY_STATE_LEVEL_2_INTRO:
            // instantiate lvl2 instruction screen
            currentStateFunction = states.introStateLvl2;
            states.introLvl2();
            break;
        case constants.PLAY_STATE_LEVEL_2_PLAY:
            // instantiate lvl2 play screen
            currentStateFunction = states.playStateLvl2;
            states.playLvl2();
            break;
        case constants.PLAY_STATE_LEVEL_3_INTRO:
            // instantiate lvl3 instruction screen
            currentStateFunction = states.introStateLvl3;
            states.introLvl3();
            break;
        case constants.PLAY_STATE_LEVEL_3_PLAY:
            // instantiate lvl3 play screen
            currentStateFunction = states.playStateLvl3;
            states.playLvl3();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}
//# sourceMappingURL=game.js.map