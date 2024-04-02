// HealthyDishCategories.js
import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import HighProtein from '../Healthy-Dishes/High-Protein/HighProtein';
import GlutenFree from '../Healthy-Dishes/Gluten-Free/GlutenFree';
import SugarFree from "../Healthy-Dishes/Sugar-Free/SugarFree";
import Keto from "../Healthy-Dishes/Keto/Keto";
import LowCalories from '../Healthy-Dishes/Low-Calories/LowCalories'
import Vegetables from "../Healthy-Dishes/Vegetables/Vegetables";

function HealthyDishCategories() {
  const [activeTab, setActiveTab] = useState("High Protein");
  const [selectedDishType, setSelectedDishType] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDishTypeChange = (event) => {
    setSelectedDishType(event.target.value === "All" ? null : event.target.value);
  };

  const options = [
    { value: "All", label: "All", color: "" },
    { value: "Veg", label: "Veg", color: "#16b426" },
    { value: "Non-Veg", label: "Non-Veg", color: "#f01010" }
  ];

  return (
    <div className="">
      <div className="flex flex-wrap bg-[#f7f3cd] py-3 z-50 top-0 sticky shadow-lg justify-center flex-row-reverse gap-3">
        <div>
          {["High Protein", "Low Calories", "Gluten Free", "Sugar Free", "Keto", "Vegetables"].map(tabName => (
            <button
              key={tabName}
              className={`px-4 py-2 ${
                activeTab === tabName ? "bg-[#00544f] rounded-[25px] text-white" : "text-black "
              }`}
              onClick={() => handleTabChange(tabName)}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <FormControl>
            <Select 
              value={selectedDishType || "All"}
              onChange={handleDishTypeChange}
              style={{borderRadius: '25px', minWidth: "100px", height: '40px' }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 250,
                    width: 250,
                  },
                },
              }}
              renderValue={(selected) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: options.find(opt => opt.value === selected)?.color, marginRight: '5px' }}></div>
                  {selected}
                </div>
              )}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '15px', height: '15px',borderRadius: '50%', backgroundColor: option.color, marginRight: '5px' }}></div>
                    {option.label}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <div className="w-full"><Vegetables dishType={selectedDishType} /> </div>
        )}
      </div>
    </div>
  );
}

export default HealthyDishCategories;
