import { footer } from '../constants';
import { MdOutlineLocationOn, MdPhoneAndroid } from 'react-icons/md'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'

function Footer() {
  return (
    <div className="footer mt-[300px] pb-[70px] flex justify-around md:gap-1 xs:gap-[100px] flex-wrap p-5">
      <div className="foot-links xs:flex-col md:flex-row flex flex-wrap xs:gap-7 md:gap-1 font-sans justify-around w-[40%]">
      {footer.map((foot) => (
        <div className="" key={foot.name}>
          <p className='font-bold text-[20px] '>{foot.name}</p>
          <ul className="flex flex-col gap-3 mt-7">
            {foot.links.map((link) => (
              <li key={link} className='text-[16px] cursor-pointer'>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
      <div className="font-sans text-[16px] flex flex-col gap-5">
        <div className="flex gap-3">
          <MdOutlineLocationOn size='30px'/>
          <p className='mt-1'>7480 Mockingbird Hill undefined</p>
        </div>
        <div className="flex gap-3">
          <MdPhoneAndroid size='30px'/>
          <p className='mt-1'>(239) 555-0108</p>
        </div>
        <div className="flex mt-6 gap-10">
          <BsTwitter size='30px' cursor='pointer'/>
          <ImFacebook2 size='30px' cursor='pointer' />
          <BsLinkedin size='30px' cursor='pointer' />
        </div>
      </div>
    </div>
  );

}

export default Footer;
