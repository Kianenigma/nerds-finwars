Meteor.methods({
  'addConversations': function(user1, user2) {
    return (Conversations.insert({
        createAt: new Date(),
        users: [user1, user2]
      }));
  },

  'updateConversation': function(conversationId) {
    Conversations.update({_id: conversationId},{$set: {updateAt: new Date()}});
  }
})
