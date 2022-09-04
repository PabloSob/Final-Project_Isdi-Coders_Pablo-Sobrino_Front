import LoginStyled from "./LoginFormStyled";
import Button from "../Button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserApi from "../../hooks/useUser/useUser";
import { SyntheticEvent, useState } from "react";

const LoginForm = (): JSX.Element => {
  const initialState = {
    userName: "",
    password: "",
  };

  const { login } = useUserApi();
  const [formData, setFormData] = useState(initialState);

  const onSubmitData = (event: SyntheticEvent) => {
    event.preventDefault();
    login({
      userName: formData.userName,
      password: formData.password,
    });
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const hasEmptyFields =
    formData.userName.length < 5 || formData.password.length < 5;

  return (
    <LoginStyled className="form" onSubmit={onSubmitData}>
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
      <form action="" className="login-form" noValidate>
        <div className="login-form__container">
          <div className="login-form__input__container">
            <label htmlFor="userName" className="input__title">
              Username
            </label>
            <input
              className="login-form__input"
              placeholder="Enter your username"
              onChange={onChangeData}
              value={formData.userName}
              type="text"
              id="userName"
              autoComplete="off"
              required
            ></input>
          </div>
          <div className="login-form__input__container">
            <label htmlFor="password" className="input__title">
              Password
            </label>
            <input
              className="login-form__input"
              value={formData.password}
              onChange={onChangeData}
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
          isDisable={hasEmptyFields}
        />
      </form>{" "}
    </LoginStyled>
  );
};

export default LoginForm;
