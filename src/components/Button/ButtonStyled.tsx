import styled from "styled-components";

const ButtonStyled = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  .button {
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
      font-size: 1rem;
      color: #fff;
      border: none;
      text-align: center;
      font-weight: bold;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-self: center;
    }
  }
`;

export { ButtonStyled };
