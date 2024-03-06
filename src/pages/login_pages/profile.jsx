import { useRouter } from 'next/router';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { removeToken } from "../utils/globalFunctions";
import Loading from '../components/Loading';
import { VolunteerProjects } from "../components/VolunteerProjects";

export default function Profile() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
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
        const userInformation = await response.json();
        setUserInfo(userInformation[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Failed to fetch data:', error);
      }
    };

    getUserInfo();
  }, []);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    removeToken();
    router.push('/login_pages/login');
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
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
    <div className={"bg-white-background h-screen w-screen"}>
      <div>
        <NavBar />
      </div>
      {userInfo?.length !== 0 ? (
        userInfo?.role === "volunteer" ? (
          <div className="flex flex-col items-center h-full justify-center mt-56 pb-24">
            <Image src={userInfo?.volunteer_info?.image?? "/images/perfil.png"} width="180" height="180" className="rounded-full" alt='profile'/>

            <p className=" mt-6 text-2xl font-semibold text-black">
              {userInfo?.volunteer_info?.name}
            </p>
            <p>
              {userInfo?.volunteer_info?.email}
            </p>
            <p>
              {userInfo?.volunteer_info?.job}
            </p>

            <div className="flex flex-col justify-center pt-10 w-full gap-4">
              <div className='mx-6 flex flex-col gap-14'>
                <button onClick={handleLogout} className="bg-orange-primary text-white w-44 h-10 rounded-lg items-center justify-center self-center">Terminar sessão</button>
                <VolunteerProjects projects={userInfo.projects} />
              </div>
            </div>
          </div>
        ) : (
          <div>Profile de organizações</div>
        )
      ) : (
        <div className="h-screen flex flex-col justify-center items-center gap-10">
          <div className="text-2xl text-gray-text">Você não fez login 😔</div>
          <Link href="../login_pages/login" ><button className="bg-orange-primary text-white p-2 rounded-lg">Página de login</button></Link>
        </div>
      )}
      <div>
        <Footer />
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white-background p-6 rounded-lg mx-14">
            <p className="mb-4 text-center">Tem certeza que deseja terminar a sessão?</p>
            <div className="flex justify-center gap-1">
              <button onClick={confirmLogout} className="bg-orange-primary text-white px-8 rounded-md mr-2">Sim</button>
              <button onClick={cancelLogout} className="bg-gray-200 px-4 py-2 rounded-md ml-2">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
