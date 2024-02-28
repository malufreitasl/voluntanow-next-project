const { getMongoCollection } = require('./mongodb')
const collectionName = "institution"

async function findAllInstitutions() {
    const collection = await getMongoCollection(collectionName);
    const allInstitutions = await collection.find();

    return allInstitutions.toArray();
}

async function findTopInstititutions() {
    const collection = await getMongoCollection(collectionName);
    const allInstitutions = await collection.find();

    return allInstitutions.toArray();
}

module.exports = { findAllInstitutions, findTopInstititutions };