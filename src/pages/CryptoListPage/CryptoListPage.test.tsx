import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import CryptoListPage from "./CryptoListPage";

describe("Given the CryptoListPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a list inside", () => {
      render(
        <Wrapper>
          <CryptoListPage />
        </Wrapper>
      );

      const expectedTitle = screen.getByRole("list");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
