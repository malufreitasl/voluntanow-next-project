const { Notification, MenuIcon, FilterIcon, SearchIcon } = require("./icons/icons");
import Image from "next/image";
import { useState } from 'react';
import { motion } from "framer-motion"


function NavBar() {
  return (
    <div className="pl-6 pr-9">
      <div className="flex items-center">
        <div className="pt-14">
          <Image src="/images/logo.png" width="80" height="80" />
        </div>
        <div className="flex flex-grow justify-end pt-20  gap-7 items-center">
          <Notification />
          <DropdownMenuIcon />
        </div>
      </div>

      <div className="flex justify-center items-center pt-4 gap-2">
        <div className="relative flex items-center">
          <div className="flex absolute ml-4"><SearchIcon /></div>
        </div>
        <input type="search" name="search" id="search" placeholder="Pesquisa" className="w-80 h-12 bg-gray-terciary shadow-inner rounded-lg pl-10" />
        <div className="flex items-center justify-center pr-0">
           <IconWithButtons /> 
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

  const closeDropdown = () => {
    setShowDropdown(false);
  }

  return (
    <div className=" relative z-10">
      <button className="settings-btn bg-white" onClick={toggleDropdown}><MenuIcon /></button>
      {showDropdown && (
        <div className="flex flex-col absolute gap-6 items-center right-0 text-white h-48 w-44 mt-2 bg-blue-primary rounded-lg">
          <a href="#" className="block px-4 py-2 ">Definições</a>
          <a href="#" className="block px-4 py-2 ">Ajuda</a>
          <a href="#" className="block px-4 py-2 ">Login</a>
        </div>
      )}
      {/* Fechar o dropdown quando clicar fora dele */}
      {showDropdown && (
        <div className="fixed inset-0" onClick={closeDropdown}></div>
      )}
    </div>
  );
}

const optionsFilter = [
  <button className="bg-carts text-gray-text text-sm rounded w-24 h-7">Localização</button>,
  <button className="bg-carts text-gray-text text-sm h-7 w-24 rounded">Classificação</button>,
  <button className="bg-carts text-gray-text text-sm h-7 w-44 text-nowrap rounded">Disponibilidade Temporal</button>,
  <button className="bg-carts text-gray-text text-sm h-7 w-40 text-nowrap rounded">Tipo de Voluntariado</button>
]

function IconWithButtons() {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    
    setShowButtons(!showButtons);
  }
  const closeIconWithButtons = () => {
   setShowButtons(false);
  }

  return (
    <div className="relative">
      <button className=" " >
        <FilterIcon />
      </button>
      {/* Botões */}
      <div className="absolute top-0 right-0 gap-2 flex pt-16 flex-nowrap overflow-x-auto whitespace-nowrap" onClick={handleClick} style={{ width: '85vw' }}>
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