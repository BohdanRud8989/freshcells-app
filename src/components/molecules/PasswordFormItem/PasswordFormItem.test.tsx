import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordFormItem from "./PasswordFormItem";

describe("PasswordFormItem component", () => {
  it("should render PasswordFormItem component correctly", async () => {
    render(<PasswordFormItem />);
    const label = screen.getByLabelText("Password:");
    const passwordInput = screen.getByPlaceholderText("Password");

    await userEvent.type(passwordInput, "MySecurePassword");

    expect(passwordInput).toHaveValue("MySecurePassword");
    expect(label).toBeInTheDocument();
  });
});
