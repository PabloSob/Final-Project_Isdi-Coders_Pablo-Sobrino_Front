import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import CryptoFormModifyPage from "./CryptoFormModifyPage";

const mockUseParams = jest.fn();
const mockUseAppSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockUseParams(),
}));

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUseAppSelector(),
}));

const mockUseCrypto = {
  getCryptoById: jest.fn().mockResolvedValue({
    id: "12234",
    title: "Hola",
    picture: "japon.jpg",
    limitDate: expect.any(Date),
    description: "caminando",
  }),
};
jest.mock("../../hooks/useCrypto/useCrypto", () => () => mockUseCrypto);

describe("Given a CryptoFormModifyPage component", () => {
  describe("When not receives an id", () => {
    test("Then it should render the create component", () => {
      mockUseParams.mockReturnValue({ id: undefined });
      mockUseAppSelector.mockReturnValue([]);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoFormModifyPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedTextButton = "Modify";
      const button = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
