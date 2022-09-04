import { ICrypto } from "../../store/interfaces/cryptoInterfaces";

interface CryptoCardProps {
  crypto: ICrypto;
}

const CryptoCard = ({
  crypto: { title, logo, description, team, value, ICO, id },
}: CryptoCardProps): JSX.Element => {
  return (
    <>
      <div className="crypto-card__container">
        <h3 className="crypto-card__title">{title}</h3>
        <img className="crypto-card__logo" src={logo} alt={title} />
      </div>
    </>
  );
};

export default CryptoCard;
