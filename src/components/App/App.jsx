
import { ThemeProvider } from 'styled-components';
import theme from '../Global/them.js';
import {GlobalStyles} from '../Global/Global.js';
import SWrapper from '../Global/Wrapper.styled.js';
import  Header from '../Header/Header.jsx';
import PopUser from '../popups/PopUser/PopUser.jsx';
import PopNewCard from '../popups/PopNewCard/PopNewCard.jsx';
import PopBrowse from '../popups/PopBrowse/PopBrowse.jsx';

import './App.css'
import Main from '../Main/Main.jsx'
import { useState,useEffect } from 'react';

function App() {
   const [loading, setLoading] = useState(true);
  

    useEffect(()=>{
        setTimeout(() =>{
            setLoading(false);
        },3000);
    },[]);
    

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <SWrapper>
            <PopUser />
            <PopNewCard/>
            <PopBrowse />
            <Header />
            {<Main loading={loading}/>}
        </SWrapper>
    </>
    </ThemeProvider>
  )
}

export default App
