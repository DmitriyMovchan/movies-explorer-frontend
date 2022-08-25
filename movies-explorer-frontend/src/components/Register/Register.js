import React from "react";
import './Register.css';
import logo from "../../images/logo.svg";

function Register(props) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [formValid, setFormValid] = React.useState(false);

    function handleChangeName(e) {
        const validName = /^[a-zA-Z- ]+$/.test(e.target.value);
        if (e.target.value.length < 2) {
            setNameError('Длина имени должна быть не менее 2 символов');
        } else if (e.target.value.length > 30) {
            setNameError('Длина имени должна должна быть не более 30 символов');
        } else if (!validName) {
            setNameError('Имя должно быть указано латиницей');
        } else {
            setNameError('')
        }
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e.target.value);
        if (!validEmail) {
            setEmailError('Неверный формат почты')
        } else {
            setEmailError('');
        }
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        if (e.target.value.length < 4) {
            setPasswordError('Пароль должен быть не менее 4 символов')
        } else {
            setPasswordError('');
        }
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleRegister(name, email, password);
    }

    React.useEffect(() => {
        if (    
        name &&
        email &&
        password &&
        !nameError &&
        !emailError &&
        !passwordError
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [name, email, password, nameError, emailError, passwordError])

    return (
        <section className="registration">
                <a className="registration__link" href={'/'}>
                    <img className="registration__logo" src={logo} alt="logo"></img>
                </a>
                <h2 className="registration__text">Добро пожаловать!</h2>
                <form className="form" onSubmit={handleSubmit}>
                        <label className="form__item">
                            <p className="form__item_name">Имя</p>
                            <input className="form__item_input" 
                                type="text" 
                                value={name} 
                                name="name" 
                                placeholder="Виталий" 
                                id="input_name" 
                                onChange={handleChangeName}/>
                            <span className="form__item_error" id="input_name-error">{nameError}</span>
                        </label>
                        <label className="form__item">
                            <p className="form__item_name">E-mail</p>
                            <input className="form__item_input" 
                                type="email" 
                                value={email} 
                                name="email" 
                                placeholder="pochta.yandex.ru" 
                                id="input_email"
                                onChange={handleChangeEmail} 
                                />
                            <span className="form__item_error" id="input_name-error">{emailError}</span>
                        </label>
                        <label className="form__item">
                            <p className="form__item_name">Пароль</p>
                            <input className="form__item_input" 
                                type="text" 
                                value={password} 
                                name="password" 
                                placeholder="pochta@yandex.ru" 
                                id="input_password" 
                                onChange={handleChangePassword}/>
                            <span className="form__item_error" id="input_name-error">{passwordError}</span>
                        </label>
                    <button className={`form__submit ${!formValid ? 'form__submit_disabled' : ''}`} 
                        type="submit" 
                        disabled={!formValid || props.errLog}>Зарегистрироваться {formValid}</button>
                        { props.errLog ? <span className="form__submit_span">{props.textErrLog}</span> : ""}
                </form>
                <div className="form__in">
                    <p className="form__text">Уже зарегистрированы?</p>
                    <a className="form__text_link" href={'/signin'}>Войти</a>
                </div>

        </section>
    )
}

export default Register;