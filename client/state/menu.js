var menuState = {
	preload: function () {
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('btn_setting', 'assets/btn_setting.png');
	},
	create: function () {
		// Add a background image
		KT.bg = KT.game.add.sprite(0, 0, 'bg');
		// Display the name of the game
		var btn_touch = KT.game.add.button(KT.game.world.centerX, KT.game.world.centerY, 'btn_touch');
		btn_touch.anchor.set(0.5);
		btn_touch.scale.set(0.4);
		var btn_touched = KT.game.add.button(KT.game.world.centerX, KT.game.world.centerY, 'btn_touched');
		btn_touched.anchor.set(0.5);
		btn_touched.scale.set(0.4);
		btn_touched.kill();
		// console.log(btn_touch);
		// console.log(KT.timeDuration, KT.rhynthm);
		btn_touch.events.onInputDown.add(() => {
			if ((KT.timeDuration !== undefined) && (KT.rhynthm !== undefined)) {
				this.start();
			}
			else {
				alert("Please input Time and Rhynthm!");
			}
		});
		// Explain how to start the game

		// Create a new Phaser keyboard variable: the up arrow key

		// When the 'upKey' is pressed, it will call the 'start' function once
		var txt_setTime = KT.game.add.text(100, 100, 'Set time: ');
		var btn_settingTime = KT.game.add.button(370, 90, 'btn_setting');
		btn_settingTime.anchor.set(0.5);
		btn_settingTime.scale.set(0.3);
		var txt_setRhynthm = KT.game.add.text(100, 200, 'Set rhynthm: ');
		var btn_settingRhyn = KT.game.add.button(370, 190, 'btn_setting');
		btn_settingRhyn.anchor.set(0.5);
		btn_settingRhyn.scale.set(0.3);
		// this.start();
		var txt_setSpeedDot = KT.game.add.text(100, 300, 'Set speed of dot: ');
		var btn_settingSpeed = KT.game.add.button(370, 290, 'btn_setting');
		btn_settingSpeed.anchor.set(0.5);
		btn_settingSpeed.scale.set(0.3);
		btn_settingTime.events.onInputDown.add(() => {
			var prmtTime = prompt("C'mon set Time? (seconds)", "60");
			// console.log(prmtTime);
			KT.timeDuration = prmtTime * 60;
		})
		btn_settingRhyn.events.onInputDown.add(() => {
			var prmtRhyn = prompt("Set Rhynthm(value/60=rhyn/second):", "10");
			KT.rhynthm = prmtRhyn;
		})
		btn_settingSpeed.events.onInputDown.add(()=>{
			var prmtSpeed = prompt("Set speed(pixel/frame)", "50");
			// console.log(prmtTime);
			KT.speedDot = prmtSpeed;
		})
	},
	update: function () {
		// console.log()
	},
	start: function () {
		// Start the actual game
		KT.game.state.start('play');
	}
};