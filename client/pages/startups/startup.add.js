  let startupData = {};
Template['startup.add'].onRendered(function () {
  $('#example-vertical').steps({
    headerTag: 'h3',
    bodyTag: 'section',
    transitionEffect: 'slideLeft',
    stepsOrientation: 'vertical',
    onStepChanging: function (event, currentIndex, newIndex)
    {
      if (currentIndex === 0) {
        startupData = Object.assign(startupData, {name: $('#name').val()});
        startupData = Object.assign(startupData, {city: $('#city').val()});
        startupData = Object.assign(startupData, {province: $('#province').val()});
        startupData = Object.assign(startupData, {detail: $('#detail').val()});
        startupData = Object.assign(startupData, {category: $('#category').val()});
      } else if (currentIndex === 1) {
        
      } else if (currentIndex === 2) {
        
      } else if (currentIndex === 3) {
        
      }
      console.log(startupData);
      return true
    },
    onFinishing: function() {
      console.log('finishing');
      return true
    },
    onFinished: function() {
     console.log('calling method')
    }
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
