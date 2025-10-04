import './Project.css';
import { useEffect, useRef } from 'react';

export default function Project({ vid, styles, vidWidth }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`group h-[100%]`}>
      <div
        className={`video-overlay w-[100vw] h-[100vh] fixed bg-black top-0 left-0 opacity-0 group-hover:opacity-80 delay-200 transition-all duration-500 ease-in-out pointer-events-none z-[99]`}
      />
      <div
        className={`video-container h-full relative rounded-[25px] flex justify-center items-center ${styles} transition-transform duration-300 ease-in-out scale-100 hover:scale-105 hover:z-[1000] cursor-crosshair`}
      >
        <video
          className={`rounded-[25px] shadow-[0px_54px_60px_0px_rgba(0,0,0,0.25)] ${vidWidth} transition-transform duration-300`}
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

