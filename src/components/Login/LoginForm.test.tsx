import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/customRender";
import LoginForm from "./LoginForm";

let mockLogin = { login: jest.fn() };
jest.mock("../../hooks/useUser/useUser", () => () => mockLogin);

describe("Given a Login Component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs, a button and a link", () => {
      customRender(<LoginForm />);

      const elementsInScreen = [
        screen.getByAltText("a crypto logo"),
        screen.getByText("Hi, welcome back!"),
        screen.getByPlaceholderText("Enter your username"),
        screen.getByPlaceholderText("Enter your password"),
        screen.getByRole("button"),
      ];

      elementsInScreen.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });

    describe("When instantiated and the user writes in", () => {
      test("Then it should render a username with 'rodrigo' text and password inputs with the text '001001'", () => {
        const usernameFake = "juanito";
        const passwordFake = "001001";

        customRender(<LoginForm />);

        const formInputs = {
          username: screen.getByLabelText("Username") as HTMLInputElement,
          password: screen.getByLabelText("Password") as HTMLInputElement,
        };

        fireEvent.change(formInputs.username, {
          target: { value: usernameFake },
        });
        fireEvent.change(formInputs.password, {
          target: { value: passwordFake },
        });

        expect(formInputs.username.value).toBe(usernameFake);
        expect(formInputs.password.value).toBe(passwordFake);
      });

      test("Then it should call the mockLogin with the data user", async () => {
        const usernameFake = "juanito";
        const passwordFake = "001001";
        customRender(<LoginForm />);
        const form = {
          userName: screen.getByLabelText("Username") as HTMLInputElement,
          password: screen.getByLabelText("Password") as HTMLInputElement,
        };

        fireEvent.change(form.userName, { target: { value: usernameFake } });
        fireEvent.change(form.password, { target: { value: passwordFake } });

        const submit = screen.getByRole("button", { name: "Login" });
        await userEvent.click(submit);
        const loginData = {
          userName: usernameFake,
          password: passwordFake,
        };

        expect(mockLogin.login).toHaveBeenCalledWith(loginData);
      });
    });
  });
});
