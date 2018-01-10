class PointController {
    constructor(x, y, spriteName, configs) {
        this.configs = configs;
        this.sprite = KT.pointGroup.create(x, y, spriteName);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.scale.set(0.7);
        this.sprite.update = this.update.bind(this);
        this.speed = parseInt(this.configs.speed);
    }
    update(){
        this.sprite.position.y += this.speed;
        if(this.sprite.position.y>KT.game.height){
            this.sprite.destroy();
        }
    }
}