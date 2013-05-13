Template.signup.helpers({
  showSignUp: function() {
    return !Session.equals("showConfirmIsVisible", true) ?
      "fadeInUp span2" : "rollOut hidden";
  },
  showConfirm: function() {
    return Session.equals("showConfirmIsVisible", true) ?
      "fadeInUp span4" : "rollOut hidden";
  }
});

Template.signup.events({
  'submit form': function(e, tmpl) {
    var user, form;
    e.preventDefault();
    form = e.currentTarget;
    user = parseForm(form);

    Meteor.call('signup', user, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);

        // if the error is that the post already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('home', error.details)
      } else {
        Session.set("showConfirmIsVisible", true);
      }
    });

  }
})