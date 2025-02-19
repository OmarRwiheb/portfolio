import { useState, useEffect, useRef } from "react";


const img1 = "/img/stickers/image1.webp";
const img2 = "/img/stickers/image2.webp";
const img3 = "/img/stickers/image3.webp";
const img4 = "/img/stickers/image4.webp";
const img5 = "/img/stickers/image5.webp";
const img6 = "/img/stickers/image6.webp";
const img7 = "/img/stickers/image7.webp";
const img8 = "/img/stickers/image8.webp";

export default function RandomImages() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]); // Store images in a ref to avoid unnecessary re-renders
  const [renderKey, setRenderKey] = useState(0); // Force re-render when needed
  const isVisibleRef = useRef(false); // Track visibility efficiently

  const imageSources = [img1, img2, img3, img4, img5, img6, img7, img8];

  // Function to generate a random image
  const generateImage = () => {
    if (!isVisibleRef.current) return;

    const newImage = {
      id: Math.random(),
      src: imageSources[Math.floor(Math.random() * imageSources.length)],
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%",
      rotate: Math.random() * 360 + "deg",
    };

    imagesRef.current.push(newImage);

    // Force re-render
    setRenderKey((prev) => prev + 1);

    // Remove the image after 1 second
    setTimeout(() => {
      imagesRef.current = imagesRef.current.filter((img) => img.id !== newImage.id);
      setRenderKey((prev) => prev + 1); // Trigger re-render after removal
    }, 2000);
  };

  // Check if the container is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) requestAnimationFrame(generateImageLoop);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Generate a new image every 300ms while the div is visible
  const generateImageLoop = () => {
    if (!isVisibleRef.current) return;
    generateImage();
    setTimeout(() => requestAnimationFrame(generateImageLoop), 300);
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-x-clip lg:overflow-x-visible">
      {imagesRef.current.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt="random"
          className="absolute object-cover transition-opacity w-28 lg:w-60"
          style={{ top: img.top, left: img.left, transform: `rotate(${img.rotate})` }}
        />
      ))}
    </div>
  );
}
