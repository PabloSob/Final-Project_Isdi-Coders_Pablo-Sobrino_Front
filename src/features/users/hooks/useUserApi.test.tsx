import axios from "axios";
import RegisterUserInterface from "../../../store/interfaces/userInterfaces";
import useUserApi, { apiURL } from "./useUserApi";

jest.mock("axios");

describe("Given a useUserApi hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: RegisterUserInterface = {
        userName: "pepe",
        password: "songo",
        repeat_password: "songo",
      };

      const { register } = useUserApi();
      await register(mockUser);

      expect(axios.post).toHaveBeenCalledWith(
        `${apiURL}users/register`,
        mockUser
      );
    });
  });
});
