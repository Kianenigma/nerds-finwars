Template.messageBox.helpers({
  'messages': function() {
    return Messages.find({conversationId: Session.get('selectedConversation')})
  }
})
