import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import styledMainTheme from "./styleMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
