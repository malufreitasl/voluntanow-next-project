const { findProjectMeanRating, getAllProjectRating } = require("../data/project_rating");

async function loadProjectMeanRating(projectID) {
    const averageRating = await findProjectMeanRating(projectID);
    return averageRating;
}

async function loadAllProjectRating()
{
    return await getAllProjectRating()
}

module.exports = { loadProjectMeanRating, loadAllProjectRating }