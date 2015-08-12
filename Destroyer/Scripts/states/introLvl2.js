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
    function playLvl2ButtonClicked(event) {
        currentLvl = 2;
        stage.removeChild(game);
        destroyer.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE_LEVEL_2_PLAY;
        changeState(currentState);
    }
    states.playLvl2ButtonClicked = playLvl2ButtonClicked;
    function introStateLvl2() {
        space.update();
        destroyer.update(controls);
    }
    states.introStateLvl2 = introStateLvl2;
    function introLvl2() {
        var gameNameLabel;
        var gameInstructionLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        space = new objects.Space(assets.getResult("space2"), stage, game);
        destroyer = new objects.Destroyer(assets.getResult("destroyer"), stage, game, true);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Title
        gameNameLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 40, "Level_2", constants.LABEL_TITLE_FONT);
        game.addChild(gameNameLabel);
        // Display Game Instruction
        var instruction = "kill aliens and rescue ur friends\n\nspace bar: throw a shuriken";
        gameInstructionLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 180, instruction, constants.LABEL_CONTENT_FONT);
        game.addChild(gameInstructionLabel);
        // Display Play Again Button
        playButton = new objects.Button(constants.CANVAS_WIDTH / 2, 380, assets.getResult("playNow"));
        game.addChild(playButton);
        playButton.addEventListener("click", playLvl2ButtonClicked);
        stage.addChild(game);
    }
    states.introLvl2 = introLvl2;
})(states || (states = {}));
//# sourceMappingURL=introlvl2.js.map