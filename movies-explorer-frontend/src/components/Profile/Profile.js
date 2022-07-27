import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
    return (
        <>
        <Header />
        <section className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <div className="profile__info">
                <p className="profile__text">Имя</p>
                <input className="profile__name" value="Виталий" type="text" id="input__name"></input>
                <p className="profile__text">E-mail</p>
                <input className="profile__email" value="pochta@yandex.ru" type="text" id="input__email"></input>
            </div>
            <p className="profile__edit">Редактировать</p>
            <p className="profile__exit">Выйти из аккаунта</p>
        </section>
        </>
    )
}

export default Profile;