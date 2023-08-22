const SubBanner = () => {
  return (
    <div
      className="min-h-[107px] min-w-[1400px] max-w-[1400px] mx-auto border border-[#EBEBEB] flex justify-around
     items-center   mt-[70px] mb-[30px] shadow-sm"
    >
      <div className="flex justify-center items-center gap-[10px]">
        <div className="max-h-[45px] max-w-[45px]">
          <img
            src="https://ecolife.posthemes.com/demo1/img/cms/icon_cms1.png"
            alt="postholes"
            className="h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">Free Shipping</h3>
          <p className="text-[14px]">On all orders over $75.00</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[10px]">
        <div className="max-h-[45px] max-w-[45px]">
          <img
            src="https://ecolife.posthemes.com/demo1/img/cms/icon_cms2.png"
            alt="postholes"
            className="h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">Free Returns</h3>
          <p className="text-[14px]">Returns are free within 9 days</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[10px]">
        <div className="max-h-[45px] max-w-[45px]">
          <img
            src="https://ecolife.posthemes.com/demo1/img/cms/icon_cms3.png"
            alt="postholes"
            className="h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">100% Payment Secure</h3>
          <p className="text-[14px]">Your payment are safe with us.</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[10px]">
        <div className="max-h-[45px] max-w-[45px]">
          <img
            src="https://ecolife.posthemes.com/demo1/img/cms/icon_cms4.png"
            alt="postholes"
            className="h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">Support 24/7</h3>
          <p className="text-[14px]">Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
