import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-slide-1-img-1.png",
      caption: "Headphones- 30% off",
    },
    {
      src: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-slide-2-img-1.png",
      caption: "Headphones- 30% off",
    },
    {
      src: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-slide-3-img-1.jpg",
      caption: "Caption 3",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    // <div
    //   style={{ backgroundColor: "#8a8e92" }}
    //   className="min-h-[660px] w-full  relative bg-cover bg-center lg:min-w-[1100px] lg:max-w-[1100px] mx-auto"
    // >
    //   <div className="w-full h-full sm:w-1/2 lg:w-1/3">
    //     <div className="absolute left-52 top-[150px]">
    //       <p className="text-[18px] uppercase text-[#253237] mb-[15px]">
    //         not fried not baked
    //       </p>
    //     </div>
    //     <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
    //       <button
    //         onClick={prev}
    //         className="h-[50px] w-[50px] rounded-full bg-white hover:bg-[#4FB68D]"
    //       >
    //         ❮
    //       </button>
    //       <button
    //         onClick={next}
    //         className="h-[50px] w-[50px] rounded-full bg-white hover:bg-[#4FB68D]"
    //       >
    //         ❯
    //       </button>
    //     </div>
    //     <div className="absolute flex justify-center items-center bottom-[1px] left-1/2 ">
    //       {slider?.map((slide, slideIndex) => (
    //         <div
    //           key={slideIndex}
    //           className="text-[90px] cursor-pointer text-[#4FB68D] "
    //           onClick={() => dotSliding(slideIndex)}
    //         >
    //           <h1>.</h1>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-[660px] bg-[#F4F4F4] lg:min-w-[1300px] lg:max-w-[1300px] mx-auto">
      <div className="relative">
        <div className=" inset-0 flex items-center justify-center">
          <p className="text-white text-lg  p-2 rounded">
            {images[currentSlide].caption}
          </p>
        </div>
        <div className="min-w-[1138px] h-[347px] absolute left-[150px] top-[320px] overflow-hidden">
          <img
            src={images[currentSlide].src}
            alt={`Slide ${currentSlide + 1}`}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-between mt-[220px] px-[10px]">
        <button onClick={prevSlide} className="text-white text-[50px]">
          <BsArrowLeftCircleFill></BsArrowLeftCircleFill>
        </button>
        <button onClick={nextSlide} className="text-white text-[50px]">
          <BsArrowRightCircleFill></BsArrowRightCircleFill>
        </button>
      </div>
    </div>
  );
};

export default Banner;
