import React from 'react';
import c from './WeatherDetail.module.scss';

const WeatherDetail = ({data, i}) => {
    const directionWind = {
        transform: `rotate(${data.data[i].wind_dir}deg)`
    }

    return (
        <div className={c.wrapper}>
            <div className={c.temperature_header}>
                Temperature
            </div>
            <div className={c.temperature_wrapper}>
                <div className={c.temperature_item}>
                    <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>temperature-arrow-up</title> <path d="M12.75 6.008c0-6.246-9.5-6.246-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM8 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.111-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029c0 0.014 0.006 0.024 0.008 0.038 0.016 0.19 0.101 0.358 0.23 0.479l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM8.75 21.367v-15.367c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 15.367c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM30.531 9.47l-6-6c-0.025-0.025-0.064-0.017-0.092-0.038-0.052-0.041-0.089-0.099-0.152-0.125-0.050-0.013-0.108-0.020-0.168-0.020-0.010 0-0.020 0-0.030 0.001l0.001-0c-0.041-0.009-0.088-0.014-0.136-0.014-0.004 0-0.008 0-0.012 0h0.001c-0.184 0.006-0.351 0.079-0.475 0.197l0-0-5.999 6c-0.135 0.136-0.218 0.322-0.218 0.528 0 0.414 0.336 0.75 0.75 0.75 0.206 0 0.393-0.083 0.529-0.218l4.719-4.72v22.189c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-22.188l4.719 4.719c0.136 0.135 0.323 0.218 0.529 0.218 0.415 0 0.751-0.336 0.751-0.751 0-0.206-0.083-0.393-0.218-0.528l0 0z"></path> </g></svg>
                    Max: {data.data[i].max_temp}°C
                </div>
                <div className={c.temperature_item}>
                    <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>temperature-arrow-down</title> <path d="M12.75 6.008c0-6.246-9.5-6.246-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM8 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.111-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029c0 0.014 0.006 0.024 0.008 0.038 0.016 0.19 0.101 0.358 0.23 0.479l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM8.75 21.367v-1.367c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 1.367c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM30.531 21.469c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-4.719 4.719v-22.188c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 22.189l-4.719-4.721c-0.136-0.136-0.324-0.22-0.531-0.22-0.415 0-0.751 0.336-0.751 0.751 0 0.207 0.084 0.395 0.22 0.531v0l5.999 6c0.136 0.135 0.324 0.219 0.531 0.219h0c0.104-0.001 0.202-0.021 0.292-0.059l-0.005 0.002c0.062-0.026 0.098-0.083 0.149-0.123 0.029-0.021 0.069-0.013 0.095-0.039l6-6c0.135-0.136 0.218-0.324 0.218-0.531s-0.083-0.395-0.218-0.531l0 0z"></path> </g></svg>
                    Min: {data.data[i].min_temp}°C
                </div>
            </div>
            <hr/>
           <div className={c.other_wrapper}>
               <div className={c.humidity}>
                   <svg fill="#000000" width="16px" height="16px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"><path d="M12,22c2.579,0,4-1.35,4-3.8,0-3.243-3.237-5.871-3.375-5.981a1,1,0,0,0-1.25,0C11.237,12.329,8,14.957,8,18.2,8,20.65,9.421,22,12,22Zm0-7.639A6.153,6.153,0,0,1,14,18.2c0,1.112-.335,1.8-2,1.8s-2-.688-2-1.8A6.153,6.153,0,0,1,12,14.361ZM6.625,2.219a1,1,0,0,0-1.25,0C5.237,2.329,2,4.957,2,8.2,2,10.65,3.421,12,6,12s4-1.35,4-3.8C10,4.957,6.763,2.329,6.625,2.219ZM6,10c-1.665,0-2-.688-2-1.8A6.153,6.153,0,0,1,6,4.361,6.153,6.153,0,0,1,8,8.2C8,9.312,7.665,10,6,10ZM18.625,2.219a1,1,0,0,0-1.25,0C17.237,2.329,14,4.957,14,8.2c0,2.45,1.421,3.8,4,3.8s4-1.35,4-3.8C22,4.957,18.763,2.329,18.625,2.219ZM18,10c-1.665,0-2-.688-2-1.8a6.153,6.153,0,0,1,2-3.839A6.153,6.153,0,0,1,20,8.2C20,9.312,19.665,10,18,10Z"></path></g></svg>
                   Humidity {data.data[i].rh}%
               </div>
               <div className={c.pressure}>
                   <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294" stroke="#222222" stroke-linecap="round"></path> <path d="M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z" stroke="#222222"></path> <path d="M12 6V8" stroke="#222222" stroke-linecap="round"></path> <path d="M5.63599 8.63574L7.0502 10.05" stroke="#222222" stroke-linecap="round"></path> <path d="M18.364 8.63574L16.9498 10.05" stroke="#222222" stroke-linecap="round"></path> <path d="M20.6934 17.3291L18.7615 16.8115" stroke="#222222" stroke-linecap="round"></path> <path d="M3.30664 17.3291L5.23849 16.8115" stroke="#222222" stroke-linecap="round"></path> </g></svg>
                   Pressure {data.data[i].pres} mb
               </div>
               <div className={c.precipitation}>
                   <svg width="16px" height="16px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8.423-3a.923.923 0 00-.923.923v.385a1 1 0 11-2 0v-.385A2.923 2.923 0 019.423 5H10c1.941 0 3.5 1.591 3.5 3.516 0 .927-.48 1.8-1.276 2.29l-1.7 1.046a1 1 0 01-1.048-1.704l1.7-1.046a.691.691 0 00.324-.586C11.5 7.679 10.82 7 10 7h-.577zm.587 8a1 1 0 100-2H10a1 1 0 100 2h.01z"></path> </g></svg>
                   Probability of Precipitation {data.data[i].pop}%
               </div>
           </div>
            <hr/>
            <div className={c.wind_header}>
                Wind
            </div>
            <div className={c.wind_direction}>
                Direction: {data.data[i].wind_cdir_full}
                <svg className={c.svg_icon} style={directionWind} width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.624"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-up"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7 7.5 12 2.5 17 7.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" x1="12" x2="12" y1="21.3" y2="4.8"></line> </g> </g> </g> </g></svg>
            </div>
            <div className={c.wind_speed}>
                <div>Speed {data.data[i].wind_spd} m/s</div>
                <div>Gust speed {data.data[i].wind_gust_spd} m/s</div>
            </div>
        </div>
    );
};

export default WeatherDetail;