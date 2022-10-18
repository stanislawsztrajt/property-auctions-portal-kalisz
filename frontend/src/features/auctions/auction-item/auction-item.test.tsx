import React from "react";
import { render } from "@testing-library/react";
import AuctionItem from "./auction-item";

test("should render AuctionItem", () => {
  const { getByText } = render(<AuctionItem />);

  expect(getByText("")).toBeInTheDocument();
});
