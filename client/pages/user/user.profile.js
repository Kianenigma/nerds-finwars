Template['user.profile'].onRendered(function () {
  console.log(this);
})
Template['user.profile'].helpers({
  'userName': function() {
    return this.name;
  }
})

Template['user.profile'].events({
  'click .chat-to': function() {
    Session.set('selectedUser', this._id);
    Router.go('chat');
  }
})
