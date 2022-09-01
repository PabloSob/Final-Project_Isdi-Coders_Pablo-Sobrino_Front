import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Create an account' in heading", () => {
      const headingText = "Create an account";

      render(<RegisterPage />);
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
