import { render, screen } from "@testing-library/react";
import React from "react";

/* create basic function to display a string */
function HelloWorld() {
  return <h1>Hello, SparkBytes!</h1>;
}

/* create basic test to detect string */
test("renders basic text", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello, SparkBytes!")).toBeInTheDocument();
});
