const { ObjectId } = require('mongodb');
const { getMongoCollection } = require('./mongodb')
const collectionName = "project_rating"

async function findProjectMeanRating(projectID) {
    const collection = await getMongoCollection(collectionName);
    const projectRating = await collection.aggregate([
        {
            $match:
            {
                project_id: new ObjectId(projectID),
            },
        },
        {
            $group: {
              _id: "$project_id",
              averageRating: {
                $avg: "$rating",
              },
            },
        },
    ]).toArray();
    return projectRating;
}

async function getAllProjectRating() {
    const collection = await getMongoCollection(collectionName);
    return await collection.find().toArray()
}

module.exports = { findProjectMeanRating, getAllProjectRating };

