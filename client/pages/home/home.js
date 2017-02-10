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
  }, 25)
})

Template.home.helpers({
  'trends': function() {
    return Startups.find({},{limit: 4});
  },
  'latest': function() {
    return Startups.find({},{limit: 4});
  },
  'bestStartups': function () {
    return Startups.find({},{limit: 12});
  }
})

Template.home.events({
  'click #foo': function (event, template) {

  },
  'click .startupPicBox': function() {
    Router.go('startupSingle', {id: this._id});
  }
})
