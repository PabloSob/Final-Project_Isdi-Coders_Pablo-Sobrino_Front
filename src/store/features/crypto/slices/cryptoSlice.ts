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
    modifyCrypto: (previousState, action: PayloadAction<ICrypto>) => {
      return previousState.map((crypto) =>
        crypto.id === action.payload.id ? action.payload : crypto
      );
    },
  },
});

export const { reducer: cryptoReducer } = cryptoSlice;

export const {
  loadAllCrypto: loadAllCryptoActionCreator,
  deleteCrypto: deleteCryptoActionCreator,
  createCrypto: createCryptoActionCreator,
  modifyCrypto: modifyCryptoActionCreator,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
