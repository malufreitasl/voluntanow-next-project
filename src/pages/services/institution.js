const { findAllInstitutions } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    console.log(allInstitutions);
    return allInstitutions;
}

module.exports = { loadInstitutions };