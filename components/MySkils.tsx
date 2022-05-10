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
    console.log(icons[0])

    return (
        <div className='w-full h-40 flex justify-evenly mt-8'>
            <div className='w-1/2 h-full flex flex-col justify-between items-start'>
                <p>my skils</p>
                <p>What My Programming
                    Skills Included?</p>
                <p>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                <button>Hire Me</button>
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