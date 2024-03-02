import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

function ConcludedProjectsList({ finishedProjects }) {
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
                    ratings[project._id] = data[0].averageRating;
                }
    
                console.log(ratings);
                setStarRatings(ratings);
            } catch (error) {
                console.error('Failed to fetch project ratings:', error);
            }
        };
    
        fetchStarRatings();
    }, [finishedProjects]);
    

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-medium text-xl text-black ">Ações que já decorreram</h2>
            {finishedProjects?.map((project, index) => (
                <div key={index}>
                    <div className={`pb-2 ${index === finishedProjects.length - 1 ? "border-0" : "border-b border-gray-text"}`}>
                        <div className="text-blue-primary text-base font-medium">{project?.name}</div>
                        <div className="text-orange-primary text-sm">{project?.address}</div>
                        <div className="flex gap-2.5">
                            <div className="text-gray-text text-sm">{project?.date}</div>
                            <div className="text-gray-text text-sm">{`${project?.applicants} ${project?.applicants === 1 ? "pessoa inscrita" : "pessoas inscritas"}`}</div>
                        </div>
                        <div>
                            <StarRatings
                                rating={starRatings[project._id]?? 0}
                                starRatedColor="#EB4000"
                                numberOfStars={5}
                                starDimension="15px"
                                starSpacing="1px"
                                name={`rating-${index}`}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


module.exports = { ConcludedProjectsList };
