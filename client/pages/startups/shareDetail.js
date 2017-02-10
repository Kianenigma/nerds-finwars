Template.shareDetail.helpers({
  'name': function(){
    return Startups.findOne({_id: this.startup}).name;
  },
  'coverPic': function(){
    return Startups.findOne({_id: this.startup}).coverPath;
  },
  'detail': function(){
    return Startups.findOne({_id: this.startup}).detail.slice(0,140) + "...";
  }
})
