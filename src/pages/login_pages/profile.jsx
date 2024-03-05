import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";



export default function Profile() {
  return (
    <div className={"bg-white-background h-screen w-screen"}>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center">
        <Image src="/images/perfil.jpg" width="180" height="180" className="rounded-full mt-64" />

        <p className=" mt-8 text-2xl font-semibold text-black">
            Pedro Pereira, 24 anos
        </p>
        <p>
            exemplo@exemplo.pt
        </p>
        <p>
            Estudante
        </p>
        
        <div className="flex justify-center pt-28 ">
            <button className="bg-orange-primary text-white w-44 h-10 rounded-lg items-center justify-center ">Terminar sessão</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
}
