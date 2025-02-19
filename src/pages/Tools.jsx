import Side from "../components/Side"
import Stack from "../components/Stack"

export default function Tools() {

  return (
    <>
      <div className="flex justify-center items-start gap-24 flex-wrap">
        <Side display="hidden"></Side>
        <div className="w-[85%] lg:w-1/2 flex flex-col justify-between mt-[24px]">
          <Stack></Stack>
        </div>
      </ div>
    </>
  )
}

