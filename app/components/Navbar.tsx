"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { MdOutlineStorage } from "react-icons/md"; // <MdOutlineStorage />
import { IoMdClose } from "react-icons/io";  // <IoMdClose />
import MenuOverlay from "./MenuOverlay";


// Navbar menu options objects
type NavOptMenu = {
    title: string
    path: string
}

const NavOptions:NavOptMenu[] = [
    {
        title: "Short Intro",
        path:"#Intro"
    },
    {
        title: "About",
        path:"#About"
    },
    {
        title: "Projects",
        path:"#Projects"
    },
]

export default function Navber() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/Home"} className="text-2xl md:text-5xl text-white font-semibold">
                    Portfolio
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                        onClick={() => setNavbarOpen(true)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <MdOutlineStorage className="h-5 w-5"/>
                        </button>
                    ) : (
                        <button
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <IoMdClose className="h-5 w-5"/>
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            NavOptions.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }                        
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavOptions} /> : null }
        </nav>
    )
}