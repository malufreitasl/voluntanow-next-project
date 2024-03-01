import { NavBar } from "../components/NavBar";
import { motion } from "framer-motion"
import { Footer } from "../components/Footer";
import Link from 'next/link';
import { useEffect, useState } from "react";


export default function InstitutionsPage() {
    const [topInstitutions, setTopInstitutions] = useState([]);
  
     // Fetch para obter dados das instituições em destaque
     const fetchTopInstitutions = async () => {
      try {
        const response = await fetch('./api/application/top-institutions');
        if (!response.ok) {
          throw new Error('Fail to fetch top institutions data');
        }
        const data = await response.json();
        setTopInstitutions(data);
      } catch (error) {
        console.error('Fail to fetch top institutions data:', error);
      }
    };
  
  
    const [organizations, setOrganizations] = useState([
      {
        name: 'Santa Casa da Misericórida',
        address: 'R. de Joaquim de Vasconcelos 79. 4050-311 Porto',
        actions: 15,
      },
      {
        name: 'CROA - Centro de Recolha Oficial de A...',
        address: 'Tv Aguas Ferreas de Campanha 463. Porto',
        actions: 3,
      },
      {
        name: 'VO.U. - Associação de Voluntariado Un...',
        address: 'R. Jorge de Viterbo Ferreira nº228 4050-313 Porto',
        actions: 28,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Nacional De Apoio Crianç...',
        address: 'R. de Alexandre Herculano 101, 4000-053 Porto',
        actions: 8,
      },
      {
        name: 'Santa Casa da Misericórida',
        address: 'R. de Joaquim de Vasconcelos 79. 4050-311 Porto',
        actions: 15,
      },
      {
        name: 'CROA - Centro de Recolha Oficial de A...',
        address: 'Tv Aguas Ferreas de Campanha 463. Porto',
        actions: 3,
      },
      {
        name: 'VO.U. - Associação de Voluntariado Un...',
        address: 'R. Jorge de Viterbo Ferreira nº228 4050-313 Porto',
        actions: 28,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      },
      {
        name: 'Associação Encontrar+se',
        address: 'R. Prof Melo Adrião 106, 4100-340 Porto',
        actions: 1,
      }
    ]);
  
    useEffect(() => {
      fetchTopInstitutions();
    }, []);
  

    return (
        <div className="bg-white-background  h-screen w-screen">
          <div>
            <NavBar />
          </div>
          <div className="flex gap-36 pt-6  pl-6 items-center">
            <h1 className="text-black text-xl font-medium">Organizações em destaque</h1>
          </div>
          <div className="flex flex-col pt-4 gap-2.5 pl-6 pr-6 pb-32 100-vh bg-white-background">
          {organizations.map((organization) => 
             <div className="border-b border-gray-text pb-2">
                  <div className="text-blue-primary text-base font-medium">{organization.name}</div>
                  <div className="text-orange-primary text-sm">{organization.address}</div>
                  <div className="flex gap-2.5">
                    <div className="text-gray-text text-sm">{organization.actions} ações publicadas</div>
                  </div>
                </div>
            )}
          </div>
          <div>
            <Footer/>
          </div>
        </div >
      );
    }