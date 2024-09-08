import { render, screen } from "@testing-library/react";
import FormItem from "./FormItem";

describe("FormItem component", () => {
  it("should render FormItem component correctly", () => {
    render(<FormItem label="Label" id="some-id" />);
    const label = screen.getByLabelText("Label:");

    expect(label).toHaveAttribute("disabled");
    expect(label).toBeInTheDocument();
  });

  it("should have provided value", () => {
    render(<FormItem label="Label" value="Initial value" id="some-id" />);
    const input = screen.getByLabelText("Label:");

    expect(input).toHaveValue("Initial value");
  });
});
