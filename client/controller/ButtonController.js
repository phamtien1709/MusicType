class ButtonController {
    constructor(x, y, configs) {
        this.sprite = KT.btnGroup.create(x, y, 'bar1');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.scale.setTo(0.6);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
    }
    update() {
        // console.log(KT.game.input.activePointer.isDown);
        if (KT.game.input.activePointer.isDown) {
            KT.timeToEnd += 1;
            if ((KT.timeToEnd % KT.rhynthm == 0) && (KT.timeToEnd !== 0)) {
                // console.log(KT.btn_touch.position);
                this.generateDot();
            }
            this.sprite.x = KT.game.input.x;
            if (this.sprite.x < this.sprite.width / 2) {
                this.sprite.x = this.sprite.width / 2;
            }
            else if (this.sprite.x > KT.game.width - this.sprite.width / 2) {
                this.sprite.x = KT.game.width - this.sprite.width / 2;
            }
        }
    }
    generateDot() {
        KT.points.push(new PointController(this.sprite.position.x,this.sprite.position.y, 'dot', {
            time: KT.frame
        }));
        // console.log(KT.points);
    }
}