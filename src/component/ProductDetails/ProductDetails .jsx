// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/actionCreator/actionCreator";

// Simple review section (local state, replace with backend/API for production)
function ReviewSection({ productId }) {
  const [reviews, setReviews] = React.useState([]);
  const [text, setText] = React.useState("");
  const [rating, setRating] = React.useState(5);

  // Load reviews from localStorage (for demo)
  React.useEffect(() => {
    const saved = localStorage.getItem(`reviews-${productId}`);
    if (saved) setReviews(JSON.parse(saved));
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { text, rating, date: new Date().toLocaleString() };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem(`reviews-${productId}`, JSON.stringify(updated));
    setText("");
    setRating(5);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded mb-2"
          required
        />
        <div className="flex items-center gap-2 mb-2">
          <span>Rating:</span>
          <input
            type="number"
            min={1}
            max={5}
            value={rating}
            onChange={e => setRating(Number(e.target.value))}
            className="border p-1 rounded w-16"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
      </form>
      <div>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="border-b py-2">
              <div className="flex gap-2 items-center">
                <span className="font-bold">Rating: {r.rating}</span>
                <span className="text-xs text-gray-500">{r.date}</span>
              </div>
              <p>{r.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

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
        if (filterData.length > 0) {
          let currentCategory = filterData[0].category;
          let similar = data.filter(
            (similarData) => similarData.category === currentCategory && similarData._id !== productId
          );
          setSimilarData(similar);
        }
      });
  }, [productId]);

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
            {/* Reviews & Ratings Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Reviews & Ratings</h2>
              <ReviewSection productId={details._id} />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Relevant Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {similarData.slice(0, 3).map((product) => (
                  <div
                    key={product._id}
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
                      <p className="text-gray-700">${product.price}</p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => cartStorage(product)}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                        >
                          Buy
                        </button>
                        <a
                          href={`/product/${product._id}`}
                          className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
