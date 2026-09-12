import { RxCross2 } from "react-icons/rx";
import { FoodContext } from "../store/FoodContext";
import { useContext } from "react";
import Prices from "./Prices";
import CartCards from "./CartCards";
import { useSelector } from "react-redux";

const Cart = () => {
  const items=useSelector((store)=>store.cart);
  const { cart, setCart } = useContext(FoodContext);
  return (
    <>
      <div
        className={` w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 ${cart ? "translate-x-0" : "translate-x-full "} transition-all duration-500 overflow-auto overscroll-contain`}
      >
        <header className="flex justify-between ">
          <span className="text-green-400 text-[18px] font-semibold ">
            Order items
          </span>
          <RxCross2
            className="w-[20px] h-[20px] text-green-400  text-[18px] font-semibold cursor-pointer"
            onClick={() => setCart(false)}
          />
        </header>
        <CartCards />
       <div className="flex flex-col justify-center"> 
       {
       items.length>0?
        <Prices></Prices>:<div className="text-2xl text-green-600 font-semibold "  >Cart is empty!</div>
        
       }
       </div>
      </div>
    </>
  );
};

export default Cart;
