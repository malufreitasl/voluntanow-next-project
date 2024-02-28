const { getMongoCollection } = require('./mongodb')
const collectionName = "application"

async function insertApplication(institution_id, project_id, volunteer_id) {
    const collection = await getMongoCollection(collectionName)
    const result = await collection.insertOne({
        institution_id, 
        project_id, 
        volunteer_id
    })
    return result.acknowledged;
}

async function findAllApplications() {
    const collection = await getMongoCollection(collectionName);
    const allInstitutions = await collection.find();

    return allInstitutions.toArray();
}

async function findTopApplications() {
    const collection = await getMongoCollection(collectionName);
    const distictProjects = await collection.aggregate( [
        {
          $lookup:
            {
              from: "project",
              localField: "project_id",
              foreignField: "_id",
              as: "project_info",
            },
        },
        {
          $lookup:
            {
              from: "institution",
              localField: "institution_id",
              foreignField: "_id",
              as: "institution_info",
            },
        },
        {
          $group:
            {
              _id: "$project_id",
              count: {
                $sum: 1,
              },
              project: {
                $first: "$project_info",
              },
              institution: {
                $first: "$institution_info",
              },
            },
        },
        {
          $sort:
          {
            count: -1,
            project: -1
          },
        },
        {
          $limit:
            10,
        },
      ])
    return distictProjects.toArray();
}

async function findTopByInstitutions() {
    const collection = await getMongoCollection(collectionName);
    const distictProjects = await collection.aggregate( [
        {
          $lookup: {
              from: "institution",
              localField: "institution_id",
              foreignField: "_id",
              as: "institution_info",
            },
        },
        {
          $group: {
            _id: "$institution_id",
            count: {
              $sum: 1,
            },
            institution: {
              $first: "$institution_info",
            },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: 10,
        },
      ])
    return distictProjects.toArray();
}

async function findTopByProjects() {
    const collection = await getMongoCollection(collectionName);
    const distictProjects = await collection.aggregate( [
        {
          $lookup: {
              from: "project",
              localField: "project_id",
              foreignField: "_id",
              as: "project_info",
            },
        },
        {
          $group:
            {
              _id: "$project_id",
              count: {
                $sum: 1,
              },
              project: {
                $first: "$project_info",
              },
            },
        },
        {
          $sort:
            {
              count: -1,
              project: -1
            },
        },
        {
          $limit:
            10,
        },
      ])
    return distictProjects.toArray();
}

module.exports = { findAllApplications, findTopApplications, findTopByInstitutions, insertApplication, findTopByProjects };