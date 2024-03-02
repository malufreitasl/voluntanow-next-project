const { findProjectMeanRating } = require("../data/project_rating");

async function loadProjectMeanRating(projectID) {
    const averageRating = await findProjectMeanRating(projectID);
    return averageRating;
}

module.exports = { loadProjectMeanRating }