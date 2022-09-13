import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { customRender } from "../../utils/customRender";
import CryptoList from "./CryptoList";

let mockLogout = { logout: jest.fn() };
const mockUseAppSelector = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => mockLogout);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CryptoList component", () => {
  describe("When instantiated with a list of crypto", () => {
    test("Then it should show a title and one button", async () => {
      customRender(<CryptoList />);

      const buttonCreate = screen.getByRole("button", {
        name: "Create",
      });

      const headingText = screen.getByRole("heading", {
        name: "Take a look!",
      });

      expect(headingText).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
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
  describe("When click on icon-close", () => {
    test("Then it should call the useState function", async () => {
      jest.mock("../../store/hooks", () => ({
        ...jest.requireActual("../../store/hooks"),
        useAppSelector: () => mockUseAppSelector(),
      }));

      const useState = jest.spyOn(React, "useState");
      const cryptoList = [
        {
          id: "34hjh",
          title: "eflereum",
          logo: "/eflereum.png",
          description: "The revolution",
          team: 0,
          value: 3,
          ICO: new Date(),
        },
        {
          id: "34hjtre",
          title: "eflereum",
          logo: "/eflereum.png",
          description: "The revolution",
          team: 1,
          value: 4,
          ICO: new Date(),
        },
      ];

      mockUseAppSelector.mockReturnValue(cryptoList);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoList />
          </BrowserRouter>
        </Provider>
      );

      const iconClose = screen.getByTestId("icon-close");

      await userEvent.click(iconClose);

      expect(iconClose).toBeInTheDocument();
      await waitFor(() => expect(useState).toHaveBeenCalled());
    });
  });
});
