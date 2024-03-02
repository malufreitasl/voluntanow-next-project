import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useRouter } from "next/router";
import { ProjectsList } from "../components/ProjectsList";
import { Raleway } from "next/font/google";



const raleway = Raleway({ subsets: ["latin"] });

export default function InfoInstitution() {
    const [institutionData, setInstitutionData] = useState({});
    const router = useRouter();
    const { i } = router.query;

    useEffect(() => {
        const fetchInstitutionInfo = async () => {
            try {
                const response = await fetch(`/api/institution/info?i=${i}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch institutions data');
                }
                const data = await response.json();
                setInstitutionData(data[0]);
            } catch (error) {
                console.error('Failed to fetch institutions data:', error);
            }
        };
        
        if (i) {
            fetchInstitutionInfo();
        }
    }, []);

    return (
        <>
            <div className={`${raleway.className}`}>
                <NavBar />
                <div className="flex flex-col gap-6 px-6 pt-64 pb-32">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold text-black">{institutionData?.institution?.name}</h1>
                        <p className="text-orange-primary text-lg">{institutionData?.institution?.local}</p>
                        <div className="flex gap-4 pt-1">
                            <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{`${institutionData?.total_applicants} ${institutionData?.total_applicants === 1 ? "inscrição em projetos" : "inscrições em projetos"}`}</p>
                            <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">Classificação: 4,2 / 5</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-medium text-black">Descrição da Organização</h2>
                        <p className="text-justify text-base text-black">{institutionData?.institution?.description}</p>
                    </div>
                    <div>
                        <ProjectsList projects={institutionData.projects}/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl">Contactos</h2>
                        <div className="flex flex-col gap-0.5">
                            <p>{institutionData?.institution?.email}</p>
                            <p>{institutionData?.institution?.phone}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
