import { BiCartAdd, BiSolidStar, BiStar } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";

const FeaturedProductCard = ({ user }) => {
  const { name, image_url, price } = user;
  console.log(user);

  return (
    <div className="">
      <div className="min-h-[417px] max-h-[417px] min-w-[310px] max-w-[310px] border border-sky-500 px-[5px]">
        <div className="flex justify-between items-center ">
          <p>Laptop & Tablet</p>
          <p>
            <BsHeart></BsHeart>
          </p>
        </div>
        <div className="min-h-[250px] max-h-[250px] min-w-[287px] max-w-[287px] flex justify-center">
          <img src={image_url} alt="" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex min-h-[12px] max-h-[12px]">
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiStar></BiStar>
            <BiStar></BiStar>
          </div>
          <div>
            <h3 className="text-[14px]">{name}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h5 className="text-[18px]">$ {price}</h5>
            <BiCartAdd className="min-h-[43px] max-h-[43px] min-w-[43px] max-w-[43px] border rounded-full p-[5px] cursor-pointer "></BiCartAdd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
