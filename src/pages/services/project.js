const { findProjectById } = require('../data/application');
const { getAllProjectsInfo } = require('./application');
const { loadAllProjectsInfo, loadProjectById, findAllProjectsForSearch, insertProject } = require('../data/project')
const { loadAllProjectRating } = require('../services/project_rating')

async function loadProjects() {
    const allProjects = await loadAllProjectsInfo();
    const allProjectsByApplications = await getAllProjectsInfo();
    const allProjectRating = await loadAllProjectRating();

    allProjects.forEach(element => {
        let nrApplicant = allProjectsByApplications.find(x => String(x._id) == String(element._id))?.applicants
        element['applicants'] = nrApplicant > 0 ? nrApplicant : 0
    });

    allProjects.forEach(element => {
        let rating = allProjectRating.find(x => String(x.project_id) == String(element._id))?.rating
        element['institution_avg_rating'] = rating > 0 ? rating : null
    });

    return allProjects
}

async function loadAllProjectDataById(projectID) {
    const allProjectInfo = await findProjectById(projectID);

    if (!(allProjectInfo?.length > 0))
    {
        return await loadProjectById(projectID);
    }

    allProjectInfo[0].project[0]['institution_name'] = allProjectInfo[0].institution.name;
    allProjectInfo[0].project[0]['institution_id'] = allProjectInfo[0].institution._id;
    return allProjectInfo[0].project[0];
}

async function getAllProjectsForSearch()
{
    const allProjects = await findAllProjectsForSearch();
    return allProjects;
}

async function createProject(projectInfo) {
    return await insertProject(projectInfo);
}

module.exports = { loadProjects, loadAllProjectDataById, getAllProjectsForSearch, createProject };