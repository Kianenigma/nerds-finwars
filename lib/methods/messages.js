Meteor.methods({
  'message.insert': function(body, senderId, receiverId, conversationId){
    if (!conversationId) {
      Meteor.call('addConversations', senderId, receiverId, function(err, result){
        if (err) {
          throw err.reason;
        } else {
          conversationId = result;
        }
      });

    }

    Messages.insert({
      createAt: new Date(),
      body: body,
      senderId: senderId,
      conversationId: conversationId
    })

    Meteor.call('updateConversation', conversationId);
  }
})
