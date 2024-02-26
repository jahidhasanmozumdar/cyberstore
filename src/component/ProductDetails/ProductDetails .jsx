// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/actionCreator/actionCreator";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const [productDetails, setProductDetails] = useState([]);
  console.log(productDetails);
  const [similarData, setSimilarData] = useState([]);
  console.log(similarData);
  const dispatch = useDispatch();
  const cartStorage = (cart) => {
    dispatch(addToCart(cart));
  };

  useEffect(() => {
    fetch("https://cyberstore-serverside.vercel.app/api/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let filterData = data.filter((datas) => datas._id == productId);
        setProductDetails(filterData);
        let similar = data.filter(
          (similarData) => similarData.category == productDetails.category
        );
        setSimilarData(similar);
      });
  }, []);

  return (
    <div>
      {productDetails.map((details) => (
        <div key={details._id} className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <img
                  src={details.image_url}
                  alt="Product"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <h2 className="text-3xl font-semibold mb-4">{details.name}</h2>
                <p className="text-gray-700 mb-4">{details.description}</p>
                <div className="mb-4">
                  <span className="text-gray-700 font-semibold mr-2">
                    Price:
                  </span>
                  <span className="text-gray-900">${details.price}</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-700 font-semibold mr-2">
                    Category:
                  </span>
                  <span className="text-gray-900">{details.category}</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-700 font-semibold mr-2">Sku:</span>
                  <span className="text-gray-900 ">{details.sku}</span>
                </div>
                <button
                  onClick={() => cartStorage(details)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Relevant Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {similarData.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-gray-900 font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-700">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
