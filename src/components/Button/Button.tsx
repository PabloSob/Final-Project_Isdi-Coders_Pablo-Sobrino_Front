import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: string;
  type: "submit" | "button";
  actionOnclick: () => void;
  isDisable?: boolean;
}
const Button = ({
  buttonText,
  actionOnclick,
  type,
  classNameTypeButton,
  isDisable,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={classNameTypeButton}
        type={type}
        disabled={isDisable}
        onClick={() => actionOnclick()}
      >
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
