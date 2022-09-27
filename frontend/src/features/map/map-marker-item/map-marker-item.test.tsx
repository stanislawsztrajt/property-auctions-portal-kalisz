import React from "react";
import { render } from "@testing-library/react";
import MapMarkerItem from "./map-marker-item";

test("should render MapMarkerItem", () => {
  const { getByText } = render(<MapMarkerItem />);

  expect(getByText("")).toBeInTheDocument();
});
