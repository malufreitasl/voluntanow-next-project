const { getMongoCollection } = require('./mongodb')
const collectionName = "institution"

async function findAllInstitutions() {
    const collection = await getMongoCollection(collectionName);
    const allInstitutions = await collection.find();

    return allInstitutions.toArray();
}

async function findAllInstitutionsForSearch()
{
  const collection = await getMongoCollection(collectionName);
  return collection.find({}, { projection: { _id: 1, name: 1 } }).toArray();
}

module.exports = { findAllInstitutions, findAllInstitutionsForSearch };