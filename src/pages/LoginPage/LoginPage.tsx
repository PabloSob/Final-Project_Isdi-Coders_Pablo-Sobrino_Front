import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import LoginForm from "../../components/Login/LoginForm";
import LinkStyledLogin from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <LinkStyledLogin className="register-text">
        <span className="register-text__text">
          Don't have an account?
          <Link to={"/register"}>
            <ButtonStyled className="button-link">Sign up</ButtonStyled>
          </Link>
        </span>
      </LinkStyledLogin>
    </>
  );
};
export default LoginPage;
