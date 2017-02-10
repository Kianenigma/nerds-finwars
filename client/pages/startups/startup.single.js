import moment from 'moment-jalaali';

let clctd, investors ;

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
        $('.chart').data('easyPieChart').update(percent);
        return percent;
    },
    'lastInvestorId': function () {
        investorId =  Investments.findOne({starrtupId: this._id}, {$sort:{createdAt:1}});
        console.log('investor: '+investorId);
        return investorId;
    },
    'lastInvestorName': function () {
        return 2;
        //Meteor.users.findOne({_id:investorId}).name;
    },
    'dayUntil': function() {
        let dayUntil = moment(this.closingDate).diff(moment(new Date()), 'days');
        let pcent = Math.floor((dayUntil / moment(this.closingDate).diff(moment(this.createdAt), 'days')) * 100);
        $('#chart1').data('easyPieChart').update(pcent);
        return dayUntil;
    }
    
});

Template['startup.single'].events({
  
});
