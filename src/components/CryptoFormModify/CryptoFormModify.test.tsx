import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";
import { store } from "../../store/store";
import CryptoFormModify from "./CryptoFormModify";

beforeEach(() => jest.restoreAllMocks());

const mockModfyCrypto = jest.fn();

jest.mock("../../hooks/useCrypto/useCrypto", () => () => ({
  modifyCrypto: mockModfyCrypto,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CryptoFormModify component", () => {
  const crypto: ICrypto = {
    id: "4321",
    title: "super coin",
    logo: "",
    description: "A great crypto",
    team: 4,
    value: 2,
    ICO: new Date(),
  };
  describe("When it's instantiated", () => {
    test("Then it should show a title, six inputs a button and a link", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoFormModify crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const elementsInScreen = [
        screen.getByPlaceholderText("Enter title"),
        screen.getByPlaceholderText("logo"),
        screen.getByPlaceholderText("Enter a description"),
        screen.getByPlaceholderText("Number"),
        screen.getByPlaceholderText("Value"),
        screen.getByPlaceholderText("Enter ICO"),
      ];

      elementsInScreen.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
    });

    test("Then if the user sets a file, it should be appended to the form data", async () => {
      const useState = jest.spyOn(React, "useState");

      const file = new File(["file"], "");

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoFormModify crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const inputFile = screen.getByPlaceholderText("logo") as HTMLInputElement;

      await userEvent.upload(inputFile, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("If the user submits, the default action of submit should be prevented", async () => {
      mockModfyCrypto.mockResolvedValue(true);

      const titleInput = "super coin";
      const logoInput = "/crypto.png";
      const descriptionInput = "A great crypto";
      const teamInput = "4";
      const valueInput = "2";
      const ICOInput = "2022/09/09";

      render(
        <Provider store={store}>
          <CryptoFormModify crypto={crypto} />
        </Provider>
      );

      const title = screen.getByPlaceholderText(
        "Enter title"
      ) as HTMLInputElement;
      const logo = screen.getByPlaceholderText("logo") as HTMLInputElement;
      const description = screen.getByPlaceholderText(
        "Enter a description"
      ) as HTMLInputElement;
      const team = screen.getByPlaceholderText("Number") as HTMLInputElement;
      const value = screen.getByPlaceholderText("Value") as HTMLInputElement;
      const ICO = screen.getByPlaceholderText("Enter ICO") as HTMLInputElement;

      await userEvent.type(title, titleInput);
      await userEvent.upload(logo, new File(["asd"], logoInput));
      await userEvent.type(description, descriptionInput);
      await userEvent.type(team, teamInput);
      await userEvent.type(value, valueInput);
      await fireEvent.input(ICO, ICOInput);

      const buttonModify = screen.getByRole("button", {
        name: "Modify",
      });

      await userEvent.click(buttonModify);

      expect(mockModfyCrypto).toHaveBeenCalled();
    });
  });

  describe("When click on link", () => {
    test("Then it should call the navigate function", async () => {
      render(
        <Provider store={store}>
          <CryptoFormModify crypto={crypto} />
        </Provider>
      );

      const buttonLink = screen.getByRole("button", {
        name: "Back to the project list",
      });

      await userEvent.click(buttonLink);

      expect(buttonLink).toBeInTheDocument();

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
  describe("When the user change the ICO input", () => {
    test("Then it should call the onChangeDate function", async () => {
      const filterDate = "2022-09-16";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoFormModify crypto={crypto} />
          </BrowserRouter>
        </Provider>
      );

      const dateInput = screen.getByPlaceholderText(
        "Enter ICO"
      ) as HTMLInputElement;

      await userEvent.type(dateInput, filterDate);

      expect(dateInput.value).toBe(filterDate);
    });
  });
});
