import React from 'react';
import { render } from '@testing-library/react';
import LocationDetails from '../../components/location-details';

describe('LocationDetails Component', () => {
    it('renders the correct location props passed to it', () => {
        const { getByText } = render(
            <LocationDetails city='Manchester' country='UK' />
        );

        expect(getByText('Manchester, UK')).toHaveClass('location-details');
    })

    it('renders the undefined location message with no props passed', () => {
        const { getByText } = render(
            <LocationDetails />
        );

        expect(getByText('No city specified, No country specified')).toHaveClass('location-details');
    })
})