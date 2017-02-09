Template['user.profile'].onRendered(function () {
  $('.profileItem').click(function () {
    $('.profileItem').removeClass('active')
    $(this).addClass('active')
  })
})
Template['user.profile'].helpers({
  'userName': function () {
    return this.name
  },
  'isUser': function () {
    return Meteor.userId() == this._id
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
