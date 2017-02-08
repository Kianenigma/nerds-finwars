Template['user.auth'].onRendered(function () {

})

Template['user.auth'].helpers({
  create: function () {

  },
  rendered: function () {

  },
  destroyed: function () {

  }
})

Template['user.auth'].events({
  'submit form': function(event) {
    event.preventDefault();

    var options = {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
    };

    console.log(options);

    Accounts.createUser(options, function (err, result) {
        if (err) {
            console.log(err.reason);
        }
    });

  }
})
