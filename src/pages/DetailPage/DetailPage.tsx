import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CryptoDetails from "../../components/CryptoDetails/CryptoDetails";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";

const initialState: ICrypto = {
  title: "",
  logo: "",
  description: "",
  team: 0,
  value: 0,
  ICO: new Date(),
  id: "",
};

const DetailPage = (): JSX.Element => {
  const [crypto, setCrypto] = useState(initialState);
  const { getCryptoById } = useCrypto();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const crypto = await getCryptoById(id!);
      setCrypto(crypto);
    })();
  }, [getCryptoById, id]);

  return <CryptoDetails crypto={crypto} />;
};
export default DetailPage;
