class PianoController{
    constructor(spriteName, configs){
        this.configs = configs;
        this.sprite = KT.pianoGroup.create(Math.floor(Math.random() * 440+ 100), Math.floor(Math.random() * 636+200), spriteName);
        this.sprite.anchor.set(0.5);
        this.sprite.kill();
        // console.log(this.sprite.x);
        // console.log(this.sprite.y);
    }
}