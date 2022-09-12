import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CryptoFormModify from "../../components/CryptoFormModify/CryptoFormModify";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { NewCrypto } from "../../store/interfaces/cryptoInterfaces";

const initialState: NewCrypto = {
  title: "",
  logo: "",
  description: "",
  team: 0,
  value: 0,
  ICO: new Date(),
};

const CryptoFormModifyPage = (): JSX.Element => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(initialState);
  const { getCryptoById } = useCrypto();

  useEffect(() => {
    (async () => {
      const crypto = await getCryptoById(id!);
      setCrypto(crypto);
    })();
  }, [getCryptoById, id]);

  return <CryptoFormModify crypto={crypto} />;
};

export default CryptoFormModifyPage;
