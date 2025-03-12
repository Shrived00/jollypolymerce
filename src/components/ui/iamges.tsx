"use client"
import { useEffect, useState } from 'react';

const InfiniteCarousel = ({ images, interval = 3000 }:{images:string[],interval?:number}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); 

    return () => clearInterval(timer);
  }, [images.length, interval]);
 
  return (
    <div className="relative w-full  h-48 md:h-[650px] ">
      {images.map((image:string, index:number) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity overflow-hidden duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className=" aspect-video w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;