import React from 'react';
import c from './WeatherPreview.module.scss';
import {formattedDate, time} from '../../utils/datetime';

const WeatherPreview = ({data, i}) => {
    return (
        <div className={c.wrapper}>
            <div className={c.city}>{data.city_name}, {data.country_code}</div>
            <div className={c.date}>{formattedDate(data.data[i].ts)}</div>
            <img src={`/images/${data.data[i].weather.icon}.png`} alt=''/>
            <div className={c.description}>
                {data.data[0].weather.description}
            </div>
            <div className={c.temperature}>{Math.ceil(data.data[i].temp)}°C</div>
            <div className={c.sun}>
                <div>Sunrise: {time(data.data[i].sunrise_ts)}</div>
                <div>Sunset: {time(data.data[i].sunset_ts)}</div>
            </div>
        </div>
    );
};

export default WeatherPreview;