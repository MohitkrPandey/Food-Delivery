import { RiDeleteBinFill } from "react-icons/ri";
import image1 from "../assets/image1.avif";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";

const CartCard = ({id,name,image,price,qty}) => {
  console.log(qty);
  const dispatch=useDispatch();
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex  justify-between">
      <div className="w-[60%] h-full  flex gap-5 ">
        <div className="w-[60%] h-full  overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex-col w-[40%] h-full gap-5 ">
          <div className="text-lg text-gray-600 font-semibold ">{name}</div>
          <div className="flex h-[50px] w-[110px] bg-slate-400 rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200 cursor-pointer" onClick={()=>dispatch(cartActions.IncrementItems(id))}>
              +
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">
              {qty}
            </span>
            <button className="w-[30%] h-full bg-white justify-center items-center text-green-400  hover:bg-gray-200  cursor-pointer" onClick={()=>(dispatch(cartActions.DecrementItems(id)))}>
              -
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-end gap-6 ">
        <span className=" text-xl font-semibold text-green-400">{price}</span>
        <RiDeleteBinFill className=" w-[30px] h-[30px] text-red-400 " onClick={()=>dispatch(cartActions.RemoveItems(id))} />
      </div>
      
    </div>
  );
};

export default CartCard;
