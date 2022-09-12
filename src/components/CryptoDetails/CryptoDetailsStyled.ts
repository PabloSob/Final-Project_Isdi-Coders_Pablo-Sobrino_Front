import styled from "styled-components";

const CryptoDetailsStyled = styled.div`
  padding: 0;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-bottom: 0px;
  .logo {
    &__container {
      align-self: flex-start;
      display: flex;
      align-items: center;
    }
    &__picture {
      margin-right: 10px;
    }
    &__text {
      font-family: Arial, Helvetica, sans-serif;
      font-style: italic;
      font-weight: bold;
    }
  }
  .crypto-list {
    &__heading {
      width: 93vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 50px;
      margin-right: 50px;
    }
    &__title {
      align-self: flex-start;
      display: flex;
      margin-top: 12px;
      font-size: 30px;
    }
  }
  .crypto-details__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.textThirdColor};
    background-color: ${(props) => props.theme.backgroundShadow};
    padding: 10px;
    border-radius: 8px;
  }
  .crypto-details__name-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .crypto-details__project-logo {
      object-fit: contain;
      border-radius: 20px;
    }
  }

  .crypto-details__description-title {
    color: ${(props) => props.theme.textThirdColor};
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 15px;
  }
  .crypto-details__description {
    width: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.textFirstColor};
    color: ${(props) => props.theme.textSecondColor};
    border: solid 1px #000000;
    padding: 1rem;
    display: flex;
    margin-top: 15px;
    font-size: 1.5rem;
  }
  .crypto-details__team-amount {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.textFirstColor};
    color: ${(props) => props.theme.textSecondColor};
    border: solid 1px #000000;
    padding: 1rem;
    display: flex;
    margin-top: 15px;
  }
  .crypto-details__value-amount {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.textFirstColor};
    color: ${(props) => props.theme.textSecondColor};
    border: solid 1px #000000;
    padding: 1rem;
    display: flex;
    margin-top: 15px;
  }
  .crypto-details__ico-date {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.textFirstColor};
    color: ${(props) => props.theme.textSecondColor};
    border: solid 1px #000000;
    padding: 1rem;
    display: flex;
    margin-top: 15px;
  }
  .crypto-details__team-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
  }
  .crypto-details__value-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
  }
  .crypto-details__ico-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
  }
  .crypto-details__description-container {
    display: flex;
    flex-direction: column;
  }
  .crypto-details__team-value__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  }
  .crypto-details__team {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .crypto-details__value {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .crypto-details__ico {
    display: flex;
    flex-direction: column;
  }

  .link {
    border: none;
    font-size: 24px;
    margin-bottom: 5px;
    background-color: #deefe7;
    font-weight: bold;
    color: ${(props) => props.theme.textThirdColor};
    align-self: flex-start;
    margin-top: 15px;
    padding-left: 0;
  }
  .crypto-details {
    &__title {
      align-self: flex-start;
      display: flex;
      margin-top: 12px;
      font-size: 30px;
    }
  }
  .crypto-details__icons {
    margin-top: 15px;
    font-size: 1.5rem;
  }
  .crypto-details__name-value {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
    margin-left: 5px;
  }
  .crypto-details__project-name {
    font-size: 2rem;
    font-weight: bold;
  }
  .crypto-details__ico-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
    margin-top: 15px;
    font-size: 1.4rem;
    margin-left: 5px;
  }
  .button--big {
    display: flex;
    width: 50%;
    align-self: flex-start;
  }
  .crypto-details__team-amount {
    font-size: 1.5rem;
  }
  .crypto-details__value-amount {
    font-size: 1.5rem;
  }
  .crypto-details__ico-date {
    font-size: 1.5rem;
  }
  .crypto-details__ico {
    width: 49%;
  }
`;

export default CryptoDetailsStyled;
