import { useEffect } from "react";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoListStyled from "./CryptoListStyled";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../Button/ButtonStyled";

const CryptoList = (): JSX.Element => {
  const { getAllCrypto } = useCrypto();
  const cryptoList = useAppSelector((state: RootState) => state.crypto);
  const isDisabled = false;

  useEffect(() => {
    getAllCrypto();
  }, [getAllCrypto]);

  return (
    <>
      <CryptoListStyled>
        <section className="logo__container">
          <img
            className="logo__picture"
            src="img/bitcoin-logo.png"
            alt="a crypto logo"
          />
          <span className="logo__text">Crypto Realm</span>
        </section>
        <section className="crypto-list__heading">
          <h2 className="crypto-list__title">Take a look!</h2>
          <Link to={""}>
            <ButtonStyled className="button-link">Logout</ButtonStyled>
          </Link>
        </section>
        <div className="crypto-filter">
          <span className="text">Filter by:</span>
          <div className="crypto-filter__buttons">
            <Button
              buttonText="Value"
              type="button"
              classNameTypeButton="button--small"
              actionOnclick={() => {}}
              isDisable={isDisabled}
            />
            <Button
              buttonText="Create"
              type="submit"
              classNameTypeButton="button--big"
              actionOnclick={() => {}}
              isDisable={isDisabled}
            />
          </div>
        </div>
        <ul>
          {cryptoList.map((crypto) => (
            <li key={crypto.title}>
              <CryptoCard crypto={crypto} />
            </li>
          ))}
        </ul>
      </CryptoListStyled>
    </>
  );
};

export default CryptoList;
