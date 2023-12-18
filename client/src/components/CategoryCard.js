import React, { useState, useEffect } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

function CategoryCarousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previous = () => {
    console.log(currentIndex);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      console.log(currentIndex);
    }
  };

  return (
    <div className="flex w-full flex-col px-6 relative ">
      <div className="w-full flex relative items-center">
        {currentIndex > 0 && (
          <button className="border-gray-500 " onClick={previous}>
            <TfiArrowCircleLeft size={25} />
          </button>
        )}
        <div className="overflow-hidden w-full h-full px-4">
          <div
            className="flex transition-all duration-250 ease-linear gap-9"
            style={{ transform: `translateX(-${currentIndex * 12}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex < 4 && (
          <button
            className=" border-gray-500 text-black absolute right-0 bg-white"
            onClick={next}
          >
            <TfiArrowCircleRight size={25} />
          </button>
        )}
      </div>
    </div>
  );
}

export default CategoryCarousel;
