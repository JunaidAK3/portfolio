"use client";

// import { useRouter } from "next/navigation";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {

  const handleExternalRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="px-6 sm:pl-3 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="pl-[40px] text-[50px] text-white">J.AK</h2>
      </div>
      <div className="m-8 text-white flex items-center justify-center gap-4 text-2xl">
        <button onClick={() => handleExternalRedirect("linkedin.com/in/junaid-ali-khan-14b6572b1")}>
          <FaLinkedin />
        </button>
        <button onClick={() => handleExternalRedirect("https://github.com/JunaidAK3")}>
          <FaGithub />
        </button>
        <button onClick={() => handleExternalRedirect("linkedin.com/in/junaid-ali-khan-14b6572b1")}>
          <FaInstagram />
        </button>
        <button onClick={() => handleExternalRedirect("linkedin.com/in/junaid-ali-khan-14b6572b1")}>
          <FaFacebookSquare />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
