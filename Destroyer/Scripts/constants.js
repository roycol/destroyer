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
    constants.PLAY_STATE_LEVEL_2_INTRO = 2;
    constants.PLAY_STATE_LEVEL_2_PLAY = 3;
    constants.PLAY_STATE_LEVEL_3_INTRO = 4;
    constants.PLAY_STATE_LEVEL_3_PLAY = 5;
    constants.GAME_OVER_STATE = 6;
    // Game Constants
    constants.PLANET_NUM = 3;
    constants.MONSTER_NUM = 2;
    constants.MONSTER_BOSS_LIFE = 10;
    constants.MONSTER_MISSILE_NUM = 2;
    constants.MONSTER_BOSS_MISSILE_NUM = 3;
    constants.LABEL_TITLE_FONT = "40px BrushScriptStdMedium";
    constants.LABEL_CONTENT_FONT = "25px BrushScriptStdMedium";
    constants.LABEL_COLOUR = "rgb(211, 211, 211)";
    constants.DESTROYER_LIVES = 10;
    constants.DESTROYER_WEAPON_SPEED = 5;
    constants.DESTROYER_WEAPON_LIMIT = 3000;
    constants.LEVEL_1_CLEAR_SCORE = 500;
    constants.LEVEL_2_CLEAR_SCORE = 1000;
    constants.STAGE_CLEAR_LIVES = 1;
    //reduce enemy objects to make level_2 easier
    constants.LEVEL_2_PLANET_NUM = 2;
    constants.LEVEL_2_MONSTER_MISSILE_NUM = 1;
    // Canvas Constants
    constants.CANVAS_WIDTH = 700;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map