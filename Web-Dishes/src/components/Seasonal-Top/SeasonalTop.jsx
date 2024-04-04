import React, { useState } from 'react';
import Card2 from '../Card2';
import SeasonalDishesData from '../../Data/Seasonal-Top-Dishes/SeasonalDishesData'
import TopDishesData from '../../Data/Seasonal-Top-Dishes/TopDishesData';
import Fade from 'react-reveal/Fade';
import 'animate.css/animate.min.css';
import Marquee from 'react-fast-marquee';
import { useSpring, animated } from 'react-spring';
import Flip from 'react-reveal/Flip'; // Make sure Flip is imported
import { Link } from 'react-router-dom';

const SeasonalTop = () => {
  const [animate, setAnimate] = useState(true); // Define and initialize animate state

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="text-zinc-800 bg-[#f7f3cd] text-center py-16">
      {/* SEASONAL DISHES */}
      <Fade bottom cascade>
        <div className="pb-8 pt-6">
          <h1 className='text-center text-lg md:text-3xl text-[#00544f] font-semibold '>Seasonal Dishes</h1>
          <div className='flex justify-end mr-8'>
            <button onClick={() => window.scrollTo(0, 0)}>
              <Link to='/SeasonalDishes' className=' text-end font-bold text-lg sm:text-xl md:text-2xl'>See More</Link>
            </button>
          </div>
        </div>

      </Fade>
      <Marquee>
        <Fade bottom cascade duration={800}>
          <div className="flex gap-3 overflow-hidden flex-wrap items-center justify-center">
            {SeasonalDishesData.map((item, index) => (
              <Flip key={index} cascade left>
                <animated.div style={fadeIn}>
                  <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
                </animated.div>
              </Flip>
            ))}
          </div>
        </Fade>
      </Marquee>

      {/* TOP DISHES */}
      <Fade bottom cascade>
        <div className="pb-8 pt-12">
          <h1 className='text-center text-lg md:text-3xl text-[#00544f] font-semibold '>Top Dishes</h1>
          <div className='flex justify-end mr-8'>
            <button onClick={() => window.scrollTo(0, 0)}>
              <Link to='/TopDishes' className=' text-end font-bold text-lg sm:text-xl md:text-2xl'>See More</Link>
            </button>
          </div>
        </div>

       </Fade>
      <Marquee>
        <Fade bottom cascade when={animate}>
          <div className="flex flex-wrap gap-2 overflow-hidden items-center justify-center">
            {TopDishesData.map((item, index) => (
              <Flip key={index} cascade left>
                <animated.div style={fadeIn}>
                  <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
                </animated.div>
              </Flip>
            ))}
          </div>
        </Fade>
      </Marquee>
    </div>
  );
};

export default SeasonalTop;
