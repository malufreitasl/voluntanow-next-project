import { NavBar } from "./components/NavBar";
import { motion } from "framer-motion"
import { Footer } from "./components/Footer";
import Link from 'next/link';
import { useEffect, useState } from "react";



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

  const TruncatedText = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
      return <div>{elemento.description}</div>
    }
    const truncatedText = text.substring(0, maxLength) + '...'

    return <div className="text-white text-base truncate overflow-hidden whitespace-normal"> {truncatedText} </div>
  }

  useEffect(() => {
    fetchTopInstitutions();
    fetchTopProjects();
  }, []);

  return (
    <div className={"bg-white-background h-screen w-screen"}>
      <div>
        <NavBar />
      </div>
      <div className="px-6">
        <div className=" pt-64 flex justify-between text-center">
          <h1 className="text-black text-base font-medium">Organizações em destaque</h1>
          <Link href="/institution/main"><h2 className="text-gray-text text-sm">Ver mais</h2></Link>
        </div>
        <div className="flex pt-6 gap-6 overflow-auto whitespace-nowrap no-scrollbar  ">
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
              <Link href={`/institution/info?i=${elemento._id}`}>
                <div className="flex flex-col bg-blue-primary  h-full w-60 rounded-xl p-4 pl-5 gap-5 ">
                  <div className="text-white-background  text-2xl whitespace-normal">{elemento.name}</div>
                  <div className="bg-gray-text text-white text-xs py-1 px-2.5 rounded-full overflow-hidden max-w-min ">{elemento.local}</div>

                  <TruncatedText text={elemento.description} maxLength={80} />

                </div>
              </Link>
            </motion.div>
          )}
        </div>
        <div className="flex pt-6 justify-between text-center bg-white">
          <h1 className="text-black text-base font-medium">Ações anunciadas</h1>
          <Link href="/project/main"><h2 className="text-gray-text text-sm">Ver mais</h2></Link>
        </div>
        <div className="flex flex-col pt-4 gap-2.5">
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
            >
              <Link href={`/project/info?i=${projeto._id}`}>
                <div className=" border-b border-gray-text pb-2">
                  <div className="text-blue-primary text-base font-medium">{projeto.name}</div>
                  <div className="text-orange-primary text-sm">{projeto.institution_name}</div>
                  <div className="flex gap-2.5">
                    <div className="text-gray-text text-sm">{projeto.date}</div>
                    <div className="text-gray-text text-sm ">{projeto.applicants} inscritos</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      <div className="h-40"></div>
      <div>
        <Footer />
      </div>
    </div >
  );
}
