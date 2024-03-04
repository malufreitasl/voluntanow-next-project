const { findInstitutionInfo } = require("../data/institution");
const { findVolunteerInfo } = require("../data/volunteer");

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

module.exports = { loadUserInfo };