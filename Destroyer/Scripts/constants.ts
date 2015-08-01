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
    export var PLAY_STATE_LEVEL_2: number = 2;
    export var PLAY_STATE_LEVEL_3: number = 3;
    export var GAME_OVER_STATE: number = 4;

    // Game Constants
    export var PLANET_NUM: number = 3;
    export var MONSTER_NUM: number = 2;
    export var MONSTER_MISSILE_NUM: number = 2;
    export var LABEL_TITLE_FONT = "40px Consolas";
    export var LABEL_CONTENT_FONT = "20px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var DESTROYER_LIVES = 50;
    export var DESTROYER_WEAPON_SPEED = 5;
    export var DESTROYER_WEAPON_LIMIT = 3000;

    // Canvas Constants
    export var CANVAS_WIDTH: number = 700;
}