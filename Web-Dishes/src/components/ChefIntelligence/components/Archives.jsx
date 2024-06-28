import React from 'react';
import Typewriter from "../components/Typewriter";
import { archived } from "../data/archivedData";
import Card2 from "../../Card2";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Archives({ lightMode }) {
    return (
        <div className="flex flex-col w-full md:w-5/6 mx-auto min-h-[calc(100dvh-56px)] items-center justify-center px-2">
            <Zoom>
                <img src='/assets/CompanyLogo.png' alt="" className="w-36 h-36" />
            </Zoom>
            <Fade bottom>
                <Typewriter text="Chef Intelligence" delay={200} />
            </Fade>
            <Fade bottom>
                <h2 className="mb-2 text-3xl md:text-4xl font-semibold">Archived Recipes</h2>
            </Fade>
            <div className="flex flex-wrap gap-3 justify-center">
                {archived.map((item, i) => (
                    <Fade bottom key={i}>
                        <Card2 
                            title={item.dishName}
                            imageUrl={item.dishImage}
                            time="60"
                            rating={item.rating}
                            dishPath="/chef-intelligence/generatedDish"
                        />
                    </Fade>
                ))}
            </div>
        </div>
    );
}
