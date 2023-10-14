import { logo } from '../assets'
import { navlinks } from '../constants'
import { BiMenuAltRight } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

function Navbar() {
  return (
    <>
    <nav className='big-nav flex justify-around sticky top-0 '>
      <img src={logo} alt="website logo" className='w-[12%] h-12 cursor-pointer mt-1' />
      <div className="flex items-center justify-between w-[30%]">
        {navlinks.map((link) => (
          <div className="" key={link.name}>
            <a href="#" className='list-none'>{link.title}</a>
          </div>
        ))}
      </div>
      <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Login</button>
    </nav>


{/* mobile navbar */}
    <nav className='md:hidden flex justify-center w-[90vw] sticky top-0'>
      <div className="pt-5 flex justify-around">
        <div className="w-[40%]">
          <img src={logo} alt="" className='w-[100%] pt-2'/>
        </div>
         <button className='w-[130px] h-[45px] rounded-[3px] border-[1px] mt-2'>Login</button>
         <div className=" w-[10%] pt-3 pl-4">
          <BiMenuAltRight size='40px'/>
         </div>
    
      </div>
    </nav>

</>
  )
}

export default Navbar