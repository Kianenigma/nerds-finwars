Meteor.publish('allUsers', function () {
  return Meteor.users.find({},{
    fields: {
      '_id': 1,
      'emails': 1,
      'name': 1
    }
  });
});

Meteor.publish('allStartups', function () {
  return Startups.find({});
});

Meteor.publish('allInvestments', function () {
  return Investments.find({});
})

Meteor.publish('allConversations', function () {
  return Conversations.find({});
})

Meteor.publish('allMessages', function () {
  return Messages.find({});
})
