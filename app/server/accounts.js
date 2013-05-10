if (Meteor.users.find().count() == 0) {
  var users = [
    {
      name: "Patrick Scott",
      email:"patrick.lee.scott@gmail.com",
      roles:['admin']
    },
    {
      name: "Krish Jargidar",
      email:"krishjargidar@gmail.com",
      roles:['admin']}
  ];

  _.each(users, function (user) {
    var id;

    id = Accounts.createUser({
      email: user.email,
      password: "qwe123",
      profile: { name: user.name }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }

  });
}