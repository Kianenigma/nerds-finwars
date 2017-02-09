Template.messageBrick.helpers({
  'messageSenderName': function() {
    return Meteor.users.findOne({_id: this.senderId}).name
  }
})
