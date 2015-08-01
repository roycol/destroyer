/*
    * file name: destroyer.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for main charector
    * revision history: _v4
*/

module objects {
    // Destroyer Class ++++++++++++++++++++++++++++++++++++++
    export class Destroyer extends objects.GameObject {

        stage: createjs.Stage;
        game: createjs.Container;
        spaceSound: createjs.SoundInstance;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString:string, stage: createjs.Stage, game: createjs.Container, isActor:boolean) {
            super(imageString);
            this.stage = stage;
            this.game = game;
            this.name = "destroyer";
            this.sound = "flight";
            this.x = 60;
            this.y = 240;
                        
            if (isActor == true) {
                this.spaceSound = createjs.Sound.play(this.sound, { "loop": -1 });
                game.addChild(this);
            }

            this.reset();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(control): void {
            //this.y = stage.mouseY; // position plane under mouse

            if (flagNewDestroyer) this.updateNewDestroyer();

            if (control.down == true && this.y < 450) {
                this.y += 7;
            } else if (control.up == true && this.y > 30) {
                this.y -= 7;
            } else if (control.left == true && this.x > 30) {
                this.x -= 7;
            } else if (control.right == true && this.x < 670) {
                this.x += 7;
            }
        }
        
        destroy() {
            this.spaceSound.stop();
            this.game.removeChild(this);
        }
        
        public reset() {
            // reset plane after colliding with enemy
            this.visible = true;
            this.x = -100;
            this.y = Math.floor(Math.random() * 480);
            flagNewDestroyer = true;
            this.updateNewDestroyer();
        }
        
        public updateNewDestroyer() {
            this.x += 5;
            if (this.x > 60) {
                flagNewDestroyer = false;
            }
        }        
    }
} 