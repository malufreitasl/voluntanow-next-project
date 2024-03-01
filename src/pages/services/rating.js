const { findProjectMeanRating } = require("../data/rating");

async function loadProjectMeanRating(projectID) {
    const allInstitutions = await findProjectMeanRating(projectID);
    return allInstitutions;
}

module.exports = { loadProjectMeanRating }