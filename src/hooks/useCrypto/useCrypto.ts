import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  createCryptoActionCreator,
  deleteCryptoActionCreator,
  loadAllCryptoActionCreator,
  modifyCryptoActionCreator,
} from "../../store/features/crypto/slices/cryptoSlice";
import { useAppDispatch } from "../../store/hooks";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";

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

  const getCryptoById = useCallback(async (idCrypto: string) => {
    const getCryptoUrl = `${apiURL}crypto/`;
    try {
      const {
        data: { crypto },
      } = await axios.get(`${getCryptoUrl}${idCrypto}`);
      return crypto;
    } catch (error) {
      errorModal("Can not show details from this crypto");
    }
  }, []);

  const createCrypto = useCallback(
    async (formCryptoData: FormData) => {
      const token = localStorage.getItem("token");
      const createURL = `${apiURL}crypto/`;

      try {
        const {
          data: { cryptoCreated },
        } = await axios.post(`${createURL}`, formCryptoData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(createCryptoActionCreator(cryptoCreated));
        successModal("Crypto created successfully!");
        return cryptoCreated;
      } catch (error) {
        errorModal("Cannot create the crypto");
      }
    },
    [dispatch]
  );

  const modifyCrypto = useCallback(
    async (id: string, crypto: ICrypto) => {
      const token = localStorage.getItem("token");
      const modifyURL = `${apiURL}crypto/`;

      try {
        const {
          data: { modifiedCrypto },
        } = await axios.put(`${modifyURL}${id}`, crypto, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(modifyCryptoActionCreator(modifiedCrypto));
        successModal("Crypto modified successfully!");
      } catch (error) {
        errorModal("Cannot modify the crypto");
      }
    },
    [dispatch]
  );

  return {
    getAllCrypto,
    getCryptoById,
    createCrypto,
    modifyCrypto,
    deleteCrypto,
  };
};

export default useCrypto;
