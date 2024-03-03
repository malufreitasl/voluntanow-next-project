const { findInstitutionById } = require("../data/application");
const { findAllInstitutions, findAllInstitutionsForSearch } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    return allInstitutions;
}

async function loadAllInstitutionDataById(institution_id) {
    const allInstitutionInfo = await findInstitutionById(institution_id);
    return allInstitutionInfo;
}

async function getAllInstitutionsForSearch() {
    const allProjects = await findAllInstitutionsForSearch();
    return allProjects;
}

module.exports = { loadInstitutions, loadAllInstitutionDataById, getAllInstitutionsForSearch };