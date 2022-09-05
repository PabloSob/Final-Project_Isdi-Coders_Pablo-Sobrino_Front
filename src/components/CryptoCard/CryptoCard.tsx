import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";
import Button from "../Button/Button";
import CryptoCardStyled from "./CryptoCardStyled";

interface CryptoCardProps {
  crypto: ICrypto;
}

const CryptoCard = ({
  crypto: { title, logo, team, value, id },
}: CryptoCardProps): JSX.Element => {
  return (
    <>
      <CryptoCardStyled>
        <div className="crypto-card__top-container">
          <h3 className="crypto-card__title">{title}</h3>
          <img className="crypto-card__logo" src={logo} alt={title} />
        </div>
        <div className="crypto-card__bot-container">
          <section className="crypto-card__team-container">
            <div className="crypto-card__icons">
              <FontAwesomeIcon icon={faPeopleGroup} />
              <span className="crypto-card__name-value">Team</span>
            </div>
            <span className="crypto-card__box">{team}</span>
            <Button
              buttonText="View Details"
              type="submit"
              classNameTypeButton="button--big"
              actionOnclick={() => {}}
            />
          </section>
          <section className="crypto-card__value-container">
            <span className="crypto-card__icons">
              <FontAwesomeIcon icon={faDollarSign} />
              <span className="crypto-card__name-value">Value</span>
            </span>
            <span className="crypto-card__box">{value}</span>
            <Button
              buttonText="Delete"
              type="submit"
              classNameTypeButton="button--big"
              actionOnclick={() => {}}
            />
          </section>
        </div>
      </CryptoCardStyled>
    </>
  );
};

export default CryptoCard;
