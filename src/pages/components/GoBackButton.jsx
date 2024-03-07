import { useRouter } from "next/router"
import { IoIosArrowBack } from "react-icons/io";

export default function GoBackButton() {
    const router = useRouter()
   
    return (
      <button type="button" onClick={() => router.back()}>
        <IoIosArrowBack className="w-6 h-6"/>
      </button>
    )
  }