import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

const mockUser = jest.fn();

jest.mock("../../features/users/hooks/useUserApi", () => () => ({
  register: mockUser,
}));

describe("Given a Register component", () => {
  describe("When its instantiaded", () => {
    test("Then it should show a unserName, a password and a repeatPassword inputs, plus a SING UP button", () => {
      render(<Register />);

      const registerForm = [
        screen.getByPlaceholderText("Enter your username"),
        screen.getByPlaceholderText("Enter your password"),
        screen.getByPlaceholderText("Repeat your password"),
        screen.getByText("Already have an account?"),
        screen.getByText("Login"),
        screen.getByText("Crypto Realm"),
        screen.getByText("Create an account"),
        screen.getByAltText("a crypto logo"),
      ];

      registerForm.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When a user fills every input", () => {
    test("Then every input should have what the user filled inside", async () => {
      const fakeName = "maria";
      const fakePassword = "maria333";
      const fakePassword2 = "maria333";
      render(<Register />);

      const usernameInput = screen.getByPlaceholderText(
        "Enter your username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "Enter your password"
      ) as HTMLInputElement;
      const repeatPasswordInput = screen.getByPlaceholderText(
        "Repeat your password"
      ) as HTMLInputElement;

      await userEvent.type(usernameInput, fakeName);
      await userEvent.type(passwordInput, fakePassword);
      await userEvent.type(repeatPasswordInput, fakePassword2);

      expect(usernameInput).toHaveValue(fakeName);
      expect(passwordInput).toHaveValue(fakePassword);
      expect(repeatPasswordInput).toHaveValue(fakePassword2);
    });
  });
  describe("When a user fills the inputs and click the button", () => {
    test("Then the register function will be called", async () => {
      const fakeName = "maria";
      const fakePassword = "maria333";
      const fakePassword2 = "maria333";
      render(<Register />);

      const userNameInput = screen.getByPlaceholderText(
        "Enter your username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "Enter your password"
      ) as HTMLInputElement;
      const repeatPasswordInput = screen.getByPlaceholderText(
        "Repeat your password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button");

      await userEvent.type(userNameInput, fakeName);
      await userEvent.type(passwordInput, fakePassword);
      await userEvent.type(repeatPasswordInput, fakePassword2);
      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
    });
  });
});
