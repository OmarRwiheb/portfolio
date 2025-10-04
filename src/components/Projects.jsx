import SectionHeader from './SectionHeader'
import Project from './Porject'
import { Link } from 'react-router-dom'

const ic = "/portfolio/vid/ic.m4v";
const whereitallbeginsDesktop = "/portfolio/vid/whereitallbegins_desktop1.m4v";
const elle = "/portfolio/vid/elle.m4v";
const a2030 = "/portfolio/vid/2030.m4v";
const italia = "/portfolio/vid/aiesecItalia.m4v";
const egypt = "/portfolio/vid/egypt.m4v";
const backend = "/portfolio/vid/backend.m4v";
const globalVillage = "/portfolio/vid/globalVillage.m4v";


export default function Projects() {

  return (
    <>
      <div className="flex flex-col gap-12 h-full mb-24">
        <SectionHeader>RECENT <br /> <span className="text-[#037EF3]">PROJECTS</span></ SectionHeader>
        <div className="grid grid-flow-col gap-4 grid-cols-1 grid-rows-[200px_200px_200px_200px_200px_200px_200px_200px_200px_200px_200px_200px] lg:grid-cols-2 lg:grid-rows-[200px_200px_200px_200px_200px_200px]">
          <Link to="/projects/1">
            <Project vid={whereitallbeginsDesktop} styles="col-span-1 row-span-1 bg-[#272523]" vidWidth="w-[250px]" />
          </Link>
          <Link to="/projects/3" className="col-span-1 row-span-2">
            <Project vid={a2030} styles="col-span-1 row-span-2 bg-[#037EF3] lg:bg-[#272523]" vidWidth="w-[150px]" />
          </Link>
          <Link to="/projects/7" className="col-span-1  row-span-1">
            <Project vid={ic} styles="col-span-1  row-span-1 bg-[#272523] lg:bg-[#037EF3]" vidWidth="w-[250px]" />
          </Link>
          <Link to="/projects/8" className="col-span-1 row-span-2">
            <Project vid={globalVillage} styles="col-span-1 row-span-2  bg-[#272523]" vidWidth="w-[150px]" />
          </Link>
          <Link to="/projects/2" className="col-span-1 row-span-2">
            <Project vid={italia} styles="bg-[#037EF3]" vidWidth="w-[150px]" />
          </Link>
          <Link to="/projects/4" className="col-span-1 row-span-2">
            <Project vid={egypt} styles="col-span-1 row-span-2 bg-[#272523]" vidWidth="w-[150px]" />
          </Link>
          <Link to="/projects/5" className="col-span-1 row-span-1">
            <Project vid={elle} styles="col-span-1 row-span-1 bg-[#037EF3]" vidWidth="w-[250px]" />
          </Link>
          <Link to="/projects/6" className="col-span-1 row-span-1">
            <Project vid={backend} styles="col-span-1 row-span-1 bg-[#037EF3]" vidWidth="w-[250px]" />
          </Link>

        </div>
      </div>
    </>
  )
}