import React from 'react';
import PropTypes from 'prop-types';

import '../styles/location-details.css';

const LocationDetails = ({city, country}) => {
    return <h1 className='location-details'>{`${city}, ${country}`}</h1>
}

LocationDetails.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string
}

LocationDetails.defaultProps = {
    city: 'No city specified',
    country: 'No country specified'
}

export default LocationDetails;