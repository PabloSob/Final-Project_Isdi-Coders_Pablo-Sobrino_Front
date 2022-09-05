import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import CryptoListPage from "./CryptoListPage";

describe("Given the CryptoListPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a 'CryptoList' inside", () => {
      const headingText = "Take a look!";

      customRender(<CryptoListPage />);

      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
