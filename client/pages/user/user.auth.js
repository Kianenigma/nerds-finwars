Template['user.auth'].onRendered(function () {

})

Template['user.auth'].events({
  'submit form': function (event) {
    event.preventDefault()

    var options = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value
    }

    Accounts.createUser(options, function (err, result) {
      if (err) {
        sAlert.error(err.reason)
      } else {
        sAlert.success('حساب کاربری شما با موفقیت ایجاد شد')
        event.target.email.value = ''
        event.target.name.value = ''
        event.target.password.value = ''
      }
    })
  }
})
