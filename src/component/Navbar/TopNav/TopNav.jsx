import { BiSolidLocationPlus } from "react-icons/bi";
// import { MdOutlineSpeed } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";

const TopNav = () => {
  return (
    <nav>
      <div className="max-h-[44px] bg-black text-white ">
        <div className="hidden xl:flex justify-between items-center  text-[14px] lg:min-w-[1100px] lg:max-w-[1100px] mx-auto">
          <div className="flex gap-[21px]">
            <button>SUPER DEALS</button>
            <button>FEATURED BRANDS</button>
            <button>TRENDING STYLES</button>
            <button>GIFT CARDS</button>
          </div>
          <div className="flex gap-[21px]">
            <button className="flex justify-center items-center gap-[2px]">
              <BiSolidLocationPlus></BiSolidLocationPlus>
              STORE LOCATOR
            </button>
            <button className="flex justify-center items-center gap-[2px] ">
              {/* <MdOutlineSpeed></MdOutlineSpeed> */}
              TRACK YOUR ORDER
            </button>
            <button className="flex justify-center items-center gap-[2px]">
              {/* <CgProfile></CgProfile> */}
              MY ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
