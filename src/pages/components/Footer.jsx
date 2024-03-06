const { default: Link } = require("next/link")
const { HomeIcon, NoteIcon, UserIcon, HandsIcon } = require("./icons/icons")
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";


function Footer() {
    const router = useRouter();
    const [ activeButton, setActiveButton ] = useState("");

       useEffect(() => {
        const handleRouteChange = () => {
            const path = router.pathname;
            if (path === "/") {
                setActiveButton("home");
            } else if (path === "/institution/main") {
                setActiveButton("institution");
            } else if (path === "/project/main") {
                setActiveButton("project");
            } else if (path === "/login_pages/profile") {
                setActiveButton("profile");
            }
        };

        handleRouteChange();

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.pathname]);

    return (
        <div className="fixed bottom-0 w-full flex  justify-between px-12  items-center bg-blue-primary h-20  text-white">
            <Link href="/" onClick={() => setActiveButton("home")}><HomeIcon activeButton={activeButton}/></Link>
            <Link href="/institution/main" onClick={() => setActiveButton("institution")}><NoteIcon activeButton={activeButton}/></Link>
            <Link href="/project/main" onClick={() => setActiveButton("project")}><MdOutlineVolunteerActivism className="h-7 w-7" color={activeButton === "project"? "#936352": "white"}/></Link>
            <Link href="/login_pages/profile" onClick={() => setActiveButton("profile")}><UserIcon activeButton={activeButton}/></Link>    
        </div>
    )
}

module.exports = { Footer }