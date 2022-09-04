import styled from "styled-components";

const NotFoundStyled = styled.div`
  padding: 0;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0px;
  margin-top: 1rem;
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
  & .not-found {
    &__title {
      align-self: flex-start;
      display: flex;
      align-items: center;
    }
  }
  & .not-found-warning {
    &__text__container {
      margin-top: 5rem;
      background-color: ${(props) => props.theme.backgroundShadow};
      width: 100%;
      height: 13rem;
      display: flex;
      justify-content: center;
      border-radius: 8px;
      border: solid 2px ${(props) => props.theme.textThirdColor};
    }
    &__text__title {
      color: ${(props) => props.theme.textThirdColor};
      align-self: center;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

export default NotFoundStyled;
