import React from 'react';
import { render } from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary';

describe('Forecast Summary', () => {
    it("renders correctly", () => {
        const { asFragment } = render(
          <ForecastSummary
            date='1592460760'
            temperature="mockTemperature"
            description="mockDescription"
            icon="800"
          />
        );
    
        expect(asFragment).toMatchSnapshot();
      });

it("renders the correct props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date='1592460760'
        temperatureMax="mockMaxTemperature"
        temperatureMin="mockMinTemperature"
        description="mockDescription"
        icon="800"
      />
    );

    expect(getByTestId("date-id-formatted")).toHaveClass("date");
    expect(getByText("mockMaxTemperature")).toHaveClass("temperatureMax");
    expect(getByText("mockMinTemperature")).toHaveClass("temperatureMin");
    expect(getByText("mockDescription")).toHaveClass("description");
    expect(getByTestId("icon-id")).toHaveClass("icon");
  });

  it("renders the correct date format", () => {
    const { getByText } = render(
      <ForecastSummary
        date='1592460760'
        temperatureMax="mockMaxTemperature"
        temperatureMin="mockMinTemperature"
        description="mockDescription"
        icon="800"
      />
    );

    expect(getByText("Thu 18th Jun")).toHaveClass("date");
  });
})