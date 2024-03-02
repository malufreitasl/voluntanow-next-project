import Link from "next/link";
import Image from "next/image";

export default function LogIn() {
    
    return (
        <>
            <div>
            <Image src="/images/logo.png" width="80" height="80" />
                PÁGINA DO LOG IN
                <Link href="../login_pages/criarconta.jsx">Criar conta</Link>
            </div>
        </>
    )
}