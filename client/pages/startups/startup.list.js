let clctd = 0;
Session.set('paginateListStartup', 10);

Template['startup.list'].helpers({
    'startups': function() {
        return Startups.find({},{limit: Session.get('paginateListStartup')});
    },
    'startup': function () {
        return this;
    },
    'detail':function () {
        return this.detail.slice(0,140)+'...';
    },
    'collected': function () {
        Investments.find({startupId:this._id}).forEach(x => {
            clctd += Number(x.investValue);
        });
        return clctd ;
    },
    'percent': function () {
        let g = parseInt(this.goal);
        return Math.floor((clctd / g) * 100);
    }
    
});

Template['startup.list'].events({
    'click #loadMore': function (event) {
        event.preventDefault();
        if(Session.get('paginateListStartup') <= Startups.find().count()) {
            Session.set('paginateListStartup',
                Session.get('paginateListStartup') + 10);
        }
    }
});