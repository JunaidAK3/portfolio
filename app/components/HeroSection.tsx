
import React from "react";
import Image from "next/image";

import HireME from '../buttons/hireMEButton';
import DownloadCV from "../buttons/downloadCVButton";
import IntroductionWithAnimation, { short_Intro } from "../animation/Hero(Short_Intro)";



export default function HeroSection() {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                    <IntroductionWithAnimation />
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        {short_Intro} 
                    </p>
                    <div>
                        <HireME />
                        <DownloadCV />
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
                        <Image 
                        src="/image/hero.png" 
                        alt="Londing" 
                        className="absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300} 
                        height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}