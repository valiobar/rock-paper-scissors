Game.Play = function (game) {

    this.chooseLoop = null;
    this.isChoiceMade= false;


};
var buttons =[];
var choice='';
var aiChoice='';
var secLeft=6;
var variants = ['rock','scissors','paper'];
var counter = 3;
var playerOne ;
var playerTwo ;
var hands=['1','2','3'];
Game.Play.prototype ={
         chooseTimer : null,
    create:function () {
        this.drawField();
        this.showChoise();
        console.log(ties+' '+losses);
        var wins =  this.add.text((Game.w/3)+Game.w/50, Game.h/25, "wins: "+ Game.wins, { font: "25px Arial", fill: "#ffffff", align: "center" });
       wins.scale.setTo(Game.sclaeFactorW,Game.sclaeFactorW);
        var ties =  this.add.text((Game.w/3)+6*Game.w/50, Game.h/25, "ties: "+ Game.ties, { font: "25px Arial", fill: "#ffffff", align: "center" });
        ties.scale.setTo(Game.sclaeFactorW,Game.sclaeFactorW);
        var losses =  this.add.text((Game.w/3)+10*Game.w/50, Game.h/25, "losses: "+ Game.losses, { font: "25px Arial", fill: "#ffffff", align: "center" });
        losses.scale.setTo(Game.sclaeFactorW,Game.sclaeFactorW);
       this.chooseTimer = this.add.text(this.world.centerX, this.world.centerY, secLeft, { font: "64px Arial", fill: "#ffffff", align: "center" });
        this.chooseTimer.anchor.setTo(0.5, 0.5);
        this.chooseLoop= this.time.events.loop(Phaser.Timer.SECOND, function () {
            if(!this.isChoiceMade) {
                secLeft--;

                this.chooseTimer.setText(secLeft);
                if (secLeft <= 0) {
                    this.isChoiceMade = true;
                    this.chooseTimer.destroy();
                    choice = 'rock';
                    this.startFight();
                    this.game.time.events.remove(this.chooseLoop);

                }
            }
        }, this);
        this.stage.backgroundColor= '#191970';
        console.log(this.isChoiceMade);



    },
    startFight:function () {
        playerOne = this.add.sprite(Game.w/6,this.world.centerY+100,hands[counter-1]);
        playerOne.anchor.setTo(0.5,0.5);
        playerOne.width=Game.w/3*0.75;
        playerOne.height=Game.w/3*0.75;
        playerTwo = this.add.sprite(((Game.w)*2/3)+Game.w/6,this.world.centerY+100,hands[counter-1]);
        playerTwo.anchor.setTo(0.5,0.5);
        playerTwo.width=Game.w/3*0.75;
        playerTwo.height=Game.w/3*0.75;
        fightCounter = this.add.text(this.world.centerX, this.world.centerY-Game.h/7, counter, { font: "64px Arial", fill: "#ffffff", align: "center" });
       fightCounter.scale.setTo(Game.sclaeFactorW,Game.scaleFactorH);
        fightCounter.anchor.setTo(0.5, 0.5);

        this.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
        this.time.events.loop(Phaser.Timer.SECOND*3,result, this);
    },
    drawField:function () {

        graphics = this.add.graphics(0, 0);
        graphics.clear();

        graphics.beginFill(0xc7d4e0);
        graphics.lineStyle(4,0xc7d4e0, 1);

        graphics.moveTo(0, 0);
        graphics.lineTo(Math.round( Game.w/3),0);
        graphics.lineTo(Math.round( Game.w/3),Math.round(Game.h) );
        graphics.lineTo(0, Math.round(Game.h) );

        graphics.lineTo(0, 0);

        graphics.endFill();

        graphics = this.add.graphics(0, 0);
        graphics.clear();

        graphics.beginFill(0xc7d4e0);
        graphics.lineStyle(4,0xc7d4e0, 1);

        graphics.moveTo(Math.round( (Game.w)*2/3), 0);
        graphics.lineTo(Math.round( Game.w),0);
        graphics.lineTo(Math.round( Game.w),Math.round(Game.h) );
        graphics.lineTo(Math.round( (Game.w)*2/3), Math.round(Game.h) );

        graphics.lineTo(Math.round( (Game.w)*2/3), 0);

        graphics.endFill();

    },
    showChoise :function () {
            var self = this;
        aiChoice=variants[Math.floor((Math.random() * 3) + 1)-1];
        console.log(aiChoice);
                buttonRock = this.add.button(Game.w/40 ,Game.h/25,'rock',function () {
                    console.log("pre"+self.isChoiceMade);
                    if (!self.isChoiceMade) {
                    self.chooseTimer.destroy();
                    choice = 'rock';
                    self.startFight();
                    self.fadeOutChoises(this);
                    self.isChoiceMade = true;
                    console.log(choice);


                }

            });
              buttonRock.width=Game.w/10;
              buttonRock.height=Game.w/10;
       buttons.push(buttonRock);
            buttonPaper = this.add.button(Game.w/40+Game.w/10 ,Game.h/25,'paper',function () {
                console.log("pre"+self.isChoiceMade);
                if (!self.isChoiceMade) {
                    choice = 'paper';
                    self.chooseTimer.destroy();
                    self.startFight();
                    self.fadeOutChoises(this);
                    Game.self.time.events.remove(this.chooseLoop);
                    self.isChoiceMade = true;
                    console.log(choice);
                }

            });
        buttonPaper.width=Game.w/10;
        buttonPaper.height=Game.w/10;
        buttons.push(buttonPaper);
                buttonScissors=this.add.button(Game.w/40+ 2*Game.w/10 ,Game.h/25,'scissors',function () {
                    console.log("pre"+self.isChoiceMade);
                    if (!self.isChoiceMade) {
                        choice = 'scissors';
                        self.chooseTimer.destroy();
                        self.fadeOutChoises(this);
                        self.startFight();
                        Game.self.time.events.remove(this.chooseLoop);
                        self.isChoiceMade = true;
                        console.log(choice);
                        console.log(self.isChoiceMade);
                    }
                    console.log(self.isChoiceMade);
            });
        buttonScissors.width = Game.w/10;
        buttonScissors.height = Game.w/10;
       buttons.push(buttonScissors);

    },
    fadeOutChoises:function (button) {
        var self =this;
      console.dir(buttons);
      buttons = buttons.filter(function(item) {
          return item !== button;
      });
        for (var j = 0; j < buttons.length; j++) {
            (function (_sprite) {
                var tween = self.game.add.tween(_sprite);
                tween.to({ alpha: 0 }, 500, Phaser.Easing.Linear.None);
                tween.onComplete.add(function () {
                    _sprite.destroy();
                });
                tween.start();
            })(buttons[j]);
        }



      console.dir(buttons);
  },
    update : function () {
    }

};


