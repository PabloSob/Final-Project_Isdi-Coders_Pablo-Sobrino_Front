import { toast } from "react-toastify";
import RegisterUserInterface from "../../../interfaces/userInterfaces";
import useUserApi from "./useUserApi";

jest.mock("react-toastify");

describe("Given a useUserApi hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: RegisterUserInterface = {
        userName: "senior",
        password: "seniores",
        repeatPassword: "seniores",
      };

      const { register } = useUserApi();
      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith(
        "You have been registered, welcome!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: RegisterUserInterface = {
          userName: "",
          password: "",
          repeatPassword: "",
        };

        const { register } = useUserApi();
        await register(mockUser2);

        expect(toast.error).toHaveBeenCalledWith("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });
  });
});
