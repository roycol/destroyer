var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Ocean(imageString) {
            _super.call(this, imageString);
            this.dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Ocean.prototype.checkBounds = function () {
            // check if ocean has left screen
            if (this.y == 0) {
                this.reset();
            }
        };
        Ocean.prototype.reset = function () {
            this.x = 0;
            this.y = -960; // reset ocean off screen
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Ocean.prototype.update = function () {
            this.y += this.dy; // moves Ocean down the stage
            this.checkBounds();
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map