Template.chat.helpers({
  'isSelected': function() {
    return Session.get('selectedUser')
  }
})

Template.chat.events({
  'keyup .message-input': function(event) {
    event.preventDefault();

    if (event.which === 13) {
      console.log(event.target.value);


      event.target.value = ""
    }
  }
})
