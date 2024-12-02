import React, { useEffect } from "react";

interface PopUpProps {
    closePopUp: () => void;
  }

export default function PopUp({closePopUp}:PopUpProps){

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    },[])

    // goto gmail 
    const handleButtonClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=your-ph2797764@gmail.com', '_blank');
      };

    return(
        <>
            <div
            onClick={closePopUp}
            className="fixed inset-0 bg-gray-400 bg-opacity-90 z-50">
            </div>

            <div className="lg:w-1/3 lg:h-1/3 w-3/4 h-(2/4)/4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg z-50">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <h2><b>Term And Condition</b></h2>
                        <p className="text-[#ADB7BE]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates provident debitis quod. Sit, necessitatibus doloribus provident vero a, itaque eaque consectetur impedit quibusdam iure dolorum! Sunt a molestias accusamus!</p>
                    </div>
                    
                    <div className="flex flex-row justify-end">
                        <button 
                        className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-white border-2 border-[#ADB7BE] hover:bg-slate-200 text-black"
                        onClick={closePopUp} 
                        >
                            cancel
                        </button>
                        <button 
                        onClick={() => {
                            handleButtonClick();
                            closePopUp();
                          }}
                        className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-white-500 to-secondary-500 hover:text-white text-black"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </>
    //     <button 
    //      className="p-1 mt-3 w-full sm:w-fit rounded-full bg-gradient-to-br  from-primary-700 via-white-500 to-secondary-500 hover:bg-slate-800 text-white">
    //     <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">    
    //         Download CV
    //     </span>
    // </button>
    )
} 