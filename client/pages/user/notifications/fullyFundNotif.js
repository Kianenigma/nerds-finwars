Template.fullyFundNotif.helpers({
  'startupName': function() {
    return Startups.findOne({_id: this.startup}).name;
  }
});
