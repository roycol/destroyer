module objects {
    // Destroyer Class ++++++++++++++++++++++++++++++++++++++
    export class Destroyer extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "flight";

            this.y = 430;

            createjs.Sound.play(this.sound, {"loop": -1});
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x = stage.mouseX; // position plane under mouse
        }
    }
} 