const { findInstitutionInfo, findInstitutionInfoByEmail, insertInstitution } = require("../data/institution");
const { findVolunteerInfo, findVolunteerInfoByEmail, insertVolunteer } = require("../data/volunteer");


async function checkUsernameAvailability(username, role) {
    let userInfo
    if (role === "volunteer") {
        userInfo = await findVolunteerInfo(username);
    } else if (role === "institution") {
        userInfo = await findInstitutionInfo(username);
    }
    return userInfo;
}

async function checkEmailAvailability(email, role) {
    let userInfo
    if (role === "volunteer") {
        userInfo = await findVolunteerInfoByEmail(email);
    } else if (role === "institution") {
        userInfo = await findInstitutionInfoByEmail(email);
    }
    return userInfo;
}

async function createUser(userInfo) {
    if (userInfo.role === "volunteer") {
        userInfo = await insertVolunteer(userInfo);
    } else if (userInfo.role === "institution") {
        userInfo = await insertInstitution(email);
    }
    return userInfo;
}

module.exports = { checkUsernameAvailability, checkEmailAvailability, createUser };