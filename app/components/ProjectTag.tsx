import React from "react";

type ProjectTagProps = {
    name: string
    onClick: (tagName: string) => void
    isSelected: boolean
  }

export default function ProjectTag({name, onClick, isSelected}:ProjectTagProps){
    const buttonStyles = isSelected 
    ?"text-white border-secondary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"    
    return(
        <button 
        className={`${buttonStyles} rounded-full border-2 hover:text-white px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}>
            {name}
        </button>
    )

}