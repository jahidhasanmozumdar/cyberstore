import { useEffect, useState } from "react";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import { useSelector } from "react-redux";

const FeaturedProduct = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch data when the component mounts
    fetch("http://localhost:5001/api/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="max-w-[1300px] mx-auto mt-[40px] flex flex-col justify-center items-center">
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
      <div>
        {error ? (
          <p>Error Massage:{error.message}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((user) => (
              <FeaturedProductCard
                key={user._id}
                user={user}
              ></FeaturedProductCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
