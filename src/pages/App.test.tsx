import { render, screen, fireEvent } from "@testing-library/react";
const crypto = require("crypto");

Object.defineProperty(globalThis, "crypto", {
  value: {
    randomUUID: () => crypto.randomBytes(4),
  },
});

import App from "./App";

describe("<App/>", () => {
  it("should render all components", () => {
    render(<App />);

    expect(
      screen.getByText("Welcome To The Every.io Code Challenge.")
    ).toBeInTheDocument();
    expect(screen.getByText("To do")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("should add a new task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Task title");
    const addBtn = screen.getByTestId("addNewBtn");

    fireEvent.change(input, { target: { value: "this is a new task" } });
    fireEvent.click(addBtn);

    expect(screen.getByText("this is a new task")).toBeInTheDocument();
  });

  it("should move task to next column", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Task title");
    const addBtn = screen.getByTestId("addNewBtn");

    fireEvent.change(input, {
      target: { value: "this is a new task to be moved" },
    });
    fireEvent.click(addBtn);

    const task = screen.getByText("this is a new task to be moved");
    const nextButton = task.parentElement?.querySelector(
      "[aria-label='Move to next column']"
    );
    fireEvent.click(nextButton!);

    expect(
      screen
        .queryByText("this is a new task to be moved")
        ?.parentElement?.parentElement?.querySelector("h2")?.textContent
    ).toBe("In Progress");
  });
});
