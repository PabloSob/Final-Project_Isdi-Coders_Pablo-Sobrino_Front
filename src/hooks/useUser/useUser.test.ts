import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { logoutActionCreator } from "../../store/features/user/slices/userSlice";
import { ProtoUser } from "../../store/interfaces/userInterfaces";
import Wrapper from "../../utils/Wrapper";
import useUser from "./useUser";

jest.mock("react-toastify");

const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: ProtoUser = {
        userName: "Juanito",
        password: "veritat",
      };

      const {
        result: {
          current: { register },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith("You have been registered!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: ProtoUser = {
          userName: "Juanito",
          password: "",
        };

        const {
          result: {
            current: { register },
          },
        } = renderHook(useUser, { wrapper: Wrapper });

        await register(mockUser2);

        expect(toast.error).toHaveBeenCalledWith("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });

      describe("When login function is called with a User name and a password", () => {
        test("Then it should return a token", async () => {
          const mockUserTest: ProtoUser = {
            password: "gonzalito",
            userName: "goodluck",
          };

          const {
            result: {
              current: { login },
            },
          } = renderHook(useUser, { wrapper: Wrapper });

          await login(mockUserTest);

          const expectedResult = {
            payload: {
              id: "rgert4549jfe9e2nx9",
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJnZXJ0NDU0OWpmZTllMm54OSIsInVzZXJOYW1lIjoibWFyaW9nbCJ9.8Tv7Dnd5CrzjUSQ00fHc3HvdObTNJ5AA8sMymMSN0xg",
              userName: "mariogl",
            },
            type: "user/loginUser",
          };

          expect(mockUseDispatch).toHaveBeenCalledWith(expectedResult);
        });
      });

      describe("When login function is called with a User name or password not valid", () => {
        test("Then it should send a modal error", async () => {
          const mockUserTest: ProtoUser = {
            password: "",
            userName: "",
          };

          const {
            result: {
              current: { login },
            },
          } = renderHook(useUser, { wrapper: Wrapper });

          await login(mockUserTest);

          expect(toast.error).toHaveBeenCalledWith("Something went wrong...", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
      });
      describe("When logout function is called", () => {
        test("Then it should dispatch the logout action creator", async () => {
          const {
            result: {
              current: { logout },
            },
          } = renderHook(useUser, { wrapper: Wrapper });

          act(() => {
            logout();
          });

          expect(mockUseDispatch).toHaveBeenCalledWith(logoutActionCreator());
        });
      });
    });
  });
});
