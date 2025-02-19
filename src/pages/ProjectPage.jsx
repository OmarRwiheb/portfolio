import Side from '../components/Side'
import { useParams } from "react-router-dom";
import { projectsList } from '../data/ProjectList';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsList.find((p) => p.id === id);
  console.log(project.siteButton)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <div className="flex justify-center items-start gap-24 flex-wrap">
      <Side display="hidden"></Side>
      <div className='w-[85%] lg:w-1/2 flex flex-col gap-8 justify-between mt-[24px]'>
        <Link to="/projects" className='w-fit'><FontAwesomeIcon icon={faArrowLeft} className='text-white' /> <p className='inline ml-2 text-white text-lg'>All Projects</p> </Link>
        <video
          className={`rounded-[25px] shadow-[0px_54px_60px_0px_rgba(0,0,0,0.25)] w-full transition-transform duration-300`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={project.vid} type="video/mp4" />
        </video>
        <div className='flex gap-12 relative justify-between flex-col lg:flex-row'>
          <h1 className={`text-white font-black text-[50px] leading-tight w-full ${project.siteButton == 'hidden' ? 'lg:w-full' : 'lg:w-3/4'} lg:text-5xl order-2 lg:order-1`}>{project.title}</h1>
          <a className={`bg-[#037EF3] text-white p-2 rounded-[15px] ${project.siteButton} flex justify-center items-center w-full relative order-1 lg:absolute lg:right-0 lg:order-2 lg:w-24`} href={project.link} target='_blank'><p>View Live</p></a>
        </div>
        <div>
          <p className='text-slate-400 font-light text-[22px] lg:text-xl'>{project.description}</p>
          <ul className='list-disc pl-5 flex flex-col gap-2 mt-6'> {project.features.length ?
            project.features.map(feature => {
              return (<li className='text-slate-400 font-light text-[22px] lg:text-xl'>{feature}</li>)
            }) : undefined
          }
          </ul>
        </div>

        <div className='flex gap-12 flex-col'>
          {project.imgs.map(img => {
            return (<img className=' rounded-[25px]' src={img} alt="" />)
          })}
        </div>
      </div>
    </ div>
  </>)
}