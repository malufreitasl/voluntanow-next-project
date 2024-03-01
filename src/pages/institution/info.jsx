import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useRouter } from "next/router";

export default function InfoInstitution() {
    const [institutionData, setInstitutionData] = useState({});
    const router = useRouter();
    const { details } = router.query;

    useEffect(() => {
        const fetchInstitutionInfo = async () => {
            try {
                const response = await fetch(`/api/institution/info?details=${details}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch institutions data');
                }
                const data = await response.json();
                setInstitutionData(data);
            } catch (error) {
                console.error('Failed to fetch institutions data:', error);
            }
        };
        
        if (details) {
            fetchInstitutionInfo();
        }
    }, [details]);

    return (
        <>
            <div>
                <NavBar />
                <div className="flex flex-col gap-6 px-6 pt-6 pb-32">
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
                    <div className="flex flex-col gap-3">
                        <h2 className="font-medium text-xl text-black ">Ações anunciadas</h2>
                        {institutionData?.projects?.map((project, index) => (
                            <div key={index}>
                                <div className="border-b border-gray-text pb-2">
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
