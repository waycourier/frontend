import React from 'react'
import logoBlack from '../assets/logoBlack.png'
import userIcon from '../assets/userIcon.png'


function Navbar() {
    return (
        <nav className='p-3 flex bg-white justify-between items-center'>
            <a href="#">
                <img src={logoBlack} className='object-cover max-w-12 max-h-12' alt="logo" />
            </a>

            <div id="nav-menu" className=' hidden md:flex justify-center font-sans font-semibold items-center gap-3'>
                <a href="#">Packages</a>
                <a href="#">Packages</a>
                <a href="#">Packages</a>
                <a href="#">Packages</a>
                <a href="#">Packages</a>
            </div>
            <div id="login" className='flex justify-between items-center gap-1 px-3 py-2 border border-blue-400 rounded-2xl hover:border-blue-600'>
                <img src={userIcon} alt="User" className='max-w-6' />
                <button>Login/Signup</button>
            </div>

            <button className='p-2 md:hidden'>
  
            </button>

        </nav>
    )
}

export default Navbar
