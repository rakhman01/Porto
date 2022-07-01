import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HamburgerMenu from './HamburgerMenu'
// import { Contaact } from '../routes/Contaact'


const HeaderMenu = (props: { menu: any, open: boolean }) => {
    // const [linkNav, setLinkNav] = React.useState<string>("")
    const [close, setClose] = useState<boolean>(props.open)
    const [open, setOpen] = useState<boolean>(false)
    const loading = false


    return (
        <div onClick={() => setClose(!props.open)} className={`${props.open == true ? ("flex-col absolute py-6") : ("hidden sm:flex")} w-full sm:relative h-screen sm:h-20 sm:flex-row  flex justify-between items-center px-2 bg-background`}>
            <div className='w-full sm:w-7/12 h-3/4 flex flex-col sm:flex-row sm:justify-between justify-around  items-center font-semibold text-lg text-white cursor-pointer'>

                <Link href={`/`}>
                    <p className='hover:text-yellow-300 '>{props.menu.home}</p>
                </Link>
                <a href="#about">
                    <p className='hover:text-yellow-300 '>{props.menu.about}</p>
                </a>
                <Link href={`/ninja/${props.menu.protofolio}`}>
                    <p className='hover:text-yellow-300 '>{props.menu.protofolio}</p>
                </Link>
                <Link href={`/ninja/${props.menu.contact}`}>
                    <p className='hover:text-yellow-300 '>{props.menu.contact}</p>
                </Link>

            </div>
            <div className="w-24 h-8 md:h-10 md:w-32">
                <button className="w-full h-full text-center bg-yellow-300 font-bold rounded-2xl text-base md:text-lg">Contac Me</button>
                {/* onClick={() => { handleOpen(), setOpen(!open) }}  */}
            </div>
        </div >
    )
}

export default HeaderMenu