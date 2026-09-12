import { createContext } from "react";
import { food_items } from "../food";
import {useState,useEffect} from "react";
export const FoodContext = createContext();

const FoodProvider = ({ children }) => {

  const [items,setItems]=useState(food_items);
  const [input,setInput]=useState("");
  const [cart ,setCart]=useState(false);
  
  useEffect(()=>{
    let filterItems=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
    setItems(filterItems);
    

  },[input])
  const filter=(category)=>{

    if(category==='All'){
      setItems(food_items);
    }
    else {
      const newItems= food_items.filter((item)=>item.food_category===category);
      setItems(newItems);
    }
     
  }
  return <FoodContext.Provider value={{items,filter,input,setInput,cart ,setCart}}>{children}</FoodContext.Provider>;
};

export default FoodProvider;
