import { render, screen, fireEvent } from "@testing-library/react";

import NewTaskForm from "./index";

describe("<NewTaskForm />", () => {
  it("should render the form with input and disabled button", () => {
    render(<NewTaskForm onAddNewTask={jest.fn()} />);

    expect(screen.getByPlaceholderText("Task title")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add new task/i })
    ).toBeDisabled();
  });

  it("should enable the button when input is not empty", () => {
    render(<NewTaskForm onAddNewTask={jest.fn()} />);

    const ipt = screen.getByPlaceholderText("Task title");
    const btn = screen.getByRole("button", { name: /add new task/i });

    fireEvent.change(ipt, { target: { value: "New Task" } });
    expect(btn).not.toBeDisabled();
  });

  it("should clear the input after form submission", () => {
    const handleAddNewTask = jest.fn();
    render(<NewTaskForm onAddNewTask={handleAddNewTask} />);

    const ipt = screen.getByPlaceholderText("Task title");
    const btn = screen.getByRole("button", { name: /add new task/i });

    fireEvent.change(ipt, { target: { value: "New Task" } });
    fireEvent.click(btn);

    expect(handleAddNewTask).toHaveBeenCalledWith("New Task");
    expect(ipt).toHaveValue("");
  });

  it("should should not allow empty task name submission", () => {
    const handleAddNewTask = jest.fn();
    render(<NewTaskForm onAddNewTask={handleAddNewTask} />);

    const ipt = screen.getByPlaceholderText("Task title");
    const btn = screen.getByRole("button", { name: /add new task/i });

    fireEvent.change(ipt, { target: { value: "   " } });
    fireEvent.click(btn);

    expect(handleAddNewTask).not.toHaveBeenCalled();
    expect(ipt).toHaveValue("");
  });
});
