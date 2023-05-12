import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Suma from "./Suma";

test("renders content", () => {
  const suma = {
    title: "This is a test",
    important: true,
  };

  const component = render(
    <Suma title={suma.title} important={suma.important} />
  );

  component.getByText("This is a test");
  component.getByText("Hi");
});

test("clicking the button calls event handler once", () => {
  const suma = {
    title: "This is a test",
    important: true,
  };

  // Espía
  const mockHandler = jest.fn()

  const component = render(
    <Suma title={suma.title} important={suma.important} funct={mockHandler} />
  );
  const button = component.getByText("is important");
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler).toHaveBeenCalledTimes(1)
});
