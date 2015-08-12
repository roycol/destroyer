/*
    * file name: monsterMissile.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 31, 2015
    * description: module for monsters
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
    // monsterMissile Class ++++++++++++++++++++++++++++++++++++++
    var MonsterMissile = (function (_super) {
        __extends(MonsterMissile, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function MonsterMissile(imageString, stage, game, monster) {
            _super.call(this, imageString);
            this.stage = stage;
            this.game = game;
            this.name = "monsterMissile";
            this.sound = "ahh";
            this.monster = monster;
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        MonsterMissile.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        };
        MonsterMissile.prototype.reset = function () {
            this.x = this.monster.x;
            this.y = this.monster.y;
            this.dx = Math.floor(Math.random() * 5) + 2;
            this.dy = Math.floor(Math.random() * 4) - 1;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        MonsterMissile.prototype.update = function () {
            this.y += this.dy; // moves monsterMissile down the stage
            this.x -= this.dx; // drifts monsterMissile right and left
            this.checkBounds();
        };
        MonsterMissile.prototype.destroy = function () {
            game.removeChild(this);
        };
        return MonsterMissile;
    })(objects.GameObject);
    objects.MonsterMissile = MonsterMissile;
})(objects || (objects = {}));
//# sourceMappingURL=monstermissile.js.map
