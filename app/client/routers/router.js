setRootPage()
Meteor.pages({
  '/': { to: rootPage(), as: 'root', before: [setLayout, setRootPage] },
  '/posts': { to: 'postIndex', as: 'postIndex', before: setLayout, nav: 'home' },
  '/posts/:_id': { to: 'postShow', before: [setLayout, setPost], nav: 'home' },
  '/secret': { to: 'secret', before: [setLayout, authorizeSecret], nav: 'secret' },
  '/401': { to: 'unauthorized', before: setLayout },
  '*': { to: 'notFound', before: setLayout }
});

function isAuthorized () {
  return !!Meteor.user()
}

function rootPage () {
  return Session.get("rootPage")
}

function setRootPage ()
{
  if (isAuthorized())
  {
    Session.set("rootPage", "posts")
  }
  else
  {
    Session.set("rootPage", "about")
  }
}

function setPost (context, page) {
  var _id = context.params._id;
  Session.set("post", Posts.findOne(_id));
}

function setLayout (context, page) {
  if (isAuthorized())
    page.withLayout('loggedInLayout');
  else
    page.withLayout('loggedOutLayout');
}

function authorizeSecret (context, page) {
  if (!Session.get("secret")) {
    context.redirect(Meteor.unauthorizedPath());
  }
}