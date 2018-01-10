var loadState = {
	preload: function () {
		KT.game.scale.pageAlignHorizontally = true;
		KT.game.time.advancedTiming = true;
		KT.game.stage.disableVisibilityChange = true;
		KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('line', 'assets/line.png');
		KT.game.load.image('dot', 'assets/dot.png');
		KT.game.load.image('bar1', 'assets/blockBar.png');
		KT.game.load.image('bar2', 'assets/blockBar2.png');
		KT.game.load.image('bar3', 'assets/blockBarFinal.png');
		KT.game.load.image('btn', 'assets/button.png');
		KT.game.load.audio('music', 'assets/Music/DemoHalleujah.mp3');
		KT.game.load.image('piano', 'assets/pianoNote.png');
		KT.game.load.image('pianoEffect', 'assets/effectPiano.png');
		KT.game.load.image('note', 'assets/note.png');
	},
	create: function () {
		KT.game.state.start('menu');
	}
}