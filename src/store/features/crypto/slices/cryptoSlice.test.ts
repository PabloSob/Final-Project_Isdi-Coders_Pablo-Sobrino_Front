import { Crypto } from "../../../interfaces/cryptoInterfaces";
import cryptoSlice, { loadAllCryptoActionCreator } from "./cryptoSlice";

describe("Given a crypto slice", () => {
  describe("When invoked with an initial state as previous crypto and a loadAllCrypto with a fake list of crypto", () => {
    test("Then it should return the list with two cryto", () => {
      const initialState: Crypto = [];

      const fakeListCrypto: Crypto = [
        {
          title: "Cocoin",
          logo: "/crypto.png",
          description: "a great crypto",
          team: 2,
          value: 3,
          ICO: new Date(),
          id: "4321",
        },
        {
          title: "Sipcoin",
          logo: "/crypto.png",
          description: "a super crypto",
          team: 3,
          value: 4,
          ICO: new Date(),
          id: "4322",
        },
      ];

      const crypto = cryptoSlice(
        initialState,
        loadAllCryptoActionCreator(fakeListCrypto)
      );

      expect(crypto).toStrictEqual(fakeListCrypto);
    });
  });
});
