const { insertApplication, findTopApplications, findTopByInstitutions, findTopByProjects } = require("../data/application");

async function createApplication(institution_id, project_id, volunteer_id) {
    return await insertApplication(institution_id, project_id, volunteer_id);
}

async function loadTopApplications() {
    const allInstitutions = await findTopApplications();
    console.log(allInstitutions);
    return allInstitutions;
}

async function loadTopByInstitutions() {
    const allInstitutions = await findTopByInstitutions();
    return allInstitutions.map(e => e.institution);
}

async function loadTopByProjects() {
    const allProjects = await findTopByProjects();
    return allProjects;
}



module.exports = { createApplication, loadTopApplications, loadTopByInstitutions, loadTopByProjects }