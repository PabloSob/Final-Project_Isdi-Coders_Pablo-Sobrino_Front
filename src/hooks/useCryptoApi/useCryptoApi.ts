import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { loadAllCryptoActionCreator } from "../../store/features/crypto/slices/cryptoSlice";
import { useAppDispatch } from "../../store/hooks";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";

const apiURL = process.env.REACT_APP_API_URL;

export const loadingModal = (loading: string) =>
  toast.loading(loading, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useCryptoApi = () => {
  const dispatch = useAppDispatch();

  const getAllCrypto = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const loadCryptoUrl = `${apiURL}crypto`;

    try {
      loadingModal("Please wait");
      const { data } = await axios.get(loadCryptoUrl, {
        headers: { authorization: `Bearer ${token}` },
      });

      const cryptoList = data.crypto.map((crypto: ICrypto) => ({
        ...crypto,
        ICO: new Date(crypto.ICO),
      }));

      dispatch(loadAllCryptoActionCreator(cryptoList));
    } catch (error) {
      errorModal("Something went wrong");
    }
  }, [dispatch]);

  return {
    getAllCrypto,
  };
};

export default useCryptoApi;
