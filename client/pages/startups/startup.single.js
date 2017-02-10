Template['startup.single'].onRendered(function () {
  // $('#overflowBack').css('width', $('#overflowBack').parent().width())
  //   .css('height', $('#overflowBack').parent().height())
  //

  $('.tab-item').click(function () {
    $('.tab-item').removeClass('active')
    $(this).addClass('active')
  })

  $('.chart').easyPieChart({
    barColor: '#8E44AD',
  });
});

let clctd;

Template['startup.single'].helpers({
    'startup': function () {
        return this;
    },
    'owner': function () {
    return Meteor.users.findOne({_id:this.owner}).name;
    },
    'closingDate': function () {
        return moment(this.closingDate).format('jYY/jM/jD');
    },
    'collected': function () {
        clctd = 0;
        Investments.find({startupId:this._id}).forEach(x => {
            clctd += Number(x.investValue);
        });
        return clctd ;
    },
    'percent': function () {
        let g = parseInt(this.goal);
        let percent = Math.floor((clctd / g) * 100);
        return percent;
    },
    'lastInvestor': function () {
        let investorId =  Investments.findOne({starrtupId: this._id}, {$sort:{createdAt:1}});
        let name = Meteor.users.findOne({_id:investorId}).name;
        console.log('investor: '+investorId);
        return {
            id: investorId,
            name: name
        }
    }
    
});

Template['startup.single'].events({
  
});
