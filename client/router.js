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

// Noty config
$.noty.defaults = {
  layout: 'top',
  theme: 'relax',
  type: 'alert',

  dismissQueue: true, // [boolean] If you want to use queue feature set this true
  force: false, // [boolean] adds notification to the beginning of queue when set to true
  maxVisible: 5, // [integer] you can set max visible notification count for dismissQueue true option,

  template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',

  timeout: 5000,
  progressBar: false, // [boolean] - displays a progress bar

  animation: {
    open: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceInLeft'
    close: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceOutLeft'
    easing: 'swing',
    speed: 500 // opening & closing animation speed
  },
  closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications

  modal: false, // [boolean] if true adds an overlay
  killer: false, // [boolean] if true closes all notifications and shows itself

  callback: {
    onShow: function () {},
    afterShow: function () {},
    onClose: function () {},
    afterClose: function () {},
    onCloseClick: function () {}
  },

  buttons: false // [boolean|array] an array of buttons, for creating confirmation dialogs.
}
