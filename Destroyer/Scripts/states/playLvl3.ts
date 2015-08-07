/*
    * file name: playLvl3.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: Aug 7, 2015
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
    
    export function playStateLvl3() {
        space.update();        
        monsterBoss.update();

        for (var i = 0; i < constants.MONSTER_BOSS_MISSILE_NUM; i++) {
            bossMissileArr[i].update();
            collision.bossMissileCheck(bossMissileArr[i]);
        }

        for (var i = 0; i < constants.MONSTER_NUM; i++) {
            monsters[i].update();

            for (var j = 0; j < constants.MONSTER_MISSILE_NUM; j++) {
                missileArr[i][j].update();
                collision.missileCheck(missileArr[i][j]);
            }
        }

        // launch destroyer weapon
        if (controls.spacebar == true) {
            if (destroyerWeaponNum <= constants.DESTROYER_WEAPON_LIMIT && !flagSpacebarRepeat) {

                if (!flagSpacebarRepeat) {
                    destroyerWeapons[destroyerWeaponNum++] = new objects.DestroyerWeapon(<string>assets.getResult("destroyerWeapon"), stage, game);
                    flagSpacebarRepeat = true;
                    console.log("destroyerWeapons: " + destroyerWeaponNum);
                }

                setTimeout(function () {
                    flagSpacebarRepeat = false;
                }, 300);
            } 
        }
        else {
           
        }

        for (var count = 0; count < destroyerWeaponNum; count++) {
            if (!destroyerWeapons[count].isDestroyed) {
                destroyerWeapons[count].update();
                collision.weaponCheck(destroyerWeapons[count]);
                collision.weaponCheckForBoss(destroyerWeapons[count]);
            }
        }

        if (!destroyer.isStageClear) {
            destroyer.update(controls);
            scoreboard.update();
            ////add collision manager
            collision.update();
        }

        if (scoreboard.lives <= 0 || monsterBossLife == 0) {

            destroyer.stageClear();

            monsterBoss.destroy();
            for (var i = 0; i < constants.MONSTER_BOSS_MISSILE_NUM; i++) {
                bossMissileArr[i].destroy();                
            }

            for (var i = 0; i < constants.MONSTER_NUM; i++) {
                monsters[i].destroy();

                for (var j = 0; j < constants.MONSTER_MISSILE_NUM; j++) {
                    missileArr[i][j].destroy();
                }
            }

            if (!destroyer.isStageClear) {
                destroyer.destroy();
                stage.removeChild(game);
                game.removeAllChildren();
                game.removeAllEventListeners();
                currentState = constants.GAME_OVER_STATE;
                changeState(currentState);
            }
        }
        
    }

    // play state Function
    export function playLvl3(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(<string>assets.getResult("space"), stage, game);
        destroyer = new objects.Destroyer(<string>assets.getResult("destroyer"), stage, game, true);
        monsterBoss = new objects.MonsterBoss(<string>assets.getResult("monsterBoss"), stage, game);
        

        // Show Cursor
        stage.cursor = "none";
        
        // Create multiple monsters
        for (var i = 0; i < constants.MONSTER_NUM; i++) {
            monsters[i] = new objects.Monster(<string>assets.getResult("monster"), stage, game);

            // monster missiles
            for (var j = 0; j < constants.MONSTER_MISSILE_NUM; j++) {
                missileArr[i][j] = new objects.MonsterMissile(<string>assets.getResult("missile"), stage, game, monsters[i]);
            }
        }

        // monsterBoss missiles
        for (var i = 0; i < constants.MONSTER_BOSS_MISSILE_NUM; i++) {
            bossMissileArr[i] = new objects.MonsterBossMissile(<string>assets.getResult("monsterBossMissile"), stage, game, monsterBoss);
        }
        
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game, scoreboard.lives, scoreboard.score);

        // Instantiate Collision Manager
        collision = new managers.Collision();

        stage.addChild(game);

        this.assignControls();
    }
       
}