import moment from 'moment';
import { ConcludedProjectsList } from "./ConcludedProjectsList";

function ProjectsList({ projects }){
    const currentDate = moment();
    const recentProjects = projects?.filter(project => moment(project?.date, "DD-MM-YYYY").isAfter(currentDate));
    const finishedProjects = projects?.filter(project => moment(project?.date, "DD-MM-YYYY").isBefore(currentDate));

    return (
        <div className='flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
                <h2 className="font-medium text-xl text-black ">Ações anunciadas</h2>
                {recentProjects?.map((project, index) => (
                        <div key={index}>
                            <div className={`pb-2 ${index === recentProjects.length - 1? "border-0" : "border-b border-gray-text" }`}>
                                <div className="text-blue-primary text-base font-medium">{project?.name}</div>
                                <div className="text-orange-primary text-sm">{project?.address}</div>
                                <div className="flex gap-2.5">
                                    <div className="text-gray-text text-sm">{project?.date}</div>
                                    <div className="text-gray-text text-sm">{`${project?.applicants} ${project?.applicants === 1 ? "pessoa já inscrita" : "pessoas já inscritas"}`}</div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            {finishedProjects?.length > 0 && (
                <ConcludedProjectsList finishedProjects={finishedProjects}/>
            )}            
        </div>
    )
}

module.exports = { ProjectsList };