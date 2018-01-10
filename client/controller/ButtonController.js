class ButtonController {
    constructor(x, y, configs) {
        this.configs = configs;
        this.sprite = KT.btnGroup.create(x, y, 'bar1');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.scale.setTo(0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
    }
    update() {
        // console.log(KT.game.input.activePointer.isDown);
        if ((KT.game.input.activePointer.isDown)||(KT.keyboard.isDown(this.configs.generateDot))) {
            KT.checkInput = true;
            if ((KT.timeToEnd % KT.rhynthm == 0)) {
                // console.log(KT.btn_touch.position);
                if(!KT.configs.TIMEOUT){
                    this.generateDot();
                }
            }
            KT.timeToEnd += 1;
            if(KT.game.input.activePointer.isDown)this.sprite.x = KT.game.input.x;
            if (this.sprite.x < this.sprite.width / 2) {
                this.sprite.x = this.sprite.width / 2;
            }
            else if (this.sprite.x > KT.game.width - this.sprite.width / 2) {
                this.sprite.x = KT.game.width - this.sprite.width / 2;
            }
        }
        if (KT.keyboard.isDown(this.configs.left)) {
            this.sprite.body.velocity.x = -400;
          } else
          if (KT.keyboard.isDown(this.configs.right)) {
            this.sprite.body.velocity.x = 400;
          } else {
            this.sprite.body.velocity.x = 0;
          }
    }
    generateDot() {
        KT.points.push(new PointController(this.sprite.position.x,this.sprite.position.y, 'note', {
            time: KT.frame,
            speed: KT.speedDot
        }));
        // console.log(KT.points);
    }
}
// && (KT.timeToEnd !== 0)