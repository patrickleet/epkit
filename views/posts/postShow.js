if (Meteor.isClient) {
  Template.postShow.helpers({
    post: function () {
      return Session.get("post");
    }
  });
}
