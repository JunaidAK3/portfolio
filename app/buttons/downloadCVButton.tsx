"use client"

export default function DownloadCV() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/PDF/JunaidCV.pdf'
        link.download = 'JunaidCV.pdf'; 
        link.click(); 
      };

    return (

        <button
            onClick={handleDownload}
            className="p-1 mt-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-700 via-white-500 to-secondary-500 hover:bg-slate-800 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">    
                    Download CV
                </span>
        </button>
    
    )
}