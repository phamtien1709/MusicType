var bootState = {
	preload: function () {
		// game.load.image('progressBar', 'assets/progressBar.png');
		// KT.game.stage.disableVisibilityChange = true;
		KT.game.scale.pageAlignHorizontally = true;
		KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		KT.game.time.advancedTiming = true;
		// Load the image
	},
	create: function () {
		// Set some game settings

		// Start the load state
		KT.game.state.start('load');
	}
};