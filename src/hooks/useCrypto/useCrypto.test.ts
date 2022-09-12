import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import {
  deleteCryptoActionCreator,
  loadAllCryptoActionCreator,
} from "../../store/features/crypto/slices/cryptoSlice";
import Wrapper from "../../utils/Wrapper";
import useCrypto from "./useCrypto";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useCrypto hook", () => {
  const mockCryptoList = [
    {
      title: "super coin",
      logo: "/crypto.png",
      description: "A great crypto",
      team: 4,
      value: 2,
      ICO: expect.any(String),
      id: "4321",
    },
    {
      title: "eflereum",
      logo: "/eflereum.png",
      description: "The revolution",
      team: 15,
      value: 3,
      ICO: expect.any(String),
      id: "4322",
    },
  ];

  describe("When invoked a getAllCrypto and receives a list of crypto", () => {
    test("Then it should call dispatch with loadAllCryptoActionCreator with that list", async () => {
      const {
        result: {
          current: { getAllCrypto },
        },
      } = renderHook(useCrypto, { wrapper: Wrapper });

      await act(async () => {
        await getAllCrypto();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllCryptoActionCreator(mockCryptoList)
        );
      });
    });

    test("Then it should send a loading modal", async () => {
      const {
        result: {
          current: { getAllCrypto },
        },
      } = renderHook(useCrypto, { wrapper: Wrapper });

      await act(async () => {
        await getAllCrypto();
      });

      await waitFor(() => {
        expect(toast.loading).toHaveBeenCalledWith("Please wait", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });

    describe("When invoke getAllCrypto function and it not receives a mockCryptoList", () => {
      test("Then it should send an error message modal", async () => {
        axios.defaults.headers.get["IsTestError"] = true;

        const {
          result: {
            current: { getAllCrypto },
          },
        } = renderHook(useCrypto, { wrapper: Wrapper });

        await getAllCrypto();

        expect(toast.error).toHaveBeenCalledWith("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });

        delete axios.defaults.headers.get["IsTestError"];
      });
    });
    describe("When invoke deleteCrypto function with a valid crypto id", () => {
      const {
        result: {
          current: { deleteCrypto },
        },
      } = renderHook(useCrypto);

      const idCrypto: string = "43552lkjhfdkshgh45";

      test("Then it should call the dispatch with the delete action creator with the id", async () => {
        await act(async () => {
          await deleteCrypto(idCrypto);
        });

        expect(toast.success).toHaveBeenCalledWith(
          "The crypto has been deleted",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        await waitFor(() => {
          expect(mockUseDispatch).toHaveBeenCalledWith(
            deleteCryptoActionCreator(idCrypto)
          );
        });
      });

      describe("When called with an invalid crypto id", () => {
        test("Then it should not dispatch the delete action", async () => {
          await act(async () => {
            await deleteCrypto("WrongId");
          });

          expect(toast.error).toHaveBeenCalledWith("Something went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });

          await waitFor(() => {
            expect(mockUseDispatch).not.toHaveBeenCalledWith(
              deleteCryptoActionCreator(idCrypto)
            );
          });
        });
      });
      describe("When it's invoked with getCryptoById with the correct id", () => {
        test("Then it should return a crypto with this id", async () => {
          const idCrypto = "43552lkjhfdkshgh45";

          const mockCrypto = {
            id: idCrypto,
            title: "eflereum",
            logo: "/eflereum.png",
            description: "The revolution",
            team: 15,
            value: 3,
            ICO: "2022-09-07T19:12:29.422Z",
          };

          const {
            result: {
              current: { getCryptoById },
            },
          } = renderHook(useCrypto, { wrapper: Wrapper });

          const crypto = await getCryptoById(idCrypto);

          await expect(crypto).toStrictEqual(mockCrypto);
        });

        test("And if can't return a crypto, it should call the error modal", async () => {
          const {
            result: {
              current: { getCryptoById },
            },
          } = renderHook(useCrypto, { wrapper: Wrapper });

          await getCryptoById("wrongId");

          expect(toast.error).toHaveBeenCalledWith(
            "Can not show details from this crypto",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        });
      });
      describe("When invoke createCrypto function with a new formData", () => {
        test("Then it should call the succes modal", async () => {
          const crypto = new FormData();
          const {
            result: {
              current: { createCrypto },
            },
          } = renderHook(useCrypto, { wrapper: Wrapper });

          const mockCrypto = {
            id: idCrypto,
            title: "eflereum",
            logo: "/eflereum.png",
            description: "The revolution",
            team: 15,
            value: 3,
            ICO: expect.any(Date),
          };

          crypto.append("crypto", JSON.stringify(mockCrypto));
          crypto.append("logo", new File([], "logo.jng"));

          await act(async () => {
            await createCrypto(crypto);
          });

          expect(toast.success).toHaveBeenCalledWith(
            "Crypto created successfully!",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        });
      });

      describe("When invoke a create crypto without correctly formData", () => {
        test("Then it should call the error modal", async () => {
          axios.defaults.headers.post["IsTestError"] = true;
          const crypto = new FormData();
          const {
            result: {
              current: { createCrypto },
            },
          } = renderHook(useCrypto, { wrapper: Wrapper });

          const mockCrypto = {
            id: "",
            title: "",
            logo: "",
            description: "",
            team: 0,
            value: 0,
            ICO: expect.any(Date),
          };

          crypto.append("crypto", JSON.stringify(mockCrypto));
          crypto.append("logo", new File([], "logo.jng"));

          await act(async () => {
            await createCrypto(crypto);
          });

          expect(toast.error).toHaveBeenCalledWith("Cannot create the crypto", {
            position: toast.POSITION.TOP_CENTER,
          });
          delete axios.defaults.headers.post["IsTestError"];
        });
      });
    });
  });
});
