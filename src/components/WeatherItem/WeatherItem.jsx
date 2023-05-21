import React from 'react';
import c from './WeatherItem.module.scss';
import {info} from "../../utils/datetime";

const WeatherItem = ({data, index, selectedIndex, setIndex}) => {

    const [dayOfWeek, dayOfMonth, month] = info(data.ts);

    const img = {
        backgroundImage: `url('/images/${data.weather.icon}.png')`
    }

    return (
        <div
            onClick={() => setIndex(index)}
            className={selectedIndex === index ? [c.item_wrapper, c.item_current].join(' ') : c.item_wrapper}
        >
            <div className={c.date}>
                <div>{dayOfWeek}</div>
                <div>{dayOfMonth}</div>
                <div>{month}</div>
            </div>
            <div className={c.icon} style={img}></div>
            <div className={c.temperature}>
                {data.temp}°C
            </div>
        </div>
    );
};

export default WeatherItem;