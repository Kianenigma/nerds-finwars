Template.userStartups.helpers({
  'userProjects': function() {
    return Startups.find({owner: Meteor.userId()});
  }
})
