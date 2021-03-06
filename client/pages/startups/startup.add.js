import { FilesCollection } from 'meteor/ostrio:files'
import moment from 'moment-jalaali'

Template['startup.add'].onCreated(function () {
  this.logoUpload = new ReactiveVar(false)
  this.coverUpload = new ReactiveVar(false)
})

let startupData = {owner: Meteor.userId()}
let members =[];
let faqs = [];

Template['startup.add'].onRendered(function () {
  $('#example-vertical').steps({
    labels: {
      next: 'بعدی',
      previous: 'قبلی',
      finish: 'ثبت'
    },
    headerTag: 'h3',
    bodyTag: 'section',
    transitionEffect: 'slideLeft',
    stepsOrientation: 'vertical',
    onStepChanging: function (event, currentIndex, newIndex) {
      // validation :

      if (currentIndex === 0) {
        startupData = Object.assign(startupData, {name: $('#name').val()})
        startupData = Object.assign(startupData, {city: $('#city').val()})
        startupData = Object.assign(startupData, {province: $('#province').val()})
        startupData = Object.assign(startupData, {detail: $('#detail').val()})
        startupData = Object.assign(startupData, {category: $('#category').val()})
      } else if (currentIndex === 1) {
        startupData = Object.assign(startupData, {teaser: $('#teaser').val()})
      } else if (currentIndex === 2) {
        startupData = Object.assign(startupData, {email: $('#email').val()})
        startupData = Object.assign(startupData, {website: $('#website').val()})
        startupData = Object.assign(startupData, {phoneNo: $('#phoneNo').val()})
        let socialMedia = {}
        if ($('#instagram').val()) {
          socialMedia = Object.assign(socialMedia, {
            instagram: $('#instagram').val()
          })
        }
        if ($('#linkedIn').val()) {
          socialMedia = Object.assign(socialMedia, {
            linkedIn: $('#linkedIn').val()
          })
        }
        startupData = Object.assign(startupData, {socialMedia: socialMedia})
      } else if (currentIndex === 3) {
        startupData = Object.assign(startupData, {members: members})
        startupData = Object.assign(startupData, {faqs: faqs})
      }
      return true
    },
    onFinishing: function () {
      startupData = Object.assign(startupData, {stage: $('#stage').val()})
      startupData = Object.assign(startupData, {goal: parseInt($('#goal').val())})
      startupData = Object.assign(startupData, {accelerator: $('.accelerator').val()})
      let closingDate = moment($('#projectDatePicker').val(), 'jYYYY/jM/jD').toISOString()
      startupData = Object.assign(startupData, {closingDate: closingDate})
      return true
    },
    onFinished: function () {
      var ret = Meteor.call('add.startup', startupData);
      sAlert.success('استارت‌آپ شما با موفقیت ثبت شد!')
    }
  })

  $('div.steps.clearfix').addClass('well')
  $('div.content.clearfix').addClass('well')

  let people = []
  Meteor.users.find().fetch().forEach(person => {
    if (person._id != Meteor.userId()) {
      people.push({id: person._id, text: person.name})
    }
  })

  $('#memberUser').select2({
    placeholder: 'نام',
    allowClear: true,
    dir: 'rtl',
    minimumInputLength: 3,
    data: people
  })

  $('#projectDatePicker').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    isRTL: false,
    dateFormat: 'yy/m/d',
    minDate: 0
  })
})
Template['startup.add'].helpers({
  logoUpload: function () {
    return Template.instance().logoUpload.get()
  },
  coverUpload: function () {
    return Template.instance().coverUpload.get()
  }
})

Template['startup.add'].events({
  'change #logoInput': function (e, template) {
    e.preventDefault()
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var upload = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false)

      upload.on('start', function () {
        template.logoUpload.set(this)
      })

      upload.on('end', function (error, fileObj) {
        if (error) {
          sAlert.error('خطای آپلود ' + error)
        } else {
          startupData = Object.assign(startupData, {logoPath: fileObj.path})
          sAlert.success('با موفقیت آپلود شد!')
        }
        template.logoUpload.set(false)
      })

      upload.start()
    }
  },
  'change #coverInput': function (e, template) {
    e.preventDefault()
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var upload = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false)

      upload.on('start', function () {
        template.coverUpload.set(this)
      })

      upload.on('end', function (error, fileObj) {
        if (error) {
          sAlert.error('خطای آپلود ' + error)
        } else {
          startupData = Object.assign(startupData, {coverPath: fileObj.path})
          sAlert.success('با موفقیت آپلود شد!')
        }
        template.coverUpload.set(false)
      })

      upload.start()
    }
  },
  'click #addMember': function () {
    members.push({
      id: $('#memberUser').val(),
      role: $('#role').val()
    });
    $('#memberUser').select2('val', '')
    sAlert.success('کاربر به پروژه اضافه شد.')
  },
  'click #addFAQ': function () {
    faqs.push({
      question: $('#question').val(),
      answer: $('#answer').val()
    })
    sAlert.success('سوال اضافه شد')
    $('#question').val('')
    $('#answer').val('')
  }
})
