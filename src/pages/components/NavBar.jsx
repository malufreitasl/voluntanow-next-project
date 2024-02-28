const { Notification, MenuIcon, FilterIcon, SearchIcon } = require("./icons/icons");
import Image from "next/image";


function NavBar() {
    return (
        <div>
            <div className="flex items-center">
                <div className="pt-14 pl-6 ">
                    <Image src="/images/logo.png" width="80" height="80" />
                </div>
                <div className="flex flex-grow justify-end pt-20 pr-9 gap-7 items-center">
                    <Notification />
                    <MenuIcon />
                </div>
            </div>
            <div className="flex justify-center items-center pt-4 gap-2 pr-6 pl-6">
                <div className="flex relative items-center">
                    <SearchIcon className=" absolute" />
                    <input type="search" name="search" id="search" placeholder="Pesquisa" className="w-72 h-12 bg-gray-terciary shadow-inner rounded-lg pl-6" />
                </div>
                <button> <FilterIcon /></button>
            </div>
        </div>
    )
}

module.exports = { NavBar }