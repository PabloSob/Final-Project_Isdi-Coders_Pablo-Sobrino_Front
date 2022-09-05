import styled from "styled-components";

const CryptoCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.textThirdColor};
  background-color: ${(props) => props.theme.backgroundShadow};
  padding: 10px;
  border-radius: 8px;

  .crypto-card__top-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }
  .crypto-card__team-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .crypto-card__bot-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
    height: 80%;
  }
  .crypto-card__icons {
    font-size: 1.5rem;
  }
  .crypto-card__name-value {
    color: ${(props) => props.theme.textThirdColor};
    margin-left: 10px;
    font-weight: bold;
  }

  .crypto-card__box {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.textFirstColor};
    color: ${(props) => props.theme.textSecondColor};
    font-size: 1.5rem;
    border: solid 1px #000000;
    padding: 1rem;
    display: flex;
    margin-top: 15px;
  }
  .crypto-card__value-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  h3 {
    margin: 0;
  }
  .crypto-card__title {
    font-size: 2rem;
  }
`;

export default CryptoCardStyled;
