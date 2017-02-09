Template.conversationBox.helpers({
  'contacts': function() {
    return Conversations.find({
      users: { $in: [Meteor.userId()] }
    },{sort:{updateAt: -1}});
  }
})
