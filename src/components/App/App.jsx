import  Header from '../Header/Header.jsx'
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
      <div className="wrapper">
            <Header />
            <Main loading={loading}/>
        </div>
  )
}

export default App
