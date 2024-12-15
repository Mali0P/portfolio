import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='w-[100vw] h-[14vh] text-white py-[1vw] flex justify-around z-[99]'>
        <nav className='flex justify-between  px-[6vw] items-center w-[100vw] '>
<h1 className='lg:text-[1.7vw] md:text-[2vw] font-[500] sm:text-[2.5vw]'>Pranesh.Mali</h1>
        <ul className='flex gap-[2vw] lg:text-[1.1vw] md:text-[1.5vw] sm:text-[2vw]'>
            <li>Projects</li>
            <li>Skills</li>
            <li>My Story</li>
            <li>Resume</li>
        </ul>
        </nav>
    </div>
  )
}
