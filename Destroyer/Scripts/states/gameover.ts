/*
    * file name: gameover.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for a state of when game is over
    * revision history: _v3
*/

/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/planet.ts" />
/// <reference path="../objects/friend.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/destroyer.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    export function gameOverState() {
        space.update();
    }

    // Restart Game from current level when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        scoreboard.lives = constants.DESTROYER_LIVES;
        scoreboard.score = 0;
        destroyerWeaponNum = 0;
        switch (currentLvl) {
            case 1:
                currentState = constants.PLAY_STATE_LEVEL_1;
                break;
            case 2:
                currentState = constants.PLAY_STATE_LEVEL_2_PLAY;
                break;
            case 3:
                currentState = constants.PLAY_STATE_LEVEL_3_PLAY;
                break;
        }
        changeState(currentState);

    }

    // Restart Game from the beginning when New Game Button is clicked
    export function newGameClicked(event: MouseEvent) {
        destroyerWeaponNum = 0;
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE_LEVEL_1;
        changeState(currentState);
    }

    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        switch (currentLvl) {
            case 1:
                space = new objects.Space(<string>assets.getResult("space"), stage, game);
                break;
            case 2:
                space = new objects.Space(<string>assets.getResult("space2"), stage, game);
                break;
            case 3:
                space = new objects.Space(<string>assets.getResult("space3"), stage, game);
                break;
        }

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 40, "GAME OVER", constants.LABEL_TITLE_FONT);
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(constants.CANVAS_WIDTH / 2, 120, "FINAL SCORE", constants.LABEL_CONTENT_FONT);
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(constants.CANVAS_WIDTH / 2, 160, scoreboard.score.toString(), constants.LABEL_CONTENT_FONT);
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(constants.CANVAS_WIDTH / 2 - 130, 300, <string>assets.getResult("tryAgain"));
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        // Display New Game Button
        newGame = new objects.Button(constants.CANVAS_WIDTH / 2 + 130, 300, <string>assets.getResult("newGame"));
        game.addChild(newGame);
        newGame.addEventListener("click", newGameClicked);

        stage.addChild(game);

    }
}