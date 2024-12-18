import React, { useEffect, useReducer, useRef, useState } from 'react'
import img2 from '../Assets/Project/img2.png'
import img1 from '../Assets/Project/img1.png'
import img3 from '../Assets/Project/img3.png'
import img4 from '../Assets/Project/img4.png'
import './Projectscss.css'
import { projectList } from '../ProjectApi/project'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Projects() {
let imageArray = [img1,img2,img3,img4]

  let enterMouse = (e,index)=>{
let rect = curDivRef.current[index].getBoundingClientRect()
console.log(e)
    gsap.to(curPageRef.current[index],{
      left:e.clientX-rect.left,
      top:e.clientY-rect.top,
      opacity:1,
      ease:'none',
      transform:'scale(1)'
      })
  }
  let mouseLeave = (e,index)=>{
let rect = curDivRef.current[index].getBoundingClientRect()
console.log(e)
    gsap.to(curPageRef.current[index],{
      left:e.clientX-rect.left,
      top:e.clientY-rect.top,
      opacity:0,
      ease:'none',
         transform:'scale(0)'
      })
  }

 
const curPageRef = useRef([])
const curDivRef = useRef([])


  return (
    <div className='project w-[100vw] py-[3vw] pb-[5vw] bg-[#f0f0f0] m-auto mt-[0vw] px-[5vw]'>
        <div className="heading h-[7vw] relative flex flex-col justify-center items-center mb-[2vw]">
        <h3 className='text-[3vw] text-black z-[2] bg-[#f0f0f0] px-[1vw] lg:text-[3vw] font-[500] w-[93%] text-[left]' >My Projects</h3>

        </div>
<div className="displayProjects grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 gap-[4vw] relative ">
{projectList.map((val,id)=>
(
    <div key={id} className='cards overflow-hidden w-[90vw] lg:w-[40vw] md:w-[40vw] bg-[black] lg:h-[80vh] md:h-[60vh] h-[60vh] relative cursor-pointer'>
   <a href={val.link} target='_blank'>
    <div  ref={(e)=>curPageRef.current[id]=e} className="cursor absolute z-[4] w-[10vw] h-[10vw] bg-[white]  text-black rounded-[100%] absolute top-[-30%] left-[-30%] opacity-1"  style={{boxShadow:' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
      <p className='text-[0.6vw] absolute top-[65%] left-[20%] font-[600]'> view project</p>
   <FontAwesomeIcon className='h-[1.5vw]  absolute left-[65%] top-[20%] rotate-[-50deg]' icon={faArrowRight} />
    </div>

        <img ref={(e)=>curDivRef.current[id]=e}  onMouseMove={(e)=>{enterMouse(e,id)}} onMouseLeave={(e)=>{mouseLeave(e,id)}} src={imageArray[id]} alt="" className='w-[100%] h-[100%]'  />
       
        <div className="projectDetails absolute w-[100%] h-[85%] flex flex-col justify-end px-[4vw]">
<h3 className='text-[3vw] capitalize text-white'>{val.name}</h3>


        </div>
        </a>
    </div>
))}
</div>
    </div>
  )
}
