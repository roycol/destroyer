/*
    * file name: destroyerWeapon.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 31, 2015
    * description: module for DestroyerWeapon
    * revision history: _v5
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // DestroyerWeapon Class ++++++++++++++++++++++++++++++++++++++
    var DestroyerWeapon = (function (_super) {
        __extends(DestroyerWeapon, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function DestroyerWeapon(imageString, stage, game) {
            _super.call(this, imageString);
            this.isDestroyed = false;
            this.stage = stage;
            this.game = game;
            this.name = "destroyerWeapon";
            this.sound = "growl";
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        DestroyerWeapon.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x > 700 + this.width) {
                this.destroy();
            }
        };
        DestroyerWeapon.prototype.reset = function () {
            this.x = destroyer.x;
            this.y = destroyer.y;
            this.dx = constants.DESTROYER_WEAPON_SPEED;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        DestroyerWeapon.prototype.update = function () {
            this.x += this.dx; // drifts monsterMissile right and left
            this.checkBounds();
        };
        DestroyerWeapon.prototype.destroy = function () {
            this.isDestroyed = true;
            game.removeChild(this);
        };
        return DestroyerWeapon;
    })(objects.GameObject);
    objects.DestroyerWeapon = DestroyerWeapon;
})(objects || (objects = {}));
//# sourceMappingURL=destroyerweapon.js.map
