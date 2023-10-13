import { logo } from '../assets'
import { navlinks } from '../constants'

function Navbar() {
  return (
    <nav className=''>
      <img src={logo} alt="" />
      <div className="">
        {navlinks.map((link) => (
          <div className="" key={link.name}>
            <a href="#" className='list-none'>{link.title}</a>
          </div>
        ))}
      </div>
      <button>Login</button>
    </nav>
  )
}

export default Navbar