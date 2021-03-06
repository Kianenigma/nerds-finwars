Router.configure({
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound'
})

Router.route('/', {
  action: function () { this.render('home') },
  name: 'home'
})

Router.route('/startup/add', function () {
  this.render('startup.add')
})

Router.route('/startup/list', function () {
  this.render('startup.list')
})

Router.route('/startup/:id', {
  action: function () {
    this.render('startup.single', {
      data: function () {
        return Startups.findOne({_id: this.params.id})
      }
    })
  },
  name: 'startupSingle'
})

Router.route('/user/auth', {
  action: function () {
    this.render('user.auth')
  },
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.next()
    } else {
      Router.go('profile')
    }
  }
})
Router.route('/user/login', {
  action: function () {
    this.render('user.login')
  },
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.next()
    } else {
      Router.go('profile')
    }
  }
})
Router.route('/profile', {
  action: function () {
    this.render('user.profile', {
      data: function () {
        return Meteor.user()
      }
    })
  },
  name: 'profile'
})
Router.route('/user/:id', {
  action: function () {
    this.render('user.profile', {
      data: function () {
        return Meteor.users.findOne({_id: this.params.id})
      }
    })
  },
  name: 'profile.user'
})

var fixHeader = function () {
  if (Router.current().url !== '/') {
    $('#mainNav').removeClass('transp')
  }

  // if (Router.current().url === '/user/login' || Router.current().url === '/user/auth') {
  //   $('footer').css('position', 'fixed')
  // } else {
  //   $('footer').css('position', 'static')
  // }
  this.next()
}

Router.onBeforeAction(fixHeader)

//
// TODO this is a test route for writing functionalities and must delete SOON!
//
Router.route('/invest/:id', {
  action: function() {
    this.render('invest', {
      data: function () {
        return Startups.findOne({_id: this.params.id});
      }
    })
  },
  name: 'invest'
})

Router.route('/chat', {
  action: function () {
    this.render('chat', )
  },
  name: 'chat'
})

Meteor.startup(function () {
  sAlert.config({
    effect: 'scale',
    position: 'top-left',
    timeout: 5000,
    html: false,
    onRouteClose: true,
    stack: true,
    offset: 70, // in px - will be added to first alert (bottom or top - depends of the position in config)
    beep: false,
    onClose: _.noop //
  })
})
