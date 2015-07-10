/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/destroyer.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/friend.ts" />
/// <reference path="../objects/planet.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        destroyer.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
        space.update();
        destroyer.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;
        var gameInstructionLabel: objects.Label;

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
        var instruction = "You are the Destroyer.\n\nIn order to rescue your friends,\n\nyou are going to begin space traveling.\n\nYour friends are prisoned in small planet.\n\nYou can destroy it but can't big planets.\n\nSave your friends as much as you can\n\nwhile you are avoiding big planets!!!";
        gameInstructionLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 180, instruction, constants.LABEL_CONTENT_FONT);
        game.addChild(gameInstructionLabel);

        // Display Play Again Button
        playButton = new objects.Button(constants.CANVAS_WIDTH / 2, 380, assets.getResult("playNow"));
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 