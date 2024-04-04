import React from "react";
import Card2 from "../Card2";
import TopDishesData from '../../Data/Seasonal-Top-Dishes/TopDishesData';

function TopDishes() {
    return <div className="bg-[#f7f3cd]">
    <h1 className="py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black">Top Dishes</h1>
    <div className="flex flex-wrap justify-center ">
        {TopDishesData.map((item, index) => (
           <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
        ))}
    </div>


</div>;
}

export default TopDishes;