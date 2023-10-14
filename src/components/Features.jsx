import { Panel } from '../assets'
import { features } from '../constants'

function Features() {
  return (
    <div className='flex mt-[100px] font-sans  flex-col p-[65px 50px] gap-10 justify-center items-center'>
      <h2 className='text-[52px] leading-[62px]'>Features</h2>
      <p className='heroS xs:mt-[10px] sm:mt-[10px] text-center md:mt-3 text-[20px] sm:w-[411px] sm:h-[90px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-[20px] pl-[60px]'>Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule.</p>
<div className="flex justify-center flex-wrap gap-6 p-5">
  <img src={Panel} alt="" className='w-[55%]'/>
  <div className="flex flex-col items-center gap-3">
    {features.map((feat) => (
      <div className="" key={feat.title}>
        <div className="flex items-center gap-4">
          <img src={feat.icon} alt="" className=''/>
          <p className='w-[153px] flex items-center h-[60px]'>{feat.title}</p>
        </div>
        <p className='w-[249px] h-[96px]'>{feat.text}</p>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Features