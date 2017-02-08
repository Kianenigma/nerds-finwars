Accounts.onCreateUser(function(options, user){
  _.extend(user, {
    name: options.name
  })

  return user;
})
