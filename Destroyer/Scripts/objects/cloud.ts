module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "cloud";
            this.sound = "thunder";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 640); // start cloud at random location
            this.y = -this.height; // start cloud off stage
            this.dy = Math.floor(Math.random() * 5) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        }
    }
}  