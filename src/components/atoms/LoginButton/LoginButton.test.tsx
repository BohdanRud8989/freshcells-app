import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("LoginButton component", () => {
  it("should render LoginButton component correctly", () => {
    render(<LoginButton> Login </LoginButton>);
    const element = screen.getByText("Login");
    expect(element).toBeInTheDocument();
  });

  it("should display loading state when the component is being loaded", () => {
    render(<LoginButton loading />);
    const element = screen.getByText("Logging in...");
    expect(element).toBeInTheDocument();
  });

  it("should be disabled", () => {
    render(<LoginButton disabled />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("disabled");
  });
});
