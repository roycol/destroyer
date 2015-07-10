/*
    * file name: friend.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: module for friends
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
    // Friend Class ++++++++++++++++++++++++++++++++++++++
    var Friend = (function (_super) {
        __extends(Friend, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Friend(imageString, stage, game) {
            _super.call(this, imageString);
            this.stage = stage;
            this.game = game;
            this.name = "friend";
            this.sound = "rescueFriend";
            this.dx = 5;
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Friend.prototype.checkBounds = function () {
            // check if friend has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        };
        Friend.prototype.reset = function () {
            this.x = 700 + this.width; // start friend off stage
            this.y = Math.floor(Math.random() * 480); // start friend at random location
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Friend.prototype.update = function () {
            this.x -= this.dx; // moves friend down the stage
            this.checkBounds();
        };
        Friend.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Friend;
    })(objects.GameObject);
    objects.Friend = Friend;
})(objects || (objects = {}));
//# sourceMappingURL=friend.js.map