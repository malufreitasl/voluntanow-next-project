import Link from "next/link";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import GoBackButton from "../components/GoBackButton";


const raleway = Raleway({ subsets: ["latin"] });

export default function ProjectPage() {


    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                const response = await fetch(`../api/application/all-projects-info`);
                if (!response.ok) {
                    throw new Error('Failed to fetch project data');
                }
                const data = await response.json();
                setAllProjects(data);
               
            } catch (error) {
                console.error('Failed to fetch project data:', error);
            }
        };

        fetchAllProjects();

    }, [])

    return (
        <>
            <div className={`${raleway.className}`}>
                <div>
                    <NavBar />
                </div>
                <div className="flex gap-2 pt-64 pl-6 items-center">
                    <GoBackButton/>
                    <h1 className="text-black text-2xl font-semibold">Ações anunciadas</h1>
                </div>

                <div className="flex flex-col pt-4 gap-2.5 px-6 100-vh pb-32">
                    {allProjects.map((elemento, index) =>
                        <motion.div
                            initial={{
                                y: 100,
                                scale: 1,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                delay: index * 0.15
                            }}
                            key={index}
                        >
                            <Link href={`/project/info?i=${elemento._id}`}>
                                <div className="border-b border-gray-text pb-2">
                                    <div className="text-blue-primary text-base font-medium">{elemento.name}</div>
                                    <div className="text-orange-primary text-sm">{elemento.institution_name}</div>
                                    <div className="flex gap-2.5">
                                        <div className="text-gray-text text-sm">{elemento.date}</div>
                                        {elemento.applicants >= 1 ?
                                            <div className="text-gray-text text-sm">{elemento.applicants === 1 ? elemento.applicants + " pessoa já inscrita" : elemento.applicants + " pessoas já inscritas"} </div>
                                            : ""
                                        }


                                        
                                    </div>
                                    <div>
                                        {elemento?.institution_avg_rating > 0 &&
                                            <StarRatings
                                                rating={elemento?.institution_avg_rating}
                                                starRatedColor="#000035"
                                                numberOfStars={5}
                                                starDimension="15px"
                                                starSpacing="1px"
                                                name={`rating-${index}`} />
                                        }
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    )}
                </div>

            </div>

            <div className="h-40"></div>
            <Footer />

        </>
    )
}