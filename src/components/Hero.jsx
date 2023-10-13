

function Hero() {
  return (
    <div className='p-[35px] mt-[100px] w-full flex flex-col gap-10 items-center justify-center'>
      <h1 className='text-center w-[709px] h-[196px] text-[80px] leading-[88px] tracking-[0.2px] '>Work at the speed of thought</h1>
      <p className="text-[20px] flex items-center leading-[30px] tracking-[0.2px] w-[700px] h-[60px] p-[20px] pl-[60px]">Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule.</p>
    <div className=" flex flex-wrap justify-around w-[320px]">
      <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-primary'>Try for free</button>
      <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Learn more</button>
    </div>
    </div>
  )
}

export default Hero