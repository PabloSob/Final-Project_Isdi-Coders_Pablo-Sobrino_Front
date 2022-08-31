import { ThemeProvider } from "styled-components";
import Register from "./components/Register/Register";
import styledMainTheme from "./styleMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Register />
    </ThemeProvider>
  );
}

export default App;
