class PointTestController {
    constructor(x, y, spriteName, configs) {
        this.configs = configs;
        this.sprite = KT.dotGroup.create(x, y, spriteName);
        this.sprite.checkWorldBounds = true;
        // this.sprite.outOfBoundsKill = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.speed = this.configs.speed;
        this.sprite.update = this.update.bind(this);
        // console.log(this.configs.timeDrop);
        this.sprite.scale.set(0.7);
        this.sprite.kill();
    }
    update() {
        // if (KT.frameTest === this.configs.timeDrop) {
        //     this.configs.run = true;
        // }
        // if(this.configs.run = true){
        if(this.sprite.position.y>-50){
            this.sprite.revive();
        }
        if (KT.checkPlay) {
            this.sprite.position.y += this.speed;
            // console.log(this.sprite.position.y);
        }
        if(KT.endGame){
            this.sprite.position.y += 0;
        }
        if(this.sprite.position.y > KT.game.height){
            KT.endGame = true;
            KT.checkPlay = false;
            // console.log('go');
        }
        // if(KT.inWorld){
        //     this.sprite.revive();
        // }
        // if(this.sprite.position.y>-20){
        //     this.sprite.revive();
        // }
        // KT.game.physics.arcade.overlap(
        //     KT.line,
        //     KT.dotGroup,
        //     this.onLineHitDot
        // )
        // }
    }
    // onLineHitDot(lineSprite, dotSprite){
    //     dotSprite.revive();
    //     console.log('go');
    // }
}