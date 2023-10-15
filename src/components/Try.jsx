import { landing } from "../assets"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion"

function Try() {
  return (
    <motion.div 
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className="flex items-center justify-center">
      <div className='try flex flex-wrap mt-[200px] font-sans rounded-[33px] lg:bg-[#343434] gap-[86px] w-[1219px] justify-center items-center '>
      <div className="flex flex-col md:gap-14 xs:gap-[200px] md:pl-[50px]">
        <motion.h2
        variants={fadeIn("down", "spring", 0.3, 1)} 
        className="text-[52px] leading-[62px] md:w-[479px] h-[124px]">OpenType feature and Variable fonts</motion.h2>
        <motion.button  
        variants={fadeIn("down", "spring", 0.5, 1)} 
        className="trybtn xs:mt-[200px] md:mt-[0] w-[232px] h-[52px] bg-primary text-white flex items-center justify-center font-bold">Try for free</motion.button>
      </div>
      <motion.img variants={zoomIn(.2, .5)}  src={landing} alt="" className="overflow-hidden lg:pb-5 lg:pr-2"/>
    </div>
    </motion.div>
  )
}

export default Try