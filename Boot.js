var Game={};
Game.Boot = function (game) {
    Game.w =$(window).width();
    Game.h =$(window).height();
    Game.sclaeFactorW = Game.w/1550;
    Game.scaleFactorH = Game.h/750;
    Game.wins =0;
    Game.ties=0;
    Game.losses=0;
    Game.self = game;

    console.log(Game.scaleFactorH+' '+Game.sclaeFactorW);
    console.log(Game.w+" "+Game.h);
};

var firstRunLandscape=false;
var ties = 0;
var losses =0;
console.log(ties+' '+losses);
Game.Boot.prototype ={
        init :function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange=true;
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        },
        preload : function () {
            this.scale.forceOrientation(true, false);

            this.scale.enterIncorrectOrientation.add(handleIncorrect);
            this.scale.leaveIncorrectOrientation.add(handleCorrect);
            this.load.image('loadBar','assets/gears.gif');
            firstRunLandscape = Game.self.scale.isGameLandscape;

        },
        create :function () {

            this.state.start('Load');

        },
        update:function () {
            // this.scale.width = $("body").innerWidth();;
            // this.scale.height = $("body").innerHeight();

        }


    
};
function handleIncorrect(){
    if(!Game.self.device.desktop){
        console.log(firstRunLandscape);
        document.getElementById("turn").style.display="block";
        Game.self.paused=true;

    }
}

function handleCorrect(){

    if(!Game.self.device.desktop){

        document.getElementById("turn").style.display="none";
        if (!firstRunLandscape){
            Game.h =$(window).width();
            Game.w =$(window).height();
            Game.sclaeFactorW = Game.w/1550;
            Game.scaleFactorH = Game.h/750;
            console.log(Game.w +" " + Game.h);

        Game.self.scale.setGameSize(Game.w, Game.h);


        }
        Game.self.paused=false;

    }
}