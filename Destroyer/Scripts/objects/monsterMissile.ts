/*
    * file name: monsterMissile.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 31, 2015
    * description: module for monsters
    * revision history: _v5
*/

module objects {
    // monsterMissile Class ++++++++++++++++++++++++++++++++++++++
    export class MonsterMissile extends objects.GameObject {
                
        stage: createjs.Stage;
        game: createjs.Container;

        monster: objects.Monster;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string, stage: createjs.Stage, game: createjs.Container, monster: Monster) {
            super(imageString);
            this.stage = stage;
            this.game = game; 
            this.name = "monsterMissile";
            this.sound = "ahh";
            this.monster = monster;

            this.reset();
            game.addChild(this);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        }


        public reset(): void {  
            this.x = this.monster.x;
            this.y = this.monster.y;         
            this.dx = Math.floor(Math.random() * 5) + 2;
            this.dy = Math.floor(Math.random() * 4) - 1;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves monsterMissile down the stage
            this.x -= this.dx; // drifts monsterMissile right and left
            this.checkBounds();
        }

        destroy() {
            game.removeChild(this);
        }
    }
}  