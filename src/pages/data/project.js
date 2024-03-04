const { getMongoCollection } = require('./mongodb')
const collectionName = "project"

async function findAllProjects() {
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
      },
    },
  ]);

  return allInstitutions.toArray();
}

// async function findProjectByIdNew(projectID) {
//   const collection = await getMongoCollection(collectionName);
//   const allInstitutions = await collection.aggregate([
//     {
//       $match: {
//         _id: new ObjectId(projectID)
//       }
//     },
//     {
//       $lookup: {
//         from: "project",
//         localField: "project_id",
//         foreignField: "_id",
//         as: "project"
//       }
//     },
//     {
//       $lookup:
//       {
//         from: "institution",
//         localField: "institution_id",
//         foreignField: "_id",
//         as: "institution-info",
//       },
//     },
//     {
//       $project:
//       {
//         _id: "$_id",
//         institution_id: "$institution_id",
//         name: "$name",
//         description: "$description",
//         hour: "$hour",
//         date: "$date",
//         min_duration: "$min_duration",
//         address: "$address",
//         rating: "$rating",
//         institution_name: "$institution-info.name"
//       },
//     },
//   ]);

//   return allInstitutions.toArray();
// }

module.exports = { findAllProjects };