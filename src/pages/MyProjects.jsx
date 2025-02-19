import Side from '../components/Side'
import Projects from '../components/Projects'

export default function MyProjects() {

  return (
    <>
      <div className="flex justify-center items-start gap-24 flex-wrap">
        <Side display="hidden"></Side>
        <div className="w-[85%] lg:w-1/2 flex flex-col justify-between mt-[24px]">
          <Projects />
        </div>
      </ div>
    </>
  )
}

