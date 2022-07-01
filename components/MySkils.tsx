import React from 'react'
import Image from 'next/image'
import Html from "../public/skills/html.svg"
import Css from "../public/skills/css.svg"
import JavaScript from "../public/skills/javascript.svg"
import Figma from "../public/skills/figma.svg"
import Github from "../public/skills/github.svg"
import Gitlab from "../public/skills/gitlab.svg"
import Tailwind from "../public/skills/tailwind.svg"
import Rect from "../public/skills/react.svg"
import Nexts from "../public/skills/next.svg"

const MySkils = () => {

    interface skils {
        src: string,
        width: number,
        height: number
    }

    const icons: skils[] = [Html, Css, JavaScript, Rect, Nexts, Figma, Github, Gitlab, Tailwind]
    return (
        <div className='w-full h-40 flex justify-evenly my-20'>
            <div className='w-1/2 h-full flex flex-col justify-between items-start'>
                <p className='font-semibold text-xl text-yellow-300 p-2 bg-gray-600 rounded-xl '>my skils</p>
                <p className='font-bold text-3xl text-white mt-2'>What My Programming
                    Skills Included?</p>
                <p className='font-normal text-base text-gray-400 mt-4'>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                <div className="w-24 h-8 md:h-10 md:w-32 mt-4">
                    <button className="w-full h-full text-center bg-yellow-300 font-bold rounded-2xl text-base md:text-lg">Hire Me</button>
                </div>
            </div>
            <div className='w-4/12 h-full flex flex-col flex-wrap justify-evenly'>
                <div className='w-full flex justify-between'>
                    {icons.map((val, index) => (
                        <>
                            {index < 4 ? (<Image src={val.src} width={30} height={30}></Image>) : (null)}
                            {/* {index > 5 ? (<Image src={val.src} width={30} height={30}></Image>) : (null)} */}

                        </>
                    ))}
                </div>
                <div className='w-full flex justify-between'>
                    {icons.map((val, index) => (
                        <>
                            {/* {index < 5 ? (<Image src={val.src} width={30} height={30}></Image>) : (null)} */}
                            {index > 4 ? (<Image src={val.src} width={30} height={30}></Image>) : (null)}

                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MySkils