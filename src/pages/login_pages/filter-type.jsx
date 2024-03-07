import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/Footer";
import GoBackButton from "../components/GoBackButton";

export default function FiltrarTipo() {
    
    return (
        <>
            <div>
                <div className="mt-24 flex flex-col items-center justify-center gap-2">
                    <div className="mx-10 self-start"><GoBackButton/></div>
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col mx-8 pt-4 items-center">
                    <button className="mt-8 w-full h-16 bg-cartsFilter text-lg rounded-lg"><Link href="/login_pages/create-account/institution">Organização 🏨</Link></button>
                    <button className="mt-5 w-full h-16 bg-cartsFilter text-lg rounded-lg"><Link href="/login_pages/create-account/volunteer">Voluntário 🧑🏿‍🤝‍🧑🏼</Link></button>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}