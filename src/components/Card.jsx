import { useContext } from "react";
import { FoodContext } from "../store/FoodContext";

const Card = ({ name, category, icon }) => {
  const { filter } = useContext(FoodContext);
  return (
    <div
      onClick={() => filter(category)}
      className=" rounded-md shadow-xl gap-4 w-33 bg-white h-35 flex flex-col
   p-5 hover:bg-green-200 transition-all duration-200 cursor-pointer"
    >
      <span className="  text-[50px] text-green-600">{icon}</span>
      <h3 className=" text-grey-700 font-bold">{name}</h3>
    </div>
  );
};

export default Card;
