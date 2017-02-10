Meteor.methods({
  'invest.insert': function(investValue, startupId){
    Investments.insert({
      investValue: parseInt(investValue),
      owner: Meteor.userId(),
      startupId: startupId,
      createAt: new Date()
    });
    var notifOwner = Startups.findOne({_id: startupId}).owner;
    Meteor.call('share.insert', startupId, investValue, Meteor.userId());
    Meteor.call('backedNotif.insert', Meteor.userId(), startupId, investValue, notifOwner);
  }
});
