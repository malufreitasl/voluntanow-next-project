import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Loading from "../components/Loading";
import QrCode from "../components/QrCode";
import GoBackButton from "../components/GoBackButton";



const raleway = Raleway({ subsets: ["latin"] });


export default function InfoProject() {
    const [projectsData, setProjectsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
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
                setIsLoading(false);
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
                <div className="pt-64 px-6 pb-2"><GoBackButton/></div>
                <div className="flex fixed flex-col gap-6 px-6 pb-28">
                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-semibold text-black">Inscrição N.: 19573</div>
                        <div className="text-2xl font-semibold text-black mt-4">Entrega de Comida</div>
                        <div className="text-xl text-orange-primary">Casa da Mãe Joana</div>
                        <div className="flex gap-4 pt-1">
                            <div className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">12/12/2024 - 18h30</div>
                            <div class="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">7 pessoas já inscritas</div>
                        </div>

                        <div className="w-full flex justify-center pt-5">
                            <QrCode/>  
                        </div>
                        <p>Ao chegar ao local, certifica-te que mostras este código a um responsável.</p>
                    </div>

                    
                </div>

                <Footer />
            </div>
        </>
    )
}