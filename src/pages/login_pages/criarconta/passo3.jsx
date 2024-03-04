import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";

export default function CriarConta3() {
    
    return (
        <>
            <div>
                <div className="mt-28 flex align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col ml-8 pt-4">
                    <p className="text-sm">Contacto telefónico</p>
                    <input name="phone number" id="phone number" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Profissão</p>
                    <input name="profissão" id="profissão" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <button className="mt-28 w-80 h-12 text-white bg-orange-primary rounded-lg"><Link href="../profile">Criar conta!</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}