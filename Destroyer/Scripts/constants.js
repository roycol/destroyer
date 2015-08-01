/*
    * file name: constants.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: Constants for each part of game
    * revision history: _v2
*/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE_LEVEL_1 = 1;
    constants.PLAY_STATE_LEVEL_2 = 2;
    constants.PLAY_STATE_LEVEL_3 = 3;
    constants.GAME_OVER_STATE = 4;
    // Game Constants
    constants.PLANET_NUM = 3;
    constants.MONSTER_NUM = 2;
    constants.MONSTER_MISSILE_NUM = 2;
    constants.LABEL_TITLE_FONT = "40px Consolas";
    constants.LABEL_CONTENT_FONT = "20px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.DESTROYER_LIVES = 5;
    // Canvas Constants
    constants.CANVAS_WIDTH = 700;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map