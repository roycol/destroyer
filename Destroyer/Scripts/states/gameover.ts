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

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
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
        space = new objects.Space(assets.getResult("space"), stage, game);

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
        tryAgain = new objects.Button(constants.CANVAS_WIDTH / 2, 300, assets.getResult("tryAgain"));
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);

    }
}