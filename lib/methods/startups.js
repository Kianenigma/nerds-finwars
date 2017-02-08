Meteor.methods({
    'add.startup': function (inputData) {
        
        let startupData = {
            name: inputData.name,
            location: {
                province: inputData.province,
                city: inputData.city
            },
            detail: inputData.detail,
            contact: {},
            socialMedia: inputData.socialMedia,
            logoId: inputData.logoId,
            cover: inputData.cover,
            stage: inputData.stage,
            goal: inputData.goal,
            colsingDate: inputData.closingDate,
        };
        
        inputData.members?startupData = Object.assign({members: inputData.members});
        inputData.accelerators?startupData = Object.assign({
            accelerators: inputData.accelerators
        });
        
        
        Startups.insert(startupData);
    },
    
    'edit.startup': function (startupId, newData) {
        Startups.update({"_id":startupId},newData);
    }
});