import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a Login Component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a logo and a text, a title, two inputs, a button and a link", () => {
      render(<LoginForm />);

      const elementsInScreen = [
        screen.getByAltText("a crypto logo"),
        screen.getByText("Hi, welcome back!"),
        screen.getByPlaceholderText("Enter your username"),
        screen.getByPlaceholderText("Enter your password"),
        screen.getByRole("button"),
        screen.getByText("Don't have an account?"),
      ];

      elementsInScreen.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
