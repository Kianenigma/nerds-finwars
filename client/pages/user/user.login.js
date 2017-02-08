Template['user.login'].events({
  'submit form': function(event) {
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;
    console.log(email);
    console.log(password);
    Meteor.loginWithPassword(email, password, function(err){
      if ( err ) {
        console.log(err.reason);
      } else {
        console.log('success');
      }
    })

  }
})
