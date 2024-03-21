import React from "react";
import HealthyCard from "./HealthyCard";
import HighProteinData from "../../../Data/HeathyDishesData/HighProtein/HighProteinData";

function HighProtein({ dishType }) {
   const filteredData = dishType ? HighProteinData.filter(dish => dish.dishType === dishType) : HighProteinData;

  return (
    <div className="bg-[#f7f3cd]">
      <div className="flex gap-3 flex-wrap items-stretch justify-center">
        {filteredData.map((dish, index) => (
          <HealthyCard
            key={index}
            time={dish.time}
            title={dish.title}
            imageUrl={dish.imageUrl}
            description={dish.description}
            rating={dish.rating}
            nutritionalValues={dish.nutritionalValues}
            dishType={dish.dishType}
          />
        ))}
      </div>
    </div>
  );
}

export default HighProtein;
