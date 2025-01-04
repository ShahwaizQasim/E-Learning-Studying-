import React from 'react'
import Logo from '../assets/Group 112.png'

function Navbar() {
    return (
        <div className="container-fluid w-full h-32 bg-[#49bbbd] border-2 border-[#000]">
            <nav className='flex justify-between items-center'>
                <div className="nav-right relative left-[121px] top-[15px]">
                    <img src={Logo} alt="" className='h-18 w-24 rounded-[6px]' />
                </div>
                <div className="nav-left flex relative right-[121px] top-[10px]">
                    <ul className='flex gap-10 text-white relative top-[12px] right-[100px]'>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Us</li>
                    </ul>
                    <button className='bg-white text-black font-semibold w-[120px] h-[40px] 
                    rounded-[80px] outline-none relative right-[45px] top-[4px]'>
                        Login
                    </button>
                    <button className='bg-white text-black font-semibold w-[120px] h-[40px]
                     rounded-[80px] relative right-[25px] top-[4px]'>
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar