Meteor.Router.add({
  '/': {to: 'home', as: 'home'},
  '/best': 'bestPosts',
  '/new': 'newPosts',

  '/admin': {to: 'adminusers', as: 'admin'},
  
  '/posts/:_id': {
    to: 'postPage', 
    and: function(id) { Session.set('currentPostId', id); }
  },
  
  '/posts/:_id/edit': {
    to: 'postEdit', 
    and: function(id) { Session.set('currentPostId', id); }    
  },
  
  '/submit': 'postSubmit',
  '*': 'not_found'

});

Meteor.Router.filters({
  'marketingIfLoggedOut': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading'
    else
      return 'marketing'

  },

  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },

  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});

Meteor.Router.filter('marketingIfLoggedOut')
Meteor.Router.filter('requireLogin', {only: ['postSubmit', 'postEdit']});
Meteor.Router.filter('clearErrors');
