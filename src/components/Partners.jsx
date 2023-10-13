/* eslint-disable react/no-unescaped-entities */

import { partners } from "../constants"

function Partners() {
  return (
    <div className='flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
      <h2 className='text-[52px] leading-[62px]'>Partners</h2>
      <p className="text-[20px] flex items-center leading-[30px] tracking-[0.2px] w-[571px] text-center h-[60px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className="flex gap-[50px] flex-wrap items-center justify-center">
        {partners.map((part, index) => (
          <img src={part.icon} key={index} alt="" />
        ))}
      </div>
      <div className="">
      <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>All partners</button>
      </div>
    </div>
  )
}

export default Partners