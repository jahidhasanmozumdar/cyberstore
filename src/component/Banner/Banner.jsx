import { useState } from "react";

const Banner = () => {
  let slider = [
    {
      URL: "https://ecolife.posthemes.com/demo1/img/cms/s1_1.jpg",
    },
    {
      URL: "https://ecolife.posthemes.com/demo1/img/cms/s2_1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex - 1);
  };
  const next = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(newIndex);
  };

  const dotSliding = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div
      style={{ backgroundImage: `url(${slider[currentIndex].URL})` }}
      className="min-h-[660px] w-full  relative bg-cover bg-center"
    >
      <div className="w-full h-full">
        <div className="absolute left-52 top-[150px]">
          <p className="text-[18px] uppercase text-[#253237] mb-[15px]">
            not fried not baked
          </p>
          <h1 className="text-[48px] font-semibold text-[#253237]">
            Freeze Dried Fruits
          </h1>
          <h1 className="text-[48px] font-semibold text-[#253237]">
            Pineapple Coconut
          </h1>
          <p className="text-[20px] text-[#253237] mb-[70px]">
            Free Shopping On Qualified Orders $35
          </p>
          <button className="bg-[#4FB68D] px-[25px] py-[10px] rounded-md hover:bg-[#253237] font-bold text-white">
            Shop Now
          </button>
        </div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
          <button
            onClick={prev}
            className="h-[50px] w-[50px] rounded-full bg-white hover:bg-[#4FB68D]"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="h-[50px] w-[50px] rounded-full bg-white hover:bg-[#4FB68D]"
          >
            ❯
          </button>
        </div>
        <div className="absolute flex justify-center items-center bottom-[1px] left-1/2 ">
          {slider?.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="text-[90px] cursor-pointer text-[#4FB68D] "
              onClick={() => dotSliding(slideIndex)}
            >
              <h1>.</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
