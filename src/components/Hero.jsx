import { screens } from "../assets"
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from "react"
import { motion } from "framer-motion"


function Hero() {
  useEffect (() => {
    AOS.init({duration: 1500});
  }, []);
  
  return (
    <div className='hero overflow-hidden p-[35px] mt-[150px] md:mt-[200px] w-full flex flex-col gap-10 md:gap-10 items-center justify-center'>
      <h1 
      data-aos="fade-down" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
      className='heroH text-center md:w-[709px] h-[186px] md:h-[196px] lg:text-[80px] sm:text-[60px]  xs:text-[50px] text-[40px] leading-[62px] md:leading-[88px] tracking-[0.2px] md:font-bold '>Work at the speed of thought</h1>
      <p 
      data-aos='fade-down' 
      data-aos-duration='500'
      data-aos-delay="600"
      data-aos-easing="linear"
      className="heroS mt-[10px] text-center md:mt-3 text-[20px] sm:w-[382px] sm:h-[120px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-[20px] md:pl-[60px]">Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule.</p>
    <div 
    data-aos="fade-down" 
    data-aos-delay="1000"
    data-aos-easing="linear"
    data-aos-duration='500'
    className=" flex flex-wrap justify-around w-[320px]">
      <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-primary'>Try for free</button>
      <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Learn more</button>
    </div>
  <div className="w-screen">
  <img
  data-aos="zoom-in-down" 
  data-aos-delay="1200"
  data-aos-easing="linear"
  data-aos-duration='500'
   src={screens} 
   alt="screenshots of app" 
   className="w-screen"/>
  </div>
    </div>
  )
}

export default Hero