Template['startup.single'].onRendered(function () {
  // $('#overflowBack').css('width', $('#overflowBack').parent().width())
  //   .css('height', $('#overflowBack').parent().height())
  //

  $('.tab-item').click(function () {
    $('.tab-item').removeClass('active')
    $(this).addClass('active')
  })

  $('.chart').easyPieChart({
    barColor: '#8E44AD',
  })
})
Template['startup.single'].helpers({
  create: function () {

  },
  rendered: function () {

  },
  destroyed: function () {

  }
})

Template['startup.single'].events({
  'click #foo': function (event, template) {

  }
})
