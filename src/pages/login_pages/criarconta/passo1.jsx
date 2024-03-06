import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import PasswordMatch from "../confirmacaopass";

export default function CriarConta1() {
    
    return (
        <>
            <div>
                <div className="pt-10 flex fixed justify-center w-full bg-gray-terciary align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>

                <div className="pt-96">
                    <div className="flex flex-col mx-8 pt-4">
                        <p className="text-sm">Username</p>
                        <input type="search" name="search" id="search" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                        <p className="text-sm">Email</p>
                        <input type="search" name="search" id="search" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                        <PasswordMatch/>
                    </div>

                    <div className="flex flex-col mx-8 pt-10">
                        <p className="text-sm">Nome do Voluntário</p>
                        <input type="search" name="search" id="search" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                        <p className="text-sm mt-2">Idade</p>
                        <input type="number" name="age" id="age" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                        <p className="text-sm mt-2">Género</p>
                        <input type="search" name="search" id="search" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    </div>

                    <div className="flex flex-col mx-8  pt-10">
                    <p className="text-sm">Contacto telefónico</p>
                    <input name="phone number" id="phone number" className=" h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <p className="text-sm mt-2">Profissão</p>
                    <input name="profissão" id="profissão" className=" h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" />
                    <button className="mt-20 mb-32 h-12 text-white bg-orange-primary rounded-lg"><Link href="../profile">Criar conta!</Link></button>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>

    )
}