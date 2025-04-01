import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0)

  function handleOnLeft() {
    setIndex((previousIndex) => 
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    )
  }

  function handleOnRight() {
    setIndex((previousIndex) => 
      previousIndex === images.length - 1 ? 0 : previousIndex + 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval); 
  }, [index, images.length]);

  return (
    <div className="relative flex justify-center items-center w-full">
      <div 
        onClick={handleOnLeft} 
        className="absolute left-4 sm:left-10 w-12 h-12 sm:w-15 sm:h-15 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
      >
        <SlArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
  
      <img 
        src={images[index].src} 
        alt={images[index].alt} 
        className="w-full h-[15em] sm:h-80 object-cover"
      />
  
      <div 
        onClick={handleOnRight} 
        className="absolute right-4 sm:right-10 w-12 h-12 sm:w-15 sm:h-15 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
      >
        <SlArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </div>
  );
};