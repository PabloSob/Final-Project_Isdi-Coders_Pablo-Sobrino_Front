import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/customRender";
import RegisterForm from "./RegisterForm";

const mockUser = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../hooks/useUser/useUser", () => () => ({
  register: mockUser,
}));

describe("Given a form component", () => {
  describe("When its instantiated", () => {
    test("Then it should display a form with a title, three inputs, a button and a link", () => {
      customRender(<RegisterForm />);

      const elementsInForm = [
        screen.getByPlaceholderText("Enter your username"),
        screen.getByPlaceholderText("Enter your password"),
        screen.getByPlaceholderText("Repeat your password"),
        screen.getByText("Crypto Realm"),
        screen.getByText("Create an account"),
        screen.getByAltText("a crypto logo"),
        screen.getByRole("button"),
      ];

      elementsInForm.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When a user fills every input", () => {
    test("Then every input should have what the user filled inside", async () => {
      const fakeName = "maria";
      const fakePassword = "maria333";
      const fakePassword2 = "maria333";

      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;
      const repeatPasswordInput = screen.getByLabelText(
        "Repeat Password"
      ) as HTMLInputElement;

      await userEvent.type(usernameInput, fakeName);
      await userEvent.type(passwordInput, fakePassword);
      await userEvent.type(repeatPasswordInput, fakePassword2);

      expect(usernameInput.value).toBe(fakeName);
      expect(passwordInput).toHaveValue(fakePassword);
      expect(repeatPasswordInput.value).toBe(fakePassword2);
    });
  });
  describe("When a user fills the inputs and click the submit button", () => {
    test("Then the register function will be called", async () => {
      mockUser.mockResolvedValue(true);

      const fakeName = "maria";
      const fakePassword = "maria333";
      const fakePassword2 = "maria333";

      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;
      const repeatPasswordInput = screen.getByLabelText(
        "Repeat Password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button");

      await userEvent.type(usernameInput, fakeName);
      await userEvent.type(passwordInput, fakePassword);
      await userEvent.type(repeatPasswordInput, fakePassword2);

      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
      await waitFor(() => expect(mockNavigate).toHaveBeenCalled());
    });
    describe("When the registration was ok", () => {
      test("Then the navigate function will be called", async () => {
        mockUser.mockResolvedValue(true);

        const fakeUserName = "pruebita";
        const fakePassword = "pruebecita";
        const repeatFakePassword = "pruebecita";

        render(<RegisterForm />);

        const usernameInput = screen.getByLabelText(
          "Username"
        ) as HTMLInputElement;
        const passwordInput = screen.getByLabelText(
          "Password"
        ) as HTMLInputElement;
        const repeatPasswordInput = screen.getByLabelText(
          "Repeat Password"
        ) as HTMLInputElement;

        const submitButton = screen.getByRole("button");

        await userEvent.type(usernameInput, fakeUserName);
        await userEvent.type(passwordInput, fakePassword);
        await userEvent.type(repeatPasswordInput, repeatFakePassword);

        await userEvent.click(submitButton);

        expect(mockUser).toHaveBeenCalled();
        await waitFor(() => expect(mockNavigate).toHaveBeenCalled());
      });

      describe("When the registration was fail", () => {
        test("Then the register function will be called", async () => {
          mockUser.mockResolvedValue(false);

          const fakeUserName = "pruebitass";
          const fakePassword = "pruebecita";
          const repeatFakePassword = "pruebecita";

          render(<RegisterForm />);

          const usernameInput = screen.getByLabelText(
            "Username"
          ) as HTMLInputElement;
          const passwordInput = screen.getByLabelText(
            "Password"
          ) as HTMLInputElement;
          const repeatPasswordInput = screen.getByLabelText(
            "Repeat Password"
          ) as HTMLInputElement;

          const submitButton = screen.getByRole("button");

          await userEvent.type(usernameInput, fakeUserName);
          await userEvent.type(passwordInput, fakePassword);
          await userEvent.type(repeatPasswordInput, repeatFakePassword);

          await userEvent.click(submitButton);

          expect(mockUser).toHaveBeenCalled();
          await waitFor(() => expect(mockNavigate).not.toHaveBeenCalled());
        });
      });
      describe("And the user type different passwords", () => {
        test("Then it shouldn't call the mockUser function", async () => {
          const fakeUserName = "pruebita";
          const fakePassword = "pruebecita";
          const repeatFakePassword = "arbol";
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

          expect(mockUser).not.toHaveBeenCalled();
        });
      });
    });
  });
});
