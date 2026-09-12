import Card from "./Card";
import { categories } from "../Category";
const Cards = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      
      {
      categories.map((val) => (
        <Card
          key={val.id}
          name={val.name}
          category={val.category}
          icon={val.image}
        />
      ))}
    </div>
);
};

export default Cards;
