import React, { useEffect, useReducer, useRef, useState } from 'react'
import img2 from '../Assets/Project/img2.png'
import img1 from '../Assets/Project/img1.png'
import img3 from '../Assets/Project/img3.png'
import img4 from '../Assets/Project/img4.png'
import './Projectscss.css'
import { projectList } from '../ProjectApi/project'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
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
    <div className='project w-[85vw] m-auto mt-[3vw]'>
        <div className="heading h-[7vw] relative flex flex-col justify-center items-center mb-[2vw]">
        <h3 className='text-[3vw] z-[2] bg-[white] px-[1vw] lg:text-[2vw] font-[500] '>My Projects</h3>
<div className="headingBorder w-[100%] border-[0.1vw] absolute top-[50%]"></div>
        </div>
<div className="displayProjects grid grid-cols-2 gap-[4vw] relative ">
{projectList.map((val,id)=>
(
    <div key={id} className='cards overflow-hidden w-[40vw] bg-[black] lg:h-[80vh] h-[50vh] relative cursor-pointer'>
   
    <div  ref={(e)=>curPageRef.current[id]=e} className="cursor absolute z-[4] w-[10vw] h-[10vw] bg-[white] text-black rounded-[100%] absolute top-[-30%] left-[-30%] opacity-1" >
      <p className='text-[1vw] absolute top-[65%] left-[20%] '> view project</p>
    </div>
<a href={val.link} target='_blank'>
        <img ref={(e)=>curDivRef.current[id]=e}  onMouseMove={(e)=>{enterMouse(e,id)}} onMouseLeave={(e)=>{mouseLeave(e,id)}} src={imageArray[id]} alt="" className='w-[100%] h-[100%]'  />
        </a>
        <div className="projectDetails absolute w-[100%] h-[85%] flex flex-col justify-end px-[4vw]">
<h3 className='text-[3vw] capitalize text-white'>{val.name}</h3>


        </div>
    </div>
))}
</div>
    </div>
  )
}
