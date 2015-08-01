/*
    * file name: destroyerWeapon.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 31, 2015
    * description: module for DestroyerWeapon
    * revision history: _v5
*/

module objects {
    // DestroyerWeapon Class ++++++++++++++++++++++++++++++++++++++
    export class DestroyerWeapon extends objects.GameObject {
                
        stage: createjs.Stage;
        game: createjs.Container;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string, stage: createjs.Stage, game: createjs.Container) {
            super(imageString);
            this.stage = stage;
            this.game = game; 
            this.name = "destroyerWeapon";
            this.sound = "growl";
           
            this.reset();
            game.addChild(this);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.x > 700 + this.width) {
                //this.reset();
                this.destroy();
            }
            
        }

        public reset(): void {  
            this.x = destroyer.x;
            this.y = destroyer.y;         
            this.dx = constants.DESTROYER_WEAPON_SPEED;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; // drifts monsterMissile right and left
            this.checkBounds();
        }

        destroy() {
            game.removeChild(this);
        }
    }
}  