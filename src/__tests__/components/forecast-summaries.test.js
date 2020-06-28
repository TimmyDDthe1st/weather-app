import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastSummaries from "../../components/forecast-summaries";

afterEach(cleanup);

describe("ForecastSummaries", () => {
  const forecasts = [
    {
      date: 1592460760,
      description: "date1",
      icon: "800",
      temperature: {
        max: 800,
      },
    },
    {
      date: 1592457160,
      description: "date2",
      icon: "800",
      temperature: {
        max: 777,
      },
    },
  ];

  it("renders correctly to match ForecastSummaries snapshot", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);

    expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct amount of ForecastSummary component props", () => {
   const { getAllByTestId } = render(<ForecastSummaries forecasts={forecasts} />);

   expect(getAllByTestId('date-id-formatted')).toHaveLength(2);
   expect(getAllByTestId('temperature-max')).toHaveLength(2);
   expect(getAllByTestId('temperature-min')).toHaveLength(2);
   expect(getAllByTestId('description-id')).toHaveLength(2);
   expect(getAllByTestId('icon-id')).toHaveLength(2);
  });
});