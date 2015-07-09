module objects {
    // Planet Class ++++++++++++++++++++++++++++++++++++++
    export class Planet extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "planet";
            this.sound = "collision";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        }


        public reset(): void {
            this.x = 700 + this.height; // start planet off stage
            this.y = Math.floor(Math.random() * 480); // start planet at random location
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves planet down the stage
            this.x -= this.dx; // drifts planet right and left
            this.checkBounds();
        }
    }
}  