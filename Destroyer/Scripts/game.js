/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/destroyer.ts" />
/// <reference path="objects/friend.ts" />
/// <reference path="objects/planet.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "space", src: "assets/images/space.png" },
    { id: "destroyer", src: "assets/images/destroyer.png" },
    { id: "destroyerCrash", src: "assets/images/destroyerCrash.png" },
    { id: "friend", src: "assets/images/friend.png" },
    { id: "planet", src: "assets/images/planet.png" },
    { id: "collision", src: "assets/audio/collision.wav" },
    { id: "flight", src: "assets/audio/flight.wav" },
    { id: "rescueFriend", src: "assets/audio/rescueFriend.wav" }
];
// Game Variables
var space;
var destroyer;
var friend;
var planets = [];
var scoreboard;
// Game Managers
var collision;
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
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
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
    stats.begin(); // Begin measuring
    space.update();
    destroyer.update();
    friend.update();
    for (var planet = 0; planet < 3; planet++) {
        planets[planet].update();
        collision.check(planets[planet]);
    }
    collision.check(friend);
    scoreboard.update();
    stage.update();
    stats.end(); // end measuring
}
// Our Main Game Function
function main() {
    //add space object to stage
    space = new objects.Space(assets.getResult("space"));
    stage.addChild(space);
    //add friend object to stage
    friend = new objects.Friend(assets.getResult("friend"));
    stage.addChild(friend);
    // add destroyer object to stage
    destroyer = new objects.Destroyer(assets.getResult("destroyer"));
    stage.addChild(destroyer);
    // add 3 planet objects to stage
    for (var planet = 0; planet < 3; planet++) {
        planets[planet] = new objects.Planet(assets.getResult("planet"));
        stage.addChild(planets[planet]);
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();
}
//# sourceMappingURL=game.js.map