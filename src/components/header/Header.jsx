import React, { useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderBottom from './HeaderBottom'
import { IoMenu } from "react-icons/io5";
import MegaMenu from './MegaMenu';

export default function Header() {
    const [hamburger, setHamburger] = useState(false)
    const [megaMenu, setMegaMenu] = useState(false)
    const handleClick = () => {
        setHamburger(hamburger ? false : true)
    }
    return (
        <header className={`${megaMenu ? 'fixed top-0 left-0 z-50 w-full' : 'relative'}`}>
            <HeaderTop hamburger={hamburger} />
            <HeaderMain setMegaMenu={setMegaMenu} />
            <HeaderBottom />
            {megaMenu && <MegaMenu setMegaMenu={setMegaMenu} />}
            <IoMenu onClick={handleClick} className='block sm:hidden absolute top-4 right-5 text-white cursor-pointer' />
        </header>
    )
}
