import React from 'react'
import profilePicture from '../Assets/Project/profilepicture1.jpg';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';

<div
  className="heroSection w-[100vw] h-[80vh] bg-[black]"
  style={{ backgroundImage: `url(${profilePicture})` }}
></div>


export default function Homepage() {
  return (
    <div>
      <Navbar/>
        <div className="heroSection relative text-white flex-col flex justify-center items-center w-[100vw] h-[80vh] bg-[black]">
            <div className="transparentDiv z-[1] absolute bg-[black] opacity-[0.4] w-[100%] h-[100%]" style={{backgroundImage:`url(${profilePicture})`,backgroundSize:'cover',backgroundPosition:'center 18%',backgroundAttachment:'fixed',filter:'grayscale(100%)'}}></div>
            <div className="content text-white z-[2] text-center">
            <h2 className='text-[10vw] font-[600] lg:text-[4.5vw]'>Hi, I'm Pranesh!</h2>
            <p className='text-[3vw] font-[200] lg:text-[1.6vw]'> Frontend Developer specializing in <br /><span className='text-[#7ddefe] font-[600]'>React</span> and <span className='text-[#14bfc9] font-[600]'>Tailwind CSS</span></p>
            </div>

        </div>
        <Projects/>
        <Skills/>
        <Footer/>
        </div>
  )
}
