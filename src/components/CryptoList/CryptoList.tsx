import { useEffect, useState } from "react";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoListStyled from "./CryptoListStyled";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Button/ButtonStyled";
import useUser from "../../hooks/useUser/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons";

const CryptoList = (): JSX.Element => {
  const { getAllCrypto } = useCrypto();
  const { logout } = useUser();
  const cryptoList = useAppSelector((state: RootState) => state.crypto);
  const navigate = useNavigate();
  const isDisabled = false;

  const [filterByICO, setFilterByICO] = useState("");

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByICO(event.target.value);
  };

  const clearFilter = () => {
    setFilterByICO("");
  };

  useEffect(() => {
    getAllCrypto();
  }, [getAllCrypto]);

  const logoutLink = () => {
    logout();
    navigate("/login");
  };

  const createCrypto = () => {
    navigate("/create");
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
          <ButtonStyled onClick={logoutLink} className="link" id="logout">
            Logout
          </ButtonStyled>
        </section>
        <div className="crypto-filter">
          <div className="crypto-filter__buttons">
            <div className="filter">
              <label className="Filter-by" htmlFor="date">
                Filter by date:
              </label>
              <input
                type="date"
                id="date"
                className="input-ICO"
                autoComplete="off"
                placeholder="Check ICO until"
                required
                value={filterByICO}
                onChange={onChangeData}
              />
              <FontAwesomeIcon
                icon={faBitcoinSign}
                className="icon-bit"
                data-testid="icon-close"
                onClick={clearFilter}
              />
            </div>
            <Button
              buttonText="Create"
              type="button"
              classNameTypeButton="button--big"
              actionOnclick={createCrypto}
              isDisable={isDisabled}
            />
          </div>
        </div>
        <ul className="crypto-list" id="crypto-search">
          {cryptoList
            .filter((crypto) => {
              if (!filterByICO) {
                return true;
              }
              return new Date(crypto.ICO) <= new Date(filterByICO);
            })
            .map((crypto) => (
              <li key={crypto.id} className="list__item">
                <CryptoCard crypto={crypto} />
              </li>
            ))}
        </ul>
      </CryptoListStyled>
    </>
  );
};

export default CryptoList;
