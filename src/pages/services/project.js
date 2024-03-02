const { findAllProjects } = require("../data/project");
import moment from 'moment';
import { findProjectById } from '../data/application';

async function loadProjects() {
    const allProjects = await findAllProjects();
    return allProjects
}

async function loadAllProjectDataById(projectID) {
    const allInstitutionInfo = await findProjectById(projectID);
    return allInstitutionInfo;
}


module.exports = { loadProjects, loadAllProjectDataById };