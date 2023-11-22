import React from "react";

const EcommerceBanner = () => {
  return (
    <div className=" bg-slate-900 flex flex-col justify-between items-center md:flex-row  mt-3 text-start ">
      {/* Text Part */}
      <div className="text-white w-1/2 md:ml-[150px] mb-4">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          This is Our Store! <br /> Together We Shine.
        </h2>
        <p className="text-sm md:text-lg">
          Get up to 50% off on selected items. <br /> Limited time offer.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-2xl">
          Shop Now
        </button>
      </div>

      {/* Image Part */}
      <div className="carousel w-1/2">
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-img-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-img-2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-img-3.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceBanner;
