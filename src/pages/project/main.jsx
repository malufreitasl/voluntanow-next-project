import Link from "next/link";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";


export default function ProjectPage() {
    
    return (
        <>
            <div className={"bg-white-background h-screen w-screen"}>
        <div>
            <NavBar />
        </div>
        <div className="flex gap-24 pt-6 pl-6 items-center">
            <h1 className="text-black text-base font-medium">Ações anunciadas</h1>
        </div>
        <div className="flex flex-col pt-4 gap-2.5 pl-6 pr-6 100-vh bg-white-background overflow-y-auto h-screen">
            <div className="flex flex-col pt-6 pl-6 text-justify">
            <div class="text-blue-primary text-base font-medium">Entrega de Comida</div>
            <div class="text-orange-primary text-sm">Casa da Mãe Joana</div>
            <div class="flex gap-2.5">
                <div class="text-gray-text text-sm">18/02/2024</div>
                <div class="text-gray-text text-sm">24 pessoas já inscritas</div>
            </div>
            </div>
            <div className="flex flex-col pt-6 pl-6 text-justify">
            <div class="text-blue-primary text-base font-medium">Cozinheiro/a</div>
            <div class="text-orange-primary text-sm">Santa Casa da Misericórdia</div>
            <div class="flex gap-2.5">
                <div class="text-gray-text text-sm">28/02/2024</div>
                <div class="text-gray-text text-sm">3 pessoas já inscritas</div>
            </div>
            </div>
            <div className="flex flex-col pt-6 pl-6 text-justify">
            <div class="text-blue-primary text-base font-medium">Cozinheiro/a</div>
            <div class="text-orange-primary text-sm">Santa Casa da Misericórdia</div>
            <div class="flex gap-2.5">
                <div class="text-gray-text text-sm">28/02/2024</div>
                <div class="text-gray-text text-sm">3 pessoas já inscritas</div>
            </div>
            </div>
            <div className="flex flex-col pt-6 pl-6 text-justify">
            <div class="text-blue-primary text-base font-medium">Apoio na limpeza de canil</div>
            <div class="text-orange-primary text-sm">Canil Municipal do Porto</div>
            <div class="flex gap-2.5">
                <div class="text-gray-text text-sm">28/02/2024</div>
                <div class="text-gray-text text-sm">3 pessoas já inscritas</div>
            </div>
            </div>
            <div className="flex flex-col pt-6 pl-6 text-justify">
            <div class="text-blue-primary text-base font-medium">Apoio na limpeza de canil</div>
            <div class="text-orange-primary text-sm">Canil Municipal do Porto</div>
            <div class="flex gap-2.5">
                <div class="text-gray-text text-sm">28/02/2024</div>
                <div class="text-gray-text text-sm">3 pessoas já inscritas</div>
            </div>
            </div>
            <div className="flex flex-col pt-6 pl-6 text-justify">
            <div class="text-blue-primary text-base font-medium">Apoio na limpeza de canil</div>
            <div class="text-orange-primary text-sm">Canil Municipal do Porto</div>
            <div class="flex gap-2.5">
                <div class="text-gray-text text-sm">28/02/2024</div>
                <div class="text-gray-text text-sm">3 pessoas já inscritas</div>
            </div>
            </div>
        </div>
        <div>
        <Footer/>
        </div>
            </div>
        </>
    )
}