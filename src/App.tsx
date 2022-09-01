import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import RegisterPage from "./pages/RegisterPage";
import styledMainTheme from "./styleMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
