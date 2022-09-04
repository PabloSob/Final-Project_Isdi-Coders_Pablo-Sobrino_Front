import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Register' component", () => {
      const headingText = "Create an account";

      customRender(<RegisterPage />);
      const expectedText = screen.getByRole("heading", { name: headingText });
      expect(expectedText).toBeInTheDocument();
    });
  });
});
