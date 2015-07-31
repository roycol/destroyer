/*
    * file name: play.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for a state of when game is running
    * revision history: _v3
*/
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/planet.ts" />
/// <reference path="../objects/friend.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/destroyer.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        space.update();
        friend.update();
        destroyer.update(controls);
        for (var count = 0; count < constants.PLANET_NUM; count++) {
            planets[count].update();
        }
        ////add collision manager
        collision.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            destroyer.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        space = new objects.Space(assets.getResult("space"), stage, game);
        friend = new objects.Friend(assets.getResult("friend"), stage, game);
        destroyer = new objects.Destroyer(assets.getResult("destroyer"), stage, game, true);
        // Show Cursor
        stage.cursor = "none";
        // Create multiple clouds
        for (var count = 0; count < constants.PLANET_NUM; count++) {
            planets[count] = new objects.Planet(assets.getResult("planet"), stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = collision = new managers.Collision();
        stage.addChild(game);
        this.assignControls();
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map