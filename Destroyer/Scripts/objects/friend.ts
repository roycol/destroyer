module objects {
    // Friend Class ++++++++++++++++++++++++++++++++++++++
    export class Friend extends objects.GameObject {

        stage: createjs.Stage;
        game: createjs.Container;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string, stage: createjs.Stage, game: createjs.Container) {
            super(imageString);
            this.stage = stage;
            this.game = game;
            this.name = "friend";
            this.sound = "rescueFriend";
            this.dx = 5;

            this.reset();
            game.addChild(this);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if friend has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        }


        public reset(): void {
            this.x = 700 + this.width; // start friend off stage
            this.y = Math.floor(Math.random() * 480); // start friend at random location
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx; // moves friend down the stage
            this.checkBounds();
        }

        destroy() {
            game.removeChild(this);
        }
    }
} 