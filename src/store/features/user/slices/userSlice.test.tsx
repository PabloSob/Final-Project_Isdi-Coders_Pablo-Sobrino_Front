import { User } from "../../../interfaces/userInterfaces";
import usersSlice, { loginUsersActionCreator } from "./userSlice";

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

      const user = usersSlice(
        initialState,
        loginUsersActionCreator(fakeUserTest)
      );

      expect(user).toStrictEqual(fakeUserTest);
    });
  });
});
