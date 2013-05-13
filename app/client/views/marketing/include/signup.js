Template.signup.helpers({
  showSignUp: function() {
    return !Session.equals("showConfirmIsVisible", true) ?
      "fadeInUp" : "rollOut hidden";
  },
  showConfirm: function() {
    return Session.equals("showConfirmIsVisible", true) ?
      "fadeInUp" : "rollOut hidden";
  }
});

Template.signup.events({
  'click button.btn-primary': function(e) {
    var email, user;

    user = {
      email: $(e.target).find('[name=email]').val(),
      roles: ['unpaid', 'beta']
    }

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