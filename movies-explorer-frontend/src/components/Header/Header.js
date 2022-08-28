import React from "react";
import "./Header.css";
import logoMain from "../../images/logo.svg";
import { Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ email, loggedIn }) {
  return (
    
    <header className="header">
      { loggedIn ? (
              <Route path={[ "/movies", "/saved-movies", "/profile", "/"]}>
              <div className="header__main header__main_movies">
              <a href="/">
                <img className="header__logo header__logo_movies" src={logoMain} alt="логотип" href="/"></img></a>              
                  <Navigation />
                  </div>
            </Route>
      ) : (
        <div className="header__main"><a href="/">
        <img className="header__logo" src={logoMain} alt="логотип" href="/"></img></a>
        <div>
          <div className="header__menu-block">
            <a className="header__menu-block_register" href="signup">{email}</a>
            <a className="header__menu-block_in" href="signin">Войти</a>
            </div>
         </div>
        </div>
      )}

  
    </header>
  )
}


export default Header;