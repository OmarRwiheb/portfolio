import Side from '../components/Side'
import MainContent from '../components/MainContent'

export default function Main() {
  return (
    <div className="flex justify-center items-start gap-24 flex-wrap">
      <Side display="block"></Side>
      <div className="w-[85%] lg:w-1/2 flex flex-col justify-between mt-[24px]">
        <MainContent></MainContent>
      </div>
    </ div>
  )
}