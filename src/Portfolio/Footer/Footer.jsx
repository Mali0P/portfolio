import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mailIcon from '../Assets/Icon/gmail.png'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer w-[100%] h-[35vh] flex flex-col justify-center items-center gap-[1vw]'>
        <h3 className='text-[3vw] lg:text-[2vw] font-[600] text-[white]'>LET'S GET IN TOUCH</h3>
        <ul className='flex gap-[2vw] text-[2vw] relative items-center'>
        <li className='cursor-pointer'>
<img src={mailIcon} alt="" className='w-[2vw] h-auto' />

            </li>
            <li className='text-[#0d8dee] cursor-pointer'>
              <a href="https://www.facebook.com/profile.php?id=100090276850636" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
              </li>
              <li className='text-[#ee2a7b] cursor-pointer'>
                <a href="https://www.instagram.com/praneshmali3000/?fbclid=IwY2xjawHIbahleHRuA2FlbQIxMAABHVD9Gb0soBBWrKMWclIOipaKO62XpFNuPNcEyN7mirvw1utheH8STxELOg_aem_SwdVfyBzCe_0H4LsmZ1alg#" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                </li>
   
        </ul>
    </div>
  )
}
