import React from "react";
import Footer from "../public/footer";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navegation from "../public/navegation";
import Landingpage from "./Landingpage";

function App() {
  return (
    <>
    <Navegation />
    <Landingpage />
    <Footer />  
    </>
  )
}

export default App
