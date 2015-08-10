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
module states {
    export function playState() {
        space.update();
        friend.update();

        for (var count = 0; count < constants.PLANET_NUM; count++) {
            planets[count].update();
        }
        
        if (!destroyer.isStageClear) {
            ////add collision manager
            collision.update();
            destroyer.update(controls);
            scoreboard.update();
        }

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            destroyer.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (scoreboard.score >= constants.LEVEL_1_CLEAR_SCORE) {
                        
            destroyer.stageClear();
                       
            friend.destroy();
            for (var count = 0; count < constants.PLANET_NUM; count++) {
                planets[count].destroy();
            }
            
            if (!destroyer.isStageClear) {
                scoreboard.lives += constants.STAGE_CLEAR_LIVES; //add bonus lives
                destroyer.destroy(); 
                game.removeAllChildren();
                game.removeAllEventListeners();
                stage.removeChild(game);
                currentState = constants.PLAY_STATE_LEVEL_2_INTRO;
                changeState(currentState);
            }
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(<string>assets.getResult("space"), stage, game);
        friend = new objects.Friend(<string>assets.getResult("friend"), stage, game);
        destroyer = new objects.Destroyer(<string>assets.getResult("destroyer"), stage, game, true);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.PLANET_NUM; count++) {
            planets[count] = new objects.Planet(count % 2 == 0 ? <string>assets.getResult("planet") : <string>assets.getResult("mercury"), stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game, constants.DESTROYER_LIVES, 0);

        // Instantiate Collision Manager
        collision = new managers.Collision();

        stage.addChild(game);

        this.assignControls();
    }
       
}