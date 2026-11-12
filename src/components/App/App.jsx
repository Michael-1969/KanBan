import { ThemeProvider } from "styled-components";
import theme from "../Global/them.js";
import { GlobalStyles } from "../Global/Global.js";

import SWrapper from "../Global/Wrapper.styled.js";
import "../App/App.css";
import AppRoutes from "../AppRoutes/AppRoutes";
import {AuthProvider,TaskProvider} from '../../context/ContextProvider.jsx';


function App() {
  return (
      
      <ThemeProvider theme={theme}>
        <GlobalStyles /> 
          <AuthProvider>
              <TaskProvider>
                  <SWrapper>
                      <AppRoutes />
                  </SWrapper>
              </TaskProvider>
            </AuthProvider>
        </ThemeProvider>
      
    
  );
}

export default App;
