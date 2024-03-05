const { Notification, MenuIcon, FilterIcon, SearchIcon } = require("./icons/icons");
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Link from "next/link";
import { useRouter } from 'next/router';
import { isUserLoggedIn, removeToken } from "../utils/globalFunctions";

function NavBar() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  const [allPesquisas, setAllPesquisas] = useState([])
  const [showPesquisas, setShowPesquisas] = useState(false);

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
    setShowPesquisas(value.length != 0)
  };

  const selecionarSugestao = (sugestao) => {
    setSearch(sugestao)
    setSugestoes([]);

    // as vezes o link em baixo nao funciona, assim por segurança fica aqui a redirecionar
    if (sugestao.institution_id) {
      router.push(`/project/info?i=${sugestao._id}`);
    } else {
      router.push(`/institution/info?i=${sugestao._id}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white-background z-50 ">
      <div className="fixed w-full bg-white-background z-50">
        <div className="px-6 ">

          <div className=" flex items-center">
            <div className="pt-14">
              <Image src="/images/logo.png" width="80" height="80" />
            </div>

            <div className="flex flex-grow justify-end pt-20 gap-7 items-center">
              <Link href="../notification/notifications"><Notification /></Link>
              <DropdownMenuIcon />
            </div>
          </div>


          <div className="flex justify-center items-center pt-4">
            <div className='relative flex w-full items-center mt-3 cursor-pointer '>
              {(
                <>
                  <div className="relative flex items-center">
                    <div className="flex absolute ml-3"><SearchIcon /></div>
                  </div>

                  <input type="search" value={search.value} onChange={(e) => handleInputChange(e.target.value)} name="search" id="search" placeholder="Pesquisa" className="flex w-full h-12 bg-gray-terciary shadow-inner rounded-lg pl-10" />
                  {(search.value !== null && showPesquisas) && ( //isso não está a fazer com que feche as sugestões caso o campo input esteja vazio
                    <ul className="absolute top-full w-full bg-gray-terciary shadow-md mt-1 rounded-lg z-10">
                      {sugestoes.map((sugestao, index) => (
                        <li key={index} className="p-2  text-blue-primary cursor-pointer" onClick={() => selecionarSugestao(sugestao)}>
                          <Link href={sugestao.institution_id ? `/project/info?i=${sugestao._id}` : `/institution/info?i=${sugestao._id}`}>
                            {sugestao.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



function DropdownMenuIcon() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); 
  const router = useRouter(); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

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

  return (
    <div className="relative top-0 z-50 pr-2.5">
      <button className="bg-white Z-50" onClick={toggleDropdown}><MenuIcon /></button>
      {showDropdown && (
        <div className="flex flex-col absolute gap-6 items-center right-0 text-white h-48 w-44 mt-2 bg-blue-primary rounded-lg border justify-center">
          <a href="#" className="block px-4 py-2 ">Definições</a>
          <Link href="../about-us/main" className="block px-4 py-2">Sobre Nós</Link>
          {isUserLoggedIn()? (
            <a className="block px-4 py-2" onClick={handleLogout}>Terminar Sessão</a> 
          ):(
            <Link href="../login_pages/login" className="block px-4 py-2">Login</Link>
          )
        }
        </div>
      )}
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
        <button className="pt-2 pl-2">
          <FilterIcon />
        </button>

      </div >
      {/* Botões */}

      <div className="flex w-full absolute gap-2 inset-x-0  whitespace-nowrap  ">
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