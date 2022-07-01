import * as React from "react";
import Image from 'next/image'
import Logo from "../public/logo.svg"
import HeaderMenu from './HeaderMenu'
import HamburgerMenu from "./HamburgerMenu";
// import { Contaact } from "../routes/Contaact";

const Header = (props: any) => {
    interface menu {
        home: string,
        about: string,
        protofolio: string,
        contact: string
    }
    const [menu, setMenu] = React.useState<menu>({ home: "Home", about: "About", protofolio: "Portofolio", contact: "Contact" })
    const [open, setOpen] = React.useState<boolean>(false)


    return (
        <header className="w-full h-full flex sm:flex-row flex-col ">
            {/* <Contaact /> */}
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