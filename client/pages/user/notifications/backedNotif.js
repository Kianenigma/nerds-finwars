Template.backedNotif.helpers({
  'backerName': function() {
    return Meteor.users.findOne({_id: this.backer}).name;
  },

  'startupName': function() {
    return Startups.findOne({_id: this.startup}).name;
  },

  'amount': function() {
    return this.amount;
  }
})
