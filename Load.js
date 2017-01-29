Game.Load =function (game) {
    this.loadBar = null;

};


Game.Load.prototype ={
    preload:function () {
        this.loadBar=this.add.sprite(this.world.centerX,this.world.centerY,'loadBar');
        this.loadBar.anchor.setTo(0.5,0.5);

        this.time.advancedTiming = true;

        this.load.setPreloadSprite(this.loadBar);
        this.load.spritesheet('paper','assets/paper.png',300,300);
        this.load.spritesheet('scissors','assets/scissors.png',300,300);
        this.load.spritesheet('rock','assets/rock.png',300,300);
        this.load.spritesheet('3','assets/3.png',300,300);
        this.load.spritesheet('2','assets/2.png',300,300);
        this.load.spritesheet('1','assets/1.png',300,300);



    },
    create:function () {

    this.state.start('Menu');
    }


};
