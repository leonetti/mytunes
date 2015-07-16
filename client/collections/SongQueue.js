// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function() {
    this.on('ended', function() {
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });

    // this.on('enqueue', function(song){
    //   console.log("hey")
    // });

  },


  playFirst: function() {
      // console.log(this.at(0));
      this.at(0).play();
  }

});