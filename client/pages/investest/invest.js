Template.invest.onRendered(function() {
    
});

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
        console.log('Done!');
        event.target.investValue.value = "";
    }
});
