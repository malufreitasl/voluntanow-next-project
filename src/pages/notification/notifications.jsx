import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";



export default function Home() {
  return (
    <div className={"bg-white-background h-screen w-screen"}>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center">
        
        <p className="text-base mt-48">
            Não tens notificações disponíveis. 
        </p>
        <p className="text-sm mt-4">
            Quando tiveres, elas aparecerão aqui! Fica atent@. 😊
        </p>
        
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
}
