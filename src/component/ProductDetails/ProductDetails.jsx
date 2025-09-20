

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://cyberstore-serverside.vercel.app/api/allProduct")
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        const found = data.find(p => p._id === productId);
        setProduct(found);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div className="flex justify-center items-center mt-8"><span className="loader" /></div>;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!product) return <div className="text-center mt-8">Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-full md:w-80 h-80 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <img src={product.image_url} alt={product.name} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-xl text-lime-600 font-semibold mb-2">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-sm text-gray-500 mb-1">Category: {product.category}</div>
          <div className="text-sm text-gray-500 mb-1">SKU: {product.sku}</div>
        </div>
        <button className="mt-4 px-6 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 font-semibold transition">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
