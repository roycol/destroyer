module managers {
    export class Collision {

        
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {                     
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between destroyer and any other game object
        public check(gameObject: objects.GameObject) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = destroyer.x;
            p1.y = destroyer.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;


            if (utility.distance(p1, p2) < ((destroyer.height * 0.3) + (gameObject.height * 0.3))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "planet") {
                        scoreboard.lives--;                    
                    }
                    if (gameObject.name == "friend") {
                        scoreboard.score += 100;
                    }

                }
                gameObject.isColliding = true;

            }
            else {
                gameObject.isColliding = false;
            }
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

    }
} 