class ExplodeController {
    constructor(x, y, spriteName, configs){
        this.explode = KT.game.add.sprite(x, y-30, 'explode');
        KT.game.physics.arcade.enable(this.explode);
        this.explode.anchor = new Phaser.Point(0.5, 0.5);
        this.explode.animations.add('explode');
        this.explode.play('explode', 80, false, true);
    }
}