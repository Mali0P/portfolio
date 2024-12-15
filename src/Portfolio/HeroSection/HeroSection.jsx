import React from 'react'
import profilePicture from '../Assets/Project/profilepicture.jpg';
import { faCss3Alt, faHtml5, faPhp, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function HeroSection() {
  return (
    <div className="heroSection relative text-white flex-col flex justify-center items-center w-[100vw] h-[110vh] ">
<div className="homeContent w-[70%] ">
  <h1 className='text-[4.2vw]'>
  Hi, I'm Pranesh! <img  src={profilePicture} style={{display:'inline-block'}} className='w-[5vw] h-[5vw] object-cover rounded-[100%] object-center' alt="" /> A beginner Web Developer exploring Frontend development, with a focus on <span className='text-[#7ddefe] font-[600]'>React</span> and <span className='text-[#14bfc9] font-[600]'>Tailwind CSS.</span>
  </h1>
  <div className="homeButton w-[100%] flex gap-[1vw] mt-[2vw] items-center">

  <button className='bg-[#2d64f2] px-[2.3vw] py-[1.3vw] text-[1vw] font-[] rounded-[2rem] font-[600] flex justify-center items-center'>View Projects <FontAwesomeIcon icon={faArrowLeft} className='text-white h-[auto] w-[1.4vw] ml-[1vw] rotate-[180deg]'/></button>
<p className='text-[1vw] ml-[0.5vw] flex justify-center items-center'>  Check out my latest creations!</p>
  </div>
</div>
<div className="languages">
 <ul className='text-[4vw] flex gap-[3vw] mt-[3vw]'>
     <li className='flex flex-col justify-center items-center'><FontAwesomeIcon icon={faHtml5} className='text-[#ea6228]' /> </li>
     <li><FontAwesomeIcon icon={faCss3Alt} className='text-[#2763e8]' /></li>
         <li><FontAwesomeIcon icon={faSquareJs} className='text-[#ecdb1c]' /></li>
             <li><FontAwesomeIcon icon={faPhp} className='text-[#6180b6]'/></li>
 
     <li><FontAwesomeIcon icon={faReact} className='text-[#57d3f5]'/></li>
     <li className='flex justify-center itmes-center'><img src="https://www.svgrepo.com/show/374118/tailwind.svg" className='w-[6vw]' alt="" /></li>
     <li className='flex justify-center itmes-center'><img src="https://images.prismic.io/toyfight/65e1e07d27237c2bb829b9dc_GSAP-Meta-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C2400%2C1260&w=2400&h=1260" className='w-[6vw] object-cover' alt="" /></li>
 </ul>
 <p className='text-center mt-[2vw]'> 
Programming Languages & Tools</p>
</div>
       

        </div>
  )
}
