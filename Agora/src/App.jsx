import React from "react";
import Footer from "../public/footer";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navegation from "../public/navegation";
import Landingpage from "./components/landingpage/Landingpage";
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { MyContext } from '/src/context/myContext.js';
import { useApiUsuarios } from '/src/hooks/useApiUsuarios.js';
import { Button, Box } from '@mui/material/';
import Loging from './components/login/Login.jsx'

function App() {

  const [user, setUser] = useState(null)


  useEffect(() => {
    console.log(" user  " + JSON.stringify(user))

    let us = JSON.parse(localStorage.getItem("userLogeado"));
    if (us != null) { // si compras vacias es la primera compra .....
      setUser(us);
    } 

  }, [user])

  return (
    
    <MyContext.Provider value={{ user, setUser }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


        {user ? (<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Navegation />
          <Landingpage />
          <Footer /> 

        </Box>) : (
          <Loging />
        )}
      </Box>
    </MyContext.Provider>
  )
}

export default App
