import React, { useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderBottom from './HeaderBottom'
import { IoMenu } from "react-icons/io5";

export default function Header() {
    const [hamburger, setHamburger] = useState(false)
    const handleClick = () => {
        setHamburger(hamburger ? false : true)
    }
    return (
        <header className='relative'>
            <HeaderTop hamburger={hamburger} />
            <HeaderMain />
            <HeaderBottom />
            <IoMenu onClick={handleClick} className='block sm:hidden absolute top-4 right-5 text-white cursor-pointer' />
        </header>
    )
}
