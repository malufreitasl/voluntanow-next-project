import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function FiltrarTipo() {
    
    return (
        <>
            <div>
                <div className="mt-28 flex align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col mx-8 pt-4">
                    <button className="mt-8 w-80 h-16 bg-cartsFilter text-lg rounded-lg"><Link href="./criarconta_organizacao/passo1org">Organização 🏨</Link></button>
                    <button className="mt-5 w-80 h-16 bg-cartsFilter text-lg rounded-lg"><Link href="./criarconta/passo1">Voluntário🧑🏿‍🤝‍🧑🏼</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}