import React from "react";

function BrandSection() {
  return (
    <section className="py-8">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Shop by Your <span>Favorite Brand</span>
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 ">
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-3.png"
              alt="Samsung logo"
              className="w-auto h-10"
            />
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-4.png"
              alt="Huawei logo"
              className="w-auto h-10"
            />
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-5.png"
              alt="Bosch logo"
              className="w-auto h-10"
            />
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-6.png"
              alt="Samsonite logo"
              className="w-auto h-10"
            />
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-1.png"
              alt="iPhone logo"
              className="w-auto h-10"
            />
            <img
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-2.png"
              alt="LG logo"
              className="w-auto h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSection;
