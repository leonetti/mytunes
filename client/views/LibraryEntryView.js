// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td><td class="song-title"><%= title %></td>'),

  events: {
    'click': function() {
<<<<<<< HEAD
=======
      // don't want to use this, because enqueue should automatically do this.
      // this.model.play();
>>>>>>> c0bbec45d00cacc54a8f4cc996475b3c6266aa11
      this.model.enqueue();
      
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
