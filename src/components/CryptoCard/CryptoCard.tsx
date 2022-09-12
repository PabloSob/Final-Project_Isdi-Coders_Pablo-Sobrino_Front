import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { ICrypto } from "../../store/interfaces/cryptoInterfaces";
import Button from "../Button/Button";
import CryptoCardStyled from "./CryptoCardStyled";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { useNavigate } from "react-router-dom";

interface CryptoCardProps {
  crypto: ICrypto;
}

const urlBack = process.env.REACT_APP_API_URL;

const CryptoCard = ({
  crypto: { title, logo, team, value, id },
}: CryptoCardProps): JSX.Element => {
  const { deleteCrypto } = useCrypto();

  const navigate = useNavigate();

  const cryptoDelete = () => {
    deleteCrypto(id);
  };

  return (
    <>
      <CryptoCardStyled>
        <div className="crypto-card__top-container">
          <h3 className="crypto-card__title">{title}</h3>
          <img
            className="crypto-card__logo"
            src={`${urlBack}${logo}`}
            alt={title}
            height={"40px"}
            width={"40px"}
          />
        </div>
        <div className="crypto-card__bot-container">
          <section className="crypto-card__team-container">
            <div className="crypto-card__icons">
              <FontAwesomeIcon icon={faPeopleGroup} />
              <span className="crypto-card__name-value">Team</span>
            </div>
            <span className="crypto-card__box">{team}</span>
            <Button
              buttonText="Details"
              type="submit"
              classNameTypeButton="button--big"
              actionOnclick={() => {
                navigate(`/crypto/details/${id}`);
              }}
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
              actionOnclick={cryptoDelete}
            />
          </section>
        </div>
      </CryptoCardStyled>
    </>
  );
};

export default CryptoCard;
