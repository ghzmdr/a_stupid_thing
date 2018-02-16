import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import GameState from './states/Game'

import config from './config'

export default class Game extends Phaser.Game {
  constructor() {
    const width = config.gameWidth
    const height = config.gameHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}
