import React, { useEffect, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/actionCreator/actionCreator";
import { Link } from "react-router-dom";
import RelevantProducts from "../RelevantProducts/RelevantProducts";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://cyberstore-serverside.vercel.app/api/allProduct")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  // Get unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter and sort products
  let filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.price >= minPrice &&
      p.price <= maxPrice &&
      (p.rating ? p.rating >= rating : true)
  );
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating-desc")
    filtered.sort(
      (a, b) => (b.rating || 0) - (a.rating || 0)
    );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={minPrice}
          min={0}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min Price"
          className="border p-2 rounded w-24"
        />
        <input
          type="number"
          value={maxPrice}
          min={0}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Max Price"
          className="border p-2 rounded w-24"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
        <input
          type="number"
          value={rating}
          min={0}
          max={5}
          onChange={(e) => setRating(Number(e.target.value))}
          placeholder="Min Rating"
          className="border p-2 rounded w-24"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <div key={product._id} className="bg-slate-100 p-4 rounded shadow">
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">${product.price}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src={product.image_url}
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <button onClick={() => dispatch(addToCart(product))}>
                  <BiCartAdd className="min-h-[43px] max-h-[43px] min-w-[43px] max-w-[43px] border rounded-full p-[5px] cursor-pointer hover:bg-lime-400 " />
                </button>
              </div>
              <div className="flex justify-center items-center mt-2">
                <Link
                  to={`/product/${product._id}`}
                  className="product-link border px-[20px] hover:bg-lime-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RelevantProducts />
    </div>
  );
};

export default Shop;
