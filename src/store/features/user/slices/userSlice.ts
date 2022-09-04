import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/userInterfaces";

const userInitialState: User = {
  id: "",
  token: "",
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<User>) => action.payload,
  },
});

export const { reducer: userReducer } = userSlice;

export const { loginUser: loginUsersActionCreator } = userSlice.actions;

export default userSlice.reducer;
