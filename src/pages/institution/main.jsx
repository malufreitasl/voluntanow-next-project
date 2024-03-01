import { NavBar } from "../components/NavBar";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function InstitutionsPage() {
    const [allInstitutions, setAllInstitutions] = useState([]);
    const [selectedInstitution, setSelectedInstitution] = useState(null);

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

    const handleOnClick = (index) => {
        setSelectedInstitution(allInstitutions[index]);
    };

    return (
        <div className="bg-white-background h-screen w-screen">
            <div>
                <NavBar />
            </div>
            <div className="flex gap-36 pt-6 pl-6 items-center">
            <h1 className="text-2xl font-semibold text-black">Organizações</h1>
            </div>
            <div className="flex flex-col pt-4 gap-2.5 pl-6 pr-6 pb-32 100-vh bg-white-background">
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
                        onClick={() => handleOnClick(index)}
                    >
                        <Link href={`/institution/info?details=${encodeURIComponent(JSON.stringify(allInstitutions[index]))}`}>
                            <div className="border-b border-gray-text pb-2">
                                    <div className="text-blue-primary text-base font-medium">{institutionData.institution.name}</div>
                                    <div className="text-orange-primary text-sm">{institutionData.institution.local}</div>
                                    <div className="flex gap-2.5">
                                        <div className="text-gray-text text-sm">{institutionData.projects.length} {institutionData.projects.length === 1 ? "ação publicada" : "ações publicadas"}</div>
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
