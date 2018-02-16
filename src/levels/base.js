import Phaser from 'phaser'
import {flatten} from 'lodash'

import config from '../config'


export default class Level extends Phaser.Group {
    constructor(game) {
        super(game)

        const TILE_W = 25
        const COLS = ~~(config.gameWidth / TILE_W) + 1
        const ROWS = ~~(config.gameHeight / TILE_W) + 1

        const map = flatten(
            new Array(6).fill([' '.repeat(COLS)])
        ).concat(
            'x'.repeat(6) + ''.repeat(COLS - 6)
        ).concat(
            flatten(
                new Array(ROWS - 7).fill([' '.repeat(COLS)])
            )
        )

        for (let i = 0; i < ROWS; ++i) {
            for (let j = 0; j < COLS; ++j) {
                if (map[i][j] === 'x') {
                    const wall = this.game.add.sprite(TILE_W * j, TILE_W * i, 'black-tile')
                    wall.body.immovable = true
                    wall.anchor.x = wall.anchor.y = 0.5
                    this.add(wall)
                }
            }
        }
    }
}
