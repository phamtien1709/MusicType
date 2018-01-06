// Initialise Phaser
var KT = {};
// configs
// Define our 'global' variable
KT.configs = {
    GAME_WIDTH: 768,
    GAME_HEIGHT: 1366
};
window.onload = function () {
    KT.game = new Phaser.Game(KT.configs.GAME_WIDTH, KT.configs.GAME_HEIGHT, Phaser.CANVAS, '', null, false, false);
    // Add all the states
    KT.game.state.add('boot', bootState);
    KT.game.state.add('load', loadState);
    KT.game.state.add('menu', menuState);
    KT.game.state.add('play', playState);
    // Start the 'boot' state
    KT.game.state.start('boot');
}
// preparations before game starts
var preload = function () {
    KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    KT.game.scale.minWidth = KT.configs.GAME_WIDTH / 2;
    KT.game.scale.minHeight = KT.configs.GAME_HEIGHT / 2;
    KT.game.scale.maxWidth = KT.configs.GAME_WIDTH;
    KT.game.scale.maxHeight = KT.configs.GAME_HEIGHT;
    KT.game.scale.pageAlignHorizontally = true;
    KT.game.time.advancedTiming = true;
    KT.game.stage.disableVisibilityChange = true;
}
