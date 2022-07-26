import React from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
    return (
    <section className="not-found">
        <h2 className="not-found__error">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <Link className="not-found__back" replace to={-1}>Назад</Link>
    </section>
    )
}

export default PageNotFound;