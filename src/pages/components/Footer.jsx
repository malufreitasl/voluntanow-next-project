const { HomeIcon, NoteIcon, UserIcon } = require("./icons/icons")


function Footer() {
    return (
        <div className="fixed bottom-0 inset-x-0 z-50 flex px-12 justify-center items-center gap-32 bg-blue-primary h-20 w-full text-white">
            <HomeIcon />
            <NoteIcon />
            <UserIcon />
        </div>
    )
}

module.exports = { Footer }