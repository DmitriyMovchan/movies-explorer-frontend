import React from "react";
import "./Profile.css";
import { updateUserInfo } from '../../utils/MainApi'; 
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [visibleButton, setVisibleButton] = React.useState(false);
    const [lastName, setLastName] = React.useState(currentUser.name);
    const [lastEmail, setLastEmail] = React.useState(currentUser.email);
    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [error, setError] = React.useState('');
    const [successfully, setSuccessfully] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserInfo({ name, email }).then(() => {
            setSuccessfully(true)
            setVisibleButton(false);
            setLastName(name);
            setLastEmail(email);
        }).catch((err) => {
            console.log(err)
            setError(`Что-то пошло не так! ${err}`)
        })
    }

    function handleNameChange(e) {
        const value = e.target.value;
        setSuccessfully(false)
        setName(value)
        if (value !==lastName) {
            setVisibleButton(true)
        } else {
            setVisibleButton(false)
        }
    }

    function handleEmailChange(e) {
        const value = e.target.value;
        setSuccessfully(false)
        setEmail(value)
        if (value !==lastEmail) {
            setVisibleButton(true)
        } else {
            setVisibleButton(false)
        }
    }

    return (
        <>
        <section className="profile">
            <h2 className="profile__title">Привет, {name}</h2>
            <div className="profile__info">
                <p className="profile__text">Имя</p>
                <input className="profile__name" value={name} onChange={handleNameChange} placeholder={'имя'} type="text" id="input__name"></input>
                <p className="profile__text">E-mail</p>
                <input className="profile__email" value={email} onChange={handleEmailChange} placeholder={'email'} type="text" id="input__email"></input>
            </div>
            <p className={visibleButton ? "profile__edit" : "profile__edit_disabled"} onClick={handleSubmit} disabled={!visibleButton}>Редактировать</p>
            {successfully ? <span className="profile__edit_successfully">Данные успешно изменены</span> : <span className="profile__edit_error">{error}</span>}
            <p className="profile__exit" onClick={props.handleSignOut}>Выйти из аккаунта</p>
        </section>
        </>
    )
}

export default Profile;