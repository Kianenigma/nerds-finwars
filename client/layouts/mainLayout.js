Template.mainLayout.onCreated(function () {
  this.subscribe('allUsers');
  this.subscribe('allStartups');
  this.subscribe('allInvestments');
  this.subscribe('allConversations');
  this.subscribe('allMessages');
  this.subscribe('allNotifications');
  this.subscribe('allShares');
})

Template.mainLayout.helpers({
  'isLogged': function () {
    return Meteor.user()
  },

  'userName': function () {
    return Meteor.user().name
  }
})

Template.mainLayout.events({
  'click .logout': function (event) {
    event.preventDefault()
    Meteor.logout()
    Router.go('home')
  },

  'click .profile': function (event) {
    event.preventDefault()
    Router.go('profile')
  }
})
