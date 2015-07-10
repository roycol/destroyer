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
        function Friend(imageString) {
            _super.call(this, imageString);
            this.name = "friend";
            this.sound = "rescueFriend";
            this.dx = 5;
            this.reset();
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
        return Friend;
    })(objects.GameObject);
    objects.Friend = Friend;
})(objects || (objects = {}));
//# sourceMappingURL=friend.js.map