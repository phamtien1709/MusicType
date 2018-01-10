class BarController {
    constructor(x, y, configs) {
        this.sprite = KT.barGroup.create(x, y, 'bar1');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.scale.setTo(0.5);
        // this.sprite.kill();
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
    }
    update() {
        // console.log(KT.game.input.activePointer.isDown);
        // if (KT.game.input.activePointer.isDown) {
        //     KT.timeToEnd += 1;
        //     if ((KT.timeToEnd % KT.rhynthm == 0) && (KT.timeToEnd !== 0)) {

        //     }
        // if(KT.checkData){
        //     this.sprite.revive();
        // }
        if (KT.checkData) {
            if (KT.game.input.activePointer.isDown) {
                this.sprite.x = KT.game.input.x;
                if (this.sprite.x < this.sprite.width / 2) {
                    this.sprite.x = this.sprite.width / 2;
                }
                else if (this.sprite.x > KT.game.width - this.sprite.width / 2) {
                    this.sprite.x = KT.game.width - this.sprite.width / 2;
                }
            }
        }
    }
}