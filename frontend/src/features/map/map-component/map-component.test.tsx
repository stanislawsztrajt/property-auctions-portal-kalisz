import React from "react";
import { render } from "@testing-library/react";
import MapComponent from "./map-component";

test("should render MapComponent", () => {
  const { getByText } = render(<MapComponent />);

  expect(getByText("")).toBeInTheDocument();
});
