import React from 'react';
import Fade from 'react-reveal/Fade';

const Overview = ({ setOpenOverview, ingredientData, equipmentData }) => {
    return (
        <Fade bottom>
            <div className="fixed top-[56px] left-0 w-full h-[calc(100dvh-56px)] bg-white overflow-y-auto">
                <p>Overview</p>
                <button onClick={() => {
                    document.body.style.overflow = "";
                    setOpenOverview(false);
                }}>Back</button>
            </div>
        </Fade>
    );
}

export default Overview;
