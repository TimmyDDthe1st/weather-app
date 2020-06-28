import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';

import '../styles/forecast-summaries.css';

const ForecastSummaries = ({forecasts, onForecastSelect}) => (
  <div className="forecast-summaries">
      {
        forecasts.map((forecast, key) => (
            <ForecastSummary
                key={forecast.date}
                date={forecast.date}
                temperatureMax={forecast.temperature.max} 
                temperatureMin={forecast.temperature.min}
                description={forecast.description}
                icon={forecast.icon}
                onForecastSelect={onForecastSelect}
            />
          ))
      }
  </div>
);

ForecastSummary.propTypes = {
    forecasts: PropTypes.array,
}

export default ForecastSummaries;