var menuState = {
	preload: function () {
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('btn_setting', 'assets/btn_setting.png');
	},
	create: function () {
		//data piano
		KT.pianoNotes = [0.886, 1.841, 2.538, 2.865, 3.505, 3.826, 5.792, 6.769, 58.611, 59.595, 60.568, 60.896, 61.249, 61.562, 62.534];
		KT.pianoNotesFrame = [];
		for (i in KT.pianoNotes){
			// console.log(KT.pianoNotes[i]);
			KT.pianoNotesFrame.push(KT.pianoNotes[i]*60);
		}
		// console.log(KT.pianoNotesFrame);
		// Add a background image
		KT.bg = KT.game.add.sprite(0, 0, 'bg');
		// KT.bg.scale.set(0.83333)
		$.ajax({
            type: "GET",
            url: "https://api.mlab.com/api/1/databases/musictype/collections/Records?apiKey=9ZHuLpUl39GPPuRCljevNgJj51u5mOzP",
			success: function (data) {
				// console.log(data);
				for(i in data){
					// console.log(data[i]);
					const x = document.getElementById("mySelect");
					const option = document.createElement("option");
					option.text = data[i].REC.name;
					option.value = data[i]._id.$oid;
					x.add(option);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
                // alert(jqXHR.status);
                console.log("error");
            }
		});
		KT.idCreated = 0;
		KT.previousName = 0;
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
		// console.log(KT.game.width, KT.game.height);
		btn_touch.events.onInputDown.add(() => {
			if ((KT.timeDuration !== undefined) && (KT.rhynthm !== undefined)) {
				this.start();
			}
			else {
				alert("Please input Time and Rhynthm!");
			}
		});
		var btn_test = KT.game.add.button(KT.game.world.centerX, KT.game.world.centerY + 200, 'btn_touched');
		btn_test.anchor.set(0.5);
		btn_test.scale.set(0.4);
		// Explain how to start the game
		btn_test.events.onInputDown.add(()=>{
		// 	$.ajax({
        //     type: "GET",
        //     url: "https://api.mlab.com/api/1/databases/musictype/collections/Records?apiKey=9ZHuLpUl39GPPuRCljevNgJj51u5mOzP",
        //     success: function (data) {
        //         // console.log(data);
        //         const record = data.find((obj) => {
        //             if(obj._id.$oid == KT.idCreated ){
        //                 return obj
        //             };
        //         });
        //         // console.log(record);
        //         KT.timeDuration = record.REC.timeOfSong;
        //         KT.rhynthm = record.REC.rhynthm;
        //         KT.nameOfSong = record.REC.name;
        //         KT.speedDot = record.REC.speedDot;
        //         KT.record = record.REC.record;
        //         // console.log(record);
        //         // console.log(KT.timeDuration,KT.rhynthm,KT.nameOfSong, KT.speedDot,KT.record);
        //         for (i in KT.record) {
        //             // console.log(KT.record[i]);
        //             KT.dots.push(new PointTestController(KT.record[i].x,-KT.record[i].timeDrop * KT.speedDot + KT.game.height+KT.configs.HEIGHT_TOOL, 'dot', {
        //                 run: false,
        //                 speed: KT.speedDot
        //             }));
        //         }
        //         KT.checkData = true;
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         // alert(jqXHR.status);
        //         console.log("error");
        //     }
        //     // dataType: "jsonp"
        // });
			KT.game.state.start('test');
			document.getElementById("mySelect").style.display = 'none';
			KT.idCreated = document.getElementById("mySelect").value;
		});
		// Create a new Phaser keyboard variable: the up arrow key

		// When the 'upKey' is pressed, it will call the 'start' function once
		var txt_setTime = KT.game.add.text(50, 50, 'Set time: ');
		var btn_settingTime = KT.game.add.button(300, 45, 'btn_setting');
		btn_settingTime.anchor.set(0.5);
		btn_settingTime.scale.set(0.3);
		var txt_setRhynthm = KT.game.add.text(50, 100, 'Set rhynthm: ');
		var btn_settingRhyn = KT.game.add.button(300, 95, 'btn_setting');
		btn_settingRhyn.anchor.set(0.5);
		btn_settingRhyn.scale.set(0.3);
		// this.start();
		var txt_setSpeedDot = KT.game.add.text(50, 150, 'Set speed of dot: ');
		var btn_settingSpeed = KT.game.add.button(300, 145, 'btn_setting');
		btn_settingSpeed.anchor.set(0.5);
		btn_settingSpeed.scale.set(0.3);
		btn_settingTime.events.onInputDown.add(() => {
			var prmtTime = prompt("C'mon set Time? (seconds)", "30");
			// console.log(prmtTime);
			KT.timeDuration = prmtTime * 60;
		})
		btn_settingRhyn.events.onInputDown.add(() => {
			var prmtRhyn = prompt("Set Rhynthm(value/60=rhyn/second):", "5");
			KT.rhynthm = parseInt(prmtRhyn);
		})
		btn_settingSpeed.events.onInputDown.add(()=>{
			var prmtSpeed = prompt("Set speed(pixel/frame)", "10");
			// console.log(prmtTime);
			KT.speedDot = parseInt(prmtSpeed);
		})
	},
	update: function () {
		// console.log()
	},
	start: function () {
		// Start the actual game
		KT.game.state.start('play');
		document.getElementById("mySelect").style.display = 'none';
	}
};