Template.invest.onRendered(function() {
    $(".datePicker").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      isRTL: false,
      dateFormat: "yy/m/d",
      minDate: 0
    });
    $("#datepicker1btn").click(function(event) {
        event.preventDefault();
        $(".datePicker").focus();
    });
});

Template.invest.helpers({
  'startups': function() {
    return Startups.find();
  }
})

Template.invest.events({
  'submit form': function(event) {
    event.preventDefault();

    var investValue = event.target.investValue.value;
    var startupId = this._id
    Meteor.call('invest.insert', investValue, startupId);
    event.target.investValue.value = "";
  }
})
