const { findVolunteerInfo } = require("../data/volunteer");

async function loadVolunteerInfo(username) {
    const volunteerInfo = await findVolunteerInfo(username);
    return volunteerInfo;
}

module.exports = { loadVolunteerInfo };