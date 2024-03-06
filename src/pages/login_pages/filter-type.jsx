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
                
                <div className="flex flex-col mx-8 pt-4 items-center">
                    <button className="mt-8 w-80 h-16 bg-cartsFilter text-lg rounded-lg"><Link href="/login_pages/create-account/institution">Organização 🏨</Link></button>
                    <button className="mt-5 w-80 h-16 bg-cartsFilter text-lg rounded-lg"><Link href="/login_pages/create-account/volunteer">Voluntário 🧑🏿‍🤝‍🧑🏼</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}