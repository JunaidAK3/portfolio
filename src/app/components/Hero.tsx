"use client"
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/hero.png";
import { motion } from "framer-motion";
import Image from 'next/image';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 mx-12">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-7xl"
            >
              Junaid Ali Khan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FULL STACK DEVELOPER
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="h-300 w-300 bg-slate-900 rounded-full">
                <Image
                  src={profilePic}
                  alt="Profile picture of Junaid Ali Khan" // More descriptive alt text
                  width={300} // Specify dimensions according to your design
                  height={300}
                  placeholder="blur" // Optional: adds a blur placeholder
                  quality={100} // Optional: for higher quality images
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
