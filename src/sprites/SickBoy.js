import Phaser from 'phaser'

export default class SickBoy extends Phaser.Sprite {
  constructor({ game, x, y }) {
    super(game, x, y, 'sickboy')
    this.anchor.setTo(0.5)
    this.cursor = this.game.input.keyboard.createCursorKeys()
    this.runKey = this.game.input.keyboard.addKey(Phaser.KeyCode.Z)
    this.jumpKey = this.game.input.keyboard.addKey(Phaser.KeyCode.X)
  }

  update() {
    let x = 0
    this.body.gravity.y = 600

    const speed = this.runKey.isDown ? 1.3 : 1

    if (this.cursor.right.isDown) {
      x += 200 * speed
    }

    if (this.cursor.left.isDown) {
      x -= 200 * speed
    }

    this.body.velocity.x = x

    if (this.jumpKey.isDown && this.body.touching.down) {
      this.body.velocity.y = -200
    }
  }
}
