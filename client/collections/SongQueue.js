// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function() {
    this.on('ended', function() {
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });

    this.on('enqueue', function() {
      console.log(this.length); 
      if(this.length === 1) {
        this.playFirst();
      }
    });

   

    // this.on('play', function(){
    //   this.playFirst();
    // });
  },


  playFirst: function() {
    
    if(this.at(0)) {
      this.at(0).play();
      // this.set('currentSong', this.at(0));
    }
    
  }

});