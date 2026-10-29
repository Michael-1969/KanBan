import { ThemeProvider } from "styled-components";
import theme from "../Global/them.js";
import { GlobalStyles } from "../Global/Global.js";

import SWrapper from "../Global/Wrapper.styled.js";
import "../App/App.css";
import AppRoutes from "../AppRoutes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <SWrapper>
          <AppRoutes />
        </SWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
