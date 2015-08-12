/*
    * file name: playLvl2.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 30, 2015
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
    function playStateLvl2() {
        space.update();
        friend.update();
        for (var count = 0; count < constants.LEVEL_2_PLANET_NUM; count++) {
            planets[count].update();
        }
        for (var i = 0; i < constants.MONSTER_NUM; i++) {
            monsters[i].update();
            for (var j = 0; j < constants.LEVEL_2_MONSTER_MISSILE_NUM; j++) {
                missileArr[i][j].update();
            }
        }
        // launch destroyer weapon
        if (controls.spacebar == true) {
            if (destroyerWeaponNum <= constants.DESTROYER_WEAPON_LIMIT && !flagSpacebarRepeat) {
                if (!flagSpacebarRepeat) {
                    destroyerWeapons[destroyerWeaponNum++] = new objects.DestroyerWeapon(assets.getResult("destroyerWeapon"), stage, game);
                    flagSpacebarRepeat = true;
                }
                setTimeout(function () {
                    flagSpacebarRepeat = false;
                }, 300);
            }
        }
        for (var count = 0; count < destroyerWeaponNum; count++) {
            destroyerWeapons[count].update();
        }
        if (!destroyer.isStageClear) {
            //add collision manager
            collision.updateLvl2();
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
        if (scoreboard.score >= constants.LEVEL_2_CLEAR_SCORE) {
            destroyer.stageClear();
            friend.destroy();
            for (var count = 0; count < constants.LEVEL_2_PLANET_NUM; count++) {
                planets[count].destroy();
            }
            for (var i = 0; i < constants.MONSTER_NUM; i++) {
                monsters[i].destroy();
                for (var j = 0; j < constants.LEVEL_2_MONSTER_MISSILE_NUM; j++) {
                    missileArr[i][j].destroy();
                }
            }
            if (!destroyer.isStageClear) {
                scoreboard.lives += constants.STAGE_CLEAR_LIVES; //add bonus lives
                destroyer.destroy();
                stage.removeChild(game);
                game.removeAllChildren();
                game.removeAllEventListeners();
                currentState = constants.PLAY_STATE_LEVEL_3_INTRO;
                changeState(currentState);
            }
        }
    }
    states.playStateLvl2 = playStateLvl2;
    // play state Function
    function playLvl2() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        space = new objects.Space(assets.getResult("space2"), stage, game);
        friend = new objects.Friend(assets.getResult("friend"), stage, game);
        destroyer = new objects.Destroyer(assets.getResult("destroyer"), stage, game, true);
        // Show Cursor
        stage.cursor = "none";
        // Create multiple planets
        for (var count = 0; count < constants.LEVEL_2_PLANET_NUM; count++) {
            planets[count] = new objects.Planet(count % 2 == 1 ? assets.getResult("planet") : assets.getResult("mercury"), stage, game);
        }
        // Create multiple monsters
        for (var i = 0; i < constants.MONSTER_NUM; i++) {
            monsters[i] = new objects.Monster(assets.getResult("monster"), stage, game);
            // monster missiles
            for (var j = 0; j < constants.LEVEL_2_MONSTER_MISSILE_NUM; j++) {
                missileArr[i][j] = new objects.MonsterMissile(assets.getResult("missile"), stage, game, monsters[i]);
            }
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game, scoreboard.lives, scoreboard.score);
        // Instantiate Collision Manager
        collision = new managers.Collision();
        stage.addChild(game);
        this.assignControls();
    }
    states.playLvl2 = playLvl2;
})(states || (states = {}));
//# sourceMappingURL=playlvl2.js.map
