import React from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2"; // <HiOutlineCodeBracket />
import { FiEye } from "react-icons/fi"; // <FiEye />
import Link from "next/link";

type ProjectCardProps = {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    PreviewUrl: string;
}


export default function ProjectCard ({ imgUrl, title, description, gitUrl, PreviewUrl }:ProjectCardProps) {
    return (
        <section>
            <div 
                className="h-52 md:h-72 rounded-t-xl relative group no-repeat center center" 
                style={{background:`url(${imgUrl})`, backgroundSize:"cover"}}>
                    <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                        <Link 
                            href={gitUrl} 
                            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">

                                <HiOutlineCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>

                        </Link>  
                        <Link 
                            href={PreviewUrl} 
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                                
                                <FiEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>

                        </Link>  
                    </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[ADB7BE]">{description}</p>
            </div>
            
        </section>
    );
}