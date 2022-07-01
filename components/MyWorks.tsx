import React from 'react'
import Image from 'next/image'
import Bda from "../public/myworks/bda.png"
import Porto from "../public/myworks/porto.png"
import Figma from "../public/myworks/figma.png"
export const MyWorks = () => {
    return (
        <div className='w-full h-auto text-center py-8 mt-8 bg-background'>
            <p className='font-bold text-3xl text-yellow-300 '>My Works</p>
            <p className='font-bold text-2xl text-white mt-2'>Featured Works</p>
            <div className='w-full h-full flex justify-between items-center flex-wrap my-4'>
                <div className='w-96 h-96 bg-meter border-2 p-3 text-left border-yellow-300 rounded-md'>
                    <Image src={Bda} width={360} height={280}></Image>
                    <p className='font-medium text-sm text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit deleniti, consequatur eligendi quasi</p>
                </div>
                <div className='w-96 h-96 bg-meter border-2 p-3 text-left border-yellow-300 rounded-md'>
                    <Image src={Porto} width={360} height={280}></Image>
                    <p className='font-medium text-sm text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit deleniti, consequatur eligendi quasi</p>
                </div>
                <div className='w-96 h-96 bg-meter border-2 p-3 text-left border-yellow-300 rounded-md'>
                    <Image src={Figma} width={360} height={280}></Image>
                    <p className='font-medium text-sm text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit deleniti, consequatur eligendi quasi</p>
                </div>
            </div>
        </div>
    )
}

// export default MyWorks
