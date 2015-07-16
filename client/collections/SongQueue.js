// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function() {
    this.on('ended', function() {
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });

    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    });
  },


  playFirst: function() {
    this.at(0).play();
  }

});