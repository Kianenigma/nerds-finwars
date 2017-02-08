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
            contact: {},
            socialMedia: inputData.socialMedia,
            logoPath: inputData.logoPath,
            coverPath: inputData.coverPath,
            stage: inputData.stage,
            goal: inputData.goal,
            colsingDate: inputData.closingDate,
        };
        
        if (inputData.members) {
            startupData = Object.assign({members: inputData.members});
        }
        if (inputData.accelerators) {
            startupData = Object.assign({
                accelerators: inputData.accelerators
            });
        }
        
        
        Startups.insert(startupData);
    },
    
    'edit.startup': function (startupId, newData) {
        Startups.update({"_id":startupId},newData);
    }
});