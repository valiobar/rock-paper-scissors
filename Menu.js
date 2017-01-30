
Game.Menu = function (game) {

};


Game.Menu.prototype ={

    preload : function () {


    },
    create :function () {
       this.drawField();
        $(".fb-share-button").show();
       var startGame = this.add.button(Game.w/4 ,Game.h/3,'starButton',function () {


        });


    },
    update:function () {


    },
    drawField:function () {

        graphics = this.add.graphics(0, 0);
        graphics.clear();

        graphics.beginFill(0xc7d4e0);
        graphics.lineStyle(4,0xc7d4e0, 1);

        graphics.moveTo(Math.round( Game.w/4),Math.round(Game.h/4));
        graphics.lineTo(Math.round(  3*Game.w/4),Math.round(Game.h/4));
        graphics.lineTo(Math.round(  3*Game.w/4),Math.round(3*Game.h/4));
        graphics.lineTo(Math.round(  Game.w/4),Math.round(3*Game.h/4));
        graphics.moveTo(Math.round( Game.w/4),Math.round(Game.h/4));

        graphics.endFill();

    },



};