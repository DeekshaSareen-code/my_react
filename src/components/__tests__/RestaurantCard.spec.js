import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import React from "react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("should render restaurant card component with data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("should render Restaurant Card component with promoted label", () => {});
