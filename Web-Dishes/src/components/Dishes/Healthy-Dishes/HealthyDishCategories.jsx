import React, { useState } from "react";
import HighProtein from "./HighProtein";
import LowCalories from "./LowCalories";
import GlutenFree from "./GlutenFree";
import SugarFree from "./SugarFree";
import Keto from "./Keto";
 
function HealthyDishCategories() {
  const [activeTab, setActiveTab] = useState("High Protein");
  const [selectedDishType, setSelectedDishType] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDishTypeChange = (e) => {
    setSelectedDishType(e.target.value === "All" ? null : e.target.value);
  };

  return (
    <div className="">
      <div className="flex flex-wrap bg-[#f7f3cd] py-3 z-50 top-0 sticky shadow-lg justify-center flex-row-reverse gap-3">
        <div>
          {["High Protein", "Low Calories", "Gluten Free", "Sugar Free", "Keto", "Vegetables"].map(tabName => (
            <button
              key={tabName}
              className={`px-4 py-2 focus:outline-none ${
                activeTab === tabName ? "bg-[#00544f] text-white" : "text-black "
              }`}
              onClick={() => handleTabChange(tabName)}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className="">
          <select
          className="appearance-none px-4 py-2 border border-gray-300 rounded-md"
          onChange={handleDishTypeChange}
          >
          <option value="All">All</option>
          <option value="Veg">  
            <div className="bg-[#16b426] border-2 rounded-lg h-4 w-4"></div>
            Veg
          </option>
          <option value="Non-Veg"> 
            <div className="bg-[#f01010] border-2 rounded-lg h-4 w-4"></div>
            Non-Veg
          </option>
        </select>
        </div>
      </div>
      <div className="mt-4 relative">
        {activeTab === "High Protein" && (
          <div className="w-full"><HighProtein dishType={selectedDishType} /></div>
        )}
        {activeTab === "Low Calories" && (
          <div className="w-full"><LowCalories dishType={selectedDishType} /></div>
        )}
        {activeTab === "Gluten Free" && (
          <div className="w-full"><GlutenFree dishType={selectedDishType} /> </div>
        )}
        {activeTab === "Sugar Free" && (
          <div className="w-full"><SugarFree dishType={selectedDishType} /> </div>
        )}
        {activeTab === "Keto" && (
          <div className="w-full"><Keto dishType={selectedDishType} /> </div>
        )}
        {activeTab === "Vegetables" && (
          <div className="bg-gray-200 p-4">Content of Vegetables Tab</div>
        )}
      </div>
    </div>
  );
}

export default HealthyDishCategories;
