import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cryptoReducer } from "./features/crypto/slices/cryptoSlice";
import { userReducer } from "./features/user/slices/userSlice";

export const store = configureStore({
  reducer: { user: userReducer, crypto: cryptoReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
