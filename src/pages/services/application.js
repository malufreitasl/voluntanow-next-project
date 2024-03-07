const { insertApplication, findTopApplications, findTopByInstitutions, findTopByProjects, findAllInstitutionsInfo, getAllProjectsInfoFromApplications, findApplication } = require("../data/application");

async function createApplication(institution_id, project_id, volunteer_id) {
    return await insertApplication(institution_id, project_id, volunteer_id);
}

async function loadTopApplications() {
    const allInstitutions = await findTopApplications();
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

async function getAllProjectsInfo() {
    const allProjects = await getAllProjectsInfoFromApplications();
    return allProjects;
}

async function loadAllInstitutionInfo() {
    const allProjects = await findAllInstitutionsInfo();
    return allProjects;
}

async function loadApplication(project_id, volunteer_id){
    const application = await findApplication(project_id, volunteer_id);
    return application
}

module.exports = { createApplication, loadTopApplications, loadTopByInstitutions, loadTopByProjects, loadAllInstitutionInfo, getAllProjectsInfo, loadApplication }