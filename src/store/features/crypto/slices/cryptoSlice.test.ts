import { Crypto, ICrypto } from "../../../interfaces/cryptoInterfaces";
import cryptoSlice, {
  cryptoReducer,
  deleteCryptoActionCreator,
  loadAllCryptoActionCreator,
  createCryptoActionCreator,
  modifyCryptoActionCreator,
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
  describe("When called with a createCrypto action", () => {
    test("Then it should return an action with a type 'crypto/createCrypto' and said crypto as payload", () => {
      const initialState = [] as Crypto;

      const cryptoFake: ICrypto = {
        id: "4321",
        title: "Cocoin",
        logo: "/crypto.png",
        description: "a great crypto",
        team: 2,
        value: 3,
        ICO: new Date(),
      };

      const expectedResult = [cryptoFake] as Crypto;

      const actionFake = createCryptoActionCreator(cryptoFake);

      const result = cryptoReducer(initialState, actionFake);

      expect(result).toStrictEqual(expectedResult);
    });
  });
  describe("When called with a modifyWish action with a crypto that exists in the state", () => {
    test("Then it should return an updated state", () => {
      const initialCryptoFake: ICrypto[] = [
        {
          id: "4321",
          title: "Cocoin",
          logo: "/crypto.png",
          description: "a great crypto",
          team: 2,
          value: 3,
          ICO: new Date(),
        },
      ];

      const modifiedCrypto: ICrypto = {
        id: "4321",
        title: "Flycoin",
        logo: "/crypto.png",
        description: "a great crypto",
        team: 2,
        value: 3,
        ICO: new Date(),
      };

      const actionFake = modifyCryptoActionCreator(modifiedCrypto);

      const result = cryptoReducer(initialCryptoFake, actionFake);

      expect(result).toStrictEqual([modifiedCrypto]);
    });
  });

  describe("When called with a modifyCrypto action with a crypto that does not exist in the state", () => {
    test("Then it should return a crypto with the same state", () => {
      const initialCryptoFake: ICrypto[] = [
        {
          id: "4322",
          title: "Cocoin",
          logo: "/crypto.png",
          description: "a great crypto",
          team: 2,
          value: 3,
          ICO: new Date(),
        },
      ];

      const modifiedCrypto: ICrypto = {
        id: "4321",
        title: "Flycoin",
        logo: "/crypto.png",
        description: "a great crypto",
        team: 2,
        value: 3,
        ICO: new Date(),
      };

      const actionFake = modifyCryptoActionCreator(modifiedCrypto);

      const result = cryptoReducer(initialCryptoFake, actionFake);

      expect(result).toStrictEqual(initialCryptoFake);
    });
  });
});
