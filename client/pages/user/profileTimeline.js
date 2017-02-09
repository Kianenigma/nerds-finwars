Template.profileTimeline.helpers({
  'notifications': function() {
    return Notifications.find({owner: Meteor.userId()});
  },

  'backedNotifH': function() {
    return this.type == "backed";
  },

  'daysLeftNotifH': function() {
    return this.type == "daysLeft";
  },

  'failedNotifH': function() {
    return this.type == "failed";
  },

  'fullyFundNotifH': function() {
    return this.type == "fullyFund";
  },

  'messageNotifH': function() {
    return this.type == "message";
  }
})
