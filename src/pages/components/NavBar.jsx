const { Notification, MenuIcon, FilterIcon, SearchIcon } = require("./icons/icons");
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Link from "next/link";

function NavBar() {

  const [search, setSearch] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  const [allPesquisas, setAllPesquisas] = useState([])

  useEffect(() => {
    const getAllProjectsForSearch = async () => {
      try {
        const response = await fetch('../api/project/all-projects-for-search');
        if (response.ok) {
          const data = await response.json();
          return data;
        }
        return [];
      } catch (error) {
        console.error('Fail to fetch all projects data:', error);
      }
    };

    const getAllInstitutionsForSearch = async () => {
      try {
        const response = await fetch('../api/institution/all-institutions-for-search');
        if (response.ok) {
          const data = await response.json();
          return data;
        }
        return [];
      } catch (error) {
        console.error('Fail to fetch all institutions data:', error);
      }
    };

    Promise.all([getAllInstitutionsForSearch(), getAllProjectsForSearch()])
      .then(([institutions, projects]) => {
        const pesquisas = [...institutions, ...projects];
        setAllPesquisas(pesquisas);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  const handleInputChange = (value) => {
    setSearch(value);
    const sugestoesFiltradas = allPesquisas
      .filter(pesquisa => pesquisa.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
    setSugestoes(sugestoesFiltradas);
  };

  const selecionarSugestao = (sugestao) => {
    setSearch(sugestao)
    setSugestoes([]);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 ">
      <div className="px-6 ">

        <div className=" flex items-center">
          <div className="pt-14">
            <Image src="/images/logo.png" width="80" height="80" />
          </div>

          <div className="flex flex-grow justify-end pt-20  gap-7 items-center">
            <Notification />
            <DropdownMenuIcon />
          </div>
        </div>

        <div className="flex justify-center items-center pt-4">
          <div className="relative flex items-center">
            <div className="flex absolute ml-4"><SearchIcon /></div>
          </div>

          <div className='relative flex items-center mt-3 cursor-pointer border-b-4'>
            {(
              <>
                <input type="search" value={search.value} onChange={(e) => handleInputChange(e.target.value)} name="search" id="search" placeholder="Pesquisa" className="flex w-full h-12 bg-gray-terciary shadow-inner rounded-lg pl-10" />
                <ul className="absolute bottom-full w-full bg-azul text-letra font-bold shadow-md mt-1 rounded-md z-10">
                  {sugestoes.map((sugestao, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => selecionarSugestao(sugestao)}>
                      {
                        sugestao.institution_id ? <Link href={`/project/info?i=${sugestao._id}`}>{sugestao.name}</Link> : <Link href={`/institution/info?i=${sugestao._id}`}>{sugestao.name}</Link>
                      }
                    </li>
                  ))}
                </ul>
              </>
            )}

          </div>

          <Filters />
        </div>
      </div>
    </div>

  )
}



function DropdownMenuIcon() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (

    <div className="relative top-0 z-50 pr-2.5">
      <button className="bg-white Z-50" onClick={toggleDropdown}><MenuIcon /></button>
      {showDropdown && (
        <div className="flex flex-col absolute gap-6 items-center right-0 text-white h-48 w-44 mt-2 bg-orange-primary rounded-lg border-2 justify-center">
          <a href="#" className="block px-4 py-2 hover:bg-blue-primary hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center ">Definições</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-primary  hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center">Sobre Nós</a>
          <Link href="../login_pages/login" className="block px-4 py-2 hover:bg-blue-primary  hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center">Login</Link>
        </div>
      )}
    </div>

  );
}

let optionsFilter = [

  <button className="bg-cartsFilter text-gray-text py-1 px-2.5 text-xs rounded-xl hover:bg-blue-primary hover:text-white">A-Z</button>,
  <button className="bg-cartsFilter text-gray-text py-1 px-2.5 text-xs rounded-xl  hover:bg-blue-primary hover:text-white ">Nº de Incrições</button>,
  <button className="bg-cartsFilter text-gray-text py-1 px-2.5 text-xs rounded-xl  hover:bg-blue-primary hover:text-white">Ação mais recente</button>

]

function Filters() {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(!showButtons);
  }

  return (
    <div>
      <div className="relative" onClick={handleClick}>
        <button className="pt-2.5 pl-2">
          <FilterIcon />
        </button>

      </div >
      {/* Botões */}

      <div className="px-6 absolute flex justify-center gap-4 inset-x-0  whitespace-nowrap  ">
        {showButtons && optionsFilter.map((option, index) =>
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
              delay: index * 0.05
            }}
          >
            {option}
          </motion.div>
        )}

      </div>
    </div>
  );
}




module.exports = { NavBar, DropdownMenuIcon, Filters }