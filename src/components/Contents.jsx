/* eslint-disable react/no-unescaped-entities */

import { content } from "../constants"



function Contents() {
  return (
    <div className='flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-10 justify-center items-center'>
      <h2 className='text-[52px] leading-[62px]'>Contents</h2>
      <p className="text-[20px] flex items-center leading-[30px] tracking-[0.2px] w-[571px] text-center h-[60px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className="">
        {content.map((content) => (
          <div className="" key={content.name}>
            <p>{content.name}</p>
            <p>{content.text}</p>
            <p>{content.button}</p>
            <img src={content.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contents