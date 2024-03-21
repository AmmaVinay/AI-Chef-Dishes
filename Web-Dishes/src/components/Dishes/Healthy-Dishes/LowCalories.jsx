import React from "react";
import HealthyCard from "./HealthyCard";
import LowCaloriesData from "../../../Data/HeathyDishesData/LowCalories/LowCaloriesData";

function LowCalories({ dishType }) {
    const filteredData = dishType ? LowCaloriesData.filter(dish => dish.dishType === dishType) : LowCaloriesData;
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

export default LowCalories;
