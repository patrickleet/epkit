Meteor.methods({
  signup: function (user) {
    if (this.isSimulation) {
      Session.set("showConfirmIsVisible", true);
      return;
    }

    var id = Accounts.createUser({
      email: user.email,
      profile: { name: user.email },
      roles: ['lead']
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }

    //Accounts.sendEnrollmentEmail(id, user.email)
    return id;
  }

});