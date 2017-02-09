Template.conversationBrick.helpers({
  'contactName': function() {
    var headOn;
    if ( this.users[0] == Meteor.userId()) {
      headOn = this.users[1];
    } else {
      headOn = this.users[0];
    }
    return Meteor.users.findOne({_id: headOn}).name;
  },
  'lastMessage': function() {
    return Messages.findOne({conversationId: this._id},{sort: {createAt: -1}}).body;
  },
  'isSelected': function() {
    return Session.get('selectedConversation') == this._id;
  }
})

Template.conversationBrick.events({
  'click .conversationBrick': function() {
    Session.set('selectedConversation', this._id)
  }
  //Session.set('selectedUser') bayad too profile set she baad bepare tu chat chat kone :D
  //
})
