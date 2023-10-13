/* eslint-disable react/no-unescaped-entities */

import { galleryBottom, galleryTop } from "../constants"


function Gallery() {
  return (
    <div className='flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
      <h2 className='text-[52px] leading-[62px]'>Gallery</h2>
      <p className="text-[20px] flex items-center leading-[30px] tracking-[0.2px] w-[571px] text-center h-[60px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className="flex items-center w-[999px] flex-wrap justify-center">
        {galleryTop.map((top) => (
          <div className="" key={top.name}>
            <img className="w-[225px] h-[285px]" src={top.icon} alt="" />
          </div>
        ))}
      </div>
      <div className="galleryBottom flex items-center justify-center flex-wrap h-[285px]">
        {galleryBottom.map((bottom) => (
          <div className="" key={bottom.name}>
            <img className="" src={bottom.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery