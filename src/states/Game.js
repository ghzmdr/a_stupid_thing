/* globals __DEV__ */
import Phaser from 'phaser'

import config from '../config'

import SickBoy from '../sprites/SickBoy'
import Level from '../levels/base'

export default class GameState extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.stage.backgroundColor = '#2b2b2b'
    this.world.enableBody = true
    this.world.setBounds(0, 0, config.gameWidth, 3500)

    this.sickBoy = new SickBoy({
      game: this.game,
      x: 30,
      y: 30
    })

    this._level = new Level(this.game)

    this.game.add.existing(this.sickBoy)
    this.sickBoy.body.gravity.y = 600

    this.cursor = this.game.input.keyboard.createCursorKeys()
  }

  update() {
    this.game.physics.arcade.collide(this.sickBoy, this._level)
    this.game.camera.follow(this.sickBoy)

    let x = 0

    if (this.cursor.right.isDown) {
      x += 200
    }

    if (this.cursor.left.isDown) {
      x -= 200
    }

    this.sickBoy.body.velocity.x = x

    if (this.cursor.up.isDown && this.sickBoy.body.touching.down) {
      this.sickBoy.body.velocity.y = -200
    }
  }

  render() {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.sickBoy, 32, 32)
    }
  }
}
