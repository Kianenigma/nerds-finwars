Template.conversationBrick.helpers({
  'contactName': function() {
    return this.name;
  },
  'isSelected': function() {
    return Session.get('selectedUser') == this._id;
  }
})

Template.conversationBrick.events({
  'click .conversationBrick': function() {
    Session.set('selectedUser', this._id)
  }
})
