import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { isUserLoggedIn } from "../utils/globalFunctions";
import GoBackButton from "../components/GoBackButton";

export default function LogIn() {
    const router = useRouter();
    const isLoggedIn = isUserLoggedIn();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/login_pages/profile');
        }
    }, [isLoggedIn]);

    const [userInfo, setUserInfo] = useState({});

    const fetchLogin = async () => {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            if (!response.ok) {
                setErrorMessage("Dados inválidos. Tente novamente");
                return;
            }
            const body = await response.json();
            localStorage.setItem("token", body.token);
            router.push('/login_pages/profile');
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setErrorMessage('Failed to fetch data');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className="mx-6">
                <div className="mt-16 flex flex-col items-center justify-center gap-2">
                    <div className="mx-4 self-start"><GoBackButton/></div>
                    <Image src="/images/logo.png" width="280" height="280" />
                </div>
                
                <div className="flex flex-col mx-6 pt-4 pb-36">
                    <p className="text-sm">Nome de usuário</p>
                    <input type="text" name="username" id="username" className="h-12 px-4 bg-gray-terciary shadow-inner rounded-lg" onChange={ handleInputChange }/>
                    <p className="text-sm mt-2">Palavra Passe</p>
                    <input type="password" name="password" id="password" className=" h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg" onChange={ handleInputChange }/>
                    {errorMessage && (
                        <div>
                            <p className="text-gray-text pt-4 text-center">{errorMessage}</p>
                        </div>
                    )}
                    <button onClick={ fetchLogin } className="mt-8 h-12 bg-orange-primary text-white shadow-inner rounded-lg">
                        Login
                    </button>
                    <Link href="/login_pages/filter-type">
                        <button className="mt-2 h-12 w-full bg-cartsFilter rounded-lg">Criar conta</button>
                    </Link>
                </div>
                
            </div>
        </>
    )
}
