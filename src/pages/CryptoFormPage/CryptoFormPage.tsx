import { useParams } from "react-router-dom";
import CryptoForm from "../../components/CryptoForm/CryptoForm";
import { useAppSelector } from "../../store/hooks";
import {
  ICrypto,
  NewOrModifyCrypto,
} from "../../store/interfaces/cryptoInterfaces";

const CryptoFormPage = (): JSX.Element => {
  const crypto = useAppSelector((state) => state.crypto);
  const { id } = useParams();

  const cryptoToModifyOrCreate: NewOrModifyCrypto =
    crypto && id
      ? (crypto.find((crypto) => id === crypto.id) as ICrypto)
      : {
          title: "",
          logo: "",
          description: "",
          team: 0,
          value: 0,
          ICO: new Date(),
        };

  return <CryptoForm initialState={cryptoToModifyOrCreate} />;
};

export default CryptoFormPage;
