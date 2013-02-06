if (Meteor.isClient) {
  Template.postIndex.helpers({
    posts: function () {
      return Posts.find();
    }
  });
}