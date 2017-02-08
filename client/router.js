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
Router.route('/user/login', function() {
  this.render('user.login')
})
Router.route('/user/:id', function () {
  this.render('user.profile', {data: {id: this.params.id}})
})

//
// TODO this is a test route for writing functionalities and must delete SOON!
//
Router.route('/invest', function () {
  this.render('invest');
})
