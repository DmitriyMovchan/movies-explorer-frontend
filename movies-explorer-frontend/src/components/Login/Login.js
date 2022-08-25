import React from "react";
import './Login.css';
import logo from "../../images/logo.svg";

function Login(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [formValid, setFormValid] = React.useState(false);

    function handleChangeEmail(e) {
        const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
            e.target.value
          );

          if (!validEmail) {
            setEmailError('Неверный формат почты');
          } else {
            setEmailError('')
          }
          setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        if (e.target.value.length < 4) {
            setPasswordError('Пароль должен быть не менее 4 символов')
        } else {
            setPasswordError('')
        }
        setPassword(e.target.value);
    }

    function handlesubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return
        }
        props.handleLogin(email, password);
    }


    // когда напишется loggedIn в App
    // React.useEffect(() => {
    //     if (props.loggedIn) {
    //         setEmail('')
    //         setPassword('')
    //     }
    // }, [props.loggedIn])

    React.useEffect(() => {
        if (email && password && !emailError && !passwordError) {
            setFormValid(true)
        } else {
            setFormValid(false);
        }
    }, [email, password, emailError, passwordError]);


    return (
        <section className="registration">

                <a className="registration__link" href={'/'}>
                    <img className="registration__logo" src={logo} alt="logo"></img>
                </a>
                <h2 className="registration__text">Рады видеть!</h2>

                <form className="form" onSubmit={handlesubmit}>
                        <label className="form__item">
                            <p className="form__item_name">E-mail</p>
                            <input className="form__item_input" 
                                type="email" 
                                name="email" 
                                placeholder="pochta.yandex.ru" 
                                id="input_email" 
                                value={email}
                                onChange={handleChangeEmail}
                                />
                            <span className="form__item_error" id="input_name-error">{emailError}</span>
                        </label>
                        <label className="form__item">
                            <p className="form__item_name">Пароль</p>
                            <input className="form__item_input" 
                                type="text" 
                                name="password" 
                                id="input_password" 
                                value={password}
                                onChange={handleChangePassword}
                                />
                            <span className="form__item_error" id="input_name-error">{passwordError}</span>
                        </label>
                    <button className={`form__submit form__submit_in ${!formValid ? 'form__submit_disabled' : ''}`} 
                        type='submit' 
                        >Войти</button>
                </form>
                <div className="form__in">
                    <p className="form__text">Еще не зарегистрированы?</p>
                    <a className="form__text_link" href={'/signup'}>Регистрация</a>
                </div>

        </section>
    )
}

export default Login;