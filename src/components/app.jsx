import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.css';

const App = ({location: {city, country}, forecasts}) => {
    return <div className='forecast'>
        <LocationDetails 
            city={city} 
            country={country} 
        />
        <ForecastSummaries forecasts={forecasts}/>
    </div>
}

App.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
}

export default App;