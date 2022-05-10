import React from 'react'
import Image from 'next/image'
import Experience from "../public/experience.png"
import Project from "../public/projects.png"
import Client from "../public/clients.png"
import Arrow from "../public/arrow.svg"

const Meter = () => {

    console.log(Arrow)

    interface values {
        url: any | string,
        value: string,
        title: string,
        arrow: any | string
    }


    const value: values[] = [
        {
            url: Experience,
            value: "5+",
            title: "Years of Experience",
            arrow: Arrow
        },
        {
            url: Project,
            value: "100+",
            title: "Years of Experience",
            arrow: Arrow
        },
        {
            url: Client,
            value: "50+",
            title: "Years of Experience",
            arrow: Arrow
        },
    ]

    return (
        <div className='w-full h-auto flex flex-wrap justify-around items-center'>
            {value.map((val) => (
                <>
                    {console.log(val.url.src, "ini adalah ")}
                    <div className='w-80 h-24 flex justify-between items-center p-4 rounded-md bg-meter'>
                        <Image src={val.url.src} alt="icon" width={40} height={40} ></Image>
                        <div className='flex flex-col justify-around items-center'>
                            <p className='text-2xl text-yellow-300'>{val.value}</p>
                            <p className='text-base text-white'>{val.title}</p>
                        </div>
                        <Image src={val.arrow.src} alt="more" width={20} height={20}></Image>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Meter