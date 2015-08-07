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
    var Monster = (function (_super) {
        __extends(Monster, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Monster(imageString, stage, game) {
            _super.call(this, imageString);
            this.stage = stage;
            this.game = game;
            this.name = "monster";
            this.sound = "growl";
            this.hFlag = true;
            this.vFlag = true;
            this.reset();
            //this.launchMissile();
            game.addChild(this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        //private launchMissile(): void {
        //    // Create multiple missile
        //    for (var count = 0; count < constants.MONSTER_MISSILE_NUM; count++) {
        //        this.monsterMissiles[count] = new objects.MonsterMissile(assets.getResult("missile"), stage, game, this);
        //    }
        //    monsterMissiles = this.monsterMissiles;
        //}
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Monster.prototype.checkBounds = function () {
            //change horizontal direction
            if (this.y <= 50)
                this.hFlag = true;
            else if (this.y >= 430)
                this.hFlag = false;
            //change vertical direction
            if (this.x <= 400)
                this.vFlag = false;
            else if (this.x >= 650)
                this.vFlag = true;
        };
        Monster.prototype.reset = function () {
            this.x = 700 + this.width; // start monster off stage
            this.y = Math.floor(Math.random() * 480); // start monster at random location
            this.dx = Math.floor(Math.random() * 5) + 2;
            this.dy = Math.floor(Math.random() * 4);
            this.flagNewMonster = true;
            this.hFlag = true;
            this.vFlag = true;
            this.updateNewMonster();
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Monster.prototype.update = function () {
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
        Monster.prototype.updateNewMonster = function () {
            this.x -= 5;
            if (this.x < 650) {
                this.flagNewMonster = false;
            }
        };
        Monster.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Monster;
    })(objects.GameObject);
    objects.Monster = Monster;
})(objects || (objects = {}));
//# sourceMappingURL=monster.js.map