class ExplodeSound {
    constructor(soundName, volume) {
      this.explodeSound = Nakama.game.add.audio(soundName);
      this.explodeSound.volume = volume;
      this.explodeSound.play();
    }
  }