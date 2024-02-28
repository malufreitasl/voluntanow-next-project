import { Inter } from "next/font/google";
import { NavBar } from "./components/NavBar";
import { motion } from "framer-motion"
import { Footer } from "./components/Footer";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const arrayExemploInstituicoes = [
  {
    "NomeInstituicao": "Cruz Vermelha Porto",
    "Local": "Local",
    "DescricaoInstituicao": "A Delegação do Porto é uma das 170 Estruturas Locais da Cruz Vermelha Portuguesa."
  },
  {
    "NomeInstituicao": "Cruz Vermelha Porto",
    "Local": "Local",
    "DescricaoInstituicao": "A Delegação do Porto é uma das 170 Estruturas Locais da Cruz Vermelha Portuguesa."
  },
  {
    "NomeInstituicao": "Cruz Vermelha Porto",
    "Local": "Local",
    "DescricaoInstituicao": "A Delegação do Porto é uma das 170 Estruturas Locais da Cruz Vermelha Portuguesa."
  }
]

const arrayExemploAccoesAnunciadas = [
  {
    "NomeProjeto": "Entrega de comida",
    "NomeInstituicao": "Casa da Mãe da Joana",
    "DataVoluntariado": "18/02/2024",
    "NrPessoasInscritas": 24
  },
  {
    "NomeProjeto": "Cozinheiro/a",
    "NomeInstituicao": "Santa Casa da Misericórdia",
    "DataVoluntariado": "28/02/2024",
    "NrPessoasInscritas": 3
  },
  {
    "NomeProjeto": "Idosos",
    "NomeInstituicao": "Ajude um idoso",
    "DataVoluntariado": "17/03/2024",
    "NrPessoasInscritas": 11
  },
  {
    "NomeProjeto": "Idosos",
    "NomeInstituicao": "Ajude um idoso",
    "DataVoluntariado": "17/03/2024",
    "NrPessoasInscritas": 11
  },
  {
    "NomeProjeto": "Idosos",
    "NomeInstituicao": "Ajude um idoso",
    "DataVoluntariado": "17/03/2024",
    "NrPessoasInscritas": 11
  },
  {
    "NomeProjeto": "Idosos",
    "NomeInstituicao": "Ajude um idoso",
    "DataVoluntariado": "17/03/2024",
    "NrPessoasInscritas": 11
  }
]

export default function Home() {
  return (
    <div className="bg-white-background  h-screen w-screen ">
      <div>
        <NavBar />
      </div>
      <div className="flex gap-24 pt-6 pl-6 items-center">
        <h1 className="text-black text-base font-medium">Organizações em destaque</h1>
        <h2 className="text-gray-text text-sm">Ver mais</h2>
      </div>
      <div className="flex pt-6 pl-6 gap-6 overflow-x-auto whitespace-nowrap">
        {arrayExemploInstituicoes.map((elemento, index) =>
          <motion.div
            key={index}

            initial={{
              x: -100, // Fora da tela à esquerda
              opacity: 0
            }}
            animate={{
              x: 0, // Move para a posição inicial
              opacity: 1
            }}
            transition={{
              delay: index * 0.15
            }}
          >
            <div className=" flex flex-col bg-blue-primary  w-56 h-64 rounded-lg p-4 pl-5 gap-5">
              <div className="text-white-background text-2xl whitespace-normal">{elemento.NomeInstituicao}</div>
              <div className="bg-gray-text w-14 text-white rounded-lg text-center text-xs">{elemento.Local}</div>
              <div className="text-white text-base whitespace-normal">{elemento.DescricaoInstituicao}</div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex gap-36 pt-6  pl-6 items-center">
        <h1 className="text-black text-base font-medium">Ações anunciadas</h1>
        <h2 className="text-gray-text text-sm">Ver mais</h2>
      </div>
      <div className="flex flex-col pt-4 gap-2.5 pl-6 pr-6 bg-white-background overflow-y-auto h-screen">
        {arrayExemploAccoesAnunciadas.map((projeto, index) =>
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
          ><div>
              <div className="text-blue-primary text-base font-medium">{projeto.NomeProjeto}</div>
              <div className="text-orange-primary text-sm">{projeto.NomeInstituicao}</div>
              <div className="flex gap-2.5">
                <div className="text-gray-text text-sm">{projeto.DataVoluntariado}</div>
                <div className="text-gray-text text-sm">{projeto.NrPessoasInscritas}</div>
              </div>
              <hr></hr>
            </div>
          </motion.div>
        )}
      </div>
      <div>
        <Footer/>
      </div>
    </div >
  );
}
