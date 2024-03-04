const { Notification, MenuIcon, FilterIcon, SearchIcon } = require("./icons/icons");
import Image from "next/image";
import { useState, } from 'react';
import { motion } from "framer-motion"
import Link from "next/link";


function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 ">
      <div className="px-6">
        <div className=" flex items-center">
          <div className="pt-10">
            <Image src="/images/logo.png" width="80" height="80" />
          </div>
        </div>
        <div className="flex flex-grow justify-end gap-7 items-center">
          <Link href="../notification/notifications"><Notification /></Link>
          <DropdownMenuIcon />
        </div>
        <div className="flex justify-center items-center pt-4">
          <div className="relative flex items-center">
            <div className="flex absolute ml-4"><SearchIcon /></div>
          </div>
          <input type="search" name="search" id="search" placeholder="Pesquisa" className="flex w-full h-12 bg-gray-terciary shadow-inner rounded-lg pl-10" />
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
          <Link href="/login_pages/login" className="block px-4 py-2 hover:bg-blue-primary  hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center">Login</Link>
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