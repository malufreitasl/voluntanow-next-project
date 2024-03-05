import moment from 'moment';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
    


export function VolunteerProjects({ projects }){
    const currentDate = moment();
    const recentProjects = projects?.filter(project => moment(project?.date, "DD-MM-YYYY").isAfter(currentDate));
    const finishedProjects = projects?.filter(project => moment(project?.date, "DD-MM-YYYY").isBefore(currentDate));
    const [ starRatings, setStarRatings ] = useState({});

    useEffect(() => {
        const fetchStarRatings = async () => {
            try {
                const ratings = {};
    
                for (const project of finishedProjects) {
                    const response = await fetch(`../api/rating/project?id=${project._id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch project rating');
                    }
                    const data = await response.json();
                    if (data.length > 0) {
                        ratings[project._id] = data[0].averageRating;
                    } else {
                        ratings[project._id] = "Not Found" 
                    }
                }
    
                if (JSON.stringify(ratings) !== JSON.stringify(starRatings)) {
                    setStarRatings(ratings);
                }
            } catch (error) {
                console.error('Failed to fetch project ratings:', error);
            }
        };
    
        fetchStarRatings();
    }, [finishedProjects, starRatings]);
    

    return (
        <div className='flex flex-col gap-7 mx-6'>
            <div className="flex flex-col gap-3">
                <h2 className="font-medium text-xl text-black ">Ações que está inscrito</h2>
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
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            {finishedProjects?.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h2 className="font-medium text-xl text-black ">Ações que participou</h2>
                    {finishedProjects?.map((project, index) => (
                        <div key={index}>
                            <Link href={`/project/info?i=${project._id}`}> 
                                <div className={`pb-2 ${index === finishedProjects.length - 1 ? "border-0" : "border-b border-gray-text"}`}>
                                    <div className="text-blue-primary text-base font-medium">{project?.name}</div>
                                    <div className="text-orange-primary text-sm">{project?.address}</div>
                                    <div className="flex gap-2.5">
                                        <div className="text-gray-text text-sm">{project?.date}</div>
                                    </div>
                                    <div>
                                        { starRatings[project._id] !== "Not Found"? (
                                            <StarRatings
                                                rating={starRatings[project._id]}
                                                starRatedColor="#EB4000"
                                                numberOfStars={5}
                                                starDimension="15px"
                                                starSpacing="1px"
                                                name={`rating-${index}`}/>
                                        ) : (
                                            <p className='text-gray-terciary text-xs'>Sem avaliações ainda</p>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}            
        </div>
    )
}
