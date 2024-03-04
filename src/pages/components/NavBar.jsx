const { Notification, MenuIcon, FilterIcon, SearchIcon } = require("./icons/icons");
import Image from "next/image";
import { useState, } from 'react';
import { motion } from "framer-motion"
import Link from "next/link";


function NavBar() {
  return (
    <div className="px-6">
      <div className="flex items-center">
        <div className="pt-14">
          <Image src="/images/logo.png" width="80" height="80" />
        </div>
        <div className="flex flex-grow justify-end pt-20  gap-7 items-center">
          <Link href="../notification/notifications"><Notification /></Link>
          <DropdownMenuIcon />
        </div>
      </div>

      <div className="flex justify-center items-center pt-4">
        <div className="relative flex items-center">
          <div className="flex absolute ml-4"><SearchIcon /></div>
        </div>
        <input type="search" name="search" id="search" placeholder="Pesquisa" className="flex w-full h-12 bg-gray-terciary shadow-inner rounded-lg pl-10" />
        <IconWithButtons />
      </div>

    </div>
  )
}



function DropdownMenuIcon() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const closeDropdown = () => {
    setShowDropdown(false);
  }

  return (
    <div className="relative top-0 z-50 pr-2.5">
      <button className="bg-white Z-50" onClick={toggleDropdown}><MenuIcon /></button>
      {showDropdown && (
        <div className="flex flex-col absolute gap-6 items-center right-0 text-white h-48 w-44 mt-2 bg-blue-primary rounded-lg border-2 justify-center">
          <a href="#" className="block px-4 py-2 hover:bg-orange-primary hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center ">Definições</a>
          <a href="#" className="block px-4 py-2 hover:bg-orange-primary  hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center">Ajuda</a>
          <Link href="../login_pages/login" className="block px-4 py-2 hover:bg-orange-primary  hover:text-white hover:rounded-2xl hover:font-medium hover:w-36 hover:text-center">Login</Link>
        </div>
      )}
      {/* Fechar o dropdown quando clicar fora dele */}
      {/* {showDropdown && (
        <div className="fixed inset-0" onClick={closeDropdown}></div>
      )} */}
    </div>
  );
}

const optionsFilter = [
  <a href="#"className="bg-cartsFilter text-gray-text text-sm rounded w-24 h-5">A-Z</a>,
  <a href="#" className="bg-cartsFilter text-gray-text text-sm h-5 w-36 rounded">Nº de Incrições</a>,
  <a href="#" className="bg-cartsFilter text-gray-text text-sm h-5 w-38 text-nowrap rounded">Ação mais recente</a>
]

function IconWithButtons() {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(!showButtons);
  }

  return (
    <div className="relative"  onClick={handleClick}>
      <button className="pt-2.5 pl-2">
        <FilterIcon />
      </button>
      {/* Botões */}
      <div className="absolute justify-center gap-10 right-0  flex pt-1 flex-nowrap whitespace-nowrap overflow-x-auto" style={{ width: '85vw' }}>
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
              delay: index * 0.15
            }}
          >
            {option}
          </motion.div>
        )}

      </div>
    </div >
  );
}




module.exports = { NavBar, DropdownMenuIcon, IconWithButtons }