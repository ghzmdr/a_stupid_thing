import Phaser from 'phaser'

export default class BootState extends Phaser.State {
    init() {
        this._baseText = 'Loading'
        this._dotsCount = 0
    }

    preload() {
        this._text = this.add.text(this.world.centerX, this.world.centerY, this._baseText, {font: '16px Arial', fill: '#ddd', align: 'center'})
        this._text.anchor.setTo(0.5)

        this.load.image('sickboy', './assets/images/sickboy.png')
        this.load.image('black-tile', './assets/images/black.png')
    }

    render() {
        this._dotsCount++
        this._dotsCount %= 30

        const dots = '.'.repeat((this._dotsCount / 10) + 1)
        this._text.setText(this._baseText + dots)
    }

    create() {
        this.state.start('Game')
    }
}
