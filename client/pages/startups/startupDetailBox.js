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
  'detail':function () {
      return this.detail.slice(0,140)+'...';
  },

  'percent': function() {
    var allFunds = Investments.find({startupId: this._id}).fetch();
    var fundTillNow = 0;
    allFunds.forEach(function(invest){
      fundTillNow = fundTillNow + parseInt(invest.investValue);
    })
    return fundTillNow/parseInt(this.goal)*100;
  },

})

Template.startupDetailBox.events({
  'click .startupGoTo': function(event) {
    event.preventDefault();
    Router.go('startupSingle', {id: this._id});
  }
})
