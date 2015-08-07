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
module states {
    export function playLvl3ButtonClicked(event: MouseEvent) {
        currentLvl = 3;
        stage.removeChild(game);
        destroyer.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE_LEVEL_3_PLAY;
        changeState(currentState);
    }

    export function introStateLvl3() {
        space.update();
        destroyer.update(controls);
    }

    export function introLvl3() {
        var gameNameLabel: objects.Label;
        var gameInstructionLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(<string>assets.getResult("space"), stage, game);
        destroyer = new objects.Destroyer(<string>assets.getResult("destroyer"), stage, game, true);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Title
        gameNameLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 40, "Level_3", constants.LABEL_TITLE_FONT);
        game.addChild(gameNameLabel);
        // Display Game Instruction
        var instruction = "kill aliens and boss monster\n\nspace bar: throw a shuriken";
        gameInstructionLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 180, instruction, constants.LABEL_CONTENT_FONT);
        game.addChild(gameInstructionLabel);

        // Display Play Again Button
        playButton = new objects.Button(constants.CANVAS_WIDTH / 2, 380, <string>assets.getResult("playNow"));
        game.addChild(playButton);
        playButton.addEventListener("click", playLvl3ButtonClicked);

        stage.addChild(game);
        
    }
    
    
} 