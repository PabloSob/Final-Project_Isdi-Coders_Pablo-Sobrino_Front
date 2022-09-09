import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import CryptoDetails from "./CryptoDetails";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CryptoDetails component", () => {
  const crypto = {
    id: "34hjh",
    title: "eflereum",
    logo: "/eflereum.png",
    description: "The revolution",
    team: 0,
    value: 3,
    ICO: new Date(),
  };
  describe("When it's instantiated", () => {
    test("Then it should show a button and a link", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoDetails key={crypto.title} crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const buttonFake = screen.getByRole("button", {
        name: "Modify",
      });

      expect(buttonFake).toBeInTheDocument();
    });
  });

  describe("When click on the button link", () => {
    test("Then the navigate function will be called", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoDetails key={crypto.title} crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const buttonFake = screen.getByText("Back to the project list");

      await userEvent.click(buttonFake);

      expect(buttonFake).toBeInTheDocument();
      await expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
