import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import CryptoList from "./CryptoList";

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
});
