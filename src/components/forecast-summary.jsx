import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';


import '../styles/forecast-summary.css';

const ForecastSummary = ({date, temperatureMax, temperatureMin, description, icon, onForecastSelect}) => {
return <div className='forecast-summary'>
            <div>
                <span className='date' data-testid='date-id-formatted'>{                    
                    Moment.unix(date).format('ddd Do MMM')
                }</span>
            </div>

            <div>
                <span className='temperatureMax' data-testid='temperature-max'>{temperatureMax}</span>
            </div>

            <div>
                <span className='temperatureMin' data-testid='temperature-min'>{temperatureMin}</span>
            </div>

            <div>
                <span className='description' data-testid='description-id'>{description}</span>
            </div>

            <div>
                <WeatherIcon name='owm' iconId={icon} flip='horizontal' rotate='90' data-testid='icon-id' className='icon'/>
            </div>
            <button value={date} onClick={() => {onForecastSelect(date)}}>
                More Details
            </button>
        </div>
}

ForecastSummary.propTypes = {
    date: PropTypes.string,
    temperatureMax: PropTypes.string,
    temperatureMin: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string
}

ForecastSummary.defaultProps = {
    date: '0000000000000',
    temperatureMax: '0',
    temperatureMin: '0',
    description: 'None passed',
    icon: 'None passed'
}

export default ForecastSummary;