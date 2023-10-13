/* eslint-disable react/no-unescaped-entities */

import { content } from "../constants"



function Contents() {
  return (
    <div className='flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-10 justify-center items-center'>
      <h2 className='text-[52px] leading-[62px]'>Contents</h2>
      <p className="text-[20px] flex items-center leading-[30px] tracking-[0.2px] w-[571px] text-center h-[60px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        {content.map((content) => (
          <div className="flex h-[624px] rounded-[10px] py-[35px] text-black bg-white flex-col items-center pr-[20px] pl-[20px] w-[476px] gap-[57px]" key={content.name}>
            <p className="font-bold text-[20px] leading-[30px] tracking-[0.1px]">{content.name}</p>
            <p className="text-center w-[268px] h-[72px] leading-[24px] tracking-[0.2px] text-[16px] p-1">{content.text}</p>
            <div className="">
            <button className="w-[157px] h-[52px] rounded-[3px] bg-primary text-white flex items-center justify-center font-bold">{content.button}</button>
            </div>
            <img src={content.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contents