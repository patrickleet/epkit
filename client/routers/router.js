Meteor.pages({
  '/': { to: 'postIndex', as: 'root', before: setLayout, nav: 'home' },
  '/posts': { to: 'postIndex', as: 'postIndex', before: setLayout, nav: 'home' },
  '/posts/:_id': { to: 'postShow', before: [setLayout, setPost] },
  '/secret': { to: 'secret', before: [setLayout, authorizeSecret], nav: 'secret' },
  '/401': { to: 'unauthorized', before: setLayout },
  '*': { to: 'notFound', before: setLayout }
});

function isAuthorized () {
  return Meteor.user()
}

function setPost (context, page) {
  var _id = context.params._id;
  Session.set("post", Posts.findOne(_id));
}

function setLayout (context, page) {
  if (isAuthorized())
    page.withLayout('loggedInLayout');
  else
    page.withLayout('layout');
}

function authorizeSecret (context, page) {
  if (!Session.get("secret")) {
    context.redirect(Meteor.unauthorizedPath());
  }
}