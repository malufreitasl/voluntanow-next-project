const { ObjectId } = require('mongodb');
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

async function findApplication(project_id, volunteer_id) {
  const collection = await getMongoCollection(collectionName)
  const result = await collection.findOne({
    project_id:project_id,
    volunteer_id:volunteer_id
  })
  return result;
}

async function findAllApplications() {
  const collection = await getMongoCollection(collectionName);
  const allInstitutions = await collection.find();

  return allInstitutions.toArray();
}

async function findTopApplications() {
  const collection = await getMongoCollection(collectionName);
  const distictProjects = await collection.aggregate([
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
  const distictProjects = await collection.aggregate(
    [
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
  const distictProjects = await collection.aggregate([
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

async function getAllProjectsInfoFromApplications() {
  const collection = await getMongoCollection(collectionName);
  const distictProjects = await collection.aggregate([
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


async function findAllInstitutionsInfo() {
  const collection = await getMongoCollection(collectionName);
  const allInstitutionsInfo = await collection.aggregate(
    [
      {
        "$lookup": {
          "from": "project",
          "localField": "project_id",
          "foreignField": "_id",
          "as": "projects"
        }
      },
      {
        "$lookup": {
          "from": "institution",
          "localField": "institution_id",
          "foreignField": "_id",
          "as": "institution_info"
        }
      },
      {
        "$unwind": "$projects"
      },
      {
        "$group": {
          "_id": {
            "institution_id": "$institution_id",
            "project_id": "$projects._id"
          },
          "institution": { "$first": "$institution_info" },
          "project": { "$first": "$projects" },
          "count": { "$sum": 1 }
        }
      },
      {
        "$group": {
          "_id": "$_id.institution_id",
          "institution": {
            "$first": {
              "$arrayElemAt": ["$institution", 0]
            }
          },
          "projects": {
            "$push": {
              "_id": "$project._id",
              "name": "$project.name",
              "description": "$project.description",
              "hour": "$project.hour",
              "date": "$project.date",
              "min_duration": "$project.min_duration",
              "address": "$project.address",
              "rating": "$project.rating",
              "applicants": "$count"
            }
          },
          "total_applicants": { "$sum": "$count" }
        }
      },
      {
        "$lookup": {
          "from": "institution_rating",
          "localField": "_id",
          "foreignField": "institution_id",
          "as": "institution_ratings"
        }
      },
      {
        "$project": {
          "institution.username": "$institution.username",
          "institution.name": "$institution.name",
          "institution.description": "$institution.description",
          "institution.website_link": "$institution.website_link",
          "institution.email": "$institution.email",
          "institution.phone": "$institution.phone",
          "institution.local": "$institution.local",
          "institution_avg_rating": {
            "$avg": "$institution_ratings.rating"
          },
          "projects": 1,
          "total_applicants": 1
        }
      }
    ])

  return allInstitutionsInfo.toArray();
}

async function findInstitutionById(institution_id) {
  const collection = await getMongoCollection(collectionName);
  const institution_info = await collection.aggregate(
    [
      {
        "$match": {
          "institution_id": new ObjectId(institution_id)
        }
      },
      {
        "$lookup": {
          "from": "project",
          "localField": "project_id",
          "foreignField": "_id",
          "as": "projects"
        }
      },
      {
        "$lookup": {
          "from": "institution",
          "localField": "institution_id",
          "foreignField": "_id",
          "as": "institution_info"
        }
      },
      {
        "$unwind": "$projects"
      },
      {
        "$group": {
          "_id": {
            "institution_id": "$institution_id",
            "project_id": "$projects._id"
          },
          "institution": {
            "$first": "$institution_info"
          },
          "project": {
            "$first": "$projects"
          },
          "count": {
            "$sum": 1
          }
        }
      },
      {
        "$group": {
          "_id": "$_id.institution_id",
          "institution": {
            "$first": {
              "$arrayElemAt": ["$institution", 0]
            }
          },
          "projects": {
            "$push": {
              "_id": "$project._id",
              "name": "$project.name",
              "description": "$project.description",
              "hour": "$project.hour",
              "date": "$project.date",
              "min_duration": "$project.min_duration",
              "address": "$project.address",
              "rating": "$project.rating",
              "applicants": "$count"
            }
          },
          "total_applicants": {
            "$sum": "$count"
          }
        }
      },
      {
        "$lookup": {
          "from": "institution_rating",
          "localField": "_id",
          "foreignField": "institution_id",
          "as": "institution_ratings"
        }
      },
      {
        "$project": {
          "institution.username": "$institution.username",
          "institution.name": "$institution.name",
          "institution.description": "$institution.description",
          "institution.website_link": "$institution.website_link",
          "institution.email": "$institution.email",
          "institution.phone": "$institution.phone",
          "institution.local": "$institution.local",
          "institution_avg_rating": {
            "$avg": "$institution_ratings.rating"
          },
          "projects": 1,
          "total_applicants": 1
        }
      }
    ]


  )
  return institution_info.toArray();
}

async function findProjectById(projectID) {
  const collection = await getMongoCollection(collectionName);
  const institution_info = await collection.aggregate([
    {
      "$match": {
        "project_id": new ObjectId(projectID)
      }
    },
    {
      "$lookup": {
        "from": "project",
        "localField": "project_id",
        "foreignField": "_id",
        "as": "project"
      }
    },
    {
      "$lookup": {
        "from": "institution",
        "localField": "institution_id",
        "foreignField": "_id",
        "as": "institution_info"
      }
    },
    {
      "$unwind": "$project"
    },
    {
      "$group": {
        "_id": {
          "project_id": "$project._id",
          "institution_id": "$institution_id"
        },
        "project": {
          "$first": "$project"
        },
        "institution": {
          "$first": "$institution_info"
        },
        "count": {
          "$sum": 1
        }
      }
    },
    {
      "$group": {
        "_id": "$_id.project_id",
        "project": {
          "$push": {
            "_id": "$project._id",
            "name": "$project.name",
            "description": "$project.description",
            "hour": "$project.hour",
            "date": "$project.date",
            "min_duration": "$project.min_duration",
            "address": "$project.address",
            "rating": "$project.rating",
            "applicants": "$count"
          }
        },
        "institution": {
          "$first": {
            "$arrayElemAt": ["$institution", 0]
          }
        },
      }
    },
    {
      "$project": {
        "institution._id": "$institution._id",
        "institution.username": "$institution.username",
        "institution.name": "$institution.name",
        "institution.description": "$institution.description",
        "institution.website_link": "$institution.website_link",
        "institution.email": "$institution.email",
        "institution.phone": "$institution.phone",
        "institution.local": "$institution.local",
        "project": 1,
      }
    }
  ]

  )
  return institution_info.toArray();
}

module.exports = { findAllApplications, findTopApplications, findTopByInstitutions, insertApplication, findTopByProjects, findAllInstitutionsInfo, findInstitutionById, findProjectById, getAllProjectsInfoFromApplications, findApplication };