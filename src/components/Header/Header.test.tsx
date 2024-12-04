import { render, screen } from "@testing-library/react";

import Header from "./index";

describe("<Header/>", () => {
  it("should render header title", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", {
        name: /welcome to the every.io code challenge./i,
      })
    ).toBeInTheDocument();
  });
});
