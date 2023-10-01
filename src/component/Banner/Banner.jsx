import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-slide-1-img-1.png",
      caption: "MAC BOOK- 30% off",
      description:
        "The MacBook is a line of sleek and powerful laptops designed by Apple, known for their premium build quality and high-performance hardware.",
    },
    {
      src: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-slide-2-img-1.png",
      caption: "iPAD- 30% off",
      description:
        "The MacBook is a line of sleek and powerful laptops designed by Apple, known for their premium build quality and high-performance hardware. ",
    },
    {
      src: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-slide-3-img-1.jpg",
      caption: "watch- 30% off",
      description:
        "The MacBook is a line of sleek and powerful laptops designed by Apple, known for their premium build quality and high-performance hardware. ",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  // Automatically advance to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5000 milliseconds (5 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="max-h-[320px] max-w-[300px] sm:max-h-[320px] sm:max-w-[300px] md:max-h-[500px] md:max-w-[768px] bg-[#F4F4F4] lg:min-w-[1300px] lg:max-w-[1300px] mx-auto flex flex-col ">
      <div className=" flex flex-col justify-center items-center md:gap-[100px] px-[20px] py-[10px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-xl sm:text-xl md:text-[46px] lg:text-6xl">
            {images[currentSlide].caption}
          </p>
          <p className="text-[10px] sm:text-[10px] md:text-[24px] lg:text-lg md:line-clamp-2">
            {images[currentSlide].description}
          </p>
        </div>
        <div className=" min-w-[24px] min-h-[83px] sm:max-w-[24px] sm:max-h-[83px] md:max-w-[845px] md:max-h-[219px] lg:w-[1138px] lg:h-[347px] overflow-hidden">
          <img
            src={images[currentSlide].src}
            alt={`Slide ${currentSlide + 1}`}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="hidden xl:flex justify-around px-[10px]">
        <button onClick={prevSlide} className="text-white text-4xl ">
          <BsArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="text-white text-4xl ">
          <BsArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Banner;
