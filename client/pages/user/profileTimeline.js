Template.profileTimeline.helpers({
  'notifications': function() {
    return Notifications.find({owner: Meteor.userId()});
  },

  'backedNotif': function() {
    return this.type = "backed";
  },

  'daysLeftNotif': function() {
    return this.type = "daysLeft";
  },

  'failedNotif': function() {
    return this.type = "failed";
  },

  'fullyFundNotif': function() {
    return this.type = "fullyFund";
  },

  'messageNotif': function() {
    return this.type = "message";
  }
})
