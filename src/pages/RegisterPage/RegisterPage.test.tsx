import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Register' component", () => {
      const headingText = "Create an account";

      render(<RegisterPage />, { wrapper: Wrapper });
      const expectedText = screen.getByRole("heading", { name: headingText });
      expect(expectedText).toBeInTheDocument();
    });
  });
});
