import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";
import styledMainTheme from "./styleMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
