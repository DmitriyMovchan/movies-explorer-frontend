import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import logo from "../../images/logo-movies767.svg";

function Login() {
    return (
        <section className="registration">

                <a className="registration__link" href={'/'}>
                    <img className="registration__logo" src={logo} alt="logo"></img>
                </a>
                <h2 className="registration__text">Рады видеть!</h2>

                <form className="form">
                        <label className="form__item">
                            <p className="form__item_name">E-mail</p>
                            <input className="form__item_input" type="text" name="name" placeholder="pochta.yandex.ru" id="input_name"></input>
                            <span className="form__item_error" id="input_name-error"></span>
                        </label>
                        <label className="form__item">
                            <p className="form__item_name">Пароль</p>
                            <input className="form__item_input" type="text" name="name" placeholder="pochta@yandex.ru" id="input_name"></input>
                            <span className="form__item_error" id="input_name-error"></span>
                        </label>
                    <button className="form__submit form__submit_in">Войти</button>
                </form>
                <div className="form__in">
                    <p className="form__text">Еще не зарегистрированы?</p>
                    <a className="form__text_link" href={'/signup'}>Регистрация</a>
                </div>

        </section>
    )
}

export default Login;