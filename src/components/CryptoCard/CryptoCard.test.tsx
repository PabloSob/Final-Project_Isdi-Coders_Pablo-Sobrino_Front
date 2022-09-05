import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import CryptoCard from "./CryptoCard";

describe("Given a CryptoCard component", () => {
  describe("When instantiated", () => {
    test("Then it should show a title, logo, team, value and 2 butons", () => {
      const crypto = {
        title: "super coin",
        logo: "/crypto.png",
        description: "",
        team: 4,
        value: 2,
        ICO: expect.any(String),
        id: "",
      };

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
      const buttonViewDetails = screen.getByRole("button", {
        name: "View Details",
      });

      expect(cryptoTitle).toBeInTheDocument();
      expect(cryptoLogo).toBeInTheDocument();
      expect(cryptoTeam).toBeInTheDocument();
      expect(cryptoValue).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
      expect(buttonViewDetails).toBeInTheDocument();
    });
  });
});
