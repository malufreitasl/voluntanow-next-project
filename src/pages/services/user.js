const { findInstitutionInfo, findInstitutionId } = require("../data/institution");
const { findVolunteerInfo, findVolunteerId } = require("../data/volunteer");

async function loadUserInfo(decryptedToken) {
    let [username, role] = decryptedToken.split(":")
    let userInfo
    if (role === "volunteer") {
        userInfo = await findVolunteerInfo(username);
        if (userInfo) {
            userInfo[0]["role"] = "volunteer"
        }
    } else {
        userInfo = await findInstitutionInfo(username);
        if (userInfo) {
            userInfo[0]["role"] = "institution"
        }
    }
    return userInfo;
}

async function loadUserId(decryptedToken) {
    let [username, role] = decryptedToken.split(":")
    let userId
    if (role === "volunteer") {
        userId = await findVolunteerId(username);
    } else {
        userId = await findInstitutionId(username);
    }
    return userId;
}

module.exports = { loadUserInfo, loadUserId };