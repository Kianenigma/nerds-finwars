Router.configure({
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound'
})

Router.route('/', function () {
  this.render('home')
})

Router.route('/startup/add', function () {
  this.render('startup.add')
})

Router.route('/startup/list', function () {
  this.render('startup.list')
})

Router.route('/startup/:id', function () {
  this.render('startup.single', {data: {id: this.params.id}})
})

Router.route('/user/auth', function () {
  this.render('user.auth')
})
Router.route('/user/login', function () {
  this.render('user.login')
})
Router.route('/user/:id', function () {
  this.render('user.profile', {data: {id: this.params.id}})
})

var fixHeader = function () {
  if (Router.current().url !== '/') {
    $('#mainNav').removeClass('transp')
  }

  if (Router.current().url === '/user/login' || Router.current().url === '/user/auth') {
    $('footer').css('position', 'fixed')
  } else {
    $('footer').css('position', 'static')
  }
  this.next()
}

Router.onBeforeAction(fixHeader)

//
// TODO this is a test route for writing functionalities and must delete SOON!
//
Router.route('/invest', function () {
  this.render('invest')
})

Router.route('/chat', function () {
  this.render('chat')
})

Meteor.startup(function () {
  sAlert.config({
    effect: 'scale',
    position: 'top-left',
    timeout: 5000,
    html: false,
    onRouteClose: true,
    stack: true,
    offset: 30, // in px - will be added to first alert (bottom or top - depends of the position in config)
    beep: false,
    onClose: _.noop //
  })
})
