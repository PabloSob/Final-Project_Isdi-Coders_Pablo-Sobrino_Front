import styled from "styled-components";

const ButtonStyled = styled.button`
  &.button-link {
    width: 100%;
    text-decoration: none;
    place-items: center;
    color: ${(props) => props.theme.textThirdColor};
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: #deefe7;
  }
  &.button {
    &--small {
      width: 5.75rem;
      height: 2.8rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme.textThirdColor};
      font-size: 1rem;
      color: #fff;
      border: none;
      text-align: center;
      font-weight: bold;
      padding: 1rem;
      display: flex;
      align-self: center;
    }
    &--regular {
      width: 100%;
      height: 3.5rem;
      display: flex;
      border-radius: 8px;
      background-color: ${(props) => props.theme.textThirdColor};
      font-size: 1rem;
      color: #fff;
      border: none;
      text-align: center;
      font-weight: bold;
      padding: 1rem;
      justify-content: center;
    }

    &--big {
      width: 100%;
      height: 3.5rem;
      align-self: center;
      border-radius: 8px;
      background-color: ${(props) => props.theme.textThirdColor};
      font-size: 1.5rem;
      color: #fff;
      border: solid 1px #000000;
      text-align: center;
      font-weight: bold;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: 15px;
    }
  }
  &--link {
    color: ${(props) => props.theme.textThirdColor};
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
`;

export { ButtonStyled };
