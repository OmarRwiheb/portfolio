import './nav.css'

export default function NavBarElement({ children, name }) {
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <div className={`nav-ele hover:scale-110 transition-all duration-200 ease-in-out`}>{children}</div>
      <div className={`nav-ele-name absolute top-12 text-white opacity-0 transition-opacity duration-200 ease-in-out bg-[#272523] rounded-[25px] p-1 pl-3 pr-3 text-sm w-fit text-center`}>
        {name}
      </div>
    </div>
  );
}
