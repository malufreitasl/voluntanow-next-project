import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";

export default function CriarConta2() {
    
    return (
        <>
            <div>
                <div className="mt-28 flex align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col ml-8 pt-4">
                    <p className="text-sm">Nome</p>
                    <input type="search" name="search" id="search" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Idade</p>
                    <input type="number" name="age" id="age" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Género</p>
                    <input type="search" name="search" id="search" className="w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <button className="mt-9 w-80 h-12 text-white bg-orange-primary rounded-lg"><Link href="./passo3">Próximo passo... 2 de 3</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}