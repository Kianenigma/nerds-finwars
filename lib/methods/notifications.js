Meteor.methods({
  'backedNotif.insert': function(backer, startup, amount, owner) {
    Notifications.insert({
      createAt: new Date(),
      type: "backed",
      backer: backer,
      startup: startup,
      amount: amount,
      owner: owner
    });
  },

  'daysLeftNotif.insert': function(startup, daysLeft, owner) {
    Notifications.insert({
      createAt: new Date(),
      type: "daysLeft",
      startup: startup,
      daysLeft: daysLeft,
      owner: owner
    });
  },

  'failedNotif.insert': function(startup, owner) {
    Notifications.insert({
      createAt: new Date(),
      type: "failed",
      startup: startup,
      owner: owner
    })
  },

  'fullyFundNotif.insert': function(startup, owner) {
    Notifications.insert({
      createAt: new Date(),
      type: "fullyFund",
      startup: startup,
      owner: owner
    })
  },

  'messageNotif.insert': function(sender, owner) {
    Notifications.insert({
      createAt: new Date(),
      type: "message",
      sender: sender,
      owner: owner
    })
  }
})
