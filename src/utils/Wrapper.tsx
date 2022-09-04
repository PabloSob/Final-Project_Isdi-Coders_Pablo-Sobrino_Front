import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../store/store";
import styledMainTheme from "../styleMainTheme";

const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default Wrapper;
