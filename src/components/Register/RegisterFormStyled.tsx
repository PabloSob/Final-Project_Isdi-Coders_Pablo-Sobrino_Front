import styled from "styled-components";

const RegisterStyled = styled.div`
  padding: 0;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  justify-content: space-around;
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
  & .register-form {
    width: 100%;
    &__title {
      padding: 12px;
      margin-top: 12px;
      font-size: 30px;
    }
    &__input {
      padding: 15px;
      width: 100%;
      border: 1px solid #9e9e9e;
      border-radius: 8px;
      height: 75px;
      font-size: 20px;
    }
    &__container {
      width: 100%;
    }
    &__input__container {
      margin-top: 30px;
    }
    &__form-title {
      padding: 0;
      margin: 0;
      align-self: flex-start;
    }
  }
  .input__title {
    display: block;
    margin-bottom: 10px;
    padding: 7px;
    color: #159a9c;
    font-size: large;
    font-weight: bold;
    font-size: 24px;
  }
`;

export default RegisterStyled;
