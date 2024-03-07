import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Loading from "../components/Loading";
import { isUserLoggedIn } from "../utils/globalFunctions";
import GoBackButton from "../components/GoBackButton";



const raleway = Raleway({ subsets: ["latin"] });

export default function InfoProject() {
    const [projectsData, setProjectsData] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showPossibleLogIn, setshowPossibleLogIn] = useState(false);
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

    const fetchApplication = async () => {
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
    }

    if (isLoading) {
        return (
          <div>
            <NavBar />
            <Loading />
            <Footer />
          </div>
        )
    }

    const handleSubscription = () => {
        setShowConfirmation(true);
    };
    const possibleLogIn = () => {
        setshowPossibleLogIn(true);
    };
    
    const confirmSubscription = () => {
        router.push('/project/jainscrito'); 
    };
    const confirmLogIn = () => {
        router.push('/login_pages/login'); 
    };
    
    const cancelSubscription = () => {
        setShowConfirmation(false);
    };
    

    return (
        <>
            <div className={`${raleway.className}`}>
                <NavBar />
                <div className="pt-64 px-6 pb-2"><GoBackButton/></div>
                <div className="flex flex-col gap-6 px-6 pb-32">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-semibold text-black">{projectsData?.name}</div>
                        <div className="text-xl text-orange-primary">{projectsData?.institution_name}</div>
                        <div className="flex gap-4 pt-1">
                            <div className=" text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData?.date}</div>
                            {projectsData?.applicants >= 1 ?
                                <div className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData.applicants === 1 ? projectsData.applicants + " pessoa já inscrita" : projectsData.applicants + " pessoas já inscritas"} </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-black text-xl font-medium max-h-30">Descrição da Atividade</h1>
                        <div className="text-base text-black text-justify overflow-y-auto max-h-52">{projectsData?.description}</div>
                        
                    </div>
                    
                    <div className="fixed bottom-28 flex w-full px-20  bg-white-background">
                        <button onClick={handleSubscription} className=" flex justify-center bg-orange-primary text-white w-44 h-10 rounded-lg items-center hover:bg-blue-primary">Quero me inscrever!</button>
                    </div>
                    
                    {showConfirmation && isUserLoggedIn() && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white-background p-6 rounded-lg mx-14">
                                <p className="mb-4 text-center">Tem certeza que deseja se inscrever?</p>
                                <div className="flex justify-center gap-1">
                                    <button onClick={confirmSubscription} className="bg-orange-primary text-white px-8 rounded-md mr-2">Sim</button>
                                    <button onClick={cancelSubscription} className="bg-gray-200 px-4 py-2 rounded-md ml-2">Cancelar</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    {showConfirmation && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white-background p-6 rounded-lg mx-14">
                                <p className="mb-4 text-center">Não tens sessão iniciada. Queres entrar?</p>
                                <div className="flex justify-center gap-1">
                                    <button onClick={confirmLogIn} className="bg-orange-primary text-white px-8 rounded-md mr-2">Sim</button>
                                    <button onClick={cancelSubscription} className="bg-gray-200 px-4 py-2 rounded-md ml-2">Cancelar</button>
                                </div>
                            </div>
                        </div>
                        )
                    }

                </div>

                <Footer />
            </div>
        </>
    )
}