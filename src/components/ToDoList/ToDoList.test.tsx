import { render, screen, fireEvent } from "@testing-library/react";

import ToDoList from "./index";

import { Task } from "../../types";

const tasksMock: Task[] = [
  { id: "t1", title: "Task 1", status: "todo" },
  { id: "t2", title: "Task 2", status: "progress" },
  { id: "t3", title: "Task 3", status: "done" },
];

describe("<ToDoList />", () => {
  it("should render tasks on list", () => {
    render(
      <ToDoList
        title="Test title"
        tasks={tasksMock}
        onMoveNext={jest.fn()}
        onMovePrev={jest.fn()}
      />
    );

    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });

  it("should call next callback when next button clicked", () => {
    const onMoveNext = jest.fn();

    render(
      <ToDoList
        title="To do"
        tasks={tasksMock}
        onMoveNext={onMoveNext}
        onMovePrev={jest.fn()}
      />
    );

    const nextButton = screen.getAllByLabelText("Move to next column")[0];
    fireEvent.click(nextButton);

    expect(onMoveNext).toHaveBeenCalledWith(tasksMock[0]);
  });

  it("should call prev callback when prev button clicked", () => {
    const onMovePrev = jest.fn();

    render(
      <ToDoList
        title="To do"
        tasks={tasksMock}
        onMoveNext={jest.fn()}
        onMovePrev={onMovePrev}
      />
    );

    const prevButton = screen.getAllByLabelText("Move to previous column")[1];
    fireEvent.click(prevButton);

    expect(onMovePrev).toHaveBeenCalledWith(tasksMock[1]);
  });
});
