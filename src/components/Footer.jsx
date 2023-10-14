import { footer } from '../constants';
import { MdOutlineLocationOn, MdPhoneAndroid } from 'react-icons/md'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'

function Footer() {
  return (
    <div className="footer font-sans flex-wrap px-5 flex flex-col md:flex-row justify-around  mt-[300px] pb-[70px]  items-center">
      <div className="foot-links flex flex-col md:flex-row text-[20px] md:text-4xl w-[40%] lg:gap-12 justify-around md:w-auto mb-10 items-center  md:mb-0">
        {footer.map((foot) => (
          <div className="mb-6 md:mb-0 md:mr-10" key={foot.name}>
            <p className="font-bold text-[20px]  mb-3 md:mb-4">{foot.name}</p>
            <ul className="flex flex-col gap-3">
              {foot.links.map((link) => (
                <li key={link} className="text-[16px] cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="font-sans flex flex-col gap-7 text-[16px]text-center">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <MdOutlineLocationOn size='30px' />
          <p className='mt-1'>7480 Mockingbird Hill undefined</p>
        </div>
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <MdPhoneAndroid size='30px' />
          <p className='mt-1'>(239) 555-0108</p>
        </div>
        <div className="flex items-center gap-6">
          <BsTwitter size='30px' cursor='pointer' />
          <ImFacebook2 size='30px' cursor='pointer' />
          <BsLinkedin size='30px' cursor='pointer' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
