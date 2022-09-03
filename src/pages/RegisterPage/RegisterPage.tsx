import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import RegisterForm from "../../components/Register/RegisterForm";
import LinkStyledRegister from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterForm />
      <LinkStyledRegister className="register-text">
        <span className="register-text__text">
          Already have an account?
          <Link to={"/login"}>
            <ButtonStyled className="button-link">Login</ButtonStyled>
          </Link>
        </span>
      </LinkStyledRegister>
    </>
  );
};
export default RegisterPage;
