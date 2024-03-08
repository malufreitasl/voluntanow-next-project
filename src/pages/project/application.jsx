import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QrCode from "../components/QrCode";
import GoBackButton from "../components/GoBackButton";
import { isUserLoggedIn } from "../utils/globalFunctions";
import Loading from "../components/Loading";

const raleway = Raleway({ subsets: ["latin"] });


export default function InfoProject() {
    const [projectData, setProjectData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userApplication, setUserApplication] = useState([]);
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
                setProjectData(project);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch project data:', error);
            }
        };

        const getUserId = async () => {
            try {
                const response = await fetch("/api/user/id", {
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
                
                const userId = await response.json();
                fetchUserApplication(userId)
                } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }

        const fetchUserApplication = async (uid) => {
            try {
                const response = await fetch("../api/application/user-application", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({userID: uid, projectID: i}),
                })
                const userApplicationInfo = await response.json();
                setUserApplication(userApplicationInfo[0]);
            } catch (error) {
                console.error('Failed to fetch user application:', error);
            }
        }


        if (i) {
            fetchfoProjectInfo();
            if (isUserLoggedIn()) {
                getUserId()
            }
        }
    }, [i])

    if (isLoading) {
        return (
          <div>
            <NavBar />
            <Loading/>
            <Footer />
          </div>
        )
      }


    return (
        <>
            <div className={`${raleway.className}`}>
                <NavBar />
                <div className="pt-64 px-6"><GoBackButton/></div>
                <div className="flex flex-col gap-6 px-6 pb-28">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-semibold text-black mt-4">{projectData?.name}</div>
                        <div className="text-xl text-orange-primary">{projectData?.address}</div>
                        <div className="flex gap-4 pt-1">
                            <div className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectData?.date} - {projectData?.hour}</div>
                            <div className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{projectData?.applicants} pessoas já inscritas</div>
                        </div>
                        <div className=" font-semibold text-black">Inscrição N.: {userApplication?._id}</div>

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