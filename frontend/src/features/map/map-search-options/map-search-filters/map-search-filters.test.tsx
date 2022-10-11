import React from "react";
import { render } from "@testing-library/react";
import MapSearchFilters from "./map-search-filters";

test("should render MapSearchFilters", () => {
  const { getByText } = render(<MapSearchFilters />);

  expect(getByText("")).toBeInTheDocument();
});
