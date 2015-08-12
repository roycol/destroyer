/*
    * file name: MonsterBossMissile.ts
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
    var MonsterBossMissile = (function (_super) {
        __extends(MonsterBossMissile, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function MonsterBossMissile(imageString, stage, game, monsterBoss) {
            _super.call(this, imageString);
            this.stage = stage;
            this.game = game;
            this.name = "monsterBossMissile";
            this.sound = "ahh";
            this.monsterBoss = monsterBoss;
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        MonsterBossMissile.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        };
        MonsterBossMissile.prototype.reset = function () {
            this.x = this.monsterBoss.x;
            this.y = this.monsterBoss.y;
            this.dx = Math.floor(Math.random() * -10);
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        MonsterBossMissile.prototype.update = function () {
            this.y += this.dy; // moves monsterMissile down the stage
            this.x -= this.dx++; // drifts monsterMissile right and left
            this.checkBounds();
        };
        MonsterBossMissile.prototype.destroy = function () {
            game.removeChild(this);
        };
        return MonsterBossMissile;
    })(objects.GameObject);
    objects.MonsterBossMissile = MonsterBossMissile;
})(objects || (objects = {}));
//# sourceMappingURL=monsterbossmissile.js.map
