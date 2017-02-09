Template.invest.helpers({
    'startups': function() {
        return Startups.find();
    },
    'startup': function () {
        return this;
    }

});

Template.invest.events({
    'submit form': function(event) {
        event.preventDefault();
        var investValue = event.target.investValue.value;
        var startupId = this._id;
        Meteor.call('invest.insert', investValue, startupId);
        event.target.investValue.value = "";
    }
});
