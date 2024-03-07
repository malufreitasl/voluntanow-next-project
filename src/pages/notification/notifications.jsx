import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import GoBackButton from "../components/GoBackButton";



export default function Home() {
  return (
    <div className={"bg-white-background h-screen w-screen"}>
      <div>
        <NavBar />
      </div>
      <div className="h-screen flex flex-col gap-8 pt-56">
        <div className="justify-self-end mx-8 pt-5">
          <GoBackButton/>
        </div>
        
        <div className="flex flex-col items-center h-80 justify-center">
          <p className="text-base">
              Não tens notificações disponíveis. 
          </p>
          <p className="text-sm mt-4">
              Quando tiveres, elas aparecerão aqui! Fica atent@. 😊
          </p>
        </div>
        
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
}
