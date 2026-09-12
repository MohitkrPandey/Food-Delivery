import { MdFastfood } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FoodContext } from "../store/FoodContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { input, setInput } = useContext(FoodContext);
  const { cart, setCart } = useContext(FoodContext);
  const foodArray=useSelector((store)=>store.cart);
  console.log(foodArray);
  return (
    <>
      <div className="flex justify-center gap-7  items-center w-full h-[100px] p-[20px]   md:p-[40px] md:gap-50  ]">
        <div className="bg-white h-[55px] w-[65px] flex justify-center items-center rounded-sm shadow-md">
          <MdFastfood className="text-3xl text-green-500" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="w-[40%] bg-white flex items-center  h-[50px] rounded-md shadow-md gap-1 p-3 md:w-[70%]"
        >
          <IoSearch className="text-[20px] text-green-500 shrink-0" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="search your dish..."
            className="outline-none min-w-0 text-[16px] md:text-[20px]"
            value={input}
          />
        </form>
        
        <div
          className="bg-white h-[55px] w-[65px] flex justify-center items-center rounded-sm shadow-md relative  cursor-pointer "
          onClick={() => setCart(true)}
        >
          <span className="absolute text-green-600 text-[13px] font-semibold top-0 right-2 bottom-0 ">
            {foodArray.length}
          </span>
          <LuShoppingBag className="text-3xl text-green-500 " />
        </div>
        </div>
     
    </>
  );
};

export default NavBar;
