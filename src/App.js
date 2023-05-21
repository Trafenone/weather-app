import './styles/App.scss';
import React from "react";
import Search from "./components/SearchForm/Search";
import WeatherPreview from "./components/WeatherPreview/WeatherPreview";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import {useFetching} from "./hooks/useFetching";
import WeatherService from "./API/WeatherService";
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
    const [location, setLocation] = React.useState('Kyiv');
    const [weather, setWeather] = React.useState(null);
    const [index, setIndex] = React.useState(0);

    const [fetchWeathers, error] = useFetching(async () => {
        const response = await WeatherService.getAll(location);
        setWeather(response.data);
    });

    React.useEffect(() => {
        fetchWeathers().then(r => r);
    }, [location]);

    function handleSearch(value) {
        setLocation(value);
    }

    function handleSet(value) {
        setIndex(value);
    }

    return (
        <div className="App">
                <div className='search-box-up'>
                    <Search search={handleSearch}/>
                </div>

                {error &&
                    <h1 style={{color: 'red'}}>Error: {error}</h1>
                }

                {weather &&
                    <div className='weather'>
                        <div className='weather_info'>
                            <WeatherPreview data={weather} i={index}/>
                            <WeatherDetail data={weather} i={index}/>
                        </div>
                        <WeatherList weathers={weather.data} currentIndex={index} setIndex={handleSet}/>
                    </div>
                }
        </div>
    );
}

export default App;
