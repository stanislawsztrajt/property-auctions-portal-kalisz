import React from "react";
import { render } from "@testing-library/react";
import HandleModal from "./handle-modal";

test("should render HandleModal", () => {
  const { getByText } = render(<HandleModal />);

  expect(getByText("")).toBeInTheDocument();
});
