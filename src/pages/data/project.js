const { getMongoCollection } = require('./mongodb')
const collectionName = "project"

async function findAllProjects() {
    const collection = await getMongoCollection(collectionName);
    const allInstitutions = await collection.find();

    return allInstitutions.toArray();
}

module.exports = { findAllProjects };