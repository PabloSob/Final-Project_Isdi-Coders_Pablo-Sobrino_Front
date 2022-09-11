import styled from "styled-components";

const CryptoFormStyled = styled.div`
  padding: 0;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-bottom: 0px;
  .crypto-form {
    width: 100%;
  }
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
  .crypto-form__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.textThirdColor};
    background-color: ${(props) => props.theme.backgroundShadow};
    padding: 10px;
    border-radius: 8px;
  }
  .crypto-form__name-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .crypto-form__description-title {
    color: ${(props) => props.theme.textThirdColor};
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 15px;
  }
  .crypto-form__description {
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
  .crypto-form__team-amount {
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
  .crypto-form__value-amount {
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
  .crypto-form__ico-date {
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
  .crypto-form__team-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
  }
  .crypto-form__value-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
  }
  .crypto-form__ico-title {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
  }
  .crypto-form__description-container {
    display: flex;
    flex-direction: column;
  }
  .crypto-form__team-value__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  }
  .crypto-form__team {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .crypto-form__value {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .crypto-form__ico {
    display: flex;
    flex-direction: column;
  }
  .crypto-form__project-logo {
    object-fit: contain;
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
  .crypto-form {
    &__title {
      align-self: flex-start;
      display: flex;
      margin-top: 12px;
      font-size: 30px;
    }
  }
  .crypto-form__icons {
    margin-top: 15px;
    font-size: 1.5rem;
  }
  .crypto-form__name-value {
    color: ${(props) => props.theme.textThirdColor};
    font-weight: bold;
    margin-left: 5px;
  }
  .crypto-form__name-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.6rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  .crypto-form__project-name {
    height: 3rem;
    border-radius: 8px;
    font-size: 1.5rem;
    object-fit: contain;
    width: 10rem;
    border: 1px solid;
  }

  .crypto-form__ico-title {
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
  .crypto-form__team-amount {
    font-size: 1.5rem;
  }
  .crypto-form__value-amount {
    font-size: 1.5rem;
  }
  .crypto-form__ico-date {
    font-size: 1rem;
  }
  .crypto-form__ico {
    width: 49%;
  }
`;

export default CryptoFormStyled;
