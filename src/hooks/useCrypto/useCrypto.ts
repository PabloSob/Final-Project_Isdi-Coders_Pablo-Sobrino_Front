import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  deleteCryptoActionCreator,
  loadAllCryptoActionCreator,
} from "../../store/features/crypto/slices/cryptoSlice";
import { useAppDispatch } from "../../store/hooks";

const apiURL = process.env.REACT_APP_API_URL;

export const loadingModal = (loading: string) =>
  toast.loading(loading, {
    position: toast.POSITION.TOP_CENTER,
  });

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useCrypto = () => {
  const dispatch = useAppDispatch();

  const getAllCrypto = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const loadCryptoUrl = `${apiURL}crypto`;

    try {
      loadingModal("Please wait");
      const {
        data: { crypto },
      } = await axios.get(loadCryptoUrl, {
        headers: { authorization: `Bearer ${token}` },
      });

      dispatch(loadAllCryptoActionCreator(crypto));

      return crypto;
    } catch (error) {
      errorModal("Something went wrong");
    }
  }, [dispatch]);

  const deleteCrypto = useCallback(
    async (cryptoId: string) => {
      const token = localStorage.getItem("token");
      const deleteCryptoUrl = `${apiURL}crypto/`;

      try {
        loadingModal("Please wait");
        await axios.delete(`${deleteCryptoUrl}${cryptoId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(deleteCryptoActionCreator(cryptoId));
        successModal("The crypto has been deleted");
      } catch (error) {
        errorModal("Something went wrong");
      }
    },
    [dispatch]
  );
  toast.dismiss();
  return {
    getAllCrypto,
    deleteCrypto,
  };
};

export default useCrypto;
