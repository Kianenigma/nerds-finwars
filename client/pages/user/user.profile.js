Template['user.profile'].onRendered(function () {
  $('#myTab1').tab()

  $('.profileItem a').click(function () {
    $('.profileItem a').parent().parent().removeClass('active')
    $(this).parent().parent().addClass('active')
  })
})
Template['user.profile'].helpers({
  create: function () {

  },
  rendered: function () {

  },
  destroyed: function () {

  }
})

Template['user.profile'].events({
  'click #foo': function (event, template) {

  }
})
