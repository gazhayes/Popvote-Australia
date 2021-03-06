Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'votesList'});
Router.route('/iframe', {name: 'iFrame'});
Router.route('/submitvote', {name: 'submitVote'});
Router.route('/signup', {name: 'signup'});
Router.route('/scores', {name: 'scoreCard'});
Router.route('/login', {name: 'loginpage'});


var requireLogin = function() { if (! Meteor.user()) {
  if (Meteor.loggingIn()) { this.render(this.loadingTemplate);
  } this.render('accessDenied');
} else {
  this.next(); }
}

Router.onBeforeAction(requireLogin, {only: 'submitVote'});

Router.route('/votes/:_id', {
  name: 'voteInfoPage',
  data: function() { return VotesCollection.findOne(this.params._id); }
});

Router.route('/votes/comments/:_id', {
  name: 'commentList',
  data: function() { return VotesCollection.findOne(this.params._id); }
});

Router.route('/votes/submitvote/:_id', {
  name: 'newSubvote',
  data: function() { return VotesCollection.findOne(this.params._id); }
});

Router.route('/votes/subvotes/:_id', {
  name: 'displaySubvotes',
  data: function() { return VotesCollection.findOne(this.params._id); }
});

