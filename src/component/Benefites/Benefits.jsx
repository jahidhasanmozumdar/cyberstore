const Benefits = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-9 flex gap-20 justify-center items-center flex-col lg:flex-row">
      <div className="min-w-[300px] max-w-[300px] min-h-[114px] max-h-[114px] border border-sky-500">
        <div className="bg-white rounded-lg p-4 flex flex-row justify-center items-center gap-x-[18px]">
          <div>
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-banner-img-1.png"
              alt="Call Center Logo"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Call Center</h2>
            <p className="text-gray-600">(734) 555.1212</p>
          </div>
        </div>
      </div>
      <div className="min-w-[300px] max-w-[300px] min-h-[114px] max-h-[114px] border border-sky-500">
        <div className="bg-white rounded-lg  p-4 flex flex-row justify-center items-center gap-x-[18px]">
          <div>
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-banner-img-2.png"
              alt="Call Center Logo"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Free Delivery</h2>
            <p className="text-gray-600">all amounts over $100</p>
          </div>
        </div>
      </div>
      <div className=" min-w-[300px] max-w-[300px] min-h-[114px] max-h-[114px] border border-sky-500">
        <div className="bg-white rounded-lg p-4 flex flex-row justify-center items-center gap-x-[18px]">
          <div>
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-banner-img-3.png"
              alt="Call Center Logo"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Gift Cards</h2>
            <p className="text-gray-600">SAVE UP TO 20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
