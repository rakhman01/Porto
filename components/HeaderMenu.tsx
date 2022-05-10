import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'


const HeaderMenu = (props: { menu: string[], open: boolean }) => {
    const [linkNav, setLinkNav] = React.useState<string>("")
    const [close, setClose] = useState<boolean>(props.open)
    const loading = false

    useEffect(() => {
        if (loading === false) { console.log("anda malas belajar") }
    }, [close])

    const Linked = `/${linkNav}`

    console.log(close, "open celeng")
    console.log(props.open, "open celeng qq")

    return (
        <div onClick={() => setClose(!props.open)} className={`${props.open == true ? ("flex-col absolute py-6") : ("hidden sm:flex")} w-full sm:relative h-screen sm:h-20 sm:flex-row  flex justify-between items-center px-2 bg-background`}>
            {/* {console.log(!close)} */}
            <div className='w-full sm:w-7/12 h-3/4 flex flex-col sm:flex-row sm:justify-between justify-around  items-center font-semibold text-lg text-white cursor-pointer'>

                {
                    props.menu.map((val: string, index: number) => (

                        <Link href={"/"}>
                            <p className='hover:text-yellow-300 ' onClick={() => setLinkNav(val)}>{val}</p>
                        </Link>
                    ))
                }
            </div>
            <div className="w-24 h-8 md:h-10 md:w-32">
                <button className="w-full h-full text-center bg-yellow-300 font-bold rounded-2xl text-base md:text-lg">Contac Me</button>
            </div>
        </div>
    )
}

export default HeaderMenu