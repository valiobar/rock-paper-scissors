
Game.Menu = function (game) {

};
var config=null;

Game.Menu.prototype ={

    preload : function () {
        // Initialize Firebase
        config = {
            apiKey: "AIzaSyBFy2IaF_UMDlLIgI8Ivb-ZPIYLeW2K1O4",
            authDomain: "rock-paper-secissors.firebaseapp.com",
            databaseURL: "https://rock-paper-secissors.firebaseio.com",
            storageBucket: "rock-paper-secissors.appspot.com",
            messagingSenderId: "51483859369"
        };
        firebase.initializeApp(config);

    },
    create :function () {
       this.drawField();
        $(".fb-share-button").show();
       var startGame = this.add.button(Game.w/4 ,Game.h/3,'starButton',function () {
           if (!firebase.auth().currentUser) {

               var provider = new firebase.auth.FacebookAuthProvider();
               console.log(provider);

               firebase.auth().signInWithPopup(provider).then(function(result) {
                   var token = result.credential.accessToken;
                   var user = result.user;
                   player.name =firebase.auth().currentUser.displayName;
                   Game.self.state.start('Play');
               }).catch(function(error) {

                   var errorCode = error.code;
                   var errorMessage = error.message;

                   var email = error.email;

                   var credential = error.credential;

                   if (errorCode === 'auth/account-exists-with-different-credential') {
                       alert('You have already signed up with a different auth provider for that email.');
                       // If you are using multiple auth providers on your app you should handle linking
                       // the user's accounts here.
                   } else {
                       console.error(error);
                   }
               });
           } else {
               player.name =firebase.auth().currentUser.displayName;
               console.log(player);
               Game.self.state.start('Play');
           }

           console.log(firebase.auth().currentUser);
           console.log(player);

        });
        startGame.width=Game.w/10;
        startGame.height=Game.w/20;

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