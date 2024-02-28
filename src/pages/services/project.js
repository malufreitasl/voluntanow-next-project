const { findAllProjects } = require("../data/project");
import moment from 'moment';

async function loadProjects() {
    const allProjects = await findAllProjects();
    return allProjects
}

async function loadRecentProjects() {
    const allProjects = await findAllProjects();
    const currentDate = moment();
    return allProjects.filter(project => moment(project.date, "DD-MM-YYYY").isAfter(currentDate));
}

async function loadFinishedProjects() {
    const allProjects = await findAllProjects();
    const currentDate = moment();
    return allProjects.filter(project => moment(project.date, "DD-MM-YYYY").isBefore(currentDate));
}

module.exports = { loadProjects, loadRecentProjects, loadFinishedProjects };