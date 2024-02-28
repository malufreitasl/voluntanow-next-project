const { insertApplication, findTopApplications } = require("../data/application");

async function createApplication(institution_id, project_id, volunteer_id) {
    return await insertApplication(institution_id, project_id, volunteer_id);
}

async function loadTopApplications() {
    const allInstitutions = await findTopApplications();
    console.log(allInstitutions);
    return allInstitutions;
}


module.exports = { createApplication, loadTopApplications }