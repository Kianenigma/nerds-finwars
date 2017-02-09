Template['startup.list'].onCreated(function() {
  Session.set('paginateListStartup', 8);
})
Template['startup.list'].helpers({
    'startups': function() {
      var search = {};
      search.name = {$regex: new RegExp(Session.get('searchListSession')),
      $options: "i"};
      return Startups.find(search,{limit: Session.get('paginateListStartup')});
    }
});

Template['startup.list'].events({
    'click #loadMore': function (event) {
        event.preventDefault();
        Session.set('paginateListStartup', Session.get('paginateListStartup') + 8);

    },

    "keyup input": _.debounce(function(e) {
      var source = $('#searchList').val().trim();
      Session.set('searchListSession', source);
    }, 200)
});
