// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function() {
    this.on('ended', function() {
        this.remove(this.at(0));
        if(this.at(0)){
          this.playFirst();
        }
    }, this);

    this.on('dequeue', function(){
      this.remove(this.at(0));
      if(this.at(0)){
          this.playFirst();
        }
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