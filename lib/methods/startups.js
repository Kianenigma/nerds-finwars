Meteor.methods({
  'add.startup': function (inputData) {
    let startupData = {
      name: inputData.name,
      owner: inputData.owner,
      location: {
        province: inputData.province,
        city: inputData.city
      },
      detail: inputData.detail,
      category: inputData.category,
      contact: {
        email: inputData.email,
        website: inputData.website,
        phoneNo: inputData.phoneNo
      },
      socialMedia: inputData.socialMedia,
      logoPath: inputData.logoPath,
      coverPath: inputData.coverPath,
      teaser: inputData.teaser,
      stage: inputData.stage,
      goal: inputData.goal,
      closingDate: inputData.closingDate,
      createdAt: new Date()
    }

    if (inputData.members) {
      startupData = Object.assign(startupData, {members: inputData.members})
    }
    if (inputData.faqs) {
      startupData = Object.assign(startupData, {faqs: inputData.faqs})
    }
    if (inputData.accelerators) {
      startupData = Object.assign({
        accelerators: inputData.accelerators
      })
    }

    return Startups.insert(startupData)
  },

  'edit.startup': function (startupId, newData) {
    Startups.update({'_id': startupId}, newData)
  }
})
