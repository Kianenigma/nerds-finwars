Template.home.onRendered(function () {
  $(window).scroll(function () {
    if (window.location.pathname === '/') {
      if ($(window).scrollTop() == 0) {
        $('#mainNav').addClass('transp')
      } else {
        $('#mainNav').removeClass('transp')
      }
    }
  })

  setTimeout(function () {
    $('#content-start').css('margin-top', ($('#carousel').height() + 20) + 'px')
  }, 200)
})

Template.home.helpers({
  create: function () {

  },
  rendered: function () {

  },
  destroyed: function () {

  }
})

Template.home.events({
  'click #foo': function (event, template) {

  }
})
