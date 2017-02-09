Template.daysLeftNotif.helpers({
  'startupName': function() {
    return Startups.findOne({_id: this.startup}).name;
  },

  'daysLeft': function() {
    return this.daysLeft;
  }
});
