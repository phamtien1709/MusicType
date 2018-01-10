var testState = {
    preload: function () {
        KT.game.load.image('explode', 'assets/explode.png');
        // KT.game.load.audio('music', 'assets/Music/DemoHalleujah.mp3');
    },
    create: function () {
        // console.log(KT.idCreated);
        KT.checkData = false;
        KT.timeoutPlay = KT.game.time.create();
        KT.game.physics.startSystem(Phaser.Physics.ARCADE);
        KT.bg = KT.game.add.sprite(0, 0, 'bg');
        // KT.bg.scale.set(0.833333);
        KT.barGroup = KT.game.add.physicsGroup();
        KT.dotGroup = KT.game.add.physicsGroup();
        KT.dots = [];
        KT.checkInputTest = false;
        KT.timeDuration = 0;
        KT.rhynthm = 0;
        KT.speedDot = 0;
        KT.score = 0;
        KT.inWorld = false;
        KT.pianoGroup = KT.game.add.physicsGroup();
        KT.pianoList = [];
        // console.log(Math.floor(Math.random() * (KT.game.width-200+1)+200));
        // console.log(Math.floor(Math.random() * (KT.game.height-300+1)+300));       
        // KT.idCreated = "5a557fe8bd966f114c3550c0";
        // KT.previousName = "Makeclear";
        KT.style = { 
            font: "20px Arial", 
            fill: "white", 
            boundsAlignH: "center", 
            boundsAlignV: "middle" 
        };
        // KT.line = KT.game.add.physicsGroup();
        // // KT.line.add.physicsGroup();
        // KT.line.create(0, KT.configs.HEIGHT_TOOL, 'line');
        // KT.line.anchor.set(0.5);
        KT.endGame = false;
        KT.displayingText = KT.game.add.text( KT.game.width - 110, 10, "Score: " + KT.score, KT.style);
        KT.song = KT.game.add.audio('music');
        // KT.frameTest = 0;
        KT.checkPlay = false;
        for (i in KT.pianoNotesFrame){
            KT.pianoList.push(new PianoController('piano',{
                time: KT.pianoNotesFrame[i]
            }))
        };
        // console.log(pianoList);
        // console.log(KT.timeoutPlay);
        $.ajax({
            type: "GET",
            url: "https://api.mlab.com/api/1/databases/musictype/collections/Records?apiKey=9ZHuLpUl39GPPuRCljevNgJj51u5mOzP",
            success: function (data) {
                // console.log(data);
                const record = data.find((obj) => {
                    if(obj._id.$oid == KT.idCreated ){
                        return obj
                    };
                });
                // console.log(record);
                KT.timeDuration = record.REC.timeOfSong;
                KT.rhynthm = record.REC.rhynthm;
                KT.nameOfSong = record.REC.name;
                KT.speedDot = record.REC.speedDot;
                KT.record = record.REC.record;
                // console.log(record);
                // console.log(KT.timeDuration,KT.rhynthm,KT.nameOfSong, KT.speedDot,KT.record);
                for (i in KT.record) {
                    // console.log(KT.record[i]);
                    KT.dots.push(new PointTestController(KT.record[i].x,-KT.record[i].timeDrop * KT.speedDot + KT.game.height+KT.configs.HEIGHT_TOOL, 'note', {
                        run: false,
                        speed: KT.speedDot
                    }));
                }
                KT.checkData = true;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // alert(jqXHR.status);
                console.log("error");
            }
            // dataType: "jsonp"
        });
        KT.bar = new BarController(KT.game.world.centerX, KT.game.height - KT.configs.HEIGHT_TOOL);
        // KT.bar.kill();
        KT.btn_play = KT.game.add.button(KT.game.world.centerX, KT.game.world.centerY, 'btn_touch');
        KT.btn_play.anchor.set(0.5);
        KT.btn_play.scale.set(0.4);
        KT.btn_play.kill();
        KT.btn_play.events.onInputDown.add(() => {
            KT.song.play();
            this.playTest();
            KT.btn_play.destroy();
            KT.checkPlay = true;
            // if ((KT.timeDuration !== undefined) && (KT.rhynthm !== undefined)) {
            // 	// this.start();
            // }
            // else {
            // 	// alert("Please input Time and Rhynthm!");
            // }
        });
    },
    update: function () {
        if (KT.checkPlay) {
            KT.frameTest += 1;
            // console.log(KT.frameTest);
        }
        // if(KT.checkPlay){
        
        // }
        // console.log(KT.dots.find((obj)=>{
        //     return obj.timeDrop = KT.frameTest;
        // }));
        KT.game.physics.arcade.overlap(
            KT.barGroup,
            KT.dotGroup,
            this.onBarHitDot
        )
        // KT.game.physics.arcade.overlap(
        //     KT.line,
        //     KT.dotGroup,
        //     this.onLineHitDot
        // )
    },
    render: function () {
        if (KT.checkData) {
            KT.btn_play.revive();
            // KT.bar.revive();
        }
        // if(KT.checkData){
        //     console.log(KT.record.find((obj)=>{
        //         return obj.timeDrop = KT.frameTest
        //     }));
        // }
        if(KT.endGame){
            KT.displayingText.setText("LOSER");
            KT.timeoutPlay.stop();
            KT.song.stop();
        }
        if (KT.timeoutPlay.running) {
            KT.game.debug.text(this.formatTime(Math.round((KT.timeoutPlayCountDown.delay - KT.timeoutPlay.ms) / 1000)), 10, 20, "#fff");
        } else {
            KT.game.debug.text("Hết giờ!", KT.game.width - 85, 25, "#fff");
        }
    },
    playTest: function () {
        // console.log(KT.dots);
        // KT.timeToEnd = 0;
        KT.frameTest = 0;
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
        KT.timeoutPlayCountDown = KT.timeoutPlay.add(Phaser.Timer.MINUTE * minutes + Phaser.Timer.SECOND * seconds, this.timeoutPlay, this);
        KT.timeoutPlay.start();
    },
    timeoutPlay: function () {
        KT.timeoutPlay.stop();
        KT.song.stop();
    },
    formatTime: function (s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    onBarHitDot: function (barSprite, dotSpite) {
        dotSpite.destroy();
        // console.log(dotSpite.position);
        // var x = dotSpite.position.x;
        // var y = dotSpite.position.y;
        // KT.explodeDot = new ExplodeController(x, y, 'explode', {});
        KT.score += 1;
        KT.displayingText.setText("Score: " + KT.score);
    },
    // onLineHitDot: function(lineSprite, dotSpite){
    //     KT.inWorld = true;
    //     // console.log('hit');
    // }
}