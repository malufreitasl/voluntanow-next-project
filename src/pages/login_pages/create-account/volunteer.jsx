import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import PasswordMatch from "../confirmacaopass";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateVolunteerAccount() {
    const [credentials, setCredentials] = useState({ role: "volunteer" });
    const [availabilityCheck, setAvailabilityCheck] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const router = useRouter();

    const createUserAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/auth/signup/create-user", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            if (response.ok) {
                setErrorMessage('');
                setAvailabilityCheck(true);
                router.push("/login_pages/login")
            } 
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setErrorMessage('Failed to fetch data');
        }
    };

    const checkAvailabilityAndProceed = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            if (!credentials.username || !credentials.email) {
                setErrorMessage("Campo Obrigatório *");
            } else if (response.ok && credentials.username && credentials.email) {
                setErrorMessage('');
                setAvailabilityCheck(true);
                setInputDisabled(true);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setErrorMessage('Failed to fetch data');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className="bg-gray-50">
                <div className="pt-10 flex fixed w-full bg-gray-terciary align-center justify-center">
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>

                <div className="pt-96 bg-gray-50 px-8">
                    <form className="flex flex-col bg-gray-50">
                        <h1 className="text-2xl pt-2 text-center">Criar Conta de Voluntário</h1>
                        <p className="text-sm pt-6">Username</p>
                        <input onChange={handleInputChange} type="text" name="username" id="username" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required disabled={inputDisabled}/>
                        { !credentials.username && (
                            <div className="mx-1 mt-1 mb-b">
                                <p className="text-sm text-end text-red-warning">{errorMessage}</p>
                            </div>
                        )}
                        { errorMessage && credentials.username && errorMessage.includes("Username") && (
                            <div className="mx-1 mt-1 mb-b">
                                <p className="text-sm text-end text-red-warning">{errorMessage}</p>
                            </div>
                        )}
                        <p className="text-sm">Email</p>
                        <input onChange={handleInputChange} type="text" name="email" id="email" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required disabled={inputDisabled}/>
                        {errorMessage && credentials.email && errorMessage.includes("Email") && (
                            <div className="mx-1 mt-1 mb-b">
                                <p className="text-sm text-end text-red-warning">{errorMessage}</p>
                            </div>
                        )}
                        { !credentials.email && (
                            <div className="mx-1 mt-1 mb-b">
                                <p className="text-sm text-end text-red-warning">{errorMessage}</p>
                            </div>
                        )}
                        {!availabilityCheck && (
                            <button type="submit" onClick={checkAvailabilityAndProceed} className="mt-8 h-12 text-white bg-orange-primary rounded-lg">1 de 3 passos...</button>
                        )}
                    </form>

                    {availabilityCheck && (
                        <PasswordMatch setPasswordCheck={setPasswordCheck} passwordCheck={passwordCheck} setCredentials={setCredentials}/>
                    )}

                    {availabilityCheck && passwordCheck && (
                        <div>
                            <div className="flex flex-col">
                                <p className="text-sm">Nome do Voluntário</p>
                                <input onChange={handleInputChange} type="text" name="name" id="name" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required/>
                                <p className="text-sm mt-2">Idade</p>                                    
                                <input onChange={handleInputChange} type="number" name="age" id="age" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required/>
                                <p className="text-sm mt-2">Género</p>
                                <input onChange={handleInputChange} type="text" name="gender" id="gender" className="h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required/>
                                <p className="text-sm">Contacto telefónico</p>
                                <input onChange={handleInputChange} type="text" name="phone" id="phone" className=" h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required/>
                                <p className="text-sm mt-2">Profissão</p>
                                <input onChange={handleInputChange} type="text" name="job" id="job" className=" h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" required/>
                            </div>
                            <div className="flex justify-center mt-16">
                                <Link href="/login_pages/login">
                                    <button type="submit" onClick={createUserAccount} className="mb-32 h-12 text-white bg-orange-primary rounded-lg px-4">Criar conta!</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}