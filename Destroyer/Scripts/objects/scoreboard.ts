module objects {
    export class ScoreBoard {
        // PUBLIC PROPERTIES
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 350;
            stage.addChild(this.livesLabel);
            stage.addChild(this.scoreLabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
} 