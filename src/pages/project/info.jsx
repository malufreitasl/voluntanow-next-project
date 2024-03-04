import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";



const raleway = Raleway({ subsets: ["latin"] });

export default function InfoProject() {
    const [projectsData, setProjectsData] = useState({});
    const router = useRouter();
    const { i } = router.query;

    useEffect(() => {
        const fetchfoProjectInfo = async () => {
            try {
                const response = await fetch(`../api/project/info?i=${i}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch project data');
                }
                const project = await response.json();
                setProjectsData(project);
            } catch (error) {
                console.error('Failed to fetch project data:', error);
            }
        };

        if (i) {
            fetchfoProjectInfo();
        }
    }, [i])

    return (
        <>
            <div className={`${raleway.className}`}>
                <NavBar />

                <div className="flex fixed flex-col gap-6 px-6 pt-64 pb-28">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-semibold text-black">{projectsData?.name}</div>
                        <div className="text-xl text-orange-primary">{projectsData?.institution_name}</div>
                        <div className="flex gap-4 pt-1">
                            <div className=" text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData?.date}</div>
                            {projectsData?.applicants >= 1 ?
                                <div class="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData.applicants === 1 ? projectsData.applicants + " pessoa já inscrita" : projectsData.applicants + " pessoas já inscritas"} </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-black text-xl font-medium max-h-30">Descrição da Atividade</h1>
                        <div className="text-base text-black text-justify overflow-y-auto max-h-64">{projectsData?.description}</div>
                        
                    </div>
                    
                    <div className="fixed bottom-28 flex w-full px-20  bg-white-background">
                        <Link href={`../login_pages/meinscrever?i=${i}`} className=" flex justify-center bg-orange-primary text-white w-44 h-10 rounded-lg items-center hover:bg-blue-primary">Quero me inscrever!</Link>
                    </div>
                    

                </div>

                <Footer />
            </div>
        </>
    )
}


