Template.chat.helpers({
  'isSelected': function() {
    return Session.get('selectedUser')
  }
})

Template.chat.events({
  'keyup .message-input': function(event) {
    event.preventDefault();
    if (event.which === 13) {
      Meteor.call('message.insert', event.target.value, Meteor.userId(), Session.get('selectedUser'))
      event.target.value = ""
    }
  }
})
