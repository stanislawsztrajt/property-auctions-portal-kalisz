import React from "react";
import { render } from "@testing-library/react";
import MapMarkerClusterItem from "./map-marker-cluster-item";

test("should render MapMarkerClusterItem", () => {
  const { getByText } = render(<MapMarkerClusterItem />);

  expect(getByText("")).toBeInTheDocument();
});
