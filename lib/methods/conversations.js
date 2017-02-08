Meteor.methods({
  'addConversations': function(user1, user2) {
    return (Conversations.insert({
        createAt: new Date(),
        users: [user1, user2]
      }));
  }
})
