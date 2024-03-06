const { findInstitutionById, findAllInstitutionsInfo } = require("../data/application");
const { findAllInstitutions, findAllInstitutionsForSearch, loadInstitutionById } = require("../data/institution");

async function loadInstitutions() {
    const allInstitutions = await findAllInstitutions();
    const allInfoInstitutionWithProjectsInfo = await findAllInstitutionsInfo()

    allInstitutions.forEach(element => {
        let infoInstitution = allInfoInstitutionWithProjectsInfo.find(x => String(x._id) == String(element._id))
        
        let nrApplicant = infoInstitution?.total_applicants
        element['nrApplicants'] = nrApplicant > 0 ? nrApplicant : 0

        let rating = infoInstitution?.institution_avg_rating
        element['institution_avg_rating'] = rating > 0 ? rating : 0

        element['projects'] = infoInstitution?.projects
    });

    return allInstitutions;
}

async function loadAllInstitutionDataById(institution_id) {
    let institution = await findInstitutionById(institution_id);

    if (!(institution?.length > 0))
    {
        let institutionSemProject = {};
        institutionSemProject['institution'] = await loadInstitutionById(institution_id);
        return institutionSemProject;
    }
    
    return institution[0];
}

async function getAllInstitutionsForSearch() {
    const institution = await findAllInstitutionsForSearch();
    return institution;
}

async function loadProjects() {
    const allProjects = await loadAllProjectsInfo();
    const allProjectsByApplications = await getAllProjectsInfo();

    allProjects.forEach(element => {
        let nrApplicant = allProjectsByApplications.find(x => String(x._id) == String(element._id))?.applicants
        element['applicants'] = nrApplicant > 0 ? nrApplicant : 0
    });

    return allProjects
}

module.exports = { loadInstitutions, loadAllInstitutionDataById, getAllInstitutionsForSearch };