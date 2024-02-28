const { findAllInstitutions } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    return allInstitutions;
}

module.exports = { loadInstitutions };