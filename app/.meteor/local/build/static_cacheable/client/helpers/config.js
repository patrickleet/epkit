(function(){ if (Meteor.isServer()) {

}

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY'
});


}).call(this);
