Meteor.methods({
  'share.insert': function(startupId, investValue, owner) {
    var startup = Startups.findOne({_id: startupId});
    var sharePercent = parseFloat((parseInt(investValue) / parseInt(startup.goal)),2);
    Shares.insert({
      startup: startup._id,
      owner: owner,
      sharePercent: sharePercent,
      createAt: new Date
    })
  }
})
