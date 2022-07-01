import { type } from 'os'
import React from 'react'

const Footer = () => {

    interface link {
        title: string
        alamat: string
    }

    interface fottertypes {
        // title: string
        media: link
        sosial: link
    }

    let menu: fottertypes[] = [
        {
            // title: "Wakhid Hidayatur R",
            // links: {
            //     title: "banyai",
            //     alamat: "/kebon jagung"
            // },
            media: {

                title: "Home",
                alamat: "/home"

            },
            sosial: {
                title: "Instagram",
                alamat: "/instagram"
            }
        },
        {
            media: {
                title: "About",
                alamat: "/about"

            },
            sosial: {
                title: "Linkedin",
                alamat: "/linkedin"
            }
        },
        {
            media: {
                title: "Skils",
                alamat: "/skils"

            },
            sosial: {
                title: "Twitter",
                alamat: "/twitter"
            }
        },
        {
            media: {
                title: "Portofolio",
                alamat: "/portofolio"

            },
            sosial: {
                title: "Facebook",
                alamat: "/fecebook"
            }
        },
        {
            media: {
                title: "Contac",
                alamat: "/contac"

            },
            sosial: {
                title: "Github",
                alamat: "/github"
            }
        },
    ]




    return (
        <div className='w-full h-60 flex justify-between bg-gray-900'>
            <div className='w-3/12 h-full flex flex-col items-start p-3'>
                <p className='font-bold text-xl text-yellow-300'>Wakhid Hidayatur R</p>
                <p className='font-semibold text-white'>Creative designer & front-end developer</p>
            </div>
            <div className='w-3/12 h-full flex flex-col items-start p-3'>
                <p className='font-bold text-xl text-yellow-300'>Useful Links</p>
                {menu.map((value) => (
                    <p className='font-medium text-sm text-white mt-2'>{value.media.title}</p>
                ))}
            </div>
            <div className='w-3/12 h-full flex flex-col items-start p-3'>
                <p className='font-bold text-xl text-yellow-300'>Social Media</p>
                {menu.map((value) => (
                    <p className='font-medium text-sm text-white mt-2'>{value.sosial.title}</p>
                ))}
            </div>
            <div>
                <p className='font-bold text-xl p-3 text-yellow-300'>Newslatter</p>
                <p className='font-medium text-sm p-3 text-white'>Enter your email and get notified about news, of.</p>
            </div>
        </div>
    )
}

export default Footer