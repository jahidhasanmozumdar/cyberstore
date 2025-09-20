import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelevantProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://cyberstore-serverside.vercel.app/api/allProduct")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 4)); // Show 4 relevant products
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Relevant Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-slate-100 p-4 rounded shadow">
            <h3 className="font-bold">{product.name}</h3>
            <img src={product.image_url} alt={product.name} className="w-full h-24 object-cover mb-2 rounded" />
            <p className="text-gray-700">${product.price}</p>
            <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelevantProducts;
