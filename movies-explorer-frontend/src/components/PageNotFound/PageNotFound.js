import React from "react";
import './PageNotFound.css';

function PageNotFound() {
    return (
    <section className="not-found">
        <h2 className="not-found__error">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <a className="not-found__back" href='/'>Назад</a>
    </section>
    )
}

export default PageNotFound;