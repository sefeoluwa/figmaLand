import { logo } from '../assets'
import { navlinks } from '../constants'

function Navbar() {
  return (
    <nav className='flex justify-around sticky top-0 '>
      <img src={logo} alt="website logo" className='w-[15%] h-16 cursor-pointer' />
      <div className="flex items-center justify-between w-[30%]">
        {navlinks.map((link) => (
          <div className="" key={link.name}>
            <a href="#" className='list-none'>{link.title}</a>
          </div>
        ))}
      </div>
      <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Login</button>
    </nav>
  )
}

export default Navbar