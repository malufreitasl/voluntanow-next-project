import { PiSpinnerGapLight } from "react-icons/pi";

export default function Loading() {
    return (
    <div className="flex items-center justify-center h-screen">
        <div className="self-center animate-spin duration-4000">
            <PiSpinnerGapLight className="h-16 w-16 text-orange-primary"/>
        </div>
    </div>
    )
}