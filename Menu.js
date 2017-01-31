
Game.Menu = function (game) {

};


Game.Menu.prototype ={

    preload : function () {


    },
    create :function () {
       this.drawField();
        $(".fb-share-button").show();
       var startGame = this.add.button(Game.w/4 ,Game.h/3,'starButton',function () {
           var provider = new firebase.auth.FacebookAuthProvider();
           provider.setCustomParameters({
               'display': 'popup'
           });
           firebase.auth().signInWithPopup(provider).then(function(result) {
               // This gives you a Facebook Access Token. You can use it to access the Facebook API.
               var token = result.credential.accessToken;
               // The signed-in user info.
               var user = result.user;
               // ...
           }).catch(function(error) {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // The email of the user's account used.
               var email = error.email;
               // The firebase.auth.AuthCredential type that was used.
               var credential = error.credential;
               // ...
           });

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