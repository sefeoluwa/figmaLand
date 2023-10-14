import { testimonials } from "../constants"


function Testimonials() {
  return (
    <div className='flex mt-[200px] overflow-hidden font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
      <h2 className='text-[52px] leading-[62px]'>Testimonials</h2>
     <div className="testimonial grid grid-cols-2 gap-4 p-10 md:p-1 ">
     {testimonials.map((rate) => (
        <div className="md:w-[430px] md:h-[328px] xs:w-[272px] sm:h-[296px] gap-[30px] p-[40px] border-[1px] border-[#DEDEDE] border-solid rounded-[10px]" key={rate.name}>
          <div className="flex gap-5">
            <img src={rate.icon} alt="" />
            <div className="">
              <p>{rate.name}</p>
              <p>{rate.role}</p>
            </div>
          </div>
          <p className="md:w-[320px] md:h-[168px] xs:w-[24wpx] xs:h-[216px] mt-7 text-[16px] leading-[24px] tracking-[0.2px]">{rate.review}</p>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Testimonials