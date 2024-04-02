 import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 import { CiCircleRemove } from "react-icons/ci";
import Footer from "../../FooterItem/Footer";
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
 
function CreateMenu() {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [mainDishes, setMainDishes] = useState([]);
  const [sideDishes, setSideDishes] = useState([]);
  const [newMainDish, setNewMainDish] = useState('');
  const [newSideDish, setNewSideDish] = useState('');
  const [cookingTime, setCookingTime] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedEquipments, setSelectedEquipments] = useState([]);

  const handleIngredientChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedIngredients(prevItems => [...prevItems, selectedItem]);
  };

  const handleEquipmentChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedEquipments(prevItems => [...prevItems, selectedItem]);
  };

  const incrementTime = () => {
    setCookingTime(cookingTime + 1);
  };

  const decrementTime = () => {
    if (cookingTime > 0) {
      setCookingTime(cookingTime - 1);
    }
  };

  const handleMainDishInputChange = (e) => {
    setNewMainDish(e.target.value);
  };

  const handleSideDishInputChange = (e) => {
    setNewSideDish(e.target.value);
  };

  const addMainDish = () => {
    if (newMainDish.trim() !== '') {
      setMainDishes([...mainDishes, newMainDish]); // Update main dishes with new dish
      setNewMainDish(''); // Clear input field after adding
    }
  };

  const addSideDish = () => {
    if (newSideDish.trim() !== '') {
      setSideDishes([...sideDishes, newSideDish]); // Update side dishes with new dish
      setNewSideDish(''); // Clear input field after adding
    }
  };

  const removeMainDish = (indexToRemove) => {
    setMainDishes(mainDishes.filter((_, index) => index !== indexToRemove));
  };

  const removeSideDish = (indexToRemove) => {
    setSideDishes(sideDishes.filter((_, index) => index !== indexToRemove));
  };
 
  const increaseNumberOfPeople = () => {
    setNumberOfPeople((prevCount) => prevCount + 1);
  };

  const decreaseNumberOfPeople = () => {
    if (numberOfPeople > 0) {
      setNumberOfPeople((prevCount) => prevCount - 1);
    }
  };

  const handleDatePickerClick = () => {
    setShowCalendar(true);
  };
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [countdown, setCountdown] = useState(null);

  const handleInputChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedDateTime) {
        const selectedDate = dayjs(selectedDateTime);
        if (selectedDate.isValid()) {
          const diffInSeconds = selectedDate.diff(dayjs(), 'second');
          if (diffInSeconds > 0) {
            const days = Math.floor(diffInSeconds / (60 * 60 * 24));
            const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
            const seconds = diffInSeconds % 60;
            setCountdown({ days, hours, minutes, seconds });
          } else {
            clearInterval(intervalId);
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [selectedDateTime]);

  return (
    <div className="bg-[#f7f3cd] min-h-screen ">
<div className="relative text-center mb-5">
    <img className="relative h-auto md:h-[90vh] w-full" src="https://media.istockphoto.com/id/2061261654/photo/hands-waiter-and-writing-order-in-restaurant-for-service-hospitality-and-taking-notes-in.jpg?s=612x612&w=0&k=20&c=EO2HH5GcMZ8kdWejHa0pSm7nx6ZdcHuAIZV4B4fOT9Q=" />
    <h1 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[#fff] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 px-4">
        Create A Menu Using The Ingredients You Have
    </h1>
</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center align-items-center md:px-2">
          <div className="flex flex-col space-y-4">
              <div className="flex flex-col mb-4 ">
                  <label htmlFor="meal" className="text-[#00544f] text-lg font-bold mb-3">
                      Select Meal
                  </label>
                    <select id="meal" class="px-5 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black">
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                      <option value="snacks">Snacks</option>
                  </select>
              </div>
              <div className="flex flex-col mb-4">
                  <label htmlFor="cuisine" className="text-[#00544f] text-lg font-bold mb-3">
                      Select Cuisine
                  </label>
                  <select id="cuisine" className="px-5 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black">
                      <option value="indian">Indian</option>
                      <option value="mexican">Mexican</option>
                      <option value="spanish">Spanish</option>
                      <option value="italian">Italian</option>
                  </select>
              </div>
              <div className="flex flex-col mb-4">
                  <label htmlFor="numberOfPeople" className="text-[#00544f] text-lg font-bold mb-3">
                      Number of People
                  </label>
                  <div className="flex justify-center w-52 md:w-36 bg-white rounded-lg p-2 ">
                      <button onClick={decreaseNumberOfPeople} className="px-4 py-2 bg-gray-200 text-black rounded-l-md text-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
                          -
                      </button>
                      <span className="px-4 py-2 text-black text-lg font-semibold">
                          {numberOfPeople}
                      </span>
                      <button onClick={increaseNumberOfPeople} className="px-4 py-2 bg-gray-200 text-black rounded-r-md text-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
                          +
                      </button>
                  </div>
              </div>
      <div className="">
        <h1 className="text-[#00544f] text-lg font-bold mb-3">Set Reminder</h1>
        <div className="flex items-center gap-3">
          <input
            type="datetime-local"
            value={selectedDateTime}
            onChange={handleInputChange}
            className="border-2 border-black rounded-md px-4 py-2"
          />
        </div>
        {countdown && (
          <div>
            <p>Countdown:</p>
            <p>{`${countdown.days} days ${countdown.hours} hours ${countdown.minutes} minutes ${countdown.seconds} seconds`}</p>
          </div>
        )}
      </div>
          </div>

          <div className="flex flex-col space-y-4">
              <div className="flex flex-col mb-4">
                  <label htmlFor="beverages" className="text-[#00544f] text-lg font-bold mb-3">
                      Beverages <span className=" text-red-500">*</span>
                  </label>
                   <select id="beverages" class="px-5 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black">
                      <option value="">Select a Beverage</option>
                      {/* Non-Alcoholic Beverages */}
                      <optgroup label="Non-Alcoholic Beverages">
                          <option value="water">Water</option>
                          <option value="juice">Juice</option>
                          <option value="soda">Soda</option>
                          <option value="iced-tea">Iced Tea</option>
                          <option value="lemonade">Lemonade</option>
                          <option value="coffee">Coffee</option>
                          <option value="tea">Tea</option>
                          <option value="milk">Milk</option>
                          <option value="smoothie">Smoothie</option>
                          <option value="hot-chocolate">Hot Chocolate</option>
                      </optgroup>
                      {/* Alcoholic Beverages */}
                      <optgroup label="Alcoholic Beverages">
                          <option value="beer">Beer</option>
                          <option value="wine">Wine</option>
                          <option value="spirits">Spirits</option>
                          <option value="cocktails">Cocktails</option>
                          <option value="liqueurs">Liqueurs</option>
                          <option value="champagne">Champagne</option>
                          <option value="sake">Sake</option>
                          <option value="cider">Cider</option>
                      </optgroup>
                      {/* Hot Beverages */}
                      <optgroup label="Hot Beverages">
                          <option value="hot-coffee">Hot Coffee</option>
                          <option value="espresso">Espresso</option>
                          <option value="cappuccino">Cappuccino</option>
                          <option value="latte">Latte</option>
                          <option value="hot-tea">Hot Tea</option>
                          <option value="hot-cocoa">Hot Cocoa</option>
                          <option value="mulled-wine">Mulled Wine</option>
                      </optgroup>
                      {/* Cold Beverages */}
                      <optgroup label="Cold Beverages">
                          <option value="iced-coffee">Iced Coffee</option>
                          <option value="cold-brew">Cold Brew</option>
                          <option value="iced-tea">Iced Tea</option>
                          <option value="smoothies">Smoothies</option>
                          <option value="frozen-cocktails">Frozen Cocktails</option>
                          <option value="milkshakes">Milkshakes</option>
                          <option value="iced-chocolate">Iced Chocolate</option>
                      </optgroup>
                      {/* Functional Beverages */}
                      <optgroup label="Functional Beverages">
                          <option value="energy-drinks">Energy Drinks</option>
                          <option value="sports-drinks">Sports Drinks</option>
                          <option value="vitamin-enhanced-water">Vitamin-Enhanced Water</option>
                          <option value="kombucha">Kombucha</option>
                          <option value="coconut-water">Coconut Water</option>
                      </optgroup>
                      {/* Specialty Beverages */}
                      <optgroup label="Specialty Beverages">
                          <option value="bubble-tea">Bubble Tea</option>
                          <option value="boba-tea">Boba Tea</option>
                          <option value="horchata">Horchata</option>
                          <option value="thai-iced-tea">Thai Iced Tea</option>
                          <option value="butterbeer">Butterbeer</option>
                          <option value="arnold-palmer">Arnold Palmer</option>
                      </optgroup>
                  </select>
              </div>
              
              <div className="flex flex-col mb-4">
                  <h1 className="text-[#00544f] text-lg font-bold mb-3">
                      Main Dish <span className="text-red-500">*</span>
                  </h1>
                  <div className="flex flex-wrap gap-3 md:w-64">
                      {mainDishes.map((dish, index) => (
                      <div key={index} className="flex items-center border-2 border-black text-[1rem] font-medium rounded-md px-3 py-2">
                          <span className="flex-grow">{dish}</span>
                          <CiCircleRemove onClick={()=> removeMainDish(index)} className="text-bold text-black cursor-pointer hover:bg-red-200 rounded-full p-1 transition-colors duration-300" size={25} />
                      </div>
                      ))}
                  </div>
                  <input value={newMainDish} onChange={handleMainDishInputChange} type="text" placeholder="Rice" className="px-5 mb-2 mt-1 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black" />
                  <div className="flex justify-center">
                      <button onClick={addMainDish} className="text-[#00544f] font-bold text-lg">Add +</button>
                  </div>
              </div>

              <div className="flex flex-col mb-4">
                  <h1 className="text-[#00544f] text-lg font-bold mb-3">
                      Side Dish <span className="text-red-500">*</span>
                  </h1>
                  <div className="flex flex-wrap gap-3 md:w-64">
                      {sideDishes.map((dish, index) => (
                      <div key={index} className="flex items-center border-2 border-black text-[1rem] font-medium rounded-md px-3 py-2">
                          <span className="flex-grow">{dish}</span>
                          <CiCircleRemove onClick={()=> removeSideDish(index)} className="text-bold text-black cursor-pointer hover:bg-red-200 rounded-full p-1 transition-colors duration-300" size={25} />
                      </div>
                      ))}
                  </div>
                  <input value={newSideDish} onChange={handleSideDishInputChange} type="text" placeholder="Rice" className="px-5 mb-2 mt-1 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black" />
                  <div className="flex justify-center">
                      <button onClick={addSideDish} className="text-[#00544f] font-bold text-lg">Add +</button>
                  </div>
              </div>

              <div className="flex flex-col mb-4">
                  <h1 className="text-xl font-bold text-[#00544f] mb-2">Preferred</h1>
                  <div className="mb-4">
                      <label className="text-lg mb-2 font-semibold text-[#00544f]">Total Cooking Time</label>
                      <div className="relative flex items-center">
                          <button className="p-2 bg-[#00544f] text-white rounded-l-md" onClick={decrementTime}>-</button>
                          <input type="number" value={cookingTime} onChange={(e)=> setCookingTime(parseInt(e.target.value))}
                          className="w-full px-4 py-2 rounded-none border-t border-b border-gray-300 focus:outline-none focus:border-[#00544f] focus:ring-1 focus:ring-[#00544f] focus:ring-opacity-50"
                          placeholder="Enter Total Cooking Time"
                          />
                          <button className="p-2 bg-[#00544f] text-white rounded-r-md" onClick={incrementTime}>+</button>
                          <span className="absolute inset-y-0 right-20 flex items-center text-gray-500">minutes</span>
                      </div>
                  </div>
                  <div className="mb-4 flex flex-col">
                      <label className=" mb-2 text-lg font-semibold text-[#00544f]">Skill Level</label>
                      <select className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#00544f] focus:ring-1 focus:ring-[#00544f] focus:ring-opacity-50">
                          <option disabled selected hidden>Choose Skill Level</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                      </select>
                  </div>
              </div>
          </div>
          
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="ingredients" className="text-[#00544f] text-lg font-bold mb-3">Ingredients</label>
            <select id="ingredients" className="px-5 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black" onChange={handleIngredientChange}>
              <option value="">Select an Ingredient</option>
              <option value="oil">Oil</option>
              <option value="flour">Flour</option>
              <option value="sugar">Sugar</option>
              <option value="salt">Salt</option>
            </select>
            {selectedIngredients.length > 0 && (
              <div>
                <h3>Selected Ingredients:</h3>
                <ul>
                  {selectedIngredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="kitchen-equipments" className="text-[#00544f] text-lg font-bold mb-3">Kitchen Equipments</label>
            <select id="kitchen-equipments" className="px-5 py-2 w-full md:w-64 rounded-md bg-transparent border-2 border-black" onChange={handleEquipmentChange}>
              <option value="">Select a Kitchen Equipment</option>
              <option value="rice-cooker">🍚 Rice Cooker</option>
              <option value="stove">🔥 Stove</option>
              <option value="oven">🥘 Oven</option>
              <option value="mixer">🌀 Mixer</option>
              <option value="knife">🔪 Knife</option>
              <option value="cutting-board">🪓 Cutting Board</option>
              <option value="pots-pans">🍳 Pots and Pans</option>
              <option value="spoons-spatulas">🥄 Spoons and Spatulas</option>
              <option value="measuring-cups">🥄 Measuring Cups</option>
              <option value="mixing-bowls">🥣 Mixing Bowls</option>
              <option value="whisk">🧈 Whisk</option>
            </select>
            {selectedEquipments.length > 0 && (
              <div>
                <h3>Selected Equipments:</h3>
                <ul>
                  {selectedEquipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="flex justify-center py-8">
          <button class="bg-yellow-400 px-6 md:px-16 py-3 md:py-4 text-lg md:text-xl font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
              Save Menu
          </button>
      </div>

      <Footer />
  </div>
  );}

export default CreateMenu;