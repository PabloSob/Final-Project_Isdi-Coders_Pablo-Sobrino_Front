import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CryptoFormCreatePage from "../../pages/CryptoFormCreatePage/CryptoFormCreatePage";
import CryptoFormModifyPage from "../../pages/CryptoFormModifyPage/CryptoFormModifyPage";
import CryptoListPage from "../../pages/CryptoListPage/CryptoListPage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { loginUsersActionCreator } from "../../store/features/user/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";
import styledMainTheme from "../../styleMainTheme";
import decodeToken from "../../utils/decodeToken";

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const localUser = decodeToken(token);
      dispatch(loginUsersActionCreator(localUser));
    }
    navigate(pathname);
  }, [dispatch, navigate, pathname]);

  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/crypto"
          element={
            <>
              <CryptoListPage />
            </>
          }
        />
        <Route path="/crypto/details/:id" element={<DetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route
          path="/create"
          element={
            <>
              <CryptoFormCreatePage />
            </>
          }
        />
        <Route
          path="/modify/:id"
          element={
            <>
              <CryptoFormModifyPage />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
