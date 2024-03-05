import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";

export default function CriarConta1() {
    
    return (
        <>
            <div>
                <div className="mt-28 flex align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col mx-8 pt-4">
                    <p className="text-sm">Email</p>
                    <input type="search" name="search" id="search" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Palavra Passe</p>
                    <input type="password" name="password" id="password" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Confirmar Palavra Passe</p>
                    <input type="password" name="password" id="password" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <button className="mt-9 w-80 h-12 text-white bg-orange-primary rounded-lg"><Link href="./passo2">Próximo passo... 1 de 3</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}