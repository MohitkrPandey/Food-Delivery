import { MdFastfood } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";


const NavBar = () => {
  return (
    <>
      <div className="flex justify-between   items-center w-full h-[100px] p-[40px] ">
        <div className="bg-white h-[50px] w-[60px] flex justify-center items-center rounded-sm shadow-md"  >
          <MdFastfood  className="text-3xl text-green-500" />
        </div>
        <form action=""  className="w-[60%] bg-white flex items-center  h-[50px] rounded-md shadow-md gap-1 p-3 "  >
          <IoSearch className="text-[20px] text-green-500" />
          <input type="text" placeholder="search your dish..." className="outline-none"  />
        </form>
        <div className="bg-white h-[50px] w-[60px] flex justify-center items-center rounded-sm shadow-md">
          <LuShoppingBag className="text-3xl text-green-500" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
