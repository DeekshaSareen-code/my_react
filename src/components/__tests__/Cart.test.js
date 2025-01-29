import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianMenu = screen.getByText("Veg Pizza(14)");
  expect(accordianMenu).toBeInTheDocument();
  fireEvent.click(accordianMenu);
  expect(screen.getAllByTestId("fooditems").length).toBe(14);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart( 1)")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(
    screen.getByText("Your cart is empty. Add items!")
  ).toBeInTheDocument();
});
