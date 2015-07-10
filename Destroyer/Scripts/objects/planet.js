/*
    * file name: planet.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for planets
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
    // Planet Class ++++++++++++++++++++++++++++++++++++++
    var Planet = (function (_super) {
        __extends(Planet, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Planet(imageString, stage, game) {
            _super.call(this, imageString);
            this.stage = stage;
            this.game = game;
            this.name = "planet";
            this.sound = "collision";
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Planet.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        };
        Planet.prototype.reset = function () {
            this.x = 700 + this.height; // start planet off stage
            this.y = Math.floor(Math.random() * 480); // start planet at random location
            this.dx = Math.floor(Math.random() * 5) + 3;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Planet.prototype.update = function () {
            this.y += this.dy; // moves planet down the stage
            this.x -= this.dx; // drifts planet right and left
            this.checkBounds();
        };
        Planet.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Planet;
    })(objects.GameObject);
    objects.Planet = Planet;
})(objects || (objects = {}));
//# sourceMappingURL=planet.js.map