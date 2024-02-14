import { BiCartAdd, BiSolidStar, BiStar } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/actionCreator/actionCreator";
import { Link } from "react-router-dom";

const FeaturedProductCard = ({ user }) => {
  const { name, image_url, price, category } = user;
  const dispatch = useDispatch();
  const cartStorage = (cart) => {
    dispatch(addToCart(cart));
  };

  return (
    <div className="custom-card-container">
      <div className="min-h-[417px] max-h-[417px] min-w-[310px] max-w-[310px] border border-sky-500 px-[5px]">
        <div className="flex justify-between items-center">
          <p>{category}</p>
          <p>
            <BsHeart />
          </p>
        </div>
        <div className="min-h-[250px] max-h-[250px] min-w-[287px] max-w-[287px] flex justify-center">
          <img src={image_url} alt="" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex min-h-[12px] max-h-[12px]">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiStar />
            <BiStar />
          </div>
          <div>
            <h3 className="text-[14px]">{name}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h5 className="text-[18px]">$ {price}</h5>
            <button
              onClick={() => cartStorage(user)}
              className="custom-cart-button hover:bg-lime-400 hover:rounded-full"
            >
              <BiCartAdd className="min-h-[43px] max-h-[43px] min-w-[43px] max-w-[43px] border rounded-full p-[5px] cursor-pointer" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to={`/product/${user._id}`}
              className="product-link border px-[40px] hover:bg-lime-500"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
