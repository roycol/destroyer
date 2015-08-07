/*
    * file name: space.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for space(background)
    * revision history: _v1
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    var Space = (function (_super) {
        __extends(Space, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Space(imageString, stage, game) {
            _super.call(this, imageString);
            this.dx = 5;
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
            this.y = 0;
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Space.prototype.checkBounds = function () {
            // check if ocean has left screen
            if (this.x == -1400) {
                this.reset();
            }
        };
        Space.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Space.prototype.update = function () {
            this.x -= this.dx; // moves Ocean down the stage
            this.checkBounds();
        };
        return Space;
    })(createjs.Bitmap);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map