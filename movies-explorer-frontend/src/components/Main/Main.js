import React from "react";
// import { Link } from "react-router-dom";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
    return (
        <>
        <Header
            email={'Регистрация'}
        ></Header>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
        </>
    );
  }
  
  export default Main;