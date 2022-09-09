import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crypto, ICrypto } from "../../../interfaces/cryptoInterfaces";

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

    createCrypto: (previousCrypto, action: PayloadAction<ICrypto>) => [
      ...previousCrypto,
      action.payload,
    ],
  },
});

export const { reducer: cryptoReducer } = cryptoSlice;

export const {
  loadAllCrypto: loadAllCryptoActionCreator,
  deleteCrypto: deleteCryptoActionCreator,
  createCrypto: createCryptoActionCreator,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
