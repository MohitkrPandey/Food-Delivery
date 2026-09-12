import { food_items } from "../food";
import { FoodContext } from "../store/FoodContext";
import ItemCard from "./ItemCard";
import { useContext } from "react";
const ItemCards = () => {
  const { items, input } = useContext(FoodContext);
  return (
    <>
    
      <div className=" justify-center  my-8 px-15 flex flex-wrap gap-8">

        {
        items.length==0?<div  className="text-2xl text-green-600 font-semibold ">No Such Items Available</div>:
        items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.food_name}
            cat={item.food_category}
            type={item.food_type}
            quant={item.food_quantity}
            img={item.food_image}
            price={item.price}
        
            
          />
        ))}
      </div>
    </>
  );
};

export default ItemCards;
