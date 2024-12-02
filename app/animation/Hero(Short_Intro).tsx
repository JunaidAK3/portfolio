"use client";

// hero introduction 

import { TypeAnimation } from 'react-type-animation';

export {short_Intro, about_detail}

const hello = "Hello I'am"
const short_Intro = "Hi, I'm a passionate and dedicated Full Stack Developer with a strong foundation in creating dynamic and user-friendly web applications."
const about_detail = `Hi, I'm Elizabeth, a passionate and dedicated Full Stack  Developer with a strong foundation in creating dynamic and user-friendly web applications. With expertise in both frontend and backend technologies, I specialize in building scalable, efficient, and visually engaging digital solutions.I have hands-on experience with modern frameworks like React.js, Next.`

export default function IntroductionWithAnimation() {
    return (
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                {hello}
            </span> 
            <br></br>
            <TypeAnimation
                sequence={[
                    'Junaid A.K',
                    1000,
                    'Web Developer',
                    1000,
                    'Mobile Developer',
                    1000,
                    'UI/UX Designer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
    </h1>
    )
}
