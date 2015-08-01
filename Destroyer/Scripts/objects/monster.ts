/*
    * file name: monster.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 31, 2015
    * description: module for monsters
    * revision history: _v5
*/

module objects {
    // monster Class ++++++++++++++++++++++++++++++++++++++
    export class Monster extends objects.GameObject {
                
        stage: createjs.Stage;
        game: createjs.Container;
        monsterMissiles: objects.MonsterMissile[]
        flagNewMonster: boolean;
        hFlag: boolean;
        vFlag: boolean;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string, stage: createjs.Stage, game: createjs.Container) {
            super(imageString);
            this.stage = stage;
            this.game = game; 
            this.name = "monster";
            this.sound = "appearMonster";
            this.hFlag = true;
            this.vFlag = true;

            this.reset();
            //this.launchMissile();
            game.addChild(this);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        //private launchMissile(): void {
        //    // Create multiple missile
        //    for (var count = 0; count < constants.MONSTER_MISSILE_NUM; count++) {
        //        this.monsterMissiles[count] = new objects.MonsterMissile(assets.getResult("missile"), stage, game, this);
        //    }
        //    monsterMissiles = this.monsterMissiles;
        //}

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            //change horizontal direction
            if (this.y <= 50)
                this.hFlag = true;
            else if (this.y >= 430)
                this.hFlag = false;

            //change vertical direction
            if (this.x <= 400)
                this.vFlag = false;
            else if (this.x >= 650)
                this.vFlag = true;

        }


        public reset(): void {
            this.x = 700 + this.height; // start monster off stage
            this.y = Math.floor(Math.random() * 480); // start monster at random location
            this.dx = Math.floor(Math.random() * 5) + 2;
            this.dy = Math.floor(Math.random() * 4) - 1;
            this.flagNewMonster = true;
            this.updateNewMonster();
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            if (this.flagNewMonster) this.updateNewMonster();

            if(this.hFlag)
                this.y += this.dy; // moves monster down the stage
            else
                this.y -= this.dy;

            if(this.vFlag)
                this.x -= this.dx; // drifts monster right and left
            else
                this.x += this.dx; 

            this.checkBounds();
        }

        public updateNewMonster() {
            this.x -= 5;
            if (this.x < 650) {
                this.flagNewMonster = false;                
            }
        }

        destroy() {
            game.removeChild(this);
        }
        
    }
}  