Template.invest.helpers({
  'startups': function() {
    return Startups.find();
  }
})

Template.invest.events({
  'form submit': function(event) {
    event.preventDefault();

    var investValue = event.target.investValue.value;

    console.log(investValue);
  }
})
