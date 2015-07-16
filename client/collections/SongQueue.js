// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function() {
    this.on('ended', function() {
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });


    this.on('play', function(){
      this.playFirst();
    });
  },


  playFirst: function() {
  console.log(this);
    
    if(this.at(0)) {
      // console.log(this.at(0));
      this.set('currentSong', this.at(0))
    }
    
  }

});