import React from 'react'
import Avatar from "../public/Avatar.png"
import Image from 'next/image'

const CardHero = () => {
    return (
        <div className='w-9/12 h-[400px] flex flex-col justify-between items-center font-inter py-8 text-white'>
            <h2 className='font-bold text-5xl'>Hi, I am <span className='text-yellow-300 underline'>WakhidDev</span></h2>
            <h1 className='font-bold text-4xl p-4'>Creative designer & front-end developer</h1>
            <p className='font-regular text-2xl pt-6'>I design and code beautifully simple things, and I love what I do.</p>
            <Image src={Avatar} alt="avatar" width={180} height={200}></Image>
        </div>
    )
}


export default CardHero
