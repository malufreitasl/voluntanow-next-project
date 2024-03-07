import Link from "next/link";
import { NavBar } from '../components/NavBar'
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function MeInscrever() {
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

        const fetchUserApplication = async () => {
            try {
                const response = await fetch
            } catch (error) {
                console.error('Failed to fetch user application:', error);
            }
        }

        if (i) {
            fetchfoProjectInfo();
        }
    }, [i])

    return (

        <>
            <NavBar />
            <div className="flex flex-col gap-6 px-6 pt-64 pb-32">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-black">{projectsData?.name}</h1>
                    <p className="text-orange-primary text-xl">{projectsData?.institution_name}</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData?.date}</p>
                        {projectsData?.applicants >= 1 ?
                            <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData.applicants === 1 ? projectsData.applicants + " pessoa já inscrita" : projectsData.applicants + " pessoas já inscritas"}</p>
                            : ""
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h1 className="font-bold text-black text-xl">Inscrição</h1>
                    <div className="text-xs text-gray-text">Nome</div>
                    <input className="bg-gray-terciary w-full h-10 rounded-lg pl-4 text-sm text-gray-text" />
                    <div className="text-xs text-gray-text">Email</div>
                    <input className="bg-gray-terciary w-full h-10 rounded-lg pl-4 text-sm text-gray-text" />
                    <div className="text-xs text-gray-text">Disponibilidade</div>
                    <input className="bg-gray-terciary w-full h-10 rounded-lg pl-4 text-sm text-gray-text" />
                    <div className="text-xs text-gray-text">Comentário</div>
                    <input className="bg-gray-terciary pr-4 w-full h-10 rounded-lg text-sm text-gray-text placeholder:pl-4 placeholder:text-gray-text" type="text" placeholder="Escreva o seu comentário aqui..." />
                </div>
                <div className="flex justify-center pb-0">
                <Link href="../login_pages/meinscrever" className=" flex  justify-center bg-orange-primary text-white w-44 h-10 rounded-lg items-center hover:bg-blue-primary">Quero me inscrever!</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}