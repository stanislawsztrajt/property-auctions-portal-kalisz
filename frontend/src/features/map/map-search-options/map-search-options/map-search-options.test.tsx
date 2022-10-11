import React from "react";
import { render } from "@testing-library/react";
import MapSearchOptions from "./map-search-options";

test("should render MapSearchOptions", () => {
  const { getByText } = render(<MapSearchOptions />);

  expect(getByText("")).toBeInTheDocument();
});
