import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import React from "react";
import "@testing-library/jest-dom";
it("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

it("Should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
