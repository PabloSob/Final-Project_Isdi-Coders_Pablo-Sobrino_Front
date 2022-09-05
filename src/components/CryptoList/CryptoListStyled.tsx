import styled from "styled-components";

const CryptoListStyled = styled.div`
  padding: 0;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0px;
  & .logo {
    &__container {
      align-self: flex-start;
      display: flex;
      align-items: center;
    }
    &__picture {
      height: 45px;
      margin-right: 10px;
    }
    &__text {
      font-family: Arial, Helvetica, sans-serif;
      font-style: italic;
      font-weight: bold;
    }
  }
  & .crypto-list {
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
  & .crypto-filter {
    width: 100%;
    &__buttons {
      display: flex;
      justify-content: space-between;
    }
  }
  & .button--big {
    width: fit-content;
    padding: 15px 30px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
export default CryptoListStyled;
