import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { customRender } from "../../utils/customRender";
import CryptoCard from "./CryptoCard";

let mockDeleteCrypto = { deleteCrypto: jest.fn() };
jest.mock("../../hooks/useCrypto/useCrypto", () => () => mockDeleteCrypto);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const crypto = {
  title: "super coin",
  logo: "/crypto.png",
  description: "",
  team: 4,
  value: 2,
  ICO: expect.any(String),
  id: "",
};

describe("Given a CryptoCard component", () => {
  describe("When instantiated", () => {
    test("Then it should show a title, logo, team, value and 2 butons", () => {
      customRender(<CryptoCard key={crypto.title} crypto={crypto} />);

      const cryptoTitle = screen.getByRole("heading", {
        name: crypto.title,
      });

      const cryptoLogo = screen.getByRole("img");
      const cryptoTeam = screen.getByText("Team");
      const cryptoValue = screen.getByText("Value");
      const buttonCreate = screen.getByRole("button", {
        name: "Delete",
      });
      const buttonDetails = screen.getByRole("button", {
        name: "Details",
      });

      expect(cryptoTitle).toBeInTheDocument();
      expect(cryptoLogo).toBeInTheDocument();
      expect(cryptoTeam).toBeInTheDocument();
      expect(cryptoValue).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
      expect(buttonDetails).toBeInTheDocument();
    });
  });
  describe("When click on Delete button", () => {
    test("Then it should call the deleteCrypto function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoCard key={crypto.title} crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const deleteButton = screen.getByText("Delete");

      await userEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();

      await expect(mockDeleteCrypto.deleteCrypto).toHaveBeenCalled();
    });
  });
  describe("When click on Details button", () => {
    test("Then it should redirect to the Details", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoCard key={crypto.title} crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const buttonDetails = screen.getByText("Details");

      await userEvent.click(buttonDetails);

      expect(buttonDetails).toBeInTheDocument();

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
