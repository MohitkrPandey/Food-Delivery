import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from "react-redux";
import { cartActions } from "../redux/cartSlice";
import {toast} from 'react-toastify';
const ItemCard = ({ id, name, cat, type, quant, img, price }) => {
  let dispatch=useDispatch();
  return (
    <>
      <div className=" hover:border-2 border-green-300 p-3 bg-white min-h-[400px] w-[300px]  rounded-lg flex flex-col gap-3 shadow-lg">
        <div className="w-[100%] h-[60%] overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="w- full flex justify-between items-center">
          <p className="text-green-500 font-semibold text-lg">₹{price}</p>
          <div className="flex justify-center items-center gap-2 text-green-500 font-semibold">
            {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

            <p>{type}</p>
          </div>
        </div>
       
        <button className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-400 transition-all cursor-pointer font-semibold " onClick={()=>{dispatch(cartActions.AddItems({id,name,img,price,qty:1})),toast.success("Item added to cart") }}>
          Add to Cart
        </button>
      </div>
    </>
  );
};
export default ItemCard;
