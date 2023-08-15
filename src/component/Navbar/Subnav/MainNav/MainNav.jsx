import { BsSearch } from "react-icons/Bs";
import { BsCart4 } from "react-icons/Bs";

const MainNav = () => {
  return (
    <div className="min-h-[106px] flex flex-col justify-around items-center md:flex-row lg:flex-row">
      <div className="flex flex-col items-center gap-[10px] md:gap-[35px] lg:gap-[100px] md:flex-row lg:flex-row">
        <div>
          <h2 className="text-[#253237] text-[34px] font-extrabold">EcoLife</h2>
        </div>
        <div>
          <ul className="flex items-center gap-[35px] flex-col md:flex-row lg:flex-row">
            <li className="text-[16px] font-bold text-[#4FB68D] border-b-[2px] border-[#4FB68D] cursor-pointer leading-5	">
              Home
            </li>
            <li
              className="text-[16px] font-bold cursor-pointer hover:border-b-[2px]
             hover:border-[#4FB68D] leading-5	"
            >
              Fresh Food
            </li>
            <li
              className="text-[16px] font-bold cursor-pointer leading-5 hover:border-b-[2px]
             hover:border-[#4FB68D]	"
            >
              Frozen Food
            </li>
            <li
              className="text-[16px] font-bold cursor-pointer leading-5 hover:border-b-[2px]
             hover:border-[#4FB68D]	"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="max-w-[290px] max-h-[46px] hidden sm:flex">
          <form action="" className="w-full h-full relative">
            <input
              type="search"
              className="peer cursor-pointer  z-10 h-10 w-full  rounded-full border bg-transparent pl-12 border-[#4FB68D] outline-none hidden md:flex"
            />
            <BsSearch className="absolute top-[14px] left-[15px] text-[#4FB68D] hidden md:flex"></BsSearch>
          </form>
        </div>
        <div className="flex gap-[30px] justify-center items-center">
          <div className=" justify-center items-center gap-[10px] hidden sm:flex">
            <div className="hidden md:flex">
              <img
                src="https://ecolife.posthemes.com/demo1/img/cms/icon_contact.png"
                alt=""
              />
            </div>
            <div className="hidden md:flex">
              <div className="flex flex-col text-[14px] font-[700px]">
                <h5>Call Us:</h5>
                <span>8881454</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-[20px] md:mt-[0px] justify-center items-center text-[16px] font-[700px] text-[#4FB68D]">
            <button>
              <BsCart4 className="text-[28px] font-[700px]"></BsCart4>
            </button>
            <p>$17.30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
