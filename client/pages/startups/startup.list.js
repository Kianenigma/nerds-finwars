Template['startup.list'].onCreated(function() {
  Session.set('paginateListStartup', 8);
})
Template['startup.list'].helpers({
    'startups': function() {
        return Startups.find({},{limit: Session.get('paginateListStartup')});
    }
});

Template['startup.list'].events({
    'click #loadMore': function (event) {
        event.preventDefault();
        Session.set('paginateListStartup', Session.get('paginateListStartup') + 8);

    }
});
