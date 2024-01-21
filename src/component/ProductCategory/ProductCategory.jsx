import React, { useEffect, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/actionCreator/actionCreator";

const categories = ["All Products", "Android", "iPhone"];

const ProductFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-4">
      <div className="mt-1 space-x-2">
        {categories.map((category) => (
          <button
            key={Math.random()}
            className={`p-2 border ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-md hover:bg-blue-300 transition-colors`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.slice(0, 5).map((product, index) => (
        <div
          key={Math.random()}
          className={`${
            index === 0 ? "md:row-span-2 bg-slate-100 p-4" : "bg-slate-100 p-4"
          }`}
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">{product.category}</p>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div
                className={`flex-shrink-0 w-16 h-16 ${
                  index === 0 ? "lg:w-44 lg:h-44" : ""
                }`}
              >
                <img
                  src={product.image_url}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <button onClick={() => dispatch(addToCart(product))}>
                <BiCartAdd className="min-h-[43px] max-h-[43px] min-w-[43px] max-w-[43px] border rounded-full p-[5px] cursor-pointer "></BiCartAdd>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [productsData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("http://localhost:5001/api/allProduct")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All Products"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto my-8">
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductCategory;
