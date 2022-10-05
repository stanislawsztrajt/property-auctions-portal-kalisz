import React from "react";
import { render } from "@testing-library/react";
import MapSearchInput from "./map-search-input";

test("should render MapSearchInput", () => {
  const { getByText } = render(<MapSearchInput />);

  expect(getByText("")).toBeInTheDocument();
});
