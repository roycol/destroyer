/*
    * file name: monster.ts
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
    // monster Class ++++++++++++++++++++++++++++++++++++++
    var MonsterBoss = (function (_super) {
        __extends(MonsterBoss, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function MonsterBoss(imageString, stage, game) {
            _super.call(this, imageString);
            this.stage = stage;
            this.game = game;
            this.name = "monsterBoss";
            this.sound = "boss";
            this.hFlag = true;
            this.vFlag = true;
            this.life = constants.MONSTER_BOSS_LIFE;
            createjs.Sound.play(this.sound);
            this.reset();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        MonsterBoss.prototype.checkBounds = function () {
            //change horizontal direction
            if (this.y <= 50)
                this.hFlag = true;
            else if (this.y >= 430)
                this.hFlag = false;
            //change vertical direction
            if (this.x <= 450)
                this.vFlag = false;
            else if (this.x >= 600)
                this.vFlag = true;
        };
        MonsterBoss.prototype.reset = function () {
            this.x = 700 + this.width; // start monster off stage
            this.y = Math.floor(Math.random() * 480); // start monster at random location
            this.dx = Math.floor(Math.random() * 5) + 2;
            this.dy = Math.floor(Math.random() * 4) + 1;
            this.flagNewMonster = true;
            this.hFlag = true;
            this.vFlag = true;
            this.updateNewMonster();
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        MonsterBoss.prototype.update = function () {
            if (this.flagNewMonster)
                this.updateNewMonster();
            if (this.hFlag)
                this.y += this.dy; // moves monster down the stage
            else
                this.y -= this.dy;
            if (this.vFlag)
                this.x -= this.dx; // drifts monster right and left
            else
                this.x += this.dx;
            //console.log("hFlag:" + this.hFlag + "   y:" + this.y);
            this.checkBounds();
        };
        MonsterBoss.prototype.updateNewMonster = function () {
            this.x -= 5;
            if (this.x < 400) {
                this.flagNewMonster = false;
            }
        };
        MonsterBoss.prototype.destroy = function () {
            game.removeChild(this);
        };
        return MonsterBoss;
    })(objects.GameObject);
    objects.MonsterBoss = MonsterBoss;
})(objects || (objects = {}));
//# sourceMappingURL=monsterboss.js.map