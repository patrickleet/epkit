if (Meteor.isClient) {
  Session.set("widgetSet", false);
  var key = "AY3rsxrO3RZqrOU3F0sPSz";

  Template.postSubmit.rendered = function () {
    if (!Session.get("widgetSet")) {
      var cb = function () {
        filepicker.constructWidget(document.getElementById('constructed-widget'));
      };
      loadPicker(key, cb);
    }
  }
};


Template.postSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    
    var post = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val(),
      message: $(event.target).find('[name=message]').val()
    }
    
    Meteor.call('post', post, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        // if the error is that the post already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('postPage', error.details)
      } else {
        Meteor.Router.to('postPage', id);
      }
    });
  }
});