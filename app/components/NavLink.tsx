import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
}

export default function NavLink({ href, title }:NavLinkProps){
    return(
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white">
            {title}
        </Link>
    )
}

// Navbar menu options objects



// interface NavOptMenu {
//     title: string
//     path: string
// }

// const NavOptions:NavOptMenu[] = [
//     {
//         title: "About",
//         path:"#About"
//     },
//     {
//         title: "Projects",
//         path:"#Projects"
//     },
//     {
//         title: "Contact",
//         path:"#Contact"
//     }
// ]

