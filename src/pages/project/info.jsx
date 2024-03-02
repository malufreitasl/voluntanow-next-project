import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



const raleway = Raleway({ subsets: ["latin"] });
// const { findAllProjects } = require("../data/project");
// const {loadProjects} = require("../services/project")

// async function loadProjects() {
//     const allProjects = await findAllProjects();
//     return allProjects
// }


// export default infoProject(){
//     return (
//         <div>
//         </div>
//     )
// }
// constInstituições = [
//     {
//         "_id": "65ddd443545c41d546d159eb",
//         "username": "ass_salvador",
//         "password": "ass-salvador-221!@",
//         "name": "Associação Salvador",
//         "description": "A Associação Salvador atua na área da deficiência motora e foi fundada…",
//         "website_link": "associacaosalvador.com",
//         "email": "info@associacaosalvador.com",
//         "phone": "211165860",
//         "local": "Porto"
//     },
// ]

// const arrayExemploOneProject = [
//     {
//         "_id": "65df078309e82e8172fc387a",
//         "institution_id": "65ddd443545c41d546d159eb",
//         "name": "Coleta de lixo",
//         "description": "blablabla",
//         "hour": "16:00",
//         "date": "31/01/2024",
//         "min_duration": 1440,
//         "address": "Rua das flores, 88",
//         "rating": 5
//     },
//     // {
//     "_id": "65df078309e82e8172fc387b",
//     "institution_id": "65ddd443545c41d546d159ec",
//     "name": "Sorte",
//     "description": "blablabla",
//     "hour": "16:00",
//     "date": "31/01/2024",
//     "min_duration": 1440,
//     "address": "Rua das flores, 88",
//     "rating": 5
// },
// {
//     "_id": "65df078309e82e8172fc387c",
//     "institution_id": "65ddd443545c41d546d159ed",
//     "name": "Vivenda",
//     "description": "blablabla",
//     "hour": "16:00",
//     "date": "31/01/2024",
//     "min_duration": 1440,
//     "address": "Rua das flores, 88",
//     "rating": 5
// },
// {
//     "_id": "65df078309e82e8172fc387d",
//     "institution_id": "65ddd443545c41d546d159ee",
//     "name": "Arco-Íris",
//     "description": "blablabla",
//     "hour": "16:00",
//     "date": "31/01/2024",
//     "min_duration": 1440,
//     "address": "Rua das flores, 88",
//     "rating": 5
// },
// {
//     "_id": "65df078309e82e8172fc387e",
//     "institution_id": "65ddd443545c41d546d159ef",
//     "name": "Dança.co",
//     "description": "blablabla",
//     "hour": "16:00",
//     "date": "31/01/2024",
//     "min_duration": 1440,
//     "address": "Rua das flores, 88",
//     "rating": 5
// },
// {
//     "_id": "65df078309e82e8172fc387f",
//     "institution_id": "65ddd443545c41d546d159eg",
//     "name": "Lacrei",
//     "description": "blablabla",
//     "hour": "16:00",
//     "date": "31/01/2024",
//     "min_duration": 1440,
//     "address": "Rua das flores, 88",
//     "rating": 5
// },
// {
//     "_id": "65df078309e82e8172fc387g",
//     "institution_id": "65ddd443545c41d546d159eh",
//     "name": "Casa da Joana",
//     "description": "blablabla",
//     "hour": "16:00",
//     "date": "31/01/2024",
//     "min_duration": 1440,
//     "address": "Rua das flores, 88",
//     "rating": 5
// }
//]

// export default function InfoProjects(){
//     return (
//         <>
//         </>
//     )
// }


export default function ProjectsPage() {

    const arrayOneProject = [
        {
            "_id": "65df078309e82e8172fc387a",
            "institution_id": "65ddd443545c41d546d159eb",
            "name": "Coleta de lixo",
            "description": "blablabla",
            "hour": "16:00",
            "date": "31/01/2024",
            "min_duration": 1440,
            "address": "Rua das flores, 88",
            "rating": 5,
            "inscritas": 2
        },]


    const arrayInstituições = [
        {
            "_id": "65ddd443545c41d546d159eb",
            "username": "ass_salvador",
            "password": "ass-salvador-221!@",
            "name": "Associação Salvador",
            "description": "There are many variations of passages of Lorem Ipsum but the mAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making.There are many variations of passages of Lorem Ipsum available, but the mAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making.",
            "website_link": "associacaosalvador.com",
            "email": "info@associacaosalvador.com",
            "phone": "211165860",
            "local": "Porto"
        },
    ]




    return (
        <>
            <div className={`${raleway.className}`}>
                <NavBar />

                <div className="flex flex-col gap-6 px-6 pt-64">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-semibold text-black">{arrayOneProject[0].name}</div>
                        <div className="text-xl text-orange-primary">{arrayInstituições[0].name}</div>
                        <div className="flex gap-4 pt-1">
                            <div className=" text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{arrayOneProject[0].date}</div>
                            <div className=" text-xs py-1 px-2.5 rounded-full bg-gray-text text-white">{arrayOneProject[0].inscritas} pessoas já inscritas</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-black text-xl font-medium">Descrição da Atividade</h1>
                        <div className="text-base text-black text-justify overflow-auto">{arrayInstituições[0].description}</div>
                        <div className="flex  justify-center ">
                            <button className=" bg-orange-primary text-white w-44 h-10 rounded-lg items-center justify-center hover:bg-blue-primary">Quero me inscrever!</button>
                        </div>
                    </div>

                </div>

            <div className="h-40"></div>

                <Footer />
            </div>
        </>
    )
}