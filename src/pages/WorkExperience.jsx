import Side from "../components/Side"
import Experiences from "../components/Experiences"

export default function WorkExperience() {

  return (
    <>
      <div className="flex justify-center items-start gap-24 flex-wrap">
        <Side display="hidden"></Side>
        <div className="w-[85%] lg:w-1/2 flex flex-col justify-between mt-[24px]">
          <Experiences></Experiences>
        </div>
      </ div>
    </>
  )
}

