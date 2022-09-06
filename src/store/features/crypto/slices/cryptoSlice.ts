import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crypto } from "../../../interfaces/cryptoInterfaces";

const cryptoInitialState: Crypto = [];

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: cryptoInitialState,
  reducers: {
    loadAllCrypto: (previousCrypto, action: PayloadAction<Crypto>) => [
      ...action.payload,
    ],
    deleteCrypto: (previousState, action: PayloadAction<string>) =>
      previousState.filter((crypto) => crypto.id !== action.payload),
  },
});

export const { reducer: cryptoReducer } = cryptoSlice;

export const {
  loadAllCrypto: loadAllCryptoActionCreator,
  deleteCrypto: deleteCryptoActionCreator,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
