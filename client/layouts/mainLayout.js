Template.mainLayout.onCreated(function(){
  this.subscribe('allUsers');
  this.subscribe('allStartups');
  this.subscribe('allInvestments');
})
