import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";

const FeaturedProduct = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-[40px]">
      <div className="flex flex-col justify-center items-center min-h-[221px] max-h-[221px]">
        <h2 className="text-[46px] border-b-2 border-gray-500">
          Featured Items
        </h2>
        <p className="text-[16px] mt-[10px]">
          Shop with confidence knowing that our Featured Items are handpicked to
          enhance your shopping experience and provide you with the best value
          for your money.
        </p>
      </div>
      <FeaturedProductCard></FeaturedProductCard>
    </div>
  );
};

export default FeaturedProduct;
