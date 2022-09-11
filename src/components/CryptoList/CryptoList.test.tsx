import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { customRender } from "../../utils/customRender";
import CryptoList from "./CryptoList";

let mockLogout = { logout: jest.fn() };

jest.mock("../../hooks/useUser/useUser", () => () => mockLogout);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CryptoList component", () => {
  describe("When instantiated with a list of crypto", () => {
    test("Then it should show a title and two buttons", async () => {
      customRender(<CryptoList />);

      const buttonValue = screen.getByRole("button", {
        name: "Value",
      });

      const buttonCreate = screen.getByRole("button", {
        name: "Create",
      });

      const headingText = screen.getByRole("heading", {
        name: "Take a look!",
      });

      expect(headingText).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
      expect(buttonValue).toBeInTheDocument();
    });
  });
  describe("When click on the Value button", () => {
    test("Then it should call the createCrypto function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoList />
          </BrowserRouter>
        </Provider>
      );

      const buttonValue = screen.getByRole("button", {
        name: "Value",
      });

      await userEvent.click(buttonValue);
    });
  });

  describe("When click on the Create button", () => {
    test("Then it should call the createCrypto function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoList />
          </BrowserRouter>
        </Provider>
      );

      const buttonCreate = screen.getByRole("button", {
        name: "Create",
      });

      await userEvent.click(buttonCreate);

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalled();
      });
    });
  });

  describe("When click on Logout button", () => {
    test("Then it should call the Logout function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoList />
          </BrowserRouter>
        </Provider>
      );
      const buttonLogout = screen.getByText("Logout");

      await userEvent.click(buttonLogout);

      expect(buttonLogout).toBeInTheDocument();

      expect(mockLogout.logout).toHaveBeenCalled();

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
