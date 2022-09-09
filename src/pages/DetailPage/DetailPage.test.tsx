import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import DetailPage from "./DetailPage";

const mockCrypto: ICrypto = {
  id: "456sdfg",
  title: "eflereum",
  logo: "/eflereum.png",
  description: "The revolution",
  team: 15,
  value: 3,
  ICO: new Date(),
};
const mockNavigate = jest.fn().mockReturnValue(mockCrypto.id);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockCrypto.id }),
  useNavigate: () => mockNavigate,
}));

const mockUseApi = {
  getCryptoById: jest.fn().mockResolvedValue(mockCrypto),
};

jest.mock("../../hooks/useCrypto/useCrypto", () => () => mockUseApi);

describe("Given a DetailPage component", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'CryptoDetail' component", async () => {
      render(<DetailPage />, { wrapper: Wrapper });
      const expectedTextButton = "Modify";
      const button = screen.getByRole("button", { name: expectedTextButton });

      expect(button).toBeInTheDocument();
    });

    test("And it should call the useState function", () => {
      let mockUseState;
      act(() => {
        mockUseState = jest.spyOn(React, "useState");
      });
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseState).toHaveBeenCalled();
    });
  });
});
