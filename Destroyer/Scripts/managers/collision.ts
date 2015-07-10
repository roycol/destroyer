﻿module managers {
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

        // Utility Function to Check Collisions
        update() {

            for (var planet = 0; planet < constants.PLANET_NUM; planet++) {
                planets[planet].update();
                this.planetCheck(planets[planet]);
            }

            this.friendCheck(friend);
        }

    }
} 