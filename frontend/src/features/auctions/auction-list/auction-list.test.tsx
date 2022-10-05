import React from "react";
import { render } from "@testing-library/react";
import AuctionList from "./auction-list";

test("should render AuctionList", () => {
  const { getByText } = render(<AuctionList />);

  expect(getByText("")).toBeInTheDocument();
});
