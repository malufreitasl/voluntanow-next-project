const { default: Link } = require("next/link")
const { HomeIcon, NoteIcon, UserIcon, HandsIcon } = require("./icons/icons")


function Footer() {
    return (
        <div className="fixed bottom-0 w-full flex  justify-between px-12  items-center bg-blue-primary h-20  text-white">
            <Link href="/"><HomeIcon /></Link>
            <Link href="/institution/main"><NoteIcon /></Link>
            <Link href="/project/main"><HandsIcon/></Link>
            <Link href="/login_pages/profile"><UserIcon /></Link>    
        </div>
    )
}

module.exports = { Footer }