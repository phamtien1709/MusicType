var loadState = {
	preload: function () {
		KT.game.scale.pageAlignHorizontally = true;
		KT.game.time.advancedTiming = true;
		KT.game.stage.disableVisibilityChange = true;
		KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
	},
	create: function () {
		KT.game.state.start('menu');
	}


}