import { useSelector } from "react-redux"
import CartCard from "./CartCard";


const CartCards=()=>{
  const foodArry=useSelector((store)=>store.cart);
  return<div className="flex flex-col w-full mt-9 gap-3">
     {foodArry.map((food)=><CartCard key ={food.id} id={food.id} name={food.name} image={food.img} price={food.price} qty={food.qty} />)}  
  
  </div>
}
export default CartCards;
