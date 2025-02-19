import { useState } from "react";

export default function Project({ vid, styles, vidWidth }) {
  const [hover, setHover] = useState(false);

  function handleHoverOn() {
    setHover(true);
    console.log("mouse in");
  }

  function handleHoverOut() {
    setHover(false);
    console.log("mouse out");
  }

  return (
    <>
      <div className={`w-[100vw] h-[100vh] fixed bg-black top-0 left-0 ${hover ? 'opacity-80' : 'opacity-0'} delay-200 transition-all duration-500 ease-in-out pointer-events-none z-[99]`} />
      <div
        className={`h-full  relative rounded-[25px] flex justify-center items-center ${styles} transition-all duration-300 ease-in-out ${hover ? "scale-105  z-[1000]" : "scale-100"} cursor-crosshair`}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOut}
      >
        <video
          className={`rounded-[25px] shadow-[0px_54px_60px_0px_rgba(0,0,0,0.25)] ${vidWidth} transition-transform duration-300`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={vid} type="video/mp4" />
        </video>

      </div>
    </>
  );
}
