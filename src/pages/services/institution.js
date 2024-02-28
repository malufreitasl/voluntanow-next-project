const { findAllInstitutions, findTopInstititutions } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    console.log(allInstitutions);
    return allInstitutions;
}

async function loadTopInstititutions() {
    const allInstitutions = await findTopInstititutions();
    console.log(allInstitutions);
    return allInstitutions;
}

module.exports = { loadInstitutions, loadTopInstititutions };