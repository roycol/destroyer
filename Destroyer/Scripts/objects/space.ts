/*
    * file name: space.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for space(background)
    * revision history: _v1
*/

module objects {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    export class Space extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number = 5;
        

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string, stage: createjs.Stage, game: createjs.Container) {
            super(imageString);
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();

            game.addChild(this);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if ocean has left screen
            if (this.x == -1400) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = 0;
            this.y = 0; // reset ocean off screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx; // moves Ocean down the stage
            this.checkBounds();
        }
    }
}  