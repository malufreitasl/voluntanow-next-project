const { findTopApplications } = require("../data/application");
const { findAllInstitutions } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    console.log(allInstitutions);
    return allInstitutions;
}

async function loadTopInstititutions() {
    const allApplications = await findTopApplications();
    return allApplications;
}

module.exports = { loadInstitutions, loadTopInstititutions };