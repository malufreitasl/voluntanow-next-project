import { Inter } from "next/font/google";
import { NavBar } from "./components/NavBar";
import { motion } from "framer-motion"
import { Footer } from "./components/Footer";
import Link from 'next/link';
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [topInstitutions, setTopInstitutions] = useState([]);
  const [topProjects, setTopProjects] = useState([]);

   // Fetch para obter dados das instituições em destaque
   const fetchTopInstitutions = async () => {
    try {
      const response = await fetch('./api/application/top-institutions');
      if (!response.ok) {
        throw new Error('Fail to fetch top institutions data');
      }
      const data = await response.json();
      setTopInstitutions(data);
    } catch (error) {
      console.error('Fail to fetch top institutions data:', error);
    }
  };

   const fetchTopProjects = async () => {
    try {
      const response = await fetch('./api/application/top-projects');
      if (!response.ok) {
        throw new Error('Fail to fetch top projects data');
      }
      const data = await response.json();
      setTopProjects(data);
    } catch (error) {
      console.error('Fail to fetch top projects data:', error);
    }
  };

  useEffect(() => {
    fetchTopInstitutions();
    fetchTopProjects();
  });

  return (
    <div className="bg-white-background  h-screen w-screen ">
      <div>
        <NavBar />
      </div>
      <div className="flex gap-24 pt-6 pl-6 items-center">
        <h1 className="text-black text-base font-medium">Organizações em destaque</h1>
        <Link href="/institution/main"><h2 className="text-gray-text text-sm">Ver mais</h2></Link>
      </div>
      <div className="flex pt-6 pl-6 gap-6 overflow-x-auto whitespace-nowrap">
        {topInstitutions.map((elemento, index) =>
          <motion.div
            key={index}

            initial={{
              x: -100, // Fora da tela à esquerda
              opacity: 0
            }}
            animate={{
              x: 0, // Move para a posição inicial
              opacity: 1
            }}
            transition={{
              delay: index * 0.15
            }}
          >
            <div className=" flex flex-col bg-blue-primary  w-56 h-64 rounded-lg p-4 pl-5 gap-5">
              <div className="text-white-background  text-2xl whitespace-normal">{elemento.name}</div>
              <div className="bg-gray-text text-white rounded-lg text-center text-xs">{elemento.local}</div>
              <div className="text-white text-base whitespace-normal">{elemento.description}</div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex gap-36 pt-6  pl-6 items-center">
        <h1 className="text-black text-base font-medium">Ações anunciadas</h1>
        <Link href="/project/main"><h2 className="text-gray-text text-sm">Ver mais</h2></Link>
      </div>
      <div className="flex flex-col pt-4 gap-2.5 pl-6 pr-6 bg-white-background overflow-y-auto h-screen">
        {topProjects.map((projeto, index) =>
          <motion.div
            initial={{
              y: 100,
              scale: 1,
              opacity: 0
            }}
            animate={{
              y: 0,
              scale: [1, 0.99, 1],
              opacity: 2
            }}

            transition={{
              delay: index * 0.15
            }}
            key={index}
          ><div>
              <div className="text-blue-primary text-base font-medium">{projeto.name}</div>
              <div className="text-orange-primary text-sm">{projeto.institution_id}</div>
              <div className="flex gap-2.5">
                <div className="text-gray-text text-sm">{projeto.date}</div>
                <div className="text-gray-text text-sm">{projeto.applicants} inscritos</div>
              </div>
              <hr></hr>
            </div>
          </motion.div>
        )}
      </div>
      <div>
        <Footer/>
      </div>
    </div >
  );
}
