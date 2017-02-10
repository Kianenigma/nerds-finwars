Template['user.profile'].onRendered(function () {
  $('.profileItem a ').click(function () {
    $('.profileItem a').parent().parent().removeClass('active')
    $(this).parent().parent().addClass('active')
  })
})

Template['user.profile'].helpers({
  'userName': function () {
    return this.name
  },
  'isUser': function () {
    return Meteor.userId() == this._id
  },
  'emails': function () {
    return 'todo'
  },
  'name': function () {
    return 'todo'
  },
  'createdAt': function() {
    return 'todo'
  }
})

Template['user.profile'].events({
  'click .chat-to': function () {
    Session.set('selectedUser', this._id)
    Router.go('chat')
  },
  'click .message-list': function () {
    Router.go('chat')
  }
})
