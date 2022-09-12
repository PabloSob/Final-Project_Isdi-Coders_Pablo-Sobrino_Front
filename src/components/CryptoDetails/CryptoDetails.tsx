import {
  faCalendar,
  faDollarSign,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";
import Button from "../Button/Button";
import { ButtonStyled } from "../Button/ButtonStyled";
import CryptoDetailsStyled from "./CryptoDetailsStyled";

interface CryptoDetailProps {
  crypto: ICrypto;
}

const CryptoDetails = ({ crypto }: CryptoDetailProps): JSX.Element => {
  let isDisable = false;
  const navigate = useNavigate();

  const navigateToCryptoToModify = async () => {
    navigate(`/modify/${crypto.id}`);
  };

  const objectLimitDate = new Date(crypto.ICO);

  const ICO = `${objectLimitDate.getDate()}/${
    objectLimitDate.getMonth() + 1
  }/${objectLimitDate.getFullYear()}`;
  return (
    <>
      <CryptoDetailsStyled>
        <section className="logo__container">
          <h1>
            <img
              className="logo__picture"
              src="/img/bitcoin-logo.png"
              alt="a crypto logo"
              width={"45px"}
            ></img>
          </h1>
          <span className="logo__text">Crypto Realm</span>
        </section>
        <h2 className="crypto-details__title">Check the details!</h2>
        <div className="crypto-details__container">
          <section className="crypto-details__name-logo">
            <div className="crypto-details__project-name">{crypto.title}</div>
            <img
              className="crypto-details__project-logo"
              src={crypto.imageBackUp}
              alt="crypto-project logo"
              height={"40px"}
              width={"40px"}
            ></img>
          </section>
          <section className="crypto-details__description-container">
            <div className="crypto-details__description-title">Description</div>
            <div className="crypto-details__description">
              {crypto.description}
            </div>
          </section>
          <section className="crypto-details__team-value__container">
            <div className="crypto-details__team">
              <div className="crypto-details__icons">
                <FontAwesomeIcon icon={faPeopleGroup} />
                <span className="crypto-details__name-value">Team</span>
              </div>
              <div className="crypto-details__team-amount">{crypto.team}</div>
            </div>
            <div className="crypto-details__value">
              <span className="crypto-details__icons">
                <FontAwesomeIcon icon={faDollarSign} />
                <span className="crypto-details__name-value">Value</span>
              </span>
              <div className="crypto-details__value-amount">{crypto.value}</div>
            </div>
          </section>
          <div className="crypto-details__ico">
            <span className="crypto-details__icons">
              <FontAwesomeIcon icon={faCalendar} />
              <span className="crypto-details__ico-title">ICO</span>
            </span>
            <div className="crypto-details__ico-date">
              <>{ICO}</>
            </div>
          </div>
        </div>
        <Button
          buttonText="Modify"
          type="submit"
          classNameTypeButton="button--big"
          actionOnclick={navigateToCryptoToModify}
          isDisable={isDisable}
        />
        <ButtonStyled
          onClick={() => {
            navigate(`/crypto`);
          }}
          className="link"
          id="link"
        >
          Back to the project list
        </ButtonStyled>
      </CryptoDetailsStyled>
    </>
  );
};

export default CryptoDetails;
