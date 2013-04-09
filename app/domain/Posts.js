Posts = new Meteor.Collection("posts");

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Posts.find().count() > 0) return;

    for (var i = 0; i < 4; i++) {
      Posts.insert({
        title: "Post " + i
      });
    }
  });

  Meteor.publish("posts", function () {
    return Posts.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("posts");
}