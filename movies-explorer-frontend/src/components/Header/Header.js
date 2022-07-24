import React from "react";
import "./Header.css";
import logoMain from "../../images/logo.svg";
import logoMovies from "../../images/logo-2.svg";
import logoProfile from "../../images/logo-profile.svg";
import { Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ email }) {
  return (
    
    <header className="header">
      <Route path="/" exact>
        <div className="header__main"><a href="/">
          <img className="header__logo" src={logoMain} alt="логотип" href="/"></img></a>
          <div>
            <div className="header__menu-block">
              <a className="header__menu-block_register" href="signup">{email}</a>
              <a className="header__menu-block_in" href="signin">Войти</a>
              </div>
           </div>
          </div>
        </Route>

        <Route path={[ "/movies", "/saved-movies", "/profile"]}>
          <div className="header__main header__main_movies">
            <Route path={[ "/movies", "/saved-movies" ]}>
            <a href="/">
              <img className="header__logo header__logo_movies" src={logoMovies} alt="логотип"></img></a>
            </Route>
            <Route path="/profile">
              <img className="header__logo header__logo_profile" src={logoMovies} alt="логотип"></img>
            </Route>
              <Navigation />
              </div>
        </Route>
    </header>
  )
}


export default Header;