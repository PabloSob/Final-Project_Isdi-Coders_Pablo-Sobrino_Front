import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'NotFound' component", () => {
      const headingText = "Wrong way";

      render(<NotFoundPage />, { wrapper: Wrapper });

      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
