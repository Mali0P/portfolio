import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[100vw] h-[10vh] bg-white py-[1vw] flex justify-around z-[99]'>
        <nav className='flex justify-around items-center w-[100vw] '>
<h1 className='lg:text-[1.5vw] md:text-[2vw] font-[600] sm:text-[2.5vw]'>Pranesh Mali</h1>
        <ul className='flex gap-[2vw] lg:text-[1.2vw] md:text-[1.5vw] sm:text-[2vw]'>
            <li>Projects</li>
            <li>My Story</li>
            <li>Resume</li>
        </ul>
        </nav>
    </div>
  )
}
