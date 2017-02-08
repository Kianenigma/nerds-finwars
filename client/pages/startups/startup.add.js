Template['startup.add'].onRendered(function () {
  $('#example-vertical').steps({
    headerTag: 'h3',
    bodyTag: 'section',
    transitionEffect: 'slideLeft',
    stepsOrientation: 'vertical'
  })

  $('#projectDatePicker').pDatepicker()
})
Template['startup.add'].helpers({
  create: function () {

  },
  rendered: function () {

  },
  destroyed: function () {

  }
})

Template['startup.add'].events({
  'click #foo': function (event, template) {

  }
})
