import { useEffect } from "react";
import useCryptoApi from "../../hooks/useCrypto/useCrypto";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import CryptoCard from "../CryptoCard/CryptoCard";

const CryptoList = (): JSX.Element => {
  const { getAllCrypto } = useCryptoApi();
  const cryptoList = useAppSelector((state: RootState) => state.crypto);

  useEffect(() => {
    getAllCrypto();
  }, [getAllCrypto]);

  return (
    <>
      <h2>Take a look!</h2>
      <ul>
        {cryptoList.map((crypto) => (
          <li key={crypto.title}>
            <CryptoCard crypto={crypto} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CryptoList;
