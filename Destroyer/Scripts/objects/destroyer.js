/*
    * file name: destroyer.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for main charector
    * revision history: _v4
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Destroyer Class ++++++++++++++++++++++++++++++++++++++
    var Destroyer = (function (_super) {
        __extends(Destroyer, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Destroyer(imageString, stage, game, isActor) {
            _super.call(this, imageString);
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
        Destroyer.prototype.update = function () {
            this.y = stage.mouseY; // position plane under mouse
        };
        Destroyer.prototype.destroy = function () {
            this.spaceSound.stop();
            this.game.removeChild(this);
        };
        return Destroyer;
    })(objects.GameObject);
    objects.Destroyer = Destroyer;
})(objects || (objects = {}));
//# sourceMappingURL=destroyer.js.map