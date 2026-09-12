import { toast } from "react-toastify";
import{useSelector} from "react-redux"
const Prices=()=>{
  const items=useSelector((store)=>store.cart);
  let subtotal=items.reduce((total,item)=>total+item.price*item.qty,0);
  let delivery_fee=20;
  let taxes=subtotal*0.5/100;
  let total=Math.floor(subtotal+delivery_fee+taxes);
  return <>

  <div className="w-full border-t-2 border-b-2 border-grey-400 mt-7 flex flex-col gap-2 p-8 ">
      <div className="w-full justify-between  flex item-center ">
        <span className="text-lg text-gray font-semibold">Subtotal</span>
        <span className="text-green-400 font-semibold text-lg">Rs {subtotal}/-</span>
      </div>
      <div className="w-full justify-between  flex item-center ">
        <span className="text-lg text-gray font-semibold">Delivary Fee</span>
        <span className="text-green-400 font-semibold text-lg">Rs {delivery_fee}/-</span>
      </div>
       
      <div className="w-full justify-between  flex item-center ">
        <span className="text-lg text-gray font-semibold">Taxes</span>
        <span className="text-green-400 font-semibold text-lg">Rs {taxes}/-</span>
      </div>

  </div>
  <div className="w-full   border-grey-400  flex flex-col gap-2 p-9 justify-center items-center">
    <div className="w-full justify-between  flex item-center ">
        <span className="text-lg text-gray font-semibold">Total</span>
        <span className="text-green-400 font-semibold text-lg">Rs {total}/-</span>

        
  </div>

     <button className="w-[80%] p-3 rounded-lg bg-green-500 text-gray-700 hover:bg-green-400 transition-all cursor-pointer font-semibold mt-5" onClick={()=>toast.success("Order Placed!")}>Place Order</button>

  </div>


</>
}

export default Prices;