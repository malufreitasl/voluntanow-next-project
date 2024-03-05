import moment from 'moment';
import { motion } from "framer-motion";
import { ConcludedProjectsList } from "./ConcludedProjectsList";
import Link from 'next/link';

export function ProjectsList({ projects }){
    const currentDate = moment();
    const recentProjects = projects?.filter(project => moment(project?.date, "DD-MM-YYYY").isAfter(currentDate));
    const finishedProjects = projects?.filter(project => moment(project?.date, "DD-MM-YYYY").isBefore(currentDate));

    return (
        <div className='flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
                <h2 className="font-medium text-xl text-black ">Ações anunciadas</h2>
                {recentProjects?.map((project, index) => (
                    <motion.div
                    initial={{
                        y: 100,
                        scale: 1,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        scale: [1, 0.99, 1],
                        opacity: 2
                    }}
                    transition={{
                        delay: index * 0.15
                    }}
                    key={index}
                    >
                        <Link href={`/project/info?i=${project._id}`}>                           
                            <div className={`pb-2 ${index === recentProjects.length - 1? "border-0" : "border-b border-gray-text" }`}>
                                <div className="text-blue-primary text-base font-medium">{project?.name}</div>
                                <div className="text-orange-primary text-sm">{project?.address}</div>
                                <div className="flex gap-2.5">
                                    <div className="text-gray-text text-sm">{project?.date}</div>
                                    <div className="text-gray-text text-sm">{`${project?.applicants} ${project?.applicants === 1 ? "pessoa já inscrita" : "pessoas já inscritas"}`}</div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            {finishedProjects?.length > 0 && (
                <ConcludedProjectsList finishedProjects={finishedProjects}/>
            )}            
        </div>
    )
}
