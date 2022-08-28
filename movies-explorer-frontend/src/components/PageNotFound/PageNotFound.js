import React from "react";
import { Link, useHistory } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {

    const history = useHistory();
    

    return (
    <section className="not-found">
        <h2 className="not-found__error">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <Link className="not-found__back" onClick={history.goBack}>Назад</Link>
    </section>
    )
}

export default PageNotFound;