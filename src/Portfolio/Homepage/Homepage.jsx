import React from 'react'
import profilePicture from '../Assets/Project/profilepicture.jpg';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import HeroSection from '../HeroSection/HeroSection';


<div
  className="heroSection w-[100vw] h-[80vh] bg-[black]"
  style={{ backgroundImage: `url(${profilePicture})` }}
></div>


export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      
        <Projects/>
       
        <Footer/>
        </div>
  )
}
