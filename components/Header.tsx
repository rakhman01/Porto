import * as React from "react";
import Image from 'next/image'
import Logo from "../public/logo.svg"
import HeaderMenu from './HeaderMenu'
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {

    const [menu, setMenu] = React.useState<string[]>(["Home", "About", "Portofolio", "Contac"])
    const [open, setOpen] = React.useState<boolean>(false)

    console.log(open, "shine")

    return (
        <header className="w-full h-full flex sm:flex-row flex-col ">
            <div className='w-full sm:w-5/12 h-20 flex justify-between items-center px-4 bg-background'>
                <Image src={Logo} alt="logo" width={60} height={60} />
                <button onClick={() => setOpen(!open)} className="sm:hidden z-40 cursor-pointero">
                    <HamburgerMenu />
                </button>
            </div>
            <HeaderMenu menu={menu} open={open}></HeaderMenu>
        </header>
    )
}

export default Header