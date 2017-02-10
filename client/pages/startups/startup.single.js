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
    'startupId': function () {
        return this._id;
    },
    'lastInvestorId': function () {
        let investorId =  Investments.findOne()/*{startupId: this._id}, {$sort:{createdAt:1}})*/;
        console.log(this._id+'\ninvestor: '+investorId);
        return investorId;
    },
    'lastInvestorName': function () {
        return null;//Meteor.users.findOne({_id:investorId}).name;
    },
    'dayUntil': function() {
        let dayUntil = moment(this.closingDate).diff(moment(new Date()), 'days');
        let pcent = Math.floor((dayUntil / moment(this.closingDate).diff(moment(this.createdAt), 'days')) * 100);
        $('#chart1').data('easyPieChart').update(pcent);
        return dayUntil;
    },
    'members': function () {
        console.log(this);
        return this.members;
    },
    'member': function () {
        let name = Meteor.users.findOne({_id: this.id}).name;
        return {
            name: name,
            role: this.role
        }
    }
    
});

Template['startup.single'].events({
  
});
