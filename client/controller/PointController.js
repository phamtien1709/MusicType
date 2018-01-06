class PointController {
    constructor(x, y, spriteName, configs) {
        this.configs = configs;
        this.sprite = KT.pointGroup.create(x, y, spriteName);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.update = this.update.bind(this);
    }
    update(){
        this.sprite.body.velocity.y = KT.speedDot;
    }
}