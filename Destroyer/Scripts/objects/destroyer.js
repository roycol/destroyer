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
        function Destroyer(imageString) {
            _super.call(this, imageString);
            this.sound = "flight";
            this.x = 60;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Destroyer.prototype.update = function () {
            this.y = stage.mouseY; // position plane under mouse
        };
        return Destroyer;
    })(objects.GameObject);
    objects.Destroyer = Destroyer;
})(objects || (objects = {}));
//# sourceMappingURL=destroyer.js.map