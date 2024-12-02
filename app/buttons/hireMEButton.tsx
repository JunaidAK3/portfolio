"use client"

import { useState } from "react";
import PopUp from "./pop-up";

export default function HireME() {

    const [showModel, setShowModel] = useState(false)

    const closePopUp = () => setShowModel(false)

    return (
        <>
        <button 
        className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-white-500 to-secondary-500 hover:bg-slate-200 text-black"
        onClick={() => setShowModel(true)}
        >
            Hire Me
        </button>
        { showModel && <PopUp closePopUp ={closePopUp} /> }
        </>
    )
}



// export default function HireME() {
//     return (
//         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=your-ph2797764@gmail.com" target="_blank" rel="noopener noreferrer">
//             <button className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-white-500 to-secondary-500 hover:bg-slate-200 text-black">
//                 Hire Me
//             </button>
//         </a>
//     );
// }