function updateCounter() {
    counter--;
    playerOne.destroy();
    playerTwo.destroy();
    playerOne = this.add.sprite(Game.w/6,this.world.centerY+Game.h/7,hands[counter-1]);
    playerOne.anchor.setTo(0.5,0.5);
    playerOne.width=Game.w/3*0.75;
    playerOne.height=Game.w/3*0.75;
    playerTwo = this.add.sprite(((Game.w)*2/3)+Game.w/6,this.world.centerY+Game.h/7,hands[counter-1]);
    playerTwo.anchor.setTo(0.5,0.5);
    playerTwo.width=Game.w/3*0.75;
    playerTwo.height=Game.w/3*0.75;
    fightCounter.setText(counter);

}
function  result() {

    switch(choice) {
        case 'rock':
            if(aiChoice =='scissors'){
               Game.wins++;
            } else if(aiChoice =='paper'){

                 Game.losses++;

            }else{
                Game.ties++;
            }
            break;
        case 'scissors':
            if(aiChoice =='paper'){
                Game.wins++;
            } else if(aiChoice =='rock'){
                Game.losses++;
            }else{
                Game.ties++;
            }
            break;
        case 'paper':
            if(aiChoice =='rock'){
                Game.wins++;
            } else if(aiChoice =='scissors'){
                Game.losses++;
            }else{
                Game.ties++;
            }
            break;


    }
    playerOne.destroy();
    playerTwo.destroy();
    playerOne = this.add.sprite(Game.w/6,this.world.centerY+Game.h/7,choice);
    playerOne.anchor.setTo(0.5,0.5);
    playerOne.width=Game.w/3;
    playerOne.height=Game.w/3;
    playerTwo = this.add.sprite(((Game.w)*2/3)+Game.w/6,this.world.centerY+Game.h/7,aiChoice);
    playerTwo.anchor.setTo(0.5,0.5);
    playerTwo.width=Game.w/3;
    playerTwo.height=Game.w/3;
    choice='';
    aiChoice='';
    counter = 3;
    secLeft=6;
    buttons =[];
this.isChoiceMade=false;
     this.game.paused=true;

    paused(Game.self);

    this.state.start('Play')

}

function paused(self) {
    var style = { font: "32px Arial", fill: "#ff0044",  align: "center", backgroundColor: "#ffff00" };

   var text = self.add.text(self.width/2,self.height/2, "Click to continue", style);
    text.anchor.set(0.5);
    self.input.onDown.add(function () {
        Game.self.paused=false;
        text.destroy();
    });
}