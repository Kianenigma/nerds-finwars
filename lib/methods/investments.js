Meteor.methods({
  'invest.insert': function(investValue, startupId){
    Investments.insert({
      investValue: investValue,
      owner: Meteor.userId(),
      startupId: startupId,
      createAt: new Date()
    })
  }
})
