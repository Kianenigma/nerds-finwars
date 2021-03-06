
Template.chat.helpers({
  'isSelected': function () {
    return Session.get('selectedConversation') || Session.get('selectedUser')
  },
  'target': function () {
    return Meteor.users.findOne({_id: Session.get('selectedUser')}).name
  }
})

Template.chat.events({
  'keyup .message-input': function (event) {
    event.preventDefault()
    if (event.which === 13) {
      Meteor.call('message.insert', event.target.value, Meteor.userId(), Session.get('selectedUser'), Session.get('selectedConversation'))
      event.target.value = ''
    }
  },

  'click #sendBtn': function (event) {
    event.preventDefault()
    Meteor.call('message.insert', $('.message-input').val(), Meteor.userId(), Session.get('selectedUser'), Session.get('selectedConversation'))
    event.target.value = ''
  }
})
