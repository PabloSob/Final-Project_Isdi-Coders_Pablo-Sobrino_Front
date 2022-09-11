import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NewOrModifyCrypto } from "../../store/interfaces/cryptoInterfaces";
import { store } from "../../store/store";
import CryptoForm from "./CryptoForm";

beforeEach(() => jest.restoreAllMocks());

const mockCreateCrypto = jest.fn();

jest.mock("../../hooks/useCrypto/useCrypto", () => () => ({
  createCrypto: mockCreateCrypto,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CryptoForm component", () => {
  const initialState: NewOrModifyCrypto = {
    id: "",
    title: "",
    logo: "",
    description: "",
    team: 0,
    value: 0,
    ICO: new Date(),
  };
  describe("When instantiated", () => {
    test("Then it should display a form with a title, six inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoForm initialState={initialState} />
          </BrowserRouter>
        </Provider>
      );

      const elementsInScreen = [
        screen.getByText("Create your Project!"),
        screen.getByPlaceholderText("Enter title"),
        screen.getByPlaceholderText("Enter a description"),
        screen.getByPlaceholderText("Number"),
        screen.getByPlaceholderText("Value"),
        screen.getByPlaceholderText("Enter ICO"),
        screen.getByText("Create"),
      ];

      elementsInScreen.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
    });
  });

  describe("When all inputs have value", () => {
    test("Then the button should not be disabled", async () => {
      const titleInput = "Efflereum";
      const logoInput = "cocoin.png";
      const descriptionInput = "A great project";
      const teamInput = "1";
      const valueInput = "5;";
      const ICOInput = "2000-01-01";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoForm initialState={initialState} />
          </BrowserRouter>
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
      await userEvent.type(logo, logoInput);
      await userEvent.type(description, descriptionInput);
      await userEvent.type(team, teamInput);
      await userEvent.type(value, valueInput);
      await userEvent.type(ICO, ICOInput);

      const submitButton = screen.getByText("Create");

      expect(submitButton).not.toHaveAttribute("disabled");
    });

    test("Then if the user sets a file, it should be appended to the form data", async () => {
      const useState = jest.spyOn(React, "useState");

      const file = new File(["file"], "");

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoForm initialState={initialState} />
          </BrowserRouter>
        </Provider>
      );

      const inputFile = screen.getByPlaceholderText("logo") as HTMLInputElement;

      await userEvent.upload(inputFile, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("If the user submits, the default action of submit should be prevented", async () => {
      mockCreateCrypto.mockResolvedValue(true);

      const titleInput = "Efflereum";
      const logoInput = "cocoin.png";
      const descriptionInput = "A great project";
      const teamInput = "1";
      const valueInput = "5;";
      const ICOInput = "2000-01-01";

      render(
        <Provider store={store}>
          <CryptoForm initialState={initialState} />
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
      await userEvent.type(logo, logoInput);
      await userEvent.type(description, descriptionInput);
      await userEvent.type(team, teamInput);
      await userEvent.type(value, valueInput);
      await userEvent.type(ICO, ICOInput);

      const submitButton = screen.getByText("Create");

      await userEvent.click(submitButton);

      expect(mockCreateCrypto).toHaveBeenCalled();
    });
  });
});
