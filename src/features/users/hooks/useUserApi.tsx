import axios from "axios";
import { toast } from "react-toastify";
import RegisterUserInterface from "../../../store/interfaces/userInterfaces";

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
  const register = async (registerUserData: RegisterUserInterface) => {
    try {
      await axios.post(`${apiURL}users/register`, {
        userName: registerUserData.userName,
        password: registerUserData.password,
        repeat_password: registerUserData.password,
      });

      successModal("You have been registered, welcome!");
    } catch (error) {
      errorModal("Something went wrong");
    }
  };

  return { register };
};
export default useUserApi;
