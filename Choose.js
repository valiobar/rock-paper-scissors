Game.Choose = function (game) {


};
var choice='';
var aiChoice='';
var secLeft=6;
var variants = ['rock','scissors','paper'];

Game.Choose.prototype={


    create:function () {
        scores = this.add.text(50, this.world.centerY-150, score, { font: "64px Arial", fill: "#ffffff", align: "center" });
        scores.anchor.setTo(0.5, 0.5);
        this.stage.backgroundColor= '#191970';
        text = this.add.text(this.world.centerX, this.world.centerY-200, secLeft, { font: "64px Arial", fill: "#ffffff", align: "center" });
        text.anchor.setTo(0.5, 0.5);
        this.time.events.loop(Phaser.Timer.SECOND, function () {
            secLeft--;

            text.setText( secLeft);
        }, this);
        buttons ={
            stone:this.add.button(this.world.centerX-550 ,this.world.centerY-150,'rock',function () {
                           choice = 'rock';
                console.log(choice);

            }),
            paper:this.add.button(this.world.centerX-150,this.world.centerY-150,'paper',function () {
                choice = 'paper';
                console.log(choice);

            }),
            scissors:this.add.button(this.world.centerX+250,this.world.centerY-150,'scissors',function () {
                choice ='scissors';
                console.log(choice);

            })
        };

    },
    update : function () {

        if(choice!='') {
            aiChoice=variants[Math.floor((Math.random() * 3) + 1)-1];
            console.log(aiChoice);
            this.state.start('Play');

        }
        if (secLeft<=0){
            choice = 'rock';
            aiChoice = variants[Math.floor((Math.random() * 3) + 1)-1];
            console.log(aiChoice);
            this.state.start('Play');

        }


    }


};
