import React from "react";

type TabButtonProp = {
    active: boolean 
    selectTab: () => void
    children: React.ReactNode;
}

export default function TabButton ({active, selectTab, children}:TabButtonProp) {

    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
}