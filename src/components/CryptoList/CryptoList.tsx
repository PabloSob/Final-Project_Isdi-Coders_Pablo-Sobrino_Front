import { useEffect } from "react";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoListStyled from "./CryptoListStyled";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Button/ButtonStyled";
import useUser from "../../hooks/useUser/useUser";

const CryptoList = (): JSX.Element => {
  const { getAllCrypto } = useCrypto();
  const { logout } = useUser();
  const cryptoList = useAppSelector((state: RootState) => state.crypto);
  const navigate = useNavigate();
  const isDisabled = false;

  useEffect(() => {
    getAllCrypto();
  }, [getAllCrypto]);

  const logoutLink = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <CryptoListStyled>
        <section className="logo__container">
          <h1>
            <img
              className="logo__picture"
              src="img/bitcoin-logo.png"
              alt="a crypto logo"
              width={"45px"}
            />
          </h1>
          <span className="logo__text">Crypto Realm</span>
        </section>
        <section className="crypto-list__heading">
          <h2 className="crypto-list__title">Take a look!</h2>
          <ButtonStyled onClick={logoutLink} className="link">
            Logout
          </ButtonStyled>
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
        <ul className="crypto-list">
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
