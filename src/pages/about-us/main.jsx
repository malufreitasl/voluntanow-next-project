import { NavBar } from '../components/NavBar'
import { Footer } from "../components/Footer"
import Image from "next/image";

export default function AboutUs(){
    return(
        <>
        <NavBar/>
        <div className='pt-64 pb-24 px-6 w-full'>
            <h1 className="text-black text-2xl font-semibold mb-8">Sobre Nós</h1>
            <div className="flex flex-col items-center text-justify">
                <Image src="/images/logo.png" width="280" height="280" />
                <p>O voluntariado é a melhor recompensa.</p>
                <p>Encontre a sua causa e faça a diferença.</p>
                <button className="mt-8 h-12 w-36 bg-orange-primary text-white shadow-inner rounded-lg">
                    Sou voluntário
                </button>
                <button className="mt-8 mb-24 h-12 w-36 bg-blue-primary text-white shadow-inner rounded-lg">
                    Sou organização
                </button>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.95403 0 0 8.95403 0 20C0 31.046 8.95403 40 20 40C31.046 40 40 31.046 40 20C40 8.95403 31.046 0 20 0ZM20 34.8387C11.7992 34.8387 5.16129 28.2024 5.16129 20C5.16129 11.7992 11.7976 5.16129 20 5.16129C28.2008 5.16129 34.8387 11.7976 34.8387 20C34.8387 28.2008 28.2024 34.8387 20 34.8387ZM20 9.67742C14.2992 9.67742 9.67742 14.2992 9.67742 20C9.67742 25.7008 14.2992 30.3226 20 30.3226C25.7008 30.3226 30.3226 25.7008 30.3226 20C30.3226 14.2992 25.7008 9.67742 20 9.67742ZM20 25.1613C17.154 25.1613 14.8387 22.846 14.8387 20C14.8387 17.154 17.154 14.8387 20 14.8387C22.846 14.8387 25.1613 17.154 25.1613 20C25.1613 22.846 22.846 25.1613 20 25.1613Z" fill="black"/>
                </svg>
                <h1 className="mt-8 text-black text-2xl font-semibold">Missão</h1>
                <p className='mt-8 mb-8'>No fundo queremos um mundo melhor e para isso desenvolvemos esta aplicação, que conecta dois mundos: o do voluntário e o da organização.</p>
                <svg width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.7584 12.3195C35.9924 4.97154 28.5368 0 20 0C11.4632 0 4.00553 4.97501 0.241629 12.3202C0.0827691 12.6344 0 12.9816 0 13.3337C0 13.6858 0.0827691 14.033 0.241629 14.3472C4.00761 21.6952 11.4632 26.6667 20 26.6667C28.5368 26.6667 35.9945 21.6917 39.7584 14.3466C39.9172 14.0323 40 13.6851 40 13.333C40 12.9809 39.9172 12.6337 39.7584 12.3195ZM20 23.3334C18.0222 23.3334 16.0888 22.7469 14.4443 21.6481C12.7998 20.5493 11.5181 18.9875 10.7612 17.1602C10.0043 15.3329 9.80628 13.3223 10.1921 11.3825C10.578 9.44264 11.5304 7.6608 12.9289 6.26228C14.3274 4.86375 16.1093 3.91134 18.0491 3.52549C19.9889 3.13963 21.9996 3.33767 23.8268 4.09455C25.6541 4.85142 27.2159 6.13315 28.3147 7.77765C29.4135 9.42214 30 11.3555 30 13.3334C30.0007 14.6468 29.7424 15.9474 29.2401 17.161C28.7378 18.3745 28.0012 19.4771 27.0725 20.4059C26.1438 21.3346 25.0411 22.0712 23.8276 22.5735C22.614 23.0758 21.3134 23.334 20 23.3334ZM20 6.66668C19.405 6.675 18.8137 6.76352 18.2424 6.92987C18.7133 7.56993 18.9394 8.35758 18.8794 9.14998C18.8195 9.94238 18.4775 10.6871 17.9156 11.249C17.3537 11.8109 16.609 12.1528 15.8166 12.2128C15.0242 12.2727 14.2366 12.0467 13.5965 11.5757C13.232 12.9185 13.2978 14.3417 13.7846 15.6452C14.2714 16.9486 15.1547 18.0665 16.3101 18.8417C17.4656 19.6168 18.835 20.0101 20.2257 19.9661C21.6163 19.9222 22.9582 19.4433 24.0624 18.5968C25.1666 17.7503 25.9776 16.5788 26.3811 15.2472C26.7847 13.9157 26.7605 12.4911 26.312 11.174C25.8635 9.85694 25.0133 8.71365 23.881 7.90509C22.7487 7.09653 21.3914 6.6634 20 6.66668Z" fill="black"/>
                </svg>
                <h1 className="mt-8 text-black text-2xl font-semibold">Visão</h1>
                <p className='mt-8 mb-8'>Para alçarmos esse objetivo temos uma visão própria, a vida faz mais sentido quando é vivida de forma sóbria.<br />A simplicidade torna tudo mais belo.</p>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21H15.9987C15.9987 19.9888 16.0825 20.4544 10.6831 9.65563C9.58 7.45 6.42125 7.44563 5.31625 9.65563C-0.12875 20.5469 0.00125 20.0206 0.00125 21H0C0 23.7612 3.58187 26 8 26C12.4181 26 16 23.7612 16 21ZM8 11L12.5 20H3.5L8 11ZM39.9987 21C39.9987 19.9888 40.0825 20.4544 34.6831 9.65563C33.58 7.45 30.4212 7.44563 29.3162 9.65563C23.8713 20.5469 24.0012 20.0206 24.0012 21H24C24 23.7612 27.5819 26 32 26C36.4181 26 40 23.7612 40 21H39.9987ZM27.5 20L32 11L36.5 20H27.5ZM33 28H22V9.57812C23.4694 8.935 24.5725 7.61063 24.8994 6H33C33.5525 6 34 5.5525 34 5V3C34 2.4475 33.5525 2 33 2H23.9775C23.065 0.7925 21.6306 0 20 0C18.3694 0 16.935 0.7925 16.0225 2H7C6.4475 2 6 2.4475 6 3V5C6 5.5525 6.4475 6 7 6H15.1006C15.4275 7.61 16.53 8.935 18 9.57812V28H7C6.4475 28 6 28.4475 6 29V31C6 31.5525 6.4475 32 7 32H33C33.5525 32 34 31.5525 34 31V29C34 28.4475 33.5525 28 33 28Z" fill="black"/>
                </svg>
                <h1 className="mt-8 text-black text-2xl font-semibold">Valores</h1>
                <p className='mt-8'>Os nossos valores são a lealdade, a criatividade e sobretudo o altruísmo, acreditamos que dessa forma teremos um mundo com mais optimismo.</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}