import Phaser from 'phaser'

export default class SickBoy extends Phaser.Sprite {
  constructor({ game, x, y }) {
    super(game, x, y, 'sickboy')
    this.anchor.setTo(0.5)
  }
}
