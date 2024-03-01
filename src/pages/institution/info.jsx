import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"] });

const institutionInfo = {
    name: "Casa da Mãe Joana",
    local: "R. Prof. Melo Adrião 106, 4100-340 Porto",
    application: 24,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non enim in dui ultrices consectetur. Cras nec rhoncus tortor. Praesent cursus iaculis tellus ullamcorper elementum. Sed eu venenatis ex. Phasellus fermentum egestas erat quis posuere. Aenean malesuada risus sit amet dui gravida, nec molestie tortor tincidunt. Integer viverra, ex mollis."
}

const projects = [
    {
        name: "Luz da vida",
        address: "Rua das Flores, 88",
        date: "11/11/1999",
        application: 2
    },
    {
        name: "Luz do sol",
        address: "Rua do sol, 88",
        date: "11/11/1998",
        application: 1

    }
]

export default function InfoInstitution() {
    return (
        <>  
            <div className={`${raleway.className}`}>
                <NavBar />
                <div className="flex flex-col gap-6 px-6 pt-6 pb-32">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold text-black">{institutionInfo.name}</h1>
                        <p className="text-orange-primary text-lg">{institutionInfo.local}</p>
                        <div className="flex gap-4 pt-1">
                            <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{`${institutionInfo.application} ${institutionInfo.application === 1? "inscrição em projetos": "inscrições em projetos"}`}</p>
                            <p className="text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">Classificação: 4,2 / 5</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-medium text-black">Descrição da Organização</h2>
                        <p className="text-justify text-base text-black">{institutionInfo.description}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-medium text-xl text-black ">Ações anunciadas</h2>
                        {projects.map((project, index) =>
                            <motion.div
                            initial={{
                                y: 100,
                                scale: 1,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                scale: [1, 0.99, 1],
                                opacity: 2
                            }}

                            transition={{
                                delay: index * 0.15
                            }}
                            key={index}
                            >
                                <div>
                                    <div className="border-b border-gray-text pb-2">
                                        <div className="text-blue-primary text-base font-medium">{project.name}</div>
                                        <div className="text-orange-primary text-sm">{project.address}</div>
                                        <div className="flex gap-2.5">
                                            <div className="text-gray-text text-sm">{project.date}</div>
                                            <div className="text-gray-text text-sm">{`${project.application} ${project.application === 1? "pessoa já inscrita": "pessoas já inscritas"}`}</div>
                                        </div>
                                    </div>
                                </div>
                        </motion.div>)}
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl">Contactos</h2>
                        <div className="flex flex-col gap-0.5">
                            <p>info@associacaosalvador.com</p>
                            <p>(+351) 213 600 500</p>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}