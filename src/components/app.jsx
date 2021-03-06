import React, { useState, useEffect } from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import Axios from 'axios';

import '../styles/app.css';

const App = () => {
    const [selectedDate, setSelectedDate] = useState(0);
    const [forecasts, setForecasts] = useState([]);
    const [location, setLocation] = useState({city: "", country: ""});

    const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

    useEffect(() => {
        Axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
          .then((response) => {
            setForecasts(response.data.forecasts);
            setLocation(response.data.location);
          })
          .catch((error) => {
            console.log(error);
          })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    }

    const handleLocationSearch = (location) => {
        Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${location}`)
          .then((response) => {
            setForecasts(response.data.forecasts);
            setLocation(response.data.location);

            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
    }

    return <div className='forecast'>
        <LocationDetails 
            city={location.city} 
            country={location.country} 
        />
        <SearchForm onSearchButtonPress={handleLocationSearch}/>
        <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect}/>
        {
            selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
        }
    </div>
}

export default App;