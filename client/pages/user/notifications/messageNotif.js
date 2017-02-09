Template.messageNotif.helpers({
  'senderName': function(){
    return Meteor.users.findOne({_id: this.sender}).name;
  }
})
