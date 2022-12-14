import styled from "styled-components";

const CryptoListStyled = styled.div`
  padding: 0;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0px;
  .button--small {
    border: solid 1px #000000;
    align-items: center;
    padding-left: 22px;
  }
  .link {
    border: none;
    font-size: 24px;
    margin-bottom: 5px;
    background-color: #deefe7;
    font-weight: bold;
    color: ${(props) => props.theme.textThirdColor};
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    list-style: none;
    margin-bottom: 20px;
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
  .Filter-by {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  .input-ICO {
    height: 2rem;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 20px;
    border: 2px solid #159a9c;
    margin-top: 11px;
  }

  .icon-bit {
    margin-top: 38px;
    margin-right: 90px;
    font-size: 25px;
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
  .crypto-filter {
    width: 100%;

    &__buttons {
      display: flex;
      justify-content: space-between;

      & .button--big {
        width: fit-content;
        padding: 15px 30px;
        margin-top: 0;
        margin-bottom: 10px;
      }
    }
  }
`;
export default CryptoListStyled;
