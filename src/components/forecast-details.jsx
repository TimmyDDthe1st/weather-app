import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


import '../styles/forecast-details.css';

const ForecastDetails = ({ forecast }) => {
const { date, temperature, humidity, wind,  } = forecast;
return <div className='forecast-summary'>
            <div>
                <span className='date' data-testid='date-id-formatted'>{                    
                    Moment.unix(date).format('ddd Do MMM')
                }</span>
            </div>

            <div>
                <span className='temperatureMax' data-testid='temperature-max'>{temperature.max}</span>
            </div>

            <div>
                <span className='temperatureMin' data-testid='temperature-min'>{temperature.min}</span>
            </div>

            <div>
                <span className='humidity' data-testid='humidity'>{humidity}</span>
            </div>

            <div>
            <span className='wind' data-testid='wind'>{`Wind: ${wind.speed}/${wind.direction}`}</span>
            </div>
        </div>
}

ForecastDetails.propTypes = {
    date: PropTypes.string,
    temperatureMax: PropTypes.string,
    temperatureMin: PropTypes.string,
    humidity: PropTypes.string,
    wind: PropTypes.string
}

ForecastDetails.defaultProps = {
    date: '0000000000000',
    temperatureMax: '0',
    temperatureMin: '0',
    humidity: 'None passed',
    wind: 'None passed'
}

export default ForecastDetails;