const { ObjectId } = require('mongodb');
const { getMongoCollection } = require('./mongodb')
const collectionName = "project"


async function loadProjectById(id) {
  const collection = await getMongoCollection(collectionName);
  const project = await collection.findOne({ "_id": ObjectId.createFromHexString(id) })
  return project
}

async function loadAllProjectsInfo() {
  const collection = await getMongoCollection(collectionName);
  const allInstitutions = await collection.aggregate([
    {
      $lookup:
      {
        from: "institution",
        localField: "institution_id",
        foreignField: "_id",
        as: "institution-info",
      },
    },
    {
      $project:
      {
        _id: "$_id",
        institution_id: "$institution_id",
        name: "$name",
        description: "$description",
        hour: "$hour",
        date: "$date",
        min_duration: "$min_duration",
        address: "$address",
        rating: "$rating",
        institution_name: "$institution-info.name"
      }
    }
  ]);

  return allInstitutions.toArray();
}

async function findAllProjectsForSearch()
{
  const collection = await getMongoCollection(collectionName);
  return collection.find({}, { projection: { _id: 1, name: 1, institution_id: 1 } }).toArray();
}

async function insertProject(projectInfo) {
  const collection = await getMongoCollection(collectionName)
  const result = await collection.insertOne({
    institution_id: new ObjectId(projectInfo.institution_id),
    name: projectInfo.name,
    description: projectInfo.description,
    hour: projectInfo.hour,
    date: projectInfo.date,
    min_duration: projectInfo.min_duration,
    address: projectInfo.address,
  })
  return result.acknowledged;
}


module.exports = { loadAllProjectsInfo, loadProjectById, findAllProjectsForSearch, insertProject};