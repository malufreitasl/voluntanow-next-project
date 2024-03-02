import Link from "next/link";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";



const raleway = Raleway({ subsets: ["latin"] });

export default function ProjectPage() {


    const arrayDeAcoes = [
        {
            nome: "Entrega de Comida",
            instituição: "Casa da mãe Joana",
            data: "18/01/22",
            inscritos: "24"
        },
        {
            nome: "Entrega de Comida",
            instituição: "Casa da mãe Joana",
            data: "18/01/22",
            inscritos: "24"
        },
        {
            nome: "Entrega de Comida",
            instituição: "Casa da mãe Joana",
            data: "18/01/22",
            inscritos: "24"
        },
        {
            nome: "Entrega de Comida",
            instituição: "Casa da mãe Joana",
            data: "18/01/22",
            inscritos: "24"
        },
        {
            nome: "Entrega de Comida",
            instituição: "Casa da mãe Joana",
            data: "18/01/22",
            inscritos: "24"
        },
    ]

    return (
        <>
            <div className={`${raleway.className}`}>
                <div>
                    <NavBar />
                </div>
                <div className="flex gap-36 pt-64 pl-6 items-center">
                    <h1 className="text-black text-2xl font-semibold">Ações anunciadas</h1>
                </div>

                <div className="flex flex-col pt-4 gap-2.5 px-6 100-vh pb-32">
                    {arrayDeAcoes.map((elemento, index) =>
                        <motion.div
                            initial={{
                                y: 100,
                                scale: 1,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                delay: index * 0.15
                            }}
                            key={index}
                        >
                            <Link href={elemento}>
                            <div className="border-b border-gray-text pb-2">
                                <div class="text-blue-primary text-base font-medium">{arrayDeAcoes[0].nome}</div>
                                <div class="text-orange-primary text-sm">{arrayDeAcoes[0].instituição}</div>
                                <div class="flex gap-2.5">
                                    <div class="text-gray-text text-sm">{arrayDeAcoes[0].data}</div>
                                    <div class="text-gray-text text-sm">{arrayDeAcoes[0].inscritos} já inscritas</div>
                                </div>
                            </div>
                            </Link>
                        </motion.div>
                    )}
                </div>
                <div className="text-black"><Link href="/project/info">Página da info</Link></div>
            </div>

            <div className="h-40"></div>
            <Footer />

        </>
    )
}