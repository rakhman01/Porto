import React from 'react'
import Image from 'next/image'
import AboutImg from "../public/aboutme.png"

const AboutMe = () => {
    return (
        <div id='about' className='w-full h-screen flex justify-between py-4'>
            <div className='w-1/2 flex justify-center items-center'>
                <Image src={AboutImg} alt="images" width={500} height={500} />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start'>
                <p className='font-semibold text-xl text-yellow-300 p-2 bg-gray-600 rounded-xl '>Who I am</p>
                <p className='font-bold text-4xl text-white mt-2'>About Me</p>
                <p className='font-normal text-base text-gray-400 mt-4'>Hi! I’m Wakhid Hidayatur R, and I’m a designer & developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.</p>
                <div className="w-24 h-8 md:h-10 md:w-32 mt-4">
                    <button className="w-full h-full text-center bg-yellow-300 font-bold rounded-2xl text-base md:text-lg">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe