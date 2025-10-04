import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'; // Correct import for social icons



const myImg = "/portfolio/img/me.webp";
const line1 = "/portfolio/img/line1.svg";
const line2 = "/portfolio/img/line2.svg";
const guitar = "/portfolio/img/guitar.svg";
const smile = "/portfolio/img/smile.svg";
const bottomLine = "/portfolio/img/bottomLine.svg";
const sideLine = "/portfolio/img/sideLine.svg";


export default function Side({ display }) {
  return (
    <>
      <aside className={`relative lg:sticky top-12 mt-6 ${display} lg:block`} >
        <div className='rounded-[25px] overflow-hidden relative lg:sticky'>
          <div className="w-[344px] h-[600px] bg-white  p-8 flex flex-col gap-6 items-center">
            <img src={line1} alt="My Happy SVG" className='absolute top-[-55px] left-[-55px]' />
            <img src={line2} alt="My Happy SVG" className='absolute top-[-55px] right-[-41px]' />
            <img src={guitar} alt="My Happy SVG" className='absolute top-[60%] left-[67%] z-10' />
            <img src={smile} alt="My Happy SVG" className='absolute top-[71%] right-[73%] z-10' />
            <img src={bottomLine} alt="My Happy SVG" className='absolute bottom-[-10px] right-[0] z-10' />
            <img src={sideLine} alt="My Happy SVG" className='absolute left-[-27px] top-[35%] z-10' />
            <div className="w-[250px] h-[261px] bg-cover bg-center rounded-[25px]" style={{ backgroundImage: `url(${myImg})` }}>
            </div>
            <p className='text-center font-normal text-slate-600 text-xl z-20'>A front-end developer who is passionate to build innovative products</p>
            <p className='text-center font-normal text-slate-600'><FontAwesomeIcon icon={faMapPin} style={{ color: '#037EF3' }} /> Milan, Italy</p>
            <div className='flex gap-6'>
              <a href="https://github.com/OmarRwiheb" target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#037EF3' }} /></a>
              <a href="https://www.linkedin.com/in/omar-rwiheb-698a761b9/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#037EF3' }} /></a>
              <a href="https://www.instagram.com/omar_rwiheb/" target='_blank'><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#037EF3' }} /></a>
            </div>
            <a href="mailto:omar.rwiheb@aiesec.it" className="bg-[#037EF3] text-white p-[5px] rounded-[25px] w-[200px] text-center">
              Let's Talk
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}