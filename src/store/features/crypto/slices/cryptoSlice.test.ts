import { Crypto, ICrypto } from "../../../interfaces/cryptoInterfaces";
import cryptoSlice, {
  cryptoReducer,
  deleteCryptoActionCreator,
  loadAllCryptoActionCreator,
} from "./cryptoSlice";

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

describe("Given a deleteCryptoActionCreator function", () => {
  describe("When called with a crypto id as a payload", () => {
    test("Then it should return an action with a type 'crypto/deleteCrypto' and said id as payload", () => {
      const fakeCrypto: ICrypto = {
        title: "Cocoin",
        logo: "/crypto.png",
        description: "a great crypto",
        team: 2,
        value: 3,
        ICO: new Date(),
        id: "4321",
      };

      const actionType = "crypto/deleteCrypto";
      const expectedAction = {
        type: actionType,
        payload: fakeCrypto.id,
      };

      const action = deleteCryptoActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });
    describe("When called with a deleteCrypto action", () => {
      test("Then it should remove the crypto passed in the action from the state", () => {
        const fakeCrypto: ICrypto = {
          id: "4321",
          title: "Cocoin",
          logo: "/crypto.png",
          description: "a great crypto",
          team: 2,
          value: 3,
          ICO: new Date(),
        };

        const initialState = [fakeCrypto] as Crypto;

        const expectedResult = [] as Crypto;

        const action = deleteCryptoActionCreator(fakeCrypto.id);

        const result = cryptoReducer(initialState, action);

        expect(result).toStrictEqual(expectedResult);
      });
    });
  });
});
