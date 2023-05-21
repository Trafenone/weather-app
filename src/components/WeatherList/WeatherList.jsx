import React from 'react';
import c from './WeatherList.module.scss';
import WeatherItem from "../WeatherItem/WeatherItem";

const WeatherList = ({weathers, currentIndex, setIndex}) => {
    return (
        <div className={c.weathers_wrapper}>
            {weathers.map((w, index) =>
                <WeatherItem key={w.datetime} data={w} setIndex={setIndex} index={index} selectedIndex={currentIndex}/>
            )}
        </div>
    );
};

export default WeatherList;