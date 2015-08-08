/*
    * file name: constants.ts
    * author's name: Roy Kim
    * last modified by: Roy Kim
    * date last modified: July 10, 2015
    * description: Constants for each part of game
    * revision history: _v2
*/

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE_LEVEL_1: number = 1;
    export var PLAY_STATE_LEVEL_2_INTRO: number = 2;
    export var PLAY_STATE_LEVEL_2_PLAY: number = 3;
    export var PLAY_STATE_LEVEL_3_INTRO: number = 4;
    export var PLAY_STATE_LEVEL_3_PLAY: number = 5;
    export var GAME_OVER_STATE: number = 6;

    // Game Constants
    export var PLANET_NUM: number = 3;
    export var MONSTER_NUM: number = 2;
    export var MONSTER_BOSS_LIFE: number = 10;
    export var MONSTER_MISSILE_NUM: number = 2;
    export var MONSTER_BOSS_MISSILE_NUM: number = 3;
    export var LABEL_TITLE_FONT = "40px Consolas";
    export var LABEL_CONTENT_FONT = "20px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var DESTROYER_LIVES = 10;
    export var DESTROYER_WEAPON_SPEED = 5;
    export var DESTROYER_WEAPON_LIMIT = 3000;
    export var LEVEL_1_CLEAR_SCORE = 500;
    export var LEVEL_2_CLEAR_SCORE = 1000;

    // Canvas Constants
    export var CANVAS_WIDTH: number = 700;
}