import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
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
  describe("When instantiated with a list of two crypto", () => {
    test.only("Then it should show a title with 'Take a look!' as text, a button with the text 'Create'", async () => {
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

      const filterDate = "2022-09-16";

      mockUseAppSelector.mockReturnValue(cryptoList);

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

      const headingText = screen.getByRole("heading", {
        name: "Take a look!",
      });

      const dateInput = screen.getByLabelText(
        "Filter by date:"
      ) as HTMLInputElement;

      await userEvent.type(dateInput, filterDate);

      expect(dateInput.value).toBe(filterDate);
      expect(headingText).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
    });
  });
});
