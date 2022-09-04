import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { loadAllCryptoActionCreator } from "../../store/features/crypto/slices/cryptoSlice";
import Wrapper from "../../utils/Wrapper";
import useCryptoApi from "./useCryptoApi";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useCryptoApi hook", () => {
  const mockCryptoList = [
    {
      title: "super coin",
      logo: "/crypto.png",
      description: "A great crypto",
      team: 4,
      value: 2,
      ICO: expect.any(Date),
    },
    {
      title: "eflereum",
      logo: "/eflereum.png",
      description: "The revolution",
      team: 15,
      value: 3,
      ICO: expect.any(Date),
    },
  ];

  describe("When invoked a getAllCrypto and receives a list of crypto", () => {
    test("Then it should call dispatch with loadAllCryptoActionCreator with that list", async () => {
      const {
        result: {
          current: { getAllCrypto },
        },
      } = renderHook(useCryptoApi, { wrapper: Wrapper });

      await act(async () => {
        await getAllCrypto();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllCryptoActionCreator(mockCryptoList)
        );
      });
    });

    test("Then it shoul send a loading modal", async () => {
      const {
        result: {
          current: { getAllCrypto },
        },
      } = renderHook(useCryptoApi, { wrapper: Wrapper });

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
        } = renderHook(useCryptoApi, { wrapper: Wrapper });

        await getAllCrypto();

        expect(toast.error).toHaveBeenCalledWith("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });

        delete axios.defaults.headers.get["IsTestError"];
      });
    });
  });
});
