import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const mockUser = jest.fn();

jest.mock("../../store/features/users/hooks/useUserApi", () => () => ({
  register: mockUser,
}));

describe("Given a Register component", () => {
  describe("When its instantiaded", () => {
    test("Then it should show a unserName, a password and a repeatPassword inputs, a text with a logo, a text to create an account and a plus a SING UP button", () => {
      render(<RegisterForm />);

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
      render(<RegisterForm />);

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
      render(<RegisterForm />);

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
    describe("And the user type different passwords", () => {
      test("Then it should call the mockUser function", async () => {
        const fakeUserName = "pruebita";
        const fakePassword = "pruebecita";
        const repeatFakePassword = "pruebecita";

        render(<RegisterForm />);

        const form = {
          userName: screen.getByLabelText("Username") as HTMLInputElement,
          password: screen.getByLabelText("Password") as HTMLInputElement,
          repeatPassword: screen.getByLabelText(
            "Repeat Password"
          ) as HTMLInputElement,
        };

        fireEvent.change(form.userName, { target: { value: fakeUserName } });
        fireEvent.change(form.password, { target: { value: fakePassword } });
        fireEvent.change(form.repeatPassword, {
          target: { value: repeatFakePassword },
        });
        const submit = screen.getByRole("button", { name: "Sign up" });
        await userEvent.click(submit);

        expect(mockUser).toHaveBeenCalled();
      });
    });
  });
});
