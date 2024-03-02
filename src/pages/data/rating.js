const { getMongoCollection } = require('./mongodb')
const collectionName = "project_rating"

async function findProjectMeanRating(projectID) {
    const collection = await getMongoCollection(collectionName);
    const projectRating = await collection.aggregate([
        {
            $group: {
              _id: projectID,
              averageRating: { $avg: "$rating" }
            }
          }    
    ]);

    return projectRating.toArray();
}

module.exports = { findProjectMeanRating };