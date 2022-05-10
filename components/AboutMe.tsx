import React from 'react'
import Image from 'next/image'
import AboutImg from "../public/aboutme.png"

const AboutMe = () => {
    return (
        <div className='w-full h-screen flex justify-between py-4'>
            <div className='w-1/2 flex justify-center items-center'>
                <Image src={AboutImg} alt="images" width={500} height={500} />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start'>
                <p>Who I am</p>
                <p>About Me</p>
                <p>Hi! I’m Kartik Bansal, and I’m a designer & developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.</p>
                <button>Hire Me</button>
            </div>
        </div>
    )
}

export default AboutMe