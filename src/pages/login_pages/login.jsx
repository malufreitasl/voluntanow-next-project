import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function LogIn() {
    
    return (
        <>
            <div className="mx-6">
                <div className="mt-28 flex align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col mx-6 pt-4">
                    <p className="text-sm">Email</p>
                    <input type="search" name="search" id="search" className="h-12 px-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Palavra Passe</p>
                    <input type="password" name="password" id="password" className=" h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <button className="mt-8 h-12 bg-orange-primary text-white shadow-inner rounded-lg"><Link href="../index">Login</Link></button>
                    <button className="mt-2 h-12 bg-cartsFilter rounded-lg"><Link href="../login_pages/criarconta/passo1">Criar conta</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}