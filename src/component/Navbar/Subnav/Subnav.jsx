import { HiArrowsRightLeft } from "react-icons/hi2";
import { BiUser } from "react-icons/Bi";
import { GiSelfLove } from "react-icons/Gi";

function Subnav() {
  return (
    <div className="min-h-[41px] bg-[#253237] justify-around items-center  hidden sm:flex">
      <div className="flex justify-center items-center min-h-[21px]">
        <h3 className="text-[13px] text-[#FFFFFF]">
          Welcome you to Ecolife store!
        </h3>
      </div>
      <div className="min-h-[21px]">
        <div>
          <ul className="flex flex-row justify-center items-center gap-[20px] text-[14px] divide-x-[1px] divide-white">
            <li className="text-[#FFFFFF] hover:text-[#36AA82] flex justify-center items-center gap-[5px] px-4 py-1">
              <BiUser></BiUser>
              sign in
            </li>
            <li className="text-[#FFFFFF] hover:text-[#36AA82] flex justify-center items-center gap-[5px] px-4 py-1">
              <HiArrowsRightLeft></HiArrowsRightLeft>
              Compare
            </li>
            <li className="text-[#FFFFFF] hover:text-[#36AA82] flex justify-center items-center gap-[5px] px-4 py-1">
              <GiSelfLove></GiSelfLove>
              Wishlist
            </li>
            <li className="text-[#FFFFFF] hover:text-[#36AA82]  px-4 py-1">
              <div>
                <select className="bg-[#253237] focus:outline-none hover:text-[#36AA82]">
                  <option value="EUR">EUR</option>

                  <option value="USD">USD</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subnav;
