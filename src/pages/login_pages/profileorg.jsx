import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";



export default function ProfileOrg() {
  return (
    <>
        <div>
            <NavBar />
        </div>
        
        <div className="flex flex-col gap-6 px-6 pt-64 pb-32">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-black">Casa da Mãe Joana</h1>
                <p className="text-orange-primary text-lg">Rua do coiso, 123, Sabe-se lá onde</p>
                <div className="flex gap-4 pt-1">
                    <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">27 inscrições em projetos</p>
                    <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">Classificação: 4.5/5</p>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-medium text-black">Descrição da Organização</h2>
                <p className="text-justify text-base text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div>
                <p>Projetos</p>
            </div>
            
            <div className="flex flex-col gap-3">
                <h2 className="text-xl">Contactos</h2>
                <div className="flex flex-col gap-0.5">
                    <p>exemplo@exemplo.pt</p>
                    <p>(+351) 252 123 123</p>
                    <p>www.exemplo.pt</p>
                </div>
            </div>
        </div>
            
        <div className="flex justify-center pt-28 ">
            <button className="bg-orange-primary text-white w-44 h-10 rounded-lg items-center justify-center ">Terminar sessão</button>
        </div>
        <div>
            <Footer />
        </div>
    </>
    )
}
