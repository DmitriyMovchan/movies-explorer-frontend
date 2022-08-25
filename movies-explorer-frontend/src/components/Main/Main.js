import React from "react";
import "./Main.css";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
    return (
        <>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
        </>
    );
  }
  
  export default Main;