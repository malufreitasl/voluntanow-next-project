const { findAllProjects } = require("../data/project");
const { findProjectById } = require ('../data/application');
// const { findProjectByIdNew } = require("../data/project");

async function loadProjects() {
    const allProjects = await findAllProjects();
    return allProjects
}

async function loadAllProjectDataById(projectID) {
    // const allProjectInfo = await findProjectByIdNew(projectID);
    const allProjectInfo = await findProjectById(projectID);
    return allProjectInfo;
}

module.exports = { loadProjects, loadAllProjectDataById };