import React from "react";
import Card2 from "../../Card2";
import QuickDishesRecommendedData from "../../../Data/QuickDishesRecommendedData/QuickDishesRecommendedData";

function SuggestedRandomQuickDishes() {
return <div className="bg-[#f7f3cd]">
    <div className="flex flex-wrap justify-center ">
        {QuickDishesRecommendedData.map((dish, index) => (
        <Card2 key={index} title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
        ))}
    </div>


</div>;
}

export default SuggestedRandomQuickDishes;