import { NavBar } from "../components/NavBar";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import StarRatings from "react-star-ratings";


const raleway = Raleway({ subsets: ["latin"] });

export default function InstitutionsPage() {
    const [allInstitutions, setAllInstitutions] = useState([]);

    useEffect(() => {
        const fetchAllInstitutions = async () => {
            try {
                const response = await fetch('../api/application/all-institution-info');

                if (!response.ok) {
                    throw new Error('Failed to fetch institutions data');
                }
                const data = await response.json();
                setAllInstitutions(data);
               
            } catch (error) {
                console.error('Failed to fetch institutions data:', error);
            }
        };

        fetchAllInstitutions();
    }, []);

    return (
        <div className={`${raleway.className}`}>
            <div >
                <NavBar />
            </div>
            <div className="flex gap-36 pt-64 pl-6 items-center">
                <h1 className="text-2xl font-semibold text-black">Organizações</h1>
            </div>
            <div className="flex flex-col pt-4 gap-2.5 pl-6 pr-6 pb-32 100-vh ">
                {allInstitutions.map((institutionData, index) => (
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
                        <Link href={`/institution/info?i=${institutionData?._id}`}>
                            <div className="border-b border-gray-text pb-2">
                                <div className="text-blue-primary text-base font-medium">{institutionData?.name}</div>
                                <div className="text-orange-primary text-sm">{institutionData?.local}</div>
                                <div className="flex justify-between">
                                    <div className="flex gap-2.5">
                                        <div className="text-gray-text text-sm">{institutionData?.projects?.length > 0 ? institutionData?.projects?.length : 0} {institutionData?.projects?.length === 1 ? "ação publicada" : "ações publicadas"}</div>
                                    </div>
                                    <div>
                                        {institutionData?.institution_avg_rating > 0 &&
                                            <StarRatings
                                                rating={institutionData?.institution_avg_rating}
                                                starRatedColor="#000035"
                                                numberOfStars={5}
                                                starDimension="15px"
                                                starSpacing="1px"
                                                name={`rating-${index}`} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </div >
    );
}
