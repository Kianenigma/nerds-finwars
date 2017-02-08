Template.conversationBox.helpers({
  'contacts': function() {
    return Meteor.users.find();
  }
})
