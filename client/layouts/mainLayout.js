Template.mainLayout.onCreated(function(){
  this.subscribe('allUsers');
  this.subscribe('allStartups');
  this.subscribe('allInvestments');
  this.subscribe('allConversations');
  this.subscribe('allMessages');
})
