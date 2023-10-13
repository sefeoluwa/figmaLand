import { landing } from "../assets"

function Try() {
  return (
    <div className="flex items-center justify-center">
      <div className='flex flex-wrap mt-[200px] font-sans rounded-[33px] bg-[#343434] gap-[86px] w-[1219px] justify-center items-center'>
      <div className="flex flex-col gap-14 pl-[50px]">
        <h2 className="text-[52px] leading-[62px] w-[479px] h-[124px]">OpenType feature and Variable fonts</h2>
        <button  className="w-[232px] h-[52px] bg-primary text-white flex items-center justify-center font-bold">Try for free</button>
      </div>
      <img src={landing} alt="" />
    </div>
    </div>
  )
}

export default Try