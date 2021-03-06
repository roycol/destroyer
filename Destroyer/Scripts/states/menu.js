/*
    * file name: menu.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for a state of when game begins (including instruction)
    * revision history: _v3
*/
/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/destroyer.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/friend.ts" />
/// <reference path="../objects/planet.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        destroyer.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE_LEVEL_1;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function menuState() {
        space.update();
        destroyer.update(controls);
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        var gameInstructionLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        space = new objects.Space(assets.getResult("space"), stage, game);
        destroyer = new objects.Destroyer(assets.getResult("destroyer"), stage, game, true);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Title
        gameNameLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 40, "DESTROYER", constants.LABEL_TITLE_FONT);
        game.addChild(gameNameLabel);
        // Display Game Instruction
        var instruction = "You are the Destroyer!!!\nwho is sent out on a mission\nin a mysterious parallel Universe to save\nYour friends are prisoned in small planets.\nyour friends who are captured and kept\nin prison on small planets but only \nif you can survive the falling asteroids\nand enemy space crafts";
        gameInstructionLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 210, instruction, constants.LABEL_CONTENT_FONT);
        game.addChild(gameInstructionLabel);
        // Display Play Again Button
        playButton = new objects.Button(constants.CANVAS_WIDTH / 2, 410, assets.getResult("playNow"));
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        stage.addChild(game);
        this.assignControls();
    }
    states.menu = menu;
    function assignControls() {
        // Binds key actions
        window.onkeydown = this.onControlDown;
        window.onkeyup = this.onControlUp;
    }
    states.assignControls = assignControls;
    function onControlDown(e) {
        // Basic switch statement to set
        // our controls to true onKeyDown
        switch (e.which) {
            case keys.LEFT:
            case keys.A:
                controls.left = true;
                controls.lTally++;
                controls.rTally = 0;
                break;
            case keys.RIGHT:
            case keys.D:
                controls.right = true;
                controls.rTally++;
                controls.lTally = 0;
                break;
            case keys.UP:
            case keys.W:
                controls.up = true;
                controls.rTally++;
                controls.lTally = 0;
                break;
            case keys.DOWN:
            case keys.S:
                controls.down = true;
                controls.rTally++;
                controls.lTally = 0;
                break;
            case keys.SPACEBAR:
                controls.spacebar = true;
                controls.rTally++;
                controls.lTally = 0;
                break;
        }
    }
    states.onControlDown = onControlDown;
    function onControlUp(e) {
        // Basic switch statement to set
        // our controls to true onKeyUp
        switch (e.which) {
            case keys.LEFT:
            case keys.A:
                controls.left = false;
                break;
            case keys.RIGHT:
            case keys.D:
                controls.right = false;
                break;
            case keys.W:
            case keys.UP:
                controls.up = false;
                break;
            case keys.S:
            case keys.DOWN:
                controls.down = false;
                break;
            case keys.SPACEBAR:
                controls.spacebar = false;
                break;
        }
    }
    states.onControlUp = onControlUp;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map