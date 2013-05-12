Meteor.methods({
  signup: function (user) {
    if (Meteor.isServer())
    {
      var id = Accounts.createUser({
        email: user.email,
        profile: { name: user.email }
      });

      console.log(id);

      if (user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles);
        Accounts.sendEnrollmentEmail(id, user.email)
      }
      return id;
    }
    else
      return 0;
  }
})