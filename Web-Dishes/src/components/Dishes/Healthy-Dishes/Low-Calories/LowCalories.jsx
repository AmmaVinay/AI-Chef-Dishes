import React from "react";
import HealthyCard from "../HealthyCard";
import LowCaloriesData from '../../../../Data/HeathyDishesData/LowCalories/LowCaloriesData'
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function LowCalories({ dishType }) {
    const filteredData = dishType ? LowCaloriesData.filter(dish => dish.dishType === dishType) : LowCaloriesData;
  return (
    <div className="bg-[#f7f3cd]">
    <div className='flex justify-end mt-12 mb-6 mr-8'>
        <button onClick={()=> window.scrollTo(0, 0)}>
            <Link to='/HighProteinSeeMore' className=' text-end font-bold text-lg sm:text-xl md:text-2xl'>See More</Link>
        </button>
    </div>
    <Marquee>
        <div className="flex gap-3 flex-wrap items-stretch justify-center">
            {filteredData.map((dish, index) => (
            <HealthyCard key={index} time={dish.time} title={dish.title} imageUrl={dish.imageUrl} description={dish.description} rating={dish.rating} nutritionalValues={dish.nutritionalValues} dishType={dish.dishType} dishPath={dish.dishPath} />
            ))}
        </div>
    </Marquee>
    </div>
  );
}

export default LowCalories;