import React from 'react';
import { render } from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary';

describe('Forecast Summary', () => {
    it("renders correctly", () => {
        const { asFragment } = render(
          <ForecastSummary
            date='mockDate'
            temperature="mockTemperature"
            description="mockDescription"
            icon="mockIcon"
          />
        );
    
        expect(asFragment).toMatchSnapshot();
      });

it("renders the correct props", () => {
    const { getByText } = render(
      <ForecastSummary
        date="mockDate"
        temperatureMax="mockMaxTemperature"
        temperatureMin="mockMinTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    );

    expect(getByText("mockDate")).toHaveClass("date");
    expect(getByText("mockMaxTemperature")).toHaveClass("temperatureMax");
    expect(getByText("mockMinTemperature")).toHaveClass("temperatureMin");
    expect(getByText("mockDescription")).toHaveClass("description");
    expect(getByText("mockIcon")).toHaveClass("icon");
  });
})