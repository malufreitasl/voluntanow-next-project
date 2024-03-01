const { findInstitutionById } = require("../data/application");
const { findAllInstitutions } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    return allInstitutions;
}

async function loadAllInstitutionDataById(institution_id) {
    const allInstitutionInfo = await findInstitutionById(institution_id);
    return allInstitutionInfo;
}

module.exports = { loadInstitutions, loadAllInstitutionDataById };