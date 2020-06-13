import React from 'react';
import PropTypes from 'prop-types';

import '../styles/forecast-summary.css';

const ForecastSummary = ({date, temperatureMax, temperatureMin, description, icon}) => {
return <div className='forecast-summary'>
            <div>
                <span className='date'>{date}</span>
            </div>

            <div>
                <span className='temperatureMax'>{temperatureMax}</span>
            </div>

            <div>
                <span className='temperatureMin'>{temperatureMin}</span>
            </div>

            <div>
                <span className='description'>{description}</span>
            </div>

            <div>
                <span className='icon'>{icon}</span>
            </div>
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