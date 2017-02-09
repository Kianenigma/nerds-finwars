Template.messageBox.helpers({
  'messages': function() {
    if (Session.get('selectedUser') && !Session.get('selectedConversation')) {
      var targetConv =
       Conversations.findOne({
        $and: [
          {users: { $in: [Meteor.userId()]} },
          {users: { $in: [Session.get('selectedUser')]} }
        ]
      });
      if ( targetConv ) {
        Session.set('selectedConversation', targetConv._id)
      }
    }
    return Messages.find({conversationId: Session.get('selectedConversation')})
  }
})
