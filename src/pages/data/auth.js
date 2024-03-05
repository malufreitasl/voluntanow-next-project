const { getMongoCollection } = require('./mongodb');

const collectionNameVolunteer = "volunteer";
const collectionNameInstitution = "institution";

async function findUserInfo(username, password) {
    const volunteerCollection = await getMongoCollection(collectionNameVolunteer);
    let accountInfo = await volunteerCollection.findOne({ username: username, password: password });
    if (accountInfo) {
        return { username: accountInfo.username, role: "volunteer" };
    } else {
        
    }
    const institutionCollection = await getMongoCollection(collectionNameInstitution);
    accountInfo = await institutionCollection.findOne({ username: username, password: password });
    if (accountInfo) {
        return { username: accountInfo.username, role: "institution" };

    }
    return accountInfo;
}

module.exports = { findUserInfo };
