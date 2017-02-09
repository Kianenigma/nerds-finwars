Template['user.login'].events({
  'submit form': function (event) {
    event.preventDefault()
    var email = event.target.email.value
    var password = event.target.password.value

    Meteor.loginWithPassword(email, password, function (err) {
      if (err) {
        sAlert.error('اطلاعات وارد شده نا معتبر است')
      } else {
      }
    })

    event.target.email.value = ''
    event.target.password.value = ''
  }
})
