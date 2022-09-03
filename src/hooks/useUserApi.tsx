import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { ProtoUser, User, UserToken } from "../store/interfaces/userInterfaces";
import { loginUsersActionCreator } from "../store/users/slices/userSlice";
import { useAppDispatch } from "../store/hooks";

export const apiURL = process.env.REACT_APP_API_URL;

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useUserApi = () => {
  const dispatch = useAppDispatch();

  const register = async (registerUserData: ProtoUser) => {
    try {
      debugger;
      await axios.post(`${apiURL}users/register`, {
        userName: registerUserData.userName,
        password: registerUserData.password,
      });
      debugger;
      successModal("You have been registered!");
    } catch (error) {
      errorModal("Something went wrong");
    }
  };

  const login = async (userData: ProtoUser) => {
    try {
      const {
        data: { token },
      }: AxiosResponse<UserToken> = await axios.post(
        `${apiURL}users/login`,
        userData
      );

      if (token) {
        localStorage.setItem("token", token);

        const userInfo: User = { ...jwtDecode(token), token };
        dispatch(loginUsersActionCreator(userInfo));
      }
    } catch (error: any) {
      errorModal("Something went wrong...");
      return error.message;
    }
  };

  return { register, login };
};
export default useUserApi;
