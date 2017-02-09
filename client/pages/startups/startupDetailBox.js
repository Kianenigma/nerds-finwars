Template.startupDetailBox.helpers({
  'coverPic': function() {
    return this.coverPath;
  },

  'allFunds': function() {
    var allFunds = Investments.find({startupId: this._id}).fetch();
    var fundTillNow = 0;
    allFunds.forEach(function(invest){
      fundTillNow = fundTillNow + parseInt(invest.investValue);
    })
    return fundTillNow;
  },

  'percent': function() {
    var allFunds = Investments.find({startupId: this._id}).fetch();
    var fundTillNow = 0;
    allFunds.forEach(function(invest){
      fundTillNow = fundTillNow + parseInt(invest.investValue);
    })
    return fundTillNow/parseInt(this.goal)*100;
  }
})
