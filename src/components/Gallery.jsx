/* eslint-disable react/no-unescaped-entities */
import { galleryBottom, galleryTop } from "../constants"
import { motion } from "framer-motion"
import { textVariant, staggerContainer, fadeIn } from "../utils/motion"


function Gallery() {
  return (
    <motion.div 
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className='flex overflow-hidden mt-[200px] font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
      <motion.h2
      variants={textVariant()}
      className='text-[52px] leading-[62px]'>Gallery</motion.h2>
      <motion.p 
      variants={textVariant()}
      className="xs:mt-[10px] sm:mt-[10px] text-center md:mt-3 text-[20px] sm:w-[411px] sm:h-[90px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-[20px] pl-[30px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</motion.p>

      <div className=" flex flex-col items-center justify-center">
        <div
        className="gallery flex items-center flex-wrap justify-center">
          {galleryTop.map((top, index) => (
            <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 1)}
            className="gallery-item" key={top.name}>
              <img className="gallery-image" src={top.icon} alt="" />
            </motion.div>
          ))}
        </div>

        <div className="gallery flex items-center justify-center flex-wrap">
          {galleryBottom.map((bottom, index) => (
            <motion.div 
            variants={fadeIn("right", "spring", index * 0.5, 1)}
            className="gallery-item" key={bottom.name}>
              <img className="gallery-image" src={bottom.icon} alt="" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="">
      <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Learn more</button>
      </div>
    </motion.div>
  )
}

export default Gallery