module objects {
    // Destroyer Class ++++++++++++++++++++++++++++++++++++++
    export class Destroyer extends objects.GameObject {

        stage: createjs.Stage;
        game: createjs.Container;
        spaceSound: createjs.SoundInstance;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString:string, stage: createjs.Stage, game: createjs.Container, isActor:boolean) {
            super(imageString);
            this.stage = stage;
            this.game = game;
            this.sound = "flight";
            this.x = 60;
            this.y = 240;
                        
            if (isActor == true) {
                this.spaceSound = createjs.Sound.play(this.sound, { "loop": -1 });
                game.addChild(this);
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position plane under mouse
        }
        
        destroy() {
            this.spaceSound.stop();
            this.game.removeChild(this);
        }        
    }
} 