module objects {
    // Destroyer Class ++++++++++++++++++++++++++++++++++++++
    export class Destroyer extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "flight";

            this.x = 60;

            createjs.Sound.play(this.sound, {"loop": -1});
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position plane under mouse
        }        
    }
} 