/*
    * file name: collesion.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for collision which ditermine and calculate lives of destroyer and score.
    * revision history: _v6
*/

module managers {
    export class Collision {

        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {                     
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // change Destroyer image to DestroyerCrash 
        public changeDestroyerImg(sec: number) {
            
            destroyer.image = destroyerCrash.image;
            setTimeout(function () {
                destroyer.image = destroyerNormal.image;
            }, sec);
            
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // explosion impact
        public monsterExplosion(monster: objects.Monster) {

            var explosionImg: HTMLImageElement;
            explosionImg = <HTMLImageElement> assets.getResult("explosion");
            var explosion = new Explosion(explosionImg);
            explosion.x = monster.x;
            explosion.y = monster.y;

            monster.reset();
            game.addChild(explosion);

        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // explosion impact
        public monsterBossExplosion(monsterBoss: objects.MonsterBoss) {

            var explosionImg: HTMLImageElement;
            explosionImg = <HTMLImageElement> assets.getResult("explosion");
            var explosion = new Explosion(explosionImg);
            explosion.x = monsterBoss.x;
            explosion.y = monsterBoss.y;

            monsterBoss.reset();
            game.addChild(explosion);

        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer and planet object
        public planetCheck(planet: objects.Planet) {
                        
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = destroyer.x;
            p1.y = destroyer.y;

            p2.x = planet.x;
            p2.y = planet.y;


            if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (planet.height * 0.3))) {
                if (planet.isColliding == false) {
                    createjs.Sound.play(planet.sound);
                    scoreboard.lives--;       
                    this.changeDestroyerImg(1000);
                    planet.reset();
                }
                planet.isColliding = true;

            }
            else {
                
                planet.isColliding = false;
            }
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer and friend object
        public friendCheck(friend: objects.Friend) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = destroyer.x;
            p1.y = destroyer.y;

            p2.x = friend.x;
            p2.y = friend.y;


            if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (friend.height * 0.3))) {
                if (friend.isColliding == false) {
                    createjs.Sound.play(friend.sound);
                    scoreboard.score += 100;
                    friend.reset();
                }
                friend.isColliding = true;

            }
            else {
                friend.isColliding = false;
            }
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer and missile object
        public missileCheck(missile: objects.MonsterMissile) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = destroyer.x;
            p1.y = destroyer.y;

            p2.x = missile.x;
            p2.y = missile.y;


            if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (missile.height * 0.3))) {
                if (missile.isColliding == false) {
                    createjs.Sound.play(missile.sound);
                    scoreboard.lives--;
                    this.changeDestroyerImg(1000);
                    missile.reset();
                }
                missile.isColliding = true;

            }
            else {
                missile.isColliding = false;
            }
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer weapon and monster object
        public weaponCheck(weapon: objects.DestroyerWeapon) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = weapon.x;
            p1.y = weapon.y;

            for (var i = 0; i < constants.MONSTER_NUM; i++){
                p2.x = monsters[i].x;
                p2.y = monsters[i].y;
            
                if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (monsters[i].height * 0.3))) {
                    if (weapon.isColliding == false) {
                        createjs.Sound.play(weapon.sound);
                        scoreboard.score += 50;
                        this.monsterExplosion(monsters[i]);
                        weapon.destroy();
                    }
                    weapon.isColliding = true;

                }
                else {
                    weapon.isColliding = false;
                }
            }
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer and bossMissile object
        public bossMissileCheck(bossMissile: objects.MonsterBossMissile) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = destroyer.x;
            p1.y = destroyer.y;

            p2.x = bossMissile.x;
            p2.y = bossMissile.y;


            if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (bossMissile.height * 0.3))) {
                if (bossMissile.isColliding == false) {
                    createjs.Sound.play(bossMissile.sound);
                    scoreboard.lives--;
                    this.changeDestroyerImg(1000);
                    bossMissile.reset();
                }
                bossMissile.isColliding = true;

            }
            else {
                bossMissile.isColliding = false;
            }
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer weapon and monsterBoss object
        public weaponCheckForBoss(weapon: objects.DestroyerWeapon) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = weapon.x;
            p1.y = weapon.y;

            p2.x = monsterBoss.x;
            p2.y = monsterBoss.y;

            if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (monsterBoss.height * 0.3))) {
                if (weapon.isColliding == false) {
                    createjs.Sound.play(weapon.sound);
                    monsterBoss.life--;
                    if (monsterBoss.life == 0) {
                        scoreboard.score += 500;
                        this.monsterBossExplosion(monsterBoss);
                    }
                    weapon.destroy();
                }
                weapon.isColliding = true;

            }
            else {
                weapon.isColliding = false;
            }
        }

        // Utility Function to Check Collisions
        update() {

            for (var planet = 0; planet < constants.PLANET_NUM; planet++) {
                planets[planet].update();
                this.planetCheck(planets[planet]);
            }

            this.friendCheck(friend);
        }

        updateLvl2() {
            //to check planet and friend collision
            this.update();
                        
            //collisionCheck for monster's missile
            for (var i = 0; i < constants.MONSTER_NUM; i++) {
                for (var j = 0; j < constants.MONSTER_MISSILE_NUM; j++) {
                    collision.missileCheck(missileArr[i][j]);
                }
            }
                       
            //collisionCheck for destroyer's weapon
            for (var count = 0; count < destroyerWeaponNum; count++) {
                if (!destroyerWeapons[count].isDestroyed) {
                    collision.weaponCheck(destroyerWeapons[count]);
                }
            }
        }

        updateLvl3() {
            //collisionCheck for monsterBoss' missile
            for (var i = 0; i < constants.MONSTER_BOSS_MISSILE_NUM; i++) {                
                collision.bossMissileCheck(bossMissileArr[i]);
            }
            //collisionCheck for monster's missile
            for (var i = 0; i < constants.MONSTER_NUM; i++) {
                for (var j = 0; j < constants.MONSTER_MISSILE_NUM; j++) {
                    collision.missileCheck(missileArr[i][j]);
                }
            }
            //collisionCheck for destroyer's weapon
            for (var count = 0; count < destroyerWeaponNum; count++) {
                if (!destroyerWeapons[count].isDestroyed) {
                    collision.weaponCheck(destroyerWeapons[count]);
                    collision.weaponCheckForBoss(destroyerWeapons[count]);
                }
            }

        }

    }
} 