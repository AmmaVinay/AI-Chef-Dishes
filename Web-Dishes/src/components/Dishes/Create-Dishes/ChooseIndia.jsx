import React from "react";
import andhra from "../../../../public/StatesDishImage/andhra.png";
import arunachal from "../../../../public/StatesDishImage/arunachal.png";
import assam from "../../../../public/StatesDishImage/assam.png";
import bihar from "../../../../public/StatesDishImage/bihar.png";
import chhattisgarh from "../../../../public/StatesDishImage/chhatisgarh.png";
import goa from "../../../../public/StatesDishImage/goa.png";
import gujarat from "../../../../public/StatesDishImage/gujarat.png";
import haryana from "../../../../public/StatesDishImage/haryana.png";
import himachal from "../../../../public/StatesDishImage/himachal.png";
import jharkhand from "../../../../public/StatesDishImage/jharkhand.png";
import karnataka from "../../../../public/StatesDishImage/karnataka.png";
import kerala from "../../../../public/StatesDishImage/kerala.png";
import madhya from "../../../../public/StatesDishImage/mp.png"; // Assuming this is correct
import maharashtra from "../../../../public/StatesDishImage/maharashtra.png";
//import meghalaya from "../../../../public/StatesDishImage/meghalaya.png"; // Added missing import

import manipur from "../../../../public/StatesDishImage/manipur.png";
import mizoram from "../../../../public/StatesDishImage/mizoram.png";
import nagaland from "../../../../public/StatesDishImage/nagaland.png";
import odisha from "../../../../public/StatesDishImage/odisha.png";
import punjab from "../../../../public/StatesDishImage/punjab.png";
import rajasthan from "../../../../public/StatesDishImage/rajasthan.png";
import sikkim from "../../../../public/StatesDishImage/sikkim.png";
import tamil from "../../../../public/StatesDishImage/tamilNadu.png";
import telangana from "../../../../public/StatesDishImage/telangana.png";
import tripura from "../../../../public/StatesDishImage/tripura.png";
import up from "../../../../public/StatesDishImage/up.png";
import uttarakhand from "../../../../public/StatesDishImage/uttarakhand.png";
import west from "../../../../public/StatesDishImage/westBengal.png";
import delhi from "../../../../public/StatesDishImage/delhi.png";
import jammu from "../../../../public/StatesDishImage/jammu.png";
import ladakh from "../../../../public/StatesDishImage/ladakh.png";

const StateDishInfo = () => [
{
dishImage: andhra,
stateName: "Andhra Pradesh"
},
{
dishImage: arunachal,
stateName: "Arunachal Pradesh"
},
{
dishImage: assam,
stateName: "Assam"
},
{
dishImage: bihar,
stateName: "Bihar"
},
{
dishImage: chhattisgarh,
stateName: "Chhattisgarh"
},
{
dishImage: goa,
stateName: "Goa"
},
{
dishImage: gujarat,
stateName: "Gujarat"
},
{
dishImage: haryana,
stateName: "Haryana"
},
{
dishImage: himachal,
stateName: "Himachal Pradesh"
},
{
dishImage: jharkhand,
stateName: "Jharkhand"
},
{
dishImage: karnataka,
stateName: "Karnataka"
},
{
dishImage: kerala,
stateName: "Kerala"
},
{
dishImage: madhya,
stateName: "Madhya Pradesh"
},
{
dishImage: maharashtra,
stateName: "Maharashtra"
},
{
dishImage: manipur,
stateName: "Manipur"
},
/* {
dishImage: meghalaya,
stateName: "Meghalaya"
},*/
{
dishImage: mizoram,
stateName: "Mizoram"
},
{
dishImage: nagaland,
stateName: "Nagaland"
},
{
dishImage: odisha,
stateName: "Odisha"
},
{
dishImage: punjab,
stateName: "Punjab"
},
{
dishImage: rajasthan,
stateName: "Rajasthan"
},
{
dishImage: sikkim,
stateName: "Sikkim"
},
{
dishImage: tamil,
stateName: "Tamil Nadu"
},
{
dishImage: telangana,
stateName: "Telangana"
},
{
dishImage: tripura,
stateName: "Tripura"
},
{
dishImage: up,
stateName: "Uttar Pradesh"
},
{
dishImage: uttarakhand,
stateName: "Uttarakhand"
},
{
dishImage: west,
stateName: "West Bengal"
},
{
dishImage: delhi,
stateName: "Delhi"
},
{
dishImage: jammu,
stateName: "Jammu and Kashmir"
},
{
dishImage: ladakh,
stateName: "Ladakh"
}
];

function ChooseIndia() {
return (
<div className="bg-[#f7f3cd] px-4 sm:px-6 lg:px-8 pb-12">
    <h2 className="text-lg md:text-2xl font-bold py-8">Choose a State:</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {StateDishInfo().map((India, index) => (
        <div key={index} className="bg-[#00544f] p-5 rounded-2xl shadow-md transform hover:scale-105 transition duration-300">
            <div className="flex justify-center">
                <div className="w-24 h-24 hover:animate-wiggle-more rounded-full overflow-hidden">
                    <img src={India.dishImage} alt={India.stateName} className="w-full h-full object-cover " />
                </div>
            </div>
            <p className="mt-2 text-lg font-semibold text-center text-white">{India.stateName}</p>
        </div>
        ))}
    </div>
 </div>
);
}

export default ChooseIndia;