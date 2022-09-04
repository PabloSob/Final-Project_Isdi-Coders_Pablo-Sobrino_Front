import RegisterStyled from "./RegisterFormStyled";
import Button from "../Button/Button";
import { SyntheticEvent, useState } from "react";
import useUserApi from "../../hooks/useUserApi/useUserApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = (): JSX.Element => {
  const initialState = {
    userName: "",
    password: "",
    repeatPassword: "",
  };

  const { register } = useUserApi();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [fieldStatus, setFieldStatus] = useState("");

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setFieldStatus("form__input--wrong");

      setFormData({
        userName: formData.userName,
        password: initialState.password,
        repeatPassword: initialState.repeatPassword,
      });
    } else {
      const registerResult = await register(formData);

      if (registerResult) {
        navigate("/login");
      }

      setFormData(initialState);
    }
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldStatus("");
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const isSamePassword = formData.password === formData.repeatPassword;

  const hasEmptyFields =
    formData.userName.length < 5 ||
    formData.password.length < 5 ||
    formData.repeatPassword.length < 5 ||
    !isSamePassword;

  return (
    <RegisterStyled className="form" onSubmit={onSubmitData}>
      <ToastContainer />
      <div className="logo__container">
        <img
          className="logo__picture"
          src="img/bitcoin-logo.png"
          alt="a crypto logo"
        />
        <span className="logo__text">Crypto Realm</span>
      </div>
      <h2 className="register-form__form-title">Create an account</h2>
      <form action="" className="register-form" noValidate>
        <div className="register-form__container">
          <div className="register-form__input__container">
            <label htmlFor="userName" className="input__title">
              Username
            </label>
            <input
              className="register-form__input"
              placeholder="Enter your username"
              onChange={onChangeData}
              value={formData.userName}
              type="text"
              id="userName"
              autoComplete="off"
              required
            ></input>
          </div>
          <div className="register-form__input__container">
            <label htmlFor="password" className={`input__title ${fieldStatus}`}>
              Password
            </label>
            <input
              className="register-form__input"
              value={formData.password}
              onChange={onChangeData}
              required
              type="password"
              id="password"
              autoComplete="off"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="register-form__input__container">
            <label htmlFor="repeatPassword" className="input__title">
              Repeat Password
            </label>
            <input
              className="register-form__input"
              value={formData.repeatPassword}
              onChange={onChangeData}
              required
              type="password"
              id="repeatPassword"
              autoComplete="off"
              placeholder="Repeat your password"
            ></input>
          </div>
        </div>
        <Button
          buttonText="Sign up"
          type="submit"
          classNameTypeButton="button--big"
          actionOnclick={() => {}}
          isDisable={hasEmptyFields}
        />
      </form>{" "}
    </RegisterStyled>
  );
};

export default RegisterForm;
