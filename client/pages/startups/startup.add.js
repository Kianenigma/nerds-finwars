import { FilesCollection } from 'meteor/ostrio:files';

Template.pics.onCreated(function () {
  let startupData = {owner:Meteor.userId()};
  this.logoUpload = new ReactiveVar(false);
  this.coverUpload = new ReactiveVar(false);
});
Template['startup.add'].onRendered(function () {
  $('#example-vertical').steps({
    headerTag: 'h3',
    bodyTag: 'section',
    transitionEffect: 'slideLeft',
    stepsOrientation: 'vertical',
    onStepChanging: function (event, currentIndex, newIndex)
    {
      if (currentIndex === 0) {
        startupData = Object.assign(startupData, {name: $('#name').val()});
        startupData = Object.assign(startupData, {city: $('#city').val()});
        startupData = Object.assign(startupData, {province: $('#province').val()});
        startupData = Object.assign(startupData, {detail: $('#detail').val()});
        startupData = Object.assign(startupData, {category: $('#category').val()});
      } else if (currentIndex === 1) {
        
      } else if (currentIndex === 2) {
        
      } else if (currentIndex === 3) {
        
      }
      console.log(startupData);
      return true
    },
    onFinishing: function() {
      console.log('finishing');
      return true
    },
    onFinished: function() {
     console.log('calling method')
    }
  })

  $('#projectDatePicker').pDatepicker()
})
Template['startup.add'].helpers({
  logoUpload: function () {
    return Template.instance().logoUpload.get();
  },
  coverUpload: function () {
    return Template.instance().coverUpload.get();
  }
})

Template['startup.add'].events({
  'change #logoInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var upload = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);
      
      upload.on('start', function () {
        template.logoUpload.set(this);
      });
      
      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.logoUpload.set(false);
      });
      
      upload.start();
    }
  },
  'change #coverInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var upload = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);
    
      upload.on('start', function () {
        template.coverUpload.set(this);
      });
    
      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.coverUpload.set(false);
      });
    
      upload.start();
      console.log('uplaod started!');
    }
  }
})
