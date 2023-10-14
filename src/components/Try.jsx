import { landing } from "../assets"

function Try() {
  return (
    <div className="flex items-center justify-center">
      <div className='try flex flex-wrap mt-[200px] font-sans rounded-[33px] lg:bg-[#343434] gap-[86px] w-[1219px] justify-center items-center'>
      <div className="flex flex-col md:gap-14 xs:gap-[200px] md:pl-[50px]">
        <h2 className="text-[52px] leading-[62px] md:w-[479px] h-[124px]">OpenType feature and Variable fonts</h2>
        <button  className="trybtn xs:mt-[200px] md:mt-[0] w-[232px] h-[52px] bg-primary text-white flex items-center justify-center font-bold">Try for free</button>
      </div>
      <img src={landing} alt="" />
    </div>
    </div>
  )
}

export default Try