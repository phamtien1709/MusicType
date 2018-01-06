var playState = {
	preload: function () {
		// KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('line', 'assets/line.png');
		KT.game.load.image('dot', 'assets/dot.png');
		KT.game.load.image('bar1', 'assets/blockBar.png');
		KT.game.load.image('bar2', 'assets/blockBar2.png');
		KT.game.load.image('bar3', 'assets/blockBarFinal.png');
	},
	create: function () {
		KT.game.physics.startSystem(Phaser.Physics.ARCADE);
		KT.bg = KT.game.add.sprite(0, 0, 'bg');
		var line = KT.game.add.sprite(330, 70, 'line');
		line.anchor.set(0.5);
		//variable
		KT.btnGroup = KT.game.add.physicsGroup();
		KT.btn = new ButtonController(70, 70)
		KT.pointGroup = KT.game.add.physicsGroup();
		KT.points = [];
		KT.timeToEnd = 0;
		KT.frame = 0;
		//timer
		// console.log(KT.timeDuration);
		var minutes;
		if ((KT.timeDuration % 3600) / 3600 >= 0.5) {
			minutes = Math.round(KT.timeDuration / 3600) - 1;
		}
		else {
			minutes = Math.round(KT.timeDuration / 3600);
		}
		// console.log((KT.timeDuration%3600)/3600);
		// console.log(minutes);
		var seconds = (KT.timeDuration % 3600) / 60;
		// console.log(seconds);
		KT.timeout = KT.game.time.create();
		KT.timeoutCountDown = KT.timeout.add(Phaser.Timer.MINUTE * minutes + Phaser.Timer.SECOND * seconds, this.timeout, this);
		KT.timeout.start();
		// console.log(KT.btn_touch);
	},
	update: function () {
		KT.frame += 1;
	},
	render: function () {
		if (KT.timeout.running) {
			KT.game.debug.text(this.formatTime(Math.round((KT.timeoutCountDown.delay - KT.timeout.ms) / 1000)), KT.game.width - 75, 25, "#fff");
		} else {
			KT.game.debug.text("Hết giờ!", KT.game.width - 85, 25, "#fff");
		}
	},
	timeout: function () {
		KT.timeout.stop();
		// KT.JsonPoints = JSON.stringify(KT.points);
		console.log(KT.points);
		var REC = [];
		for (point in KT.points){
			var record = {};
			console.log(KT.points[point]);
			record.timeDrop = KT.points[point].configs.time;
			record.x = KT.points[point].sprite.position.x;
			console.log(record);
			REC.push(record);
		}
		$.ajax( { url: "https://api.mlab.com/api/1/databases/musictype/collections/Records?apiKey=9ZHuLpUl39GPPuRCljevNgJj51u5mOzP",
		  data: JSON.stringify({REC}),
		  type: "POST",
		  contentType: "application/json" } );
	},
	formatTime: function (s) {
		var minutes = "0" + Math.floor(s / 60);
		var seconds = "0" + (s - minutes * 60);
		return minutes.substr(-2) + ":" + seconds.substr(-2);
	}
}