import React from "react";
import HealthyCard from '../HealthyCard'
import SugarFreeData from "../../../../Data/HeathyDishesData/SugarFree/SugarFreeData";

function SugarFreeSeeMore() {
return <div>
    <div className="bg-[#f7f3cd]">
        <h1 className="text-lg md:text-2xl lg:text-4xl pt-12 pb-5 text-[#00544f] font-bold text-center">Sugar Free Dishes</h1>
        <div className="flex gap-3 flex-wrap items-stretch justify-center">
            {SugarFreeData.map((dish, index) => (
            <HealthyCard key={index} time={dish.time} title={dish.title} imageUrl={dish.imageUrl} description={dish.description} rating={dish.rating} nutritionalValues={dish.nutritionalValues} dishType={dish.dishType} dishPath={dish.dishPath} />
            ))}
        </div>
    </div>

</div>;
}

export default SugarFreeSeeMore;