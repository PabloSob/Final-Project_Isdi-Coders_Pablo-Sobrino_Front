import { Crypto } from "../../../interfaces/cryptoInterfaces";
import cryptoSlice, { loadAllCryptoActionCreator } from "./cryptoSlice";

describe("Given a crypto slice", () => {
  describe("When invoked with an initial state as previous crypto and a loadAllCrypto with a fake list of crypto", () => {
    test("Then it should return the list with two wishes", () => {
      const initialState: Crypto = [];

      const fakeListCrypto: Crypto = [
        {
          title: "Cocoin",
          logo: "/crypto.png",
          description: "a great crypto",
          team: 2,
          value: 3,
          ICO: new Date(),
        },
        {
          title: "Sipcoin",
          logo: "/crypto.png",
          description: "a super crypto",
          team: 3,
          value: 4,
          ICO: new Date(),
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
