import LoginStyled from "./LoginFormStyled";
import Button from "../Button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = (): JSX.Element => {
  return (
    <LoginStyled className="form" noValidate onSubmit={() => {}}>
      <ToastContainer />
      <div className="logo__container">
        <img
          className="logo__picture"
          src="img/bitcoin-logo.png"
          alt="a crypto logo"
        />
        <span className="logo__text">Crypto Realm</span>
      </div>
      <h2 className="login-form__form-title">Hi, welcome back!</h2>
      <div className="login-form__container">
        <div className="login-form__input__container">
          <label htmlFor="username" className="input__title">
            Username
          </label>
          <input
            className="login-form__input"
            placeholder="Enter your username"
            onChange={() => {}}
            value={""}
            type="text"
            id="username"
            autoComplete="off"
            required
          ></input>
        </div>
        <div className="login-form__input__container">
          <label htmlFor="password" className={`input__title ${""}`}>
            Password
          </label>
          <input
            className="login-form__input"
            value={""}
            onChange={() => {}}
            required
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your password"
          ></input>
        </div>
      </div>
      <Button
        buttonText="Login"
        type="submit"
        classNameTypeButton="button--big"
        actionOnclick={() => {}}
      />
      <div className="login-form__link-login">
        <span>Don't have an account?</span>
        <a href="/register">Login</a>
      </div>
    </LoginStyled>
  );
};

export default LoginForm;
