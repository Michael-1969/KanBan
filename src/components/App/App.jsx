
import { ThemeProvider } from 'styled-components';
import theme from '../Global/them.js';
import {GlobalStyles} from '../Global/Global.js';
import SWrapper from '../Global/Wrapper.styled.js';
import  Header from '../Header/Header.jsx'

//import './App.css'
import Main from '../Main/Main.jsx'
import { useState,useEffect } from 'react';

function App() {
   const [loading, setLoading] = useState(true);
  

    useEffect(()=>{
        setTimeout(() =>{
            setLoading(false);
        },5000);
    },[]);
    

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <SWrapper>
            <Header />
            {<Main loading={loading}/>}
        </SWrapper>
    </>
    </ThemeProvider>
  )
}

export default App
