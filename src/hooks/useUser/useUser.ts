import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import {
  ProtoUser,
  User,
  UserToken,
} from "../../store/interfaces/userInterfaces";
import {
  loginUsersActionCreator,
  logoutActionCreator,
} from "../../store/features/user/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { PayloadAction } from "@reduxjs/toolkit";
import decodeToken from "../../utils/decodeToken";
import { useNavigate } from "react-router-dom";

export const apiURL = process.env.REACT_APP_API_URL;

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useUser = () => {
  const dispatch = useAppDispatch();

  const register = async (registerUserData: ProtoUser) => {
    try {
      await axios.post(`${apiURL}users/register`, {
        userName: registerUserData.userName,
        password: registerUserData.password,
      });
      successModal("You have been registered!");
      return true;
    } catch (error) {
      errorModal("Something went wrong");
    }
  };

  const navigate = useNavigate();
  const login = async (userData: ProtoUser) => {
    try {
      const {
        data: { token },
      }: AxiosResponse<UserToken> = await axios.post(
        `${apiURL}users/login`,
        userData
      );

      if (token) {
        const userInfo: User = decodeToken(token);

        dispatch(loginUsersActionCreator(userInfo));
        localStorage.setItem("token", token);
        navigate("/crypto");
        return true;
      }
    } catch (error: any) {
      errorModal("Something went wrong...");
      return error.message;
    }
  };

  const logout = () => {
    dispatch<PayloadAction>(logoutActionCreator());
    localStorage.removeItem("token");
  };
  toast.dismiss();
  return { register, login, logout };
};
export default useUser;
