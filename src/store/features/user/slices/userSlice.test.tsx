import { User } from "../../../interfaces/userInterfaces";
import userSlice, {
  loginUsersActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a user slice", () => {
  describe("When invoked with an initial state as previous user and a login user action creator with a fakeUserTest", () => {
    test("Then it should return the fakeUser", () => {
      const initialState: User = {
        id: "",
        token: "",
        userName: "",
      };
      const fakeUserTest: User = {
        id: "000001tt",
        token: "asdf234",
        userName: "Vivaldi",
      };

      const fakeUser = userSlice(
        initialState,
        loginUsersActionCreator(fakeUserTest)
      );

      expect(fakeUser).toStrictEqual(fakeUserTest);
    });
  });
  describe("When invoked with a fakeUser and logoutActionCreator", () => {
    test("Then it should return a initial State", () => {
      const fakeUser: User = {
        id: "0234342354325",
        token: "qwertytyoog",
        userName: "Vivaldi",
      };

      const initialState: User = {
        id: "",
        token: "",
        userName: "",
      };

      const logoutUser = userSlice(fakeUser, logoutActionCreator());

      expect(logoutUser).toStrictEqual(initialState);
    });
  });
});
