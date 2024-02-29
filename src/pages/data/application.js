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
          $limit: 5,
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
              $lookup: {
                from: "institution",
                localField: "institution_id",
                foreignField: "_id",
                as: "institution_info",
              },
            },
            {
              $group: {
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
              $sort: {
                count: -1,
                project: -1,
              },
            },
            {
              $limit: 5,
            },
            {
              $project: {
                _id: {
                  $arrayElemAt: ["$project._id", 0],
                },
                institution_id: {
                  $arrayElemAt: [
                    "$project.institution_id",
                    0,
                  ],
                },
                name: {
                  $arrayElemAt: ["$project.name", 0],
                },
                description: {
                  $arrayElemAt: ["$project.description", 0],
                },
                hour: {
                  $arrayElemAt: ["$project.hour", 0],
                },
                date: {
                  $arrayElemAt: ["$project.date", 0],
                },
                min_duration: {
                  $arrayElemAt: [
                    "$project.min_duration",
                    0,
                  ],
                },
                address: {
                  $arrayElemAt: ["$project.address", 0],
                },
                rating: "$rating",
                institution_name: {
                  $arrayElemAt: ["$institution.name", 0],
                },
                applicants: "$count"
              },
            },
      ])
    return distictProjects.toArray();
}

module.exports = { findAllApplications, findTopApplications, findTopByInstitutions, insertApplication, findTopByProjects };