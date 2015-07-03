module objects {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "island";
            this.sound = "yay";
            this.dy = 5;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if island has left screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 640); // start island at random location
            this.y = -this.height; // start island off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves island down the stage
            this.checkBounds();
        }
    }
} 