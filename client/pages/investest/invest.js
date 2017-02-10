Template.invest.helpers({
    'name': function() {
      console.log(this);
    }

});

Template.invest.events({
    'submit form': function(event) {
        event.preventDefault();
        var investValue = parseInt(event.target.investValue.value);
        var startupId = this._id;
        Meteor.call('invest.insert', investValue, startupId);
        event.target.investValue.value = "";
    }
});
