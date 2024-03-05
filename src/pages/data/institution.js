const { getMongoCollection } = require('./mongodb')
const collectionName = "institution"

async function findAllInstitutions() {
    const collection = await getMongoCollection(collectionName);
    const allInstitutions = await collection.find();

    return allInstitutions.toArray();
};

async function findAllInstitutionsForSearch()
{
  const collection = await getMongoCollection(collectionName);
  return collection.find({}, { projection: { _id: 1, name: 1 } }).toArray();
}

async function findInstitutionInfo(username) {
    const collection = await getMongoCollection(collectionName);
    const institutionInfo = await collection.aggregate([
        {
          $match: {
            username: username
          }
        },
        {
          $lookup: {
            from: "application",
            localField: "_id",
            foreignField: "institution_id",
            as: "applications"
          }
        },
        {
          $unwind: {
            path: "$applications",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "institution",
            localField: "applications.institution_id",
            foreignField: "_id",
            as: "institution_info"
          }
        },
        {
          $unwind: {
            path: "$institution_info",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "project",
            localField: "applications.project_id",
            foreignField: "_id",
            as: "projects"
          }
        },
        {
          $unwind: {
            path: "$projects",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $group: {
            _id: {
              institution_id: "$institution_info._id",
              project_id: "$projects._id"
            },
            institution_info: { $first: "$institution_info" },
            project_info: { $first: "$projects" },
            total_applicants: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: "$_id.institution_id",
            institution_info: { $first: "$institution_info" },
            projects: {
              $push: {
                project_info: "$project_info",
                total_applicants: "$total_applicants"
              }
            },
            total_applicants: { $sum: "$total_applicants" } 
          }
        },
        {
          $project: {
            total_applicants: 1,
            institution_info: 1,
            projects: 1
          }
        }
      ]).toArray();

      return institutionInfo;
};

async function findInstitutionInfoByEmail(email) {
    const collection = await getMongoCollection(collectionName);
    const institutionInfo = await collection.aggregate([
        {
          $match: {
            email: email
          }
        },
        {
          $lookup: {
            from: "application",
            localField: "_id",
            foreignField: "institution_id",
            as: "applications"
          }
        },
        {
          $unwind: {
            path: "$applications",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "institution",
            localField: "applications.institution_id",
            foreignField: "_id",
            as: "institution_info"
          }
        },
        {
          $unwind: {
            path: "$institution_info",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "project",
            localField: "applications.project_id",
            foreignField: "_id",
            as: "projects"
          }
        },
        {
          $unwind: {
            path: "$projects",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $group: {
            _id: {
              institution_id: "$institution_info._id",
              project_id: "$projects._id"
            },
            institution_info: { $first: "$institution_info" },
            project_info: { $first: "$projects" },
            total_applicants: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: "$_id.institution_id",
            institution_info: { $first: "$institution_info" },
            projects: {
              $push: {
                project_info: "$project_info",
                total_applicants: "$total_applicants"
              }
            },
            total_applicants: { $sum: "$total_applicants" } 
          }
        },
        {
          $project: {
            total_applicants: 1,
            institution_info: 1,
            projects: 1
          }
        }
      ]).toArray();

      return institutionInfo;
};

async function insertInstitution(institutionInfo){
    const collection = await getMongoCollection(collectionName)
    const result = await collection.insertOne({
        username: institutionInfo.username,
        email: institutionInfo.email,
        password: institutionInfo.password,
        name: institutionInfo.name,
        description: institutionInfo.description,
        website_link: institutionInfo.website_link,
        phone: institutionInfo.phone,
        local: institutionInfo.local
    })
    return result
}

module.exports = { findAllInstitutions, findInstitutionInfo, findAllInstitutionsForSearch, findInstitutionInfoByEmail, insertInstitution };
