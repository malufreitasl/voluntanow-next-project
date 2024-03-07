import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Loading from "../components/Loading";



const raleway = Raleway({ subsets: ["latin"] });

export default function InfoProject() {
    const [projectsData, setProjectsData] = useState({});
    const [userData, setUserData] = useState({});
    const [buttonQueroMeInscreverDisabled, setButtonQueroMeInscreverDisabled] = useState(false)
    const [jaEstaInscrito, setJaEstaInscrito] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { i } = router.query;

    const createAplication = async (institution_id, project_id, volunteer_id) => {
        try {
            const response = await fetch(`../api/application/add`,
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        'institution_id': institution_id,
                        'project_id': project_id,
                        'volunteer_id': volunteer_id
                    })
                });
            if (!response.ok) {
                throw new Error('Failed to create application');
            }
        } catch (error) {
            console.error('Failed to create application:', error);
        }
    };

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

        const verifyAndLoadApplication = async (project_id, volunteer_id) => {
            try {
                const response = await fetch(`../api/application/load-application`,
                    {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            "Content-Type": "application/json",
                            "Authorization": localStorage.getItem("token")
                        },
                        body: JSON.stringify({
                            'project_id': project_id,
                            'volunteer_id': volunteer_id
                        })
                    });
                if (!response.ok) {
                    throw new Error('Failed to load application');
                }
                let application = await response.json();

                if (application != undefined) {
                    setJaEstaInscrito(true)
                    setButtonQueroMeInscreverDisabled(true)
                }

            } catch (error) {
                console.error('Failed to load application:', error);
            }
        };

        const getUserInfo = async () => {
            try {
                const response = await fetch("/api/user", {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("token")
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                let userInformation = await response.json();

                if (!userInformation || userInformation.length == 0) {
                    setUserData({})
                } else {
                    setUserData(userInformation[0]);

                    //TODO verificar este /api/user porque nao tras os projetos todos em que o user esta inscrito
                    let encontrouOProjetoNoUser = userInformation[0].projects.find(x => x._id == i)

                    setButtonQueroMeInscreverDisabled(encontrouOProjetoNoUser != undefined || userInformation[0]?.role != 'volunteer')
                    setJaEstaInscrito(encontrouOProjetoNoUser != undefined)

                    verifyAndLoadApplication(i, userInformation[0]._id);
                }

            } catch (error) {
                setUserData({})
                console.error('Failed to fetch data:', error);
            }
        };

        if (i) {
            fetchfoProjectInfo();
            getUserInfo();
            verifyAndLoadApplication(projectsData._id, userData._id);
        }
    }, [i])

    const handleQueroMeInscrever = () => {
        if (!userData?.role) {
            router.push(`/login_pages/login`)
        }
        else {
            createAplication(projectsData.institution_id, projectsData._id, userData._id)
            router.push('/login_pages/meinscrever') //trocar rota -> é um exemplo
        }
    };
    if (isLoading) {
        return (
            <div>
                <NavBar />
                <Loading />
                <Footer />
            </div>
        )
    }


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
                                <div className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectsData.applicants === 1 ? projectsData.applicants + " pessoa já inscrita" : projectsData.applicants + " pessoas já inscritas"} </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-black text-xl font-medium max-h-30">Descrição da Atividade</h1>
                        <div className="text-base text-black text-justify overflow-y-auto max-h-64">{projectsData?.description}</div>

                    </div>

                    {
                        jaEstaInscrito ?
                            <div>AAAAAAAAAAA</div>
                            : ""
                    }

                    <div className="fixed bottom-28 flex w-full px-20  bg-white-background">
                        <button disabled={buttonQueroMeInscreverDisabled} onClick={handleQueroMeInscrever}
                            className={!buttonQueroMeInscreverDisabled ?
                                "flex justify-center bg-orange-primary text-white w-44 h-10 rounded-lg items-center hover:bg-blue-primary"
                                : "bg-gray-text cursor-not-allowed flex justify-center text-white w-44 h-10 rounded-lg items-center hover:bg-blue-primary"}>
                            {jaEstaInscrito ? "Já está inscrito :)" : "Quero me inscrever!"}
                        </button>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}


