import React from 'react'
import { Link } from 'react-router-dom'
import logoBlack from '../assets/logoBlack.png'
import userIcon from '../assets/userIcon.png'


function Navbar() {
    return (
        <nav className='p-3 flex bg-white justify-between items-center'>
            <Link href="/">
                <img src={logoBlack} className='object-cover max-w-12 max-h-12' alt="logo" />
            </Link>

            <div id="nav-menu" className=' hidden md:flex justify-center font-sans font-semibold items-center gap-3'>
                <Link to="">Packages</Link>
                <Link to="">Packages</Link>
                <Link to="">Packages</Link>
                <Link to="">Packages</Link>
                <Link to="">Packages</Link>
            </div>
            <div id="login" className='flex justify-between items-center gap-1 px-4 py-2 border border-blue-400 rounded-2xl hover:border-blue-600'>
                <img src={userIcon} alt="User" className='max-w-6' />
                <Link to="/login">Login</Link>
            </div>

            <button className='p-2 md:hidden'>
  
            </button>

        </nav>
    )
}

export default Navbar
