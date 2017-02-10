Template.invest.helpers({


});

Template.invest.events({
    'submit form': function(event) {
        event.preventDefault();
        var investValue = parseInt(event.target.investValue.value);
        var startupId = this._id;
        Meteor.call('invest.insert', investValue, startupId);
        sAlert.success('سرمایه شما واریز شد')
        event.target.investValue.value = "";
    }
});
