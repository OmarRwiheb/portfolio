import NavBarElement from "./NavBarElement";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-20 w-full flex justify-center mt-5 items-end lg:items-start">
      <nav className="flex items-center justify-around p-4 bg-[#272523] rounded-[25px] h-14 w-[300px]">
        <NavBarElement name={"Home"} >
          <Link to='/'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
        </NavBarElement>
        <NavBarElement name={"Projects"} >
          <Link to='/projects'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </Link>
        </NavBarElement>
        <NavBarElement name={"Experience"} >
          <Link to='/experience'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </Link>
        </NavBarElement>
        <NavBarElement name={"Tools"} >
          <Link to='/tools'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </Link>

        </NavBarElement>
        <a href="https://omarrwiheb.github.io/portfolio/Omar_Rwiheb_CV.pdf" className="bg-[#037EF3] text-white p-[5px] rounded-[25px] w-[78px] text-center" target="_blank">My CV</a>
      </nav>
    </header>
  );
}
