import React from "react";
import { render } from "@testing-library/react";
import MainLayout from "./main-layout";

test("should render MainLayout", () => {
  const { getByText } = render(<MainLayout />);

  expect(getByText("")).toBeInTheDocument();
});
