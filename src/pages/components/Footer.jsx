const {HomeIcon, NoteIcon, UserIcon } = require("./icons/icons")


function Footer (){
    return (
<div>
    <div className=" flex px-12 justify-center items-center gap-32 bg-blue-primary h-20 w-full text-white">
        <HomeIcon/>
        <NoteIcon/>
        <UserIcon/>
    </div>
</div>
    )
}

module.exports = {Footer}