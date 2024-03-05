const { ObjectId } = require('mongodb');
const { getMongoCollection } = require('./mongodb')
const collectionName = "institution_rating"

async function findInstitutionMeanRating(institutionID) {
    const collection = await getMongoCollection(collectionName);
    const institutionRating = await collection.aggregate([
        {
            $match:
            {
                institution_id: new ObjectId(institutionID),
            },
        },
        {
            $group: {
              _id: "$institution_id",
              averageRating: {
                $avg: "$rating",
              },
            },
        },
    ]).toArray();
    
    return institutionRating;
}

module.exports = { findInstitutionMeanRating };

