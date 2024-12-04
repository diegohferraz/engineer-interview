import { render, screen, fireEvent } from "@testing-library/react";

import TaskItem from "./index";

describe("<TaskItem />", () => {
  it("should render the task title", () => {
    render(
      <TaskItem
        title="Test Task"
        isPrevDisabled={false}
        isNextDisabled={false}
        onMoveNext={jest.fn()}
        onMovePrev={jest.fn()}
      />
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("should disable the previous button when isPrevDisabled is true", () => {
    render(
      <TaskItem
        title="Sample Task"
        isPrevDisabled={true}
        isNextDisabled={false}
        onMoveNext={jest.fn()}
        onMovePrev={jest.fn()}
      />
    );

    const prevBtn = screen.getByLabelText("Move to previous column");
    expect(prevBtn).toBeDisabled();
  });

  it("should disable the next button when isNextDisabled is true", () => {
    render(
      <TaskItem
        title="Sample Task"
        isPrevDisabled={false}
        isNextDisabled={true}
        onMoveNext={jest.fn()}
        onMovePrev={jest.fn()}
      />
    );

    const nextBtn = screen.getByLabelText("Move to next column");
    expect(nextBtn).toBeDisabled();
  });

  it("should call onMoveNext when next button is clicked", () => {
    const onMoveNext = jest.fn();

    render(
      <TaskItem
        title="Sample Task"
        isPrevDisabled={false}
        isNextDisabled={false}
        onMoveNext={onMoveNext}
        onMovePrev={jest.fn()}
      />
    );

    const nextBtn = screen.getByLabelText("Move to next column");
    fireEvent.click(nextBtn);

    expect(onMoveNext).toHaveBeenCalledTimes(1);
  });

  it("should call onMovePrev when prev button is clicked", () => {
    const onMovePrev = jest.fn();

    render(
      <TaskItem
        title="Sample Task"
        isPrevDisabled={false}
        isNextDisabled={false}
        onMoveNext={jest.fn()}
        onMovePrev={onMovePrev}
      />
    );

    const prevBtn = screen.getByLabelText("Move to previous column");
    fireEvent.click(prevBtn);

    expect(onMovePrev).toHaveBeenCalledTimes(1);
  });
});
