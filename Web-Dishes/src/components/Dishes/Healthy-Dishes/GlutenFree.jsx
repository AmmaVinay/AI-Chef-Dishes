import React from "react";
import HealthyCard from "./HealthyCard";
import GlutenFreeData from "../../../Data/HeathyDishesData/GlutenFree/GlutenFreeData";

function GlutenFree({ dishType }) {
  const filteredData = dishType ? GlutenFreeData.filter(dish => dish.dishType === dishType) : GlutenFreeData;

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

export default GlutenFree;
