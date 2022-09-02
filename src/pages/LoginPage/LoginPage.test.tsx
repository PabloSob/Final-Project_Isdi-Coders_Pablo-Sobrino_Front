import { render, screen } from "@testing-library/react";
import LoginFormPage from "./LoginPage";

describe("Given the LoginPage component", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Login' component", () => {
      const headingText = "Hi, welcome back!";

      render(<LoginFormPage />);
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
