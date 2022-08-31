import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: string;
  type: "submit" | "button";
  actionOnclick: () => void;
}
const Button = ({
  buttonText,
  actionOnclick,
  type,
  classNameTypeButton,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={classNameTypeButton}
        type={type}
        onClick={() => actionOnclick()}
      >
        {buttonText}{" "}
      </button>
    </ButtonStyled>
  );
};

export default Button;
