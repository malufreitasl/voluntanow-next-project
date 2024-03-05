import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);

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
        console.log(userInfo)
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    getUserInfo();
  }, []); 


export default function Profile() {
  return (
    <div className={"bg-white-background h-screen w-screen"}>
      <div>
        <NavBar />
      </div>
      {userInfo?.role === "volunteer"? (
        <div className="flex flex-col items-center">
          <Image src="/images/perfil.jpg" width="180" height="180" className="rounded-full mt-64" />

          <p className=" mt-8 text-2xl font-semibold text-black">
            {userInfo?.volunteer_info?.name}
          </p>
          <p>
            {userInfo?.volunteer_info?.email}
          </p>
          <p>
            {userInfo?.volunteer_info?.job}
          </p>
          
          <div className="flex justify-center pt-28 ">
            <button className="bg-orange-primary text-white w-44 h-10 rounded-lg items-center justify-center ">Terminar sessão</button>
          </div>
        </div>
        ):(
          <div>Profile de organizações</div>
        )}
      <div>
        <Footer />
      </div>
    </div >
  );
}
