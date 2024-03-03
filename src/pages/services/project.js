// const { findAllProjects } = require("../data/project");
const { findProjectById } = require('../data/application');
const { getAllProjectsInfo } = require('./application');
const { loadAllProjectsInfo, loadProjectById, findAllProjectsForSearch } = require('../data/project')

async function loadProjects() {
    const allProjects = await loadAllProjectsInfo();
    const allProjectsByApplications = await getAllProjectsInfo();

    allProjects.forEach(element => {
        let nrApplicant = allProjectsByApplications.find(x => String(x._id) == String(element._id))?.applicants
        element['applicants'] = nrApplicant > 0 ? nrApplicant : 0
    });

    return allProjects
}

async function loadAllProjectDataById(projectID) {
    const allProjectInfo = await findProjectById(projectID);
    if (!(allProjectInfo?.length > 0))
    {
        return await loadProjectById(projectID);
    }

    return allProjectInfo[0].project[0];
}

async function getAllProjectsForSearch()
{
    const allProjects = await findAllProjectsForSearch();
    return allProjects;
}

module.exports = { loadProjects, loadAllProjectDataById, getAllProjectsForSearch };