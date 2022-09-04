import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { loadAllCryptoActionCreator } from "../../store/features/crypto/slices/cryptoSlice";
import { useAppDispatch } from "../../store/hooks";

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
      const { data, status } = await axios.get(loadCryptoUrl, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (status === 200) {
        dispatch(loadAllCryptoActionCreator(data));
      }
    } catch (error) {
      errorModal("Something went wrong");
    }
  }, [dispatch]);

  return {
    getAllCrypto,
  };
};

export default useCryptoApi;
