// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function() {
    this.on('ended', function() {
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });

<<<<<<< HEAD
    this.on('enqueue', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    });

   

    // this.on('play', function(){
    //   this.playFirst();
    // });
=======
    // this.on('enqueue', function(song){
    //   console.log("hey")
    // });

>>>>>>> c0bbec45d00cacc54a8f4cc996475b3c6266aa11
  },


  playFirst: function() {
<<<<<<< HEAD
    this.at(0).play();
=======
      // console.log(this.at(0));
      this.at(0).play();
>>>>>>> c0bbec45d00cacc54a8f4cc996475b3c6266aa11
  }

});